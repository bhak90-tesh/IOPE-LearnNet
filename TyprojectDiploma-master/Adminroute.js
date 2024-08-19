const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./db/Addb');
require('dotenv').config();

const router = express.Router();


router.post('/adminsignup', async (req, res) => {
  const { username, password, securityCode } = req.body;

  console.log('Received signup request:', req.body);

  if (securityCode !== process.env.ADMIN_SECURITY_CODE) {
    console.error('Invalid security code:', securityCode);
    return res.status(403).send('Invalid security code');
  }

  if (!username || !password || !securityCode) {
    console.error('Missing fields:', { username, password, securityCode });
    return res.status(400).send('All fields are required');
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword, securityCode });
    await user.save();
    res.status(201).send('User created');
  } catch (err) {
    console.error('Error creating user:', err);
    res.status(400).send('Error creating user');
  }
});


router.post('/adminlogin', async (req, res) => {
  console.log('Received login request:', req.body); // Log the incoming request

  const { username, password } = req.body;
  if (!username || !password) {
    console.log('Missing username or password');
    return res.status(400).send('Username and password are required');
  }

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found');
      return res.status(400).send('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('Invalid password');
      return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ username: user.username }, 'secret-key', { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).send('Internal server error');
  }
  
});

module.exports = router;
