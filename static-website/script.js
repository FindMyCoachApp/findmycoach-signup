// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function () {
    // Initialize all components
    initializeTheme();
    initializeNavigation();
    initializeCarousel();
    initializeCountdown();
    initializeFAQ();
    initializeContactForm();
    initializeIcons();
    updateCopyrightYear();
});

// Theme Management
function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
    const body = document.body;

    // Get saved theme or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    body.classList.toggle('dark', savedTheme === 'dark');
    updateThemeIcons(savedTheme);

    // Theme toggle handlers
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    if (mobileThemeToggle) {
        mobileThemeToggle.addEventListener('click', toggleTheme);
    }
}

function toggleTheme() {
    const body = document.body;
    const isDark = body.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';

    body.classList.toggle('dark', !isDark);
    localStorage.setItem('theme', newTheme);
    updateThemeIcons(newTheme);
}

function updateThemeIcons(theme) {
    const themeIcons = document.querySelectorAll('.theme-icon');
    themeIcons.forEach(icon => {
        icon.setAttribute('data-feather', theme === 'dark' ? 'sun' : 'moon');
    });
    // Re-initialize feather icons
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// Navigation Management
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

    // Scroll handler for navbar background
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');
            const icon = mobileMenuToggle.querySelector('i');
            if (mobileMenu.classList.contains('active')) {
                icon.setAttribute('data-feather', 'x');
            } else {
                icon.setAttribute('data-feather', 'menu');
            }
            feather.replace();
        });
    }

    // Close mobile menu when clicking on links
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.setAttribute('data-feather', 'menu');
            feather.replace();
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!navbar.contains(event.target) && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            const icon = mobileMenuToggle.querySelector('i');
            icon.setAttribute('data-feather', 'menu');
            feather.replace();
        }
    });
}

// App Carousel
function initializeCarousel() {
    const carousel = document.getElementById('app-carousel');
    if (!carousel) return;

    const images = [
        'images/App-Photo-1.png',
        'images/App-Photo-2.png',
        'images/App-Photo-3.png',
        'images/App-Photo-4.png',
        'images/App-Photo-5.png'
    ];

    let currentIndex = 0;
    let isAutoPlaying = true;
    let autoPlayInterval;

    const carouselImage = document.getElementById('carousel-image');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const playPauseBtn = document.getElementById('carousel-play-pause');
    const currentSpan = document.getElementById('carousel-current');
    const totalSpan = document.getElementById('carousel-total');
    const dots = document.querySelectorAll('.carousel-dot');

    // Set total count
    if (totalSpan) {
        totalSpan.textContent = images.length;
    }

    // Update carousel display
    function updateCarousel() {
        if (carouselImage) {
            carouselImage.src = images[currentIndex];
            carouselImage.alt = `Find My Coach App Preview ${currentIndex + 1}`;
        }

        if (currentSpan) {
            currentSpan.textContent = currentIndex + 1;
        }

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Go to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        stopAutoPlay();
    }

    // Go to previous slide
    function goToPrevious() {
        currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
        updateCarousel();
        stopAutoPlay();
    }

    // Go to next slide
    function goToNext() {
        currentIndex = (currentIndex + 1) % images.length;
        updateCarousel();
        stopAutoPlay();
    }

    // Auto-play functions
    function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(goToNext, 3000);
        isAutoPlaying = true;
        if (playPauseBtn) {
            playPauseBtn.textContent = 'Pause Auto-rotation';
        }
    }

    function stopAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        isAutoPlaying = false;
        if (playPauseBtn) {
            playPauseBtn.textContent = 'Play Auto-rotation';
        }
    }

    function toggleAutoPlay() {
        if (isAutoPlaying) {
            stopAutoPlay();
        } else {
            startAutoPlay();
        }
    }

    // Event listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', goToPrevious);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', goToNext);
    }

    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', toggleAutoPlay);
    }

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToSlide(index));
    });

    // Initialize
    updateCarousel();
    startAutoPlay();

    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', () => {
        if (isAutoPlaying) startAutoPlay();
    });
}

// Countdown Timer
function initializeCountdown() {
    const countdownTimer = document.getElementById('countdown-timer');
    if (!countdownTimer) return;

    const launchDate = new Date('December 6, 2025 00:00:00').getTime();
    const daysElement = document.getElementById('countdown-days');
    const hoursElement = document.getElementById('countdown-hours');
    const minutesElement = document.getElementById('countdown-minutes');
    const secondsElement = document.getElementById('countdown-seconds');

    function updateCountdown() {
        const now = new Date().getTime();
        const difference = launchDate - now;

        if (difference > 0) {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
            if (hoursElement) hoursElement.textContent = hours.toString().padStart(2, '0');
            if (minutesElement) minutesElement.textContent = minutes.toString().padStart(2, '0');
            if (secondsElement) secondsElement.textContent = seconds.toString().padStart(2, '0');
        } else {
            // App has launched
            countdownTimer.classList.add('countdown-launched');
            const title = countdownTimer.querySelector('.countdown-title');
            const description = countdownTimer.querySelector('.countdown-description');

            if (title) {
                title.innerHTML = '<i data-feather="clock" class="countdown-icon"></i> 🎉 We\'re Live!';
            }

            if (description) {
                description.textContent = 'Find My Coach is now available! Download the app and start your journey.';
            }

            // Re-initialize feather icons
            if (typeof feather !== 'undefined') {
                feather.replace();
            }

            // Clear the interval
            clearInterval(countdownInterval);
        }
    }

    // Update immediately and then every second
    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);
}

// Initialize Feather Icons
function initializeIcons() {
    if (typeof feather !== 'undefined') {
        feather.replace();
    }
}

// FAQ Management
function initializeFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', function () {
                // Close other open items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
            });
        }
    });
}

// Contact Form Management
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };

            // Validate form
            if (validateForm(contactForm)) {
                // Show loading state
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const removeLoadingState = addLoadingState(submitBtn, 'Sending...');

                // Simulate form submission (replace with actual form handling)
                setTimeout(() => {
                    removeLoadingState();
                    alert('Thank you for your message! We\'ll get back to you soon.');
                    contactForm.reset();
                }, 2000);
            }
        });
    }
}

// Update copyright year
function updateCopyrightYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// Smooth scrolling for anchor links
document.addEventListener('click', function (event) {
    if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Form validation and submission (if needed)
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Utility function to debounce function calls
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add loading states to buttons
function addLoadingState(button, text = 'Loading...') {
    const originalText = button.textContent;
    button.textContent = text;
    button.disabled = true;

    return function removeLoadingState() {
        button.textContent = originalText;
        button.disabled = false;
    };
}

// Error handling for images
document.addEventListener('error', function (event) {
    if (event.target.tagName === 'IMG') {
        console.warn('Image failed to load:', event.target.src);
        // You could add a fallback image here
    }
}, true);

// Performance optimization: Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
}

// Initialize lazy loading when DOM is ready
document.addEventListener('DOMContentLoaded', initializeLazyLoading);

// Add CSS for loading states and errors
const style = document.createElement('style');
style.textContent = `
    .btn:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
    
    .error {
        border-color: #ef4444 !important;
        box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1) !important;
    }
    
    .lazy {
        opacity: 0;
        transition: opacity 0.3s;
    }
    
    .lazy.loaded {
        opacity: 1;
    }
`;
document.head.appendChild(style);
