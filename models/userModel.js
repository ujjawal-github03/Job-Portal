import mongoose from "mongoose";
import validator from "validator";
import bcrypt from 'bcryptjs';
// schema
const userSchema= new mongoose.Schema(
    {
        name:
        {
            type: String,
            require: [true,"Name is required"]
        },
        lastName:{
            type: String
        },
        email:{
            type:String,
            require: [true,"Email is required"],
            unique:true,
            validate:validator.isEmail
        },
        password:
        {
            type: String,
            require: [true,"Password is required"],
            minlength: [6,"Password length should be greater than 6 character"]
        },
        location:{
            type: String,
            default : "India"
        }

    },{timestamps:true}
)

// Middleware 
userSchema.pre('save',async function()
{
    const salt= await bcrypt.genSalt(10); 
    this.password= await bcrypt.hash(this.password,salt);
})


// Export
export default mongoose.model("User",userSchema);