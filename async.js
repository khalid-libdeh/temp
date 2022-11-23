const {readFile, writeFile } = require('fs');

console.log("start");

readFile('./content/ff.txt','utf-8',(err, result)=>{
    if(err){
        console.log("errrorrr aerrrrr: "+ err);
        return;
    }
    const first = result;
    readFile('./content/second.txt','utf-8',(err, result)=>{
    if(err){
        console.log("errorrr 2 " +err );
        return;
    }
    const second = result;
    writeFile('./content/aa.txt', 'those files : ' + first + " ------------" + second,(err, result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("  finallyyyyyyyyyyyy  ");
    })
    })
});
console.log("start the next");