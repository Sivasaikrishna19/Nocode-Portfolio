const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    title: {
       type: String,
       required: true,
    },
    description: {
       type: String,
       required: true,
    },
    start_date: {
       type: String,
       required: true,
    },
    end_date: {
       type: String,
       required: true,
    },
    img_url: {
       type: String,
       required: true,
    },
 });
 const workExperienceSchema = new Schema({
    company_name: {
       type: String,
       required: true,
    },
    role: {
       type: String,
       required: true,
    },
    start_date: {
       type: String,
       required: true,
    },
    end_date: {
       type: String,
       required: true,
    },
    job_description: {
       type: String,
       required: true,
    },
 });
 
 const educationSchema = new Schema({
    name: {
       type: String,
       required: true,
    },
    start_date: {
       type: String,
       required: true,
    },
    end_date: {
       type: String,
       required: true,
    },
    major: {
       type: String,
       required: true,
    },
    gpa: {
       type: Number,
       required: true,
    },
    in_progress: {
       type: Boolean,
       required: true,
    },
 });
 
 const skillSchema = new Schema({
    skill: {
       type: String,
       required: true,
    },
    rating: {
       type: Number,
       required: true,
    },
 });
 
 const resumeSchema = new Schema({
    work_experience: [workExperienceSchema],
    education: [educationSchema],
    skills: [skillSchema],
 });
 

const profileSchema = new Schema({
   userName:{
    type:String,
    required:true
   },
   role:{
    type:String,
    required:true
   },
   email:{
    type:String,
    required:true
   },
   phone:{
    type:String,
    required:true
   },
   linkedInUrl:{
    type:String,
    required:true
   },
//    resume:{
//     type: resumeSchema,
//     required:true
//    },
//    projects:{
//     type: [projectSchema],
//     required:true
//    }


})

const Profile = mongoose.model('Profile', profileSchema)
module.exports = Profile