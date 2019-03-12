let mongoose = require('mongoose');
let WomensSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    merchentName:{
        type:String,
        require:true
    },
    merchentUrl:{
        type:String,
        require:true
    },
    colorValue:{
        type:Array,
        require:true
    },
    itemSize:{
        type:Array,
        require:true
    },
    itemCatogery:{
        type:String,
        require:true
    },
    marketPrice:{
        type:Number,
        require:true
    },
    ourPrice:{
        type:Number,
        require:true
    },
    discount:{
        type:Number,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    img:{
        type:Array,
        require:true
    },
    author:{
        type:String,
        require:true
    }
});

let Womens = module.exports = mongoose.model('Womens',WomensSchema);
