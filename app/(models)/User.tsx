import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGODB_URI as string) 
mongoose.Promise = global.Promise

const userSchema = new Schema(
    {
        id: Number,
        name: String,
        email: String,

    }
)

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User