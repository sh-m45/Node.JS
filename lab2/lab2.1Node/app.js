const customEmmitter = require('./custom')
let customObj = new customEmmitter();
customObj.on('login',(name)=>{
    console.log(name + " this name has account");
})
customObj.emit('login',"shrouk")