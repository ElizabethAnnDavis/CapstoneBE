import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { check, validationResult } from 'express-validator';
import User from '../../models/User.mjs';

const router = express.Router();

router
    .route('/')
    .post(
        [
            check('name', 'Name is required').not().isEmpty(),
            check('email', 'A valid email is required').isEmail(),
            check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
        ], async(req, res) => {
            let errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            };

            const { name, email, password } = req.body;

            try{
                // check if user already exists, return error if so
                const user = await User.findOne({ email });
                if(user){
                    return res.status(400).json({errors:[{'User Already Exists'}]});
                }

                user = new User({
                    name,
                    email,
                    password
                });

                const salt = await bcrypt.genSalt(8);
                user.password = await bcrypt.hash(password, salt);

                const payload = { 
                    user: { 
                        id: user._id 
                    }
                };

                jwt.sign(payload, process.env.jwtSecret, {expiresIn: 360000}, (err, token) => {
                    if(err) throw err;
                    res.status(201).json({ token });
                });

            }catch(err){
                console.error(err);
                res.send(500).json({errors: [{msg: 'Server Error'}]});
            }
    })

export default router;