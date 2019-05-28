Array.prototype.removeNum = function(num){

    let abc= this;
    return new Promise(function(resolve,reject){
        resolve(abc.filter(x=>x!=num))
        
    });

}

async function processRemoveNum (){
   try {
    console.log(await [1,2,3,4,1].removeNum(1));
       
   } catch (error) {
       console.log(error);
   }
    
}

console.log("first");
processRemoveNum();
console.log("finally");
