// router.post("/users", createUser);

// const createUser = async(req, res) =>{

//     const user = await userService.create(req.body);

//     res.status(201).json(user);
// };

// const createUser = async(data) =>{
//  if (data.age<18)
//    throw new Error("Age must be 18+");

//  return await userRepository.create(data);
// }

// const createUser = async(data) =>{
//  return await UserActivation.create(data);
// };


const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://rakhi57776_db_user:YOUR_PASSWORD@cluster0.sojxiny.mongodb.net/");

// async function saveUser(){

//  const student = new Student({
//   name:"Anish",
//   age:24,
//  })

//  await student.save();
//  console.log("saved");

//  process.exit();
// }

// saveUser();

//
async function saveStudent(){
 
 const StudentSchema = 
  new mongoose.Schema({
   name:{
    type:String,
    required:true
   },
   id:{
    type:Number,
    required:true,
   },
   age:{
    type:Number, 
    min:18
   }
  });

  const Student = mongoose.model(
   "Student",
   StudentSchema
  )

  await Student.create({
   name:"Tanish Kumar",
   id:12345,
   age:22
  })
  //
  await Student.find({
   age:{$gt:20}
  });

  id = "6a424740ef940c1369be78e9";
  //
  await Student.findByIdAndDelete(id);

  //
  await Student.find().sort({
   age:1
  });

  //
  await Student.findByIdAndUpdate(id, 
   {
    age:25
   }
  );
 }

saveStudent();
