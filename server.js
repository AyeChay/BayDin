var express = require('express');
var app = new express();
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './View'));

app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'./Assest/bootstrap')));
app.use(express.static(path.join(__dirname,'./Assest/fontawesome')));
app.use(express.static(path.join(__dirname,'./Assest')));
app.get('/home', function (req, res){

    console.log(req.query);
    if(req.query.page=="ရာသီခွင်"){
        res.render('season');
        return;
    }if(req.query.page == "ဗေဒင်"){
        res.render('season1');
        return;
    }if(req.query.page == "ရာသီစာဟောစာတမ်း"){
        res.render('season2');
        return;
    }if(req.query.page == "တာ‌ရော့ကဒ်"){
        res.render('season3');
        return;
    }
    res.render('mainpage');
    
})





app.use(function (req, res){
    res.send('404 Not found');
})

app.use(function(error, req, res, next){
    console.log(error);
    res.send('This is error page');
})


var port = 3030;
app.listen(port, function(){
    console.log('Server is Runnin up at ', port);
})



