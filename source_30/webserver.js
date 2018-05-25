//모듈 추출
var http = require('http');
var express = require('express');

//서버 생성 
var app = express();

app.use(function (request, response, next) {
    //서버에 로그를 남김 
    console.log('one');
    //다음 미들웨어 호출 
    next();
});

app.use(function (request, response, next) {
    console.log('two');
    next();
});

app.use(function (request, response, next) {
    console.log('three');
    next();
});
app.use(function (request, response) {
    response.send('<h3>Good day</h3>');
});

//포트 번호 지정하여 서버 실행 
http.createServer(app).listen(53361, function () {
    console.log('Server is running');
});

