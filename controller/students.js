
const student = require('../models/students.js');

// get all students data
const getAllData = async (req, res) => {

    try {
        let allData = await student.find()
        res.status(200).json(allData)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "get error"
        })
    }

}

// get single student data 
const singleStudent = async (req, res) => {

    try {
        let id = req.params.id;
        let singleData = await student.findById(id)
        res.status(200).json(singleData)
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "get error"
        })
    }

    
}

// delete student data
const deleteStudent = async (req, res) => {

    try {
        let id = req.params.id;
        await student.findByIdAndDelete(id)
        res.status(200).json({
            message : "Data deleted success"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "get error"
        })
    }

    
}

// Add new student data

const addNewStudent = async (req, res) => {

    try {
        await student.create(req.body)
        res.status(200).json({
            message : "Data add success"
        })
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "get error"
        })
    }

    
}

// student data edit
const studentEdit = async (req, res) => {

    try {
        let id = req.params.id;
        await student.findByIdAndUpdate(id, req.body, {new : true})
        res.status(200).json({
            message : "Data Update Successfull"
        })
        
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message : "get error"
        })
    }
}

module.exports = {getAllData, singleStudent, deleteStudent, addNewStudent, studentEdit}