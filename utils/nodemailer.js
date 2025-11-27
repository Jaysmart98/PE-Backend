const nodemailer = require("nodemailer")


const MailVerification = async(email, username, link) => {

    const MessageTemplate = 
    `<!DOCTYPE html> 
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Action Required: Verify Your Email</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            background-color: #f4f4f4;
        }
        table, td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }
        img {
            -ms-interpolation-mode: bicubic;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #0d9488; /* Teal/Turquoise color for health/wellness feel */
            padding: 24px;
            text-align: center;
            color: #ffffff;
        }
        .header h1 {
            font-size: 24px;
            margin: 0;
        }
        .content {
            padding: 32px 24px;
            color: #333333;
            line-height: 1.6;
        }
        .content h2 {
            font-size: 22px;
            color: #1f2937;
            margin-top: 0;
            font-weight: 600;
        }
        .button-container {
            text-align: center;
            margin-top: 30px;
            margin-bottom: 30px;
        }
        .button {
            display: inline-block;
            padding: 12px 24px;
            background-color: #059669; /* Slightly darker green/teal for button */
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 6px;
            font-weight: bold;
            font-size: 16px;
            /* Ensure the button is clickable even if images are blocked */
            border: 1px solid #059669; 
        }
        .footer {
            background-color: #e5e7eb;
            padding: 24px;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
        }
        .footer a {
            color: #6b7280;
            text-decoration: underline;
        }
    </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f4f4;">
        <tr>
            <td align="center" style="padding: 20px;">
                <table role="presentation" class="container" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <tr>
                        <td class="header" style="background-color: #334947ff; padding: 24px; text-align: center; color: #ffffff; border-top-left-radius: 8px; border-top-right-radius: 8px;">
                            <h1 style="font-size: 24px; margin: 0;">MedReminder</h1>
                        </td>
                    </tr>
                  
                    <tr>
                        <td class="content" style="padding: 32px 24px; color: #333333; line-height: 1.6;">
                            <h2 style="font-size: 22px; color: #1f2937; margin-top: 0;">Welcome, ${username} </h2>
                            <p>Thank you for signing up for **\[App Name\]**, your trusted partner for managing health reminders.</p>
                            
                            <p>Before we can help you stay on track with your medication and doctor appointments, we need you to confirm your email address. This step ensures your security and guarantees you receive all your critical reminders.</p>

                            <p style="text-align: center; font-weight: bold; margin-top: 25px;">Click the button below to instantly activate your account:</p>
                            
                            <!-- Email Verification Button -->
                            <div class="button-container" style="text-align: center; margin-top: 30px; margin-bottom: 30px;">
                                <a href="\[Verify Link\]" class="button" style="display: inline-block; padding: 12px 24px; background-color: #059669; color: #ffffff !important; text-decoration: none; border-radius: 6px; font-weight: bold; font-size: 16px;">Verify My Email Address</a>
                            </div>

                            <p style="font-size: 14px; color: #6b7280; text-align: center; margin-top: 20px;">If the button above doesn't work, please copy and paste the following link into your web browser:</p>
                            <p style="font-size: 14px; color: #0d9488; word-break: break-all; text-align: center;">Verify email</p>

                            <p style="margin-top: 30px;">If you did not sign up for this service, please ignore this email.</p>
                            <p>The Team at MedReminder</p>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td class="footer" style="background-color: #e5e7eb; padding: 24px; text-align: center; color: #6b7280; font-size: 12px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;">
                            <p style="margin: 0;">© 2025 MedReminder. All rights reserved.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`

   const transporter = await nodemailer.createTransport({
        service:"gmail",
        auth:{
            user:process.env.USER_EMAIL,
            pass: process.env.USER_PASS
        }
    })


    const mailOptions = {
        from: process.env.PASS_EMAIL,
        to: email,
        subject: `Email Verification for ${username}`,
        html: MessageTemplate
    }

    try {
        const mailed = await transporter.sendMail(mailOptions)
        if (mailed) {
            return "mail sent"
        } 
    } catch (error) {
        console.log(error)
    }
}

module.exports = MailVerification