const restful = require('node-restful');
const mongoose = restful.mongoose;

const sectionSchema = new mongoose.Schema({
    name:{type:String, required:true},
    subSections:[{
        name:{type:String, required:true},
        amount:{type:String, require:true}
    }],
    createdAt: {type: Date, default:Date.now}
});

module.exports = restful.model('Section', sectionSchema)