import mongoose from 'mongoose';

const UserProfileSchema = new mongoose.Schema({
    user_id: Number,
    favs: [{
        title: {
            type: String,
            required: true,
        },
        img: {
            type: String,  // Storing URL as a string
            required: true,
        },
        disc: {
            type: String,
            required: true,
        },
        comments: {
            type: String,
        }
    }],
    posts: [{
        type: String,  // Array of strings
    }]
},
{ 
    versionKey: false 
}
);

const UserProfile = mongoose.model('userProfile', UserProfileSchema);

export default UserProfile;