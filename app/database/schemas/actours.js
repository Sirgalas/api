var ActoursSchema = new Mongoose.Schema({
    id:{type: Number},
    name:{type: String,required:true},
    description:{type: String},
    created_at:{type:Date, default: Date.now},
});

var actoursModel = Mongoose.model('actours', ActoursSchema);

module.exports = actoursModel;