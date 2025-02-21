import express from 'express';
import auth from '../../middleware/auth.mjs';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { check, validationResult } from 'express-validator';
import User from '../../models/User.mjs';

const router = express.Router();

router 
    .route('/') // @route:   api/auth
    // @action:   GET
    // @desc:    Authenticate user
    // @access:  Private
    .get(auth, async(req, res) => {
        try{
            // Get user info from DB user's user ID from req.user
            const user = await User.findById(req.user.id).select('-password');
            res.json(user)
        }catch(err){
            console.error(err.message);
            res.status(500).json({error: [{msg: 'Server Error'}]});
        }
    })
    // @action:   POST
    // @desc:    Login User Route
    // @access:  Public
    .post(
        [
            check('email', 'Please include a valid email').isEmail(),
            check('password', 'Password Required').not().isEmpty()
        ], async(req, res) => {
            // check for validation errors
            let errors = validationResult(req);

            // return errors if there are any
            if(!errors.isEmpty){
                res.status(400).json({error: [{errors: errors.array()}]});
            }

            const { email, password } = req.body;

            try{
                // check if user exists and password is a match
                const user = await User.findOne({email});
                const isMatch = await bcrypt.compare(password, user.password);

                // if user doesn't exist or password doesn't match, return error
                if(!user || !isMatch){
                    res.status(400).json({errors: [{msg: 'Invalid Username or Password'}]});
                };

                // create payload obj for token validation 
                const payload = { 
                    user: { 
                        id: user._id 
                    }
                };

                // create, sign, and send a json web token, if there are no errors
                jwt.sign(payload, process.env.jwtSecret, {expiresIn: 360000}, (err, token) => {
                    if(err) throw err;
                    res.status(201).json({ token });
                });
            }catch(err){
                console.error(err.message);
                res.status(500).json({error: [{msg: 'Server Error'}]});
            }
        });

export default router;