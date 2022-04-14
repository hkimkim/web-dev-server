import mongoose from 'mongoose';

const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    comments: {
        type: Number,
        default: 0,
    },
    retuits: {
       type: Number,
       default: 0,
    },
    postedBy: {
        username: String
    },
    logo_image: {
        type: String,
        default: "https://pbs.twimg.com/profile_images/1407528509170401280/B7uaH6fC_400x400.jpg",
    },
    liked: {
        type: Boolean,
        default: false,
    }
}, {collection: 'tuits'});
export default schema;