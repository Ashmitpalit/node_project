const UserModel = require('../model/user_model');

exports.register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).send("Email and password are required");
    }

    try {
        // Save to DB
        const newUser = new UserModel({ email, password });
        await newUser.save();

        console.log("Registered user:", newUser);
        return res.send("Registration successful!");
    } catch (error) {
        console.error("Error saving user:", error);
        if (error.code === 11000) {
            return res.status(400).send("Email already exists");
        }
        return res.status(500).send("Something went wrong");
    }
};
