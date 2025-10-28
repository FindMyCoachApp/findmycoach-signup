# Uploads Directory

This directory is for user-uploaded content and dynamic images.

## Directory Structure

- `profiles/` - User and coach profile pictures
- `documents/` - Uploaded documents and certificates
- `temp/` - Temporary uploads during processing

## Security Notes

- This directory should be excluded from direct web access in production
- Implement proper file validation and sanitization
- Consider using a cloud storage service for production
- Set appropriate file size limits
- Validate file types and scan for malware

## Usage

When implementing file uploads, consider:

1. **File Validation**: Check file types, sizes, and content
2. **Security**: Sanitize filenames and scan uploads
3. **Storage**: Use cloud storage for production scalability
4. **CDN**: Serve images through a CDN for better performance

## Example Implementation

```javascript
// Example file upload handler
export async function uploadImage(file) {
  // Validate file type and size
  // Generate unique filename
  // Save to uploads directory
  // Return file path
}
```
