import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { 
        type: String, required: true 
    },
    email: {
        type: String, required: true 
    },
    password: { 
        type: String, required: true 
    },
    user_id:{ 
        type: Number, required: true 
    }
},
{ 
    versionKey: false 
}
);

const User = mongoose.model('user', UserSchema);

export default User;