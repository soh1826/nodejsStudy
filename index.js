const express=require('express') //express 모듈 가져오기
const app=express()//함수 이용해서 새로운 express app생성
const port =5000
const bodyParser=require('body-parser');
const { User } = require("./models/User");
const config=require('./config/key')
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const mongoose=require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false //에러나지 않게 방지
}).then(()=>console.log('MongoDB Connected...'))//연결 성공시
.catch(err=>console.log(err))//연결 실패시



app.get('/', (req, res)=>res.send('hello world! 안녕, 파이브'))

app.post('/register', (req, res)=> {
    //회원가입 할 때 필요한 정보 client에서 가져오면 db에 저장

    const user=new User(req.body)

    user.save((err, doc)=>{
        if(err) return res.json({success : false, err})
        return res.status(200).json({
            success: true
        })
    })
})

app.listen(port, ()=>console.log('Example app listening on port ${port}!')) //port 5000번에서 실행.

