# Email Setup Documentation

## Overview

This website uses **Mailgun SMTP** to send professional email notifications when customers submit appointment requests through the grooming form. The system handles file uploads (vaccination records, dog photos) and sends beautifully formatted HTML emails to the business owner.

## Email Flow

1. **Customer fills out appointment form** (`/appointment`)
2. **Form submits with files** to `/api/quote` endpoint
3. **API processes data** and creates email with attachments
4. **Mailgun SMTP sends email** to business owner
5. **Customer receives confirmation** of successful submission

## Technical Implementation

### Files Structure

```
src/
├── app/api/quote.ts              # Main email sending API endpoint
├── app/appointment/
│   ├── AppointmentForm.tsx       # Form component with file upload
│   └── page.tsx                  # Appointment page
└── utils/emailTemplate.ts        # HTML email template generator
```

### Dependencies

- `nodemailer` - Email sending library
- `@types/nodemailer` - TypeScript definitions
- `multer` - File upload handling (via FormData)

## Configuration

### Environment Variables

Create `.env.local` with your Mailgun credentials:

```bash
# Mailgun SMTP Configuration
MAILGUN_SMTP_SERVER=smtp.mailgun.org
MAILGUN_SMTP_PORT=587
MAILGUN_SMTP_USERNAME=your-smtp-username@yourdomain.com
MAILGUN_SMTP_PASSWORD=your-smtp-password
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=business-email@yourdomain.com

# Optional
MAILGUN_DOMAIN=yourdomain.com
```

### Mailgun Setup Steps

1. **Create Account**: Sign up at [mailgun.com](https://mailgun.com)
2. **Add Domain**: Add and verify your domain in Mailgun dashboard
3. **Get SMTP Credentials**: 
   - Navigate to "Sending" → "Domain settings" → "SMTP credentials"
   - Copy username and password
4. **DNS Configuration**: Add required DNS records for domain verification
5. **Test Sending**: Use Mailgun's test tools to verify setup

## Email Features

### Professional HTML Template

The email template (`src/utils/emailTemplate.ts`) includes:

- **Mobile-responsive design** with CSS grid/flexbox
- **Professional branding** with company colors
- **Structured information layout** with clear sections
- **Priority indicators** for urgent requests
- **Clickable contact information** (phone/email links)
- **Service breakdown** with proper formatting
- **File attachment listing** in email body

### Email Sections

1. **Header**: Appointment request title with timestamp
2. **Priority Alert**: Highlighted section for "first available" requests
3. **Customer Information**: Name, email, phone numbers with click-to-contact
4. **Dog Information**: Name, breed, weight, approximate age
5. **Services**: Main service and additional services list
6. **Appointment Details**: Preferred date or first available indicator
7. **Comments**: Customer notes and special requests
8. **Attachments**: List of uploaded files (vaccination records, photos)
9. **Footer**: Next steps and automated message disclaimer

### File Handling

**Supported File Types:**
- **Documents**: PDF, DOC, DOCX
- **Images**: JPG, JPEG, PNG

**Upload Features:**
- **Drag & drop interface** for easy file selection
- **Multiple file support** for vaccination records
- **Dog photo upload** (optional, separate from documents)
- **File validation** and size checking
- **Email attachments** with proper MIME types

## API Endpoint Details

### `/api/quote` (POST)

**Input**: FormData containing:
- Customer information (name, email, phone)
- Dog details (name, breed, weight, age)
- Service selections (main + additional services)
- Appointment preferences (date or first available)
- Comments/special requests
- File uploads (documents + dog photo)

**Process**:
1. Extract form data and files
2. Convert files to buffers for email attachments
3. Generate HTML email content using template
4. Create Mailgun SMTP transporter
5. Send email with attachments
6. Return success/error response

**Output**: JSON response with success status

## Error Handling

### Form Validation
- **Required fields**: Customer info, dog info, main service, date
- **File type validation**: Only allowed formats accepted
- **Email format**: Valid email address required
- **Phone format**: Accepts various phone number formats

### API Error Handling
- **Environment variable validation**: Checks for required Mailgun credentials
- **File processing errors**: Handles corrupt or invalid files
- **SMTP connection errors**: Network and authentication issues
- **Email delivery failures**: Mailgun API errors
- **Detailed error logging**: Console errors for debugging

### User Feedback
- **Loading states**: "Sending..." button during submission
- **Success messages**: Confirmation of email sent
- **Error alerts**: Clear error messages for failures
- **Form reset**: Clears form after successful submission

## Email Template Customization

### Styling Variables

The email template uses inline CSS for maximum email client compatibility:

```css
/* Brand Colors */
--primary-color: #007bff
--success-color: #28a745
--warning-color: #ffc107
--danger-color: #dc2626

/* Layout */
--container-width: 600px
--border-radius: 8px
--spacing-unit: 15px
```

### Content Customization

Modify `src/utils/emailTemplate.ts` to:
- **Update company branding** (colors, fonts, logo)
- **Change email structure** (sections, layout)
- **Modify service formatting** (add new services)
- **Customize priority indicators** (urgency levels)
- **Add business information** (hours, location, etc.)

## Testing

### Development Testing

1. **Start development server**: `npm run dev`
2. **Navigate to appointment form**: `http://localhost:3000/appointment`
3. **Fill out form with test data**:
   - Use real email for testing delivery
   - Upload sample files (PDF, images)
   - Test both date selection and "first available"
4. **Submit form** and check:
   - Browser console for errors
   - Email inbox for delivery
   - Email formatting and attachments

### Production Testing

1. **Deploy with environment variables** set
2. **Test from production URL**
3. **Verify email delivery** (check spam folders)
4. **Test file attachments** work correctly
5. **Monitor Mailgun dashboard** for delivery stats

## Monitoring & Maintenance

### Mailgun Dashboard

Monitor email performance:
- **Delivery rates**: Track successful sends
- **Bounce rates**: Monitor failed deliveries
- **Spam reports**: Watch for deliverability issues
- **Usage statistics**: Track monthly email volume

### Error Monitoring

Watch for common issues:
- **Environment variable misconfigurations**
- **File upload size limits exceeded**
- **SMTP authentication failures**
- **Domain verification problems**
- **Email client compatibility issues**

### Regular Maintenance

- **Update dependencies**: Keep nodemailer current
- **Monitor email templates**: Test across email clients
- **Review file size limits**: Adjust if needed
- **Check domain authentication**: Renew if expired
- **Update contact information**: Keep business details current

## Security Considerations

### File Upload Security

- **File type validation**: Only allow safe file types
- **File size limits**: Prevent large file uploads
- **Virus scanning**: Consider adding file scanning
- **Content validation**: Check file contents match extensions

### Email Security

- **SMTP authentication**: Use strong passwords
- **Environment variables**: Never commit credentials to code
- **Rate limiting**: Consider adding submission limits
- **Input sanitization**: Clean form data before email
- **Attachment scanning**: Validate all uploaded files

### Data Privacy

- **No data storage**: Files not saved to server
- **Secure transmission**: HTTPS for form submission
- **Email encryption**: TLS for SMTP connection
- **Data retention**: Consider email retention policies

## Troubleshooting

### Common Issues

**Email not received:**
- Check spam/junk folders
- Verify TO_EMAIL address is correct
- Check Mailgun delivery logs
- Verify domain authentication

**File attachments missing:**
- Check file size limits
- Verify file types are supported
- Check browser console for upload errors
- Test with smaller files

**SMTP connection errors:**
- Verify Mailgun credentials
- Check network connectivity
- Ensure port 587 is open
- Test with Mailgun's SMTP test tool

**Form submission errors:**
- Check browser console for JavaScript errors
- Verify all required fields are filled
- Test with minimal data first
- Check API endpoint logs

### Debug Steps

1. **Check environment variables** are loaded correctly
2. **Test SMTP connection** outside of form submission
3. **Verify file upload** functionality separately
4. **Check email template** rendering with sample data
5. **Monitor network requests** in browser dev tools
6. **Review server logs** for detailed error messages

## Future Enhancements

### Potential Improvements

- **Email templates**: Multiple templates for different services
- **Auto-responder**: Confirmation emails to customers
- **Scheduling integration**: Calendar booking system
- **CRM integration**: Sync with customer management system
- **SMS notifications**: Text message alerts for urgent requests
- **File storage**: Save uploads to cloud storage
- **Email analytics**: Track open rates and engagement
- **Multi-language**: Support for Spanish/other languages
