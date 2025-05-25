const express = require('express');
const { OAuth2Client } = require('google-auth-library');
const router = express.Router();

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '355697554345-s3i3mg9koagheadfp3avlvn3nk9qpval.apps.googleusercontent.com';
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

// Your other auth routes...

// Google login route
router.post('/google/token', async (req, res) => {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    const payload = ticket.getPayload();
    // TODO: Find/Create user in your DB, then generate JWT
    res.json({
      success: true,
      token: 'YOUR_APP_JWT_TOKEN', // Replace with real JWT
      user: {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        googleId: payload.sub,
      },
    });
  } catch (err) {
    res.status(401).json({ success: false, message: 'Invalid Google token' });
  }
});

module.exports = router;