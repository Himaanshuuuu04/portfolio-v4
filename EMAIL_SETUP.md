# Email Setup Guide for Portfolio Contact Form

This portfolio now uses **Nodemailer** instead of Formspree for handling contact form submissions. Follow these steps to set up email functionality:

## 🚀 Quick Setup

1. **Copy environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Configure your Gmail credentials in `.env`:**
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-char-app-password
   EMAIL_TO=your-email@gmail.com
   ```

3. **Test the setup:**
   ```bash
   npm run dev
   # Visit http://localhost:4323/api/test-gmail to verify connection
   ```

## 🔧 Gmail Setup (Recommended)

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Security → 2-Step Verification → Turn On

### Step 2: Generate App Password
1. Still in Security settings
2. 2-Step Verification → App passwords
3. Select "Mail" and generate password
4. Copy the **16-character password** (no spaces)
5. Use this in your `.env` file as `EMAIL_PASS`

### ⚠️ Important Notes:
- **Never use your regular Gmail password**
- App passwords are 16 characters like: `mmpcjkxuxdsxugfg`
- No spaces or special characters in app passwords

## 🧪 Testing & Troubleshooting

### Test Endpoints:
- **Environment Check:** `http://localhost:4323/api/test-env`
- **Gmail Connection:** `http://localhost:4323/api/test-gmail`

### Common Issues:

1. **"Missing credentials for PLAIN" Error:**
   - ✅ Check `.env` file exists in project root
   - ✅ Verify `EMAIL_USER` and `EMAIL_PASS` are set
   - ✅ Restart development server after changing `.env`

2. **"Authentication failed" Error:**
   - ✅ Ensure 2FA is enabled on Google account
   - ✅ Generate a new app password
   - ✅ Use the app password, not your regular password
   - ✅ Check for typos in email address

3. **"Service unavailable" Error:**
   - ✅ Check internet connection
   - ✅ Try again in a few minutes (Gmail rate limiting)

### Debug Steps:
```bash
# 1. Check environment variables are loaded
curl http://localhost:4323/api/test-env

# 2. Test Gmail connection
curl http://localhost:4323/api/test-gmail

# 3. Check server logs for detailed errors
npm run dev
# Look for console output when form is submitted
```

## 🌐 Alternative Email Providers

### Outlook/Hotmail
```javascript
const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

### Custom SMTP
```javascript
const transporter = nodemailer.createTransport({
  host: 'your-smtp-server.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## 🚀 Production Deployment

### Environment Variables Setup:
- **Vercel:** Project Settings → Environment Variables
- **Netlify:** Site Settings → Environment Variables  
- **Railway:** Project → Variables
- **Heroku:** Settings → Config Vars

### Required Variables:
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
EMAIL_TO=your-email@gmail.com
```

## ✨ Features

- ✅ Beautiful HTML email formatting
- ✅ Plain text fallback
- ✅ Reply-to set to sender's email
- ✅ Form validation (client & server)
- ✅ Loading states & error handling
- ✅ Success confirmation
- ✅ Detailed error logging
- ✅ Multiple email provider support

## 🔒 Security

- ✅ Environment variables for credentials
- ✅ Server-side validation
- ✅ No sensitive data in client
- ✅ `.env` in `.gitignore`

## 📞 Support

If you're still having issues:

1. Check the browser console for errors
2. Check server logs (`npm run dev`)
3. Test with the debug endpoints
4. Verify Gmail app password is working
5. Try generating a new app password

**Current Status:** The system is configured and ready to use with your Gmail account!
