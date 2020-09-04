const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name: {
        type:String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //공백제거
        unique: 1
    },
    password: {
        type : String,
        minlength: 5
    },
    lastname:{
        type:String,
        maxlength: 50
    },
    role:{//관리자와 일반유저 구분
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type : String,
    },
    tokenExp:{
        type: Number
    }
})

const user=mongoose.model('user', userSchema)

module.exports=[user]//다른 곳에서도 쓸 수 있게 만듦.