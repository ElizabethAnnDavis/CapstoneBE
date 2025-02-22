import express from 'express';
import { check, validationResult } from 'express-validator';
import UserProfile from '../../models/UserProfile.mjs';

const router = express.Router();

router
    .route('/:user_id')
    .get(async(req, res) => {
        try{
            const userProfile = await UserProfile.findOne({user_id: req.params.user_id});

            if(!userProfile){
                return res.status(404).json({errors: [{msg: 'User Profile Not Found'}]});
            }

            res.json(userProfile);
        }catch(err){
            console.error(err);
            res.status(500).json({errors: [{msg: 'Server Error'}]});
        }
    })
    //.post()
    .patch()
    .delete()


export default router;