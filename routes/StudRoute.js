const express = require('express')
const {createStudent,getStudents,deleteStudent,getOneStudent,updateStudent}=require("../controllers/studController")
const router=express.Router()

router.post("/create-student",createStudent)
router.get("/get-students",getStudents)
router.delete("/delete-student/:id",deleteStudent)
router.get("/get-student/:id",getOneStudent)
router.put("/edit-student/:id",updateStudent)
module.exports=router