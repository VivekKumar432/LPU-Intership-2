const User = require('../models/Users');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const { username, password, isAdmin } = req.body;
    try {
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Create the new user with the hashed password
        const user = new User({ username, password: hashedPassword, isAdmin });
        await user.save();
        
        res.status(201).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (user && await bcrypt.compare(password, user.password)) {
            res.json({ message: 'Login successful', isAdmin: user.isAdmin });
        } else {
            res.status(400).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
