const express = require("express");
const path = require("path");
const hbs = require("hbs");
const { title } = require("process");
const app = express();


app.set('views', path.join(__dirname, '../template/views'));
app.set('view engine', 'hbs');
const part=path.join(__dirname,'../template/partials');
hbs.registerPartials(part);

app.set('view engine', 'hbs')


app.get("/",(req,res)=>{
    res.render('index',{
        title:'this is the index header hbs ',
        name:"My name is Rohit jaiswal",
        property:"this is the footer index hbs "
    });
})

app.get('/about',(req,res)=>{
    res.render('about',{
        title:'this is the about header hbs ',
        name:"My name is Rohit jaiswal",
        property:"this is the footer about hbs "
    });
})

app.get('/history',(req,res)=>{
    res.render('history');
})
app.get('/prod',(req,res)=>{
    if(!req.query.search)
    {
        return res.send({
            error:'this game is not there '
        })
    }
    console.log(req.query.search);
     res.send({
         products:[]
     })

})

app.get('/weather',(req,res)=>{
    if(!req.query.address)
    {
        return res.send({
            error :'address is must be provided  '
        })
    }
    else{
        return res.send({
            sucess :`the address is ${req.query.address}`
        })
    }
})

app.get('/*',(req,res)=>{
    res.render('404');
})





app.listen(3000,()=>{
    console.log("this ports is running on port 3000");
})