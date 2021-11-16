const mongoose = require('mongoose');

const SalonSchema = new mongoose.Schema(
  { 
    role:{
      type:String,
    },
    name: {
      type: String,
    },
    email:{
      type:String
    },
    password : {
      type:String
    },
    timings:[{  
        day : {
            type:String,
        },
        isopen:{
       type : Boolean,
       default:false
        },
        opening_time_morning : {
            type: String,
        },
        closing_time_morning : {
            type: String,
        },
        opening_time_evening : {
            type: String,
        },
        closing_time_evening : {
            type: String,
        }
        }],
  },
  {
    timestamps: true,
  }
);
const Salon = mongoose.model('Salon', SalonSchema);

module.exports = Salon;
