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
    .put(async(req, res) => {
        try{
            const userProfile = await UserProfile.findOne({user_id: req.params.user_id});

            if(!userProfile){
                return res.status(404).json({errors: [{msg: 'User Profile Not Found'}]});
            }

            if(req.body.favs && Array.isArray(req.body.favs)){
                const newfavs = req.body.favs.map((fav, i) => {
                    if(!fav.fav_id){
                        fav.fav_id = userProfile.favs.length + i;
                    }
                    return fav;
                })
                userProfile.favs = req.body.favs;
            }

            if(req.body.posts){
                userProfile.posts = req.body.posts;
            }

            await userProfile.save();
            res.json({msg: 'User Profile Updated', userProfile});
        }catch(err){
            console.error(err);
            res.status(500).json({errors: [{msg: 'Server Error'}]});
        }
    })
    .delete()

router
    .route('/:user_id/fav')
    //.get()
    .patch(async(req, res) => {
        const { title, img, disc, comments } = req.body;
        try{
            const userProfile = await UserProfile.findOne({user_id: req.params.user_id});
            if(!userProfile){
                return res.status(404).json({errors: [{msg: 'User Profile Not Found'}]});
            }

            const fav_id = userProfile.favs.length > 0 ? Math.max(...userProfile.favs.map(fav => fav.fav_id)) + 1 : 0;

            userProfile.favs.push({title, img, disc, comments, fav_id});

            await userProfile.save();
            res.json({ msg: 'Favorite Added', userProfile });
        }catch(err){
            console.error(err);
            res.status(500).json({errors: [{msg: 'Server Error'}]});
        }
    })



export default router;