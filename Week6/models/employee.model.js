const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
   
    firstName: {
        type: String,
        required: 'This field is required.'
    },
    lastName: {
        type: String,
        required: 'This field is required.'
    },
    department: {
        type: String
    },
    startDate: {
        type: Date
    },
    jobTitle:{
        type:String
    },
    salary:{
        type:Number
    }

});




mongoose.model('Employee', employeeSchema);