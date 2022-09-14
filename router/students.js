const express = require('express');
const { getAllData, singleStudent, deleteStudent, addNewStudent, studentEdit } = require('../controller/students.js');
const router = express.Router()

// pass all controller request
router.route('/').get(getAllData).post(addNewStudent)
router.route('/:id').get(singleStudent).delete(deleteStudent).put(studentEdit).patch(studentEdit)


module.exports = router;