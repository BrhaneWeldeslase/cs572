export function addAvailability(bool:boolean){

    return function(bool){
        Course.prototype.availability = bool;
        return class Course {

        }
    }

}