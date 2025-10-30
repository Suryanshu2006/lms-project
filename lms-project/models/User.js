import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  },
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
    maxlength: [50, 'Name cannot be longer than 50 characters']
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    enum: {
      values: ['student', 'admin'],
      message: '{VALUE} is not a valid role'
    },
    default: 'student'
  },
  image: {
    type: String,
    default: null
  }
}, {
  timestamps: true
})

// Ensure virtual fields are serialized when document is converted to JSON
UserSchema.set('toJSON', {
  virtuals: true,
  transform: (_, converted) => {
    delete converted._id
    delete converted.__v
    return converted
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)
