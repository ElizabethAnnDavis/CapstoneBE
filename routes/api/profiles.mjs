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
                const newFavs = req.body.favs.map((fav, i) => {
                    if(!fav.fav_id){
                        fav.fav_id = userProfile.favs.length + i;
                    }
                    return fav;
                })
                userProfile.favs = newFavs;
            }

            if(req.body.posts && Array.isArray(req.body.posts)){
                const newPosts = req.body.posts.map((post, i) => {
                    if(!post.post_id){
                        post.post_id = userProfile.posts.length + i;
                    }
                    return post;
                })
                userProfile.posts = newPosts;
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
    //.get(//get all favs?)
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

router
    .route('/:user_id/fav/:fav_id')
    .get()
    .patch()
    .delete()

router
    .route('/:user_id/post')
    .patch(async(req, res) => {
        try{
            const userProfile = await UserProfile.findOne({ user_id: req.params.user_id });
            if (!userProfile) {
                return res.status(404).json({ errors: [{ msg: 'User Profile Not Found' }] });
            }

            const post_id = userProfile.posts.length > 0 ? userProfile.posts.length + 1 : 1;

            const newPost = {
                post: req.body.post,
                post_id: post_id
            };

            userProfile.posts.push(newPost);

            await userProfile.save();
            res.json({ msg: 'Post Added', userProfile });
        }catch(err){
            console.error(err);
            res.status(500).json({errors: [{msg: 'Server Error'}]});
        }
    })


router
    .route('/:user_id/post/:post_id')
    .patch(async(req, res) => {
        try{
            const userProfile = await UserProfile.findOne({user_id: req.params.user_id});
            if(!userProfile){
                return res.status(404).json({errors:[{msg: 'User Profile Not Found'}]});
            }

            const post = userProfile.posts.find(p => p.post_id === parseInt(req.params.post_id));

            if (!post) {
                return res.status(404).json({ errors: [{ msg: 'Post Not Found' }] });
            }
            
            post.post = req.body.post;
            
            await userProfile.save();
            res.json({ msg: 'Post Updated', userProfile });
        }catch(err){
            console.error(err);
            res.status(500).json({errors: [{msg: 'Server Error'}]});
        }
    })



export default router;