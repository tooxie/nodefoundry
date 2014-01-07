var koa = require('koa');
var app = koa();

app.use(function *(){
    this.body = 'Hello World';
});

console.log(process.env);

app.listen(process.env['PORT'] || '5000', process.env['VCAP_APP_HOST'] || '0.0.0.0');
