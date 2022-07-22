import mongoose from 'mongoose';

const requiredString = { 
  type: String,
  required: true
}

const randomUserData = new mongoose.Schema({
  userId: requiredString,
  name: requiredString,
  email: requiredString,
  phone: requiredString,
  address: requiredString,
  password: requiredString,
})

const UserData = mongoose.model("userData", randomUserData);

export { UserData };