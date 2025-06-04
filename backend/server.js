// require('dotenv').config(); // Original line
require('dotenv').config();

const express = require('express');
const sgMail = require('@sendgrid/mail');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001; // Backend server port

// Middleware
app.use(cors()); // Allow requests from your frontend (running on a different port)
app.use(express.json()); // To parse JSON request bodies

// Set SendGrid API Key
if (!process.env.SENDGRID_API_KEY) {
  console.error('FATAL ERROR: SENDGRID_API_KEY is not defined.');
  process.exit(1);
}
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// API Endpoint to send booking confirmation
app.post('/api/send-booking-confirmation', async (req, res) => {
  const { name, email, serviceName, bookingDate, bookingTime, otherServiceText } = req.body;

  // Determine the actual service name to use in the email
  const finalServiceName = serviceName === 'Others' && otherServiceText ? otherServiceText : serviceName;

  const msg = {
    to: email, // Recipient's email address from the form
    from: 'darkcomet@atomicmail.io', // Your verified sender email address
    templateId: 'd-1135ea0b39c34c05ab967a67805a9261', // Your SendGrid Template ID
    dynamic_template_data: {
      name: name,
      service_name: finalServiceName,
      booking_date: bookingDate, // Make sure this is formatted nicely before sending from frontend
      booking_time: bookingTime,
      // Add any other variables your SendGrid template expects
    },
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully to:', email);
    res.status(200).json({ success: true, message: 'Booking confirmation email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error.response ? error.response.body : error);
    // Log more details if available
    if (error.response && error.response.body && error.response.body.errors) {
        error.response.body.errors.forEach(err => console.error('SendGrid error detail:', err.message));
    }
    res.status(500).json({ success: false, message: 'Failed to send booking confirmation email.' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});
