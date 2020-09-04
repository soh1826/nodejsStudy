const express=require('express') //express 모듈 가져오기
const app=express()//함수 이용해서 새로운 express app생성
const port =5000


const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://ksh:slytherin1231@boilerplate.kcc7x.mongodb.net/boilerplate?retryWrites=true&w=majority',{
    useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false //에러나지 않게 방지
}).then(()=>console.log('MongoDB Connected...'))//연결 성공시
.catch(err=>console.log(err))//연결 실패시



app.get('/', (req, res)=>res.send('hello world!'))

app.listen(port, ()=>console.log('Example app listening on port ${port}!')) //port 5000번에서 실행

