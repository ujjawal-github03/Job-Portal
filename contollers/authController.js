import userModel from './../models/userModel.js';

const registerController = async (req, res, next) => 
{
  // try 
  // {
    const { name, email, password } = req.body;

    // Validate
    /*--------------------------------------------------------------- */
    if (!name) {
      // return res.status(400).send({
      //   success: false,
      //   message: "Please provide name",
      // });
      next("Name is required");
    }
    if (!email) {
      next("Email is required");
    }
    if (!password) {
      next("Password is required");
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      next("Email already registered.... Use different Email id");
    }
    /*--------------------------------------------------------------- */
    const user=await userModel.create({name,email,password});
    res.status(201).send({
        success:true,
        message: "User created successfully",
        user
    })
    // }
  // catch (error) 
  // {
  //   // console.log(error);
  //   // res.status(400).send({
  //   //   message: "Error in register controller",
  //   //   success: false,
  //   //   error,
  //   next(error);
  // }
}



export default registerController;