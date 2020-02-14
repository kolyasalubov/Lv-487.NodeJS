const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const UserModel = require('../../models/User');

const router = express.Router();
// @route   POST api/users
// @desc    Test route
// @access  Public
// router.post(
//     '/',
//     [
//         check('name', 'Name is required')
//             .not()
//             .isEmpty(),
//         check('email', 'Please include a valid email').isEmail(),
//         check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 }),
//     ],
//     async (req, res) => {
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).send({ errors: errors.array() });
//         }
//
//         const { name, email, password } = req.body;
//         try {
//             let user = await UserModel.findOne({ email });
//             if (user) {
//                 return res.status(400).send({ errors: [{ msg: 'User already exists' }] });
//             }
//
//             user = new UserModel({
//                 name,
//                 email,
//                 password,
//             });
//
//             const salt = await bcrypt.genSalt(10);
//
//             user.password = await bcrypt.hash(password, salt);
//
//             await user.save();
//
//             const payload = {
//                 user: {
//                     id: user.id,
//                 },
//             };
//
//             jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (err, token) => {
//                 if (err) throw err;
//                 res.send({ token });
//             });
//         } catch (error) {
//             console.error(error.message);
//             res.status(500).send('Server error');
//         }
//     }
// );

router.get('/', async (req, res) => {
    try {
        const user = await UserModel.find();
        return res.send(user);
    } catch (err) {
        return console.log(err);
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).send('User doesnt exist');
        }
        return res.send(user);
    } catch (err) {
        return console.log(err);
    }
});

router.post('/', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        let user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).send({ errors: [{ msg: 'User already exists' }] });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        user = new UserModel({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });
        await user.save();

        return res.send({ msg: 'User saved', user });
    } catch (err) {
        return console.log(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.body.email });
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('Success');
        } else {
            res.send('Not allowed');
        }
    } catch (err) {
        req.status(500).send();
    }
});

router.patch('/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;
    try {
        const userToUpdate = await UserModel.findById(id);
        if (firstName) {
            userToUpdate.firstName = firstName;
        }
        if (lastName) {
            userToUpdate.lastName = lastName;
        }
        if (email) {
            userToUpdate.email = email;
        }
        if (password) {
            userToUpdate.password = password;
        }
        userToUpdate.save();
        return res.send(userToUpdate);
    } catch (err) {
        return console.log(err);
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const user = await UserModel.findById(id);
        if (!user) {
            return res.status(404).send('User doesnt exist');
        }
        user.remove();
        return res.send('User deleted');
    } catch (err) {
        return console.log(err);
    }
});

module.exports = router;
