Array.prototype.pluck = function(temp){

    let abc= this;
    function pickMinMax(){

        if(temp===true){
            console.log((abc.reduce(function(x,y){ 
                return (x > y) ? x : y;} )
                ));
     
            }
            else{
                console.log((abc.reduce(function(x,y){ 
                     return (x < y) ? x : y;} )
                     ));
                } 
    }


    process.nextTick(pickMinMax);
  
}

console.log('first');
[10,2,-100,3,4,1].pluck(true);
[10,2,-100,3,4,1].pluck(false);
console.log('finally');