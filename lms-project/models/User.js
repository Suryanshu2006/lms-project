import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  image: { type: String },
}, { timestamps: true })

export default mongoose.models.User || mongoose.model('User', UserSchema)
