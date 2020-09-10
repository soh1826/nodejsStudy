const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const saltRounds=10

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

userSchema.pre('save', function(next){
    var user=this;
    if (user.isModified('password')){
    //비밀번호를 암호화시킨다.
    bcrypt.genSalt(saltRounds, function(err, salt){
        if(err)return next(err)

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err)
            user.password=hash
            next()
        })
    })
}
})

const User=mongoose.model('User', userSchema)

module.exports={User}//다른 곳에서도 쓸 수 있게 만듦