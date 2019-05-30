const fs = require('fs');
const file = fs.createWriteStream('./big.file');

for (let i = 0; i <= 1e6; i++) {
    file.write('The story takes place in an unnamed school classroom in the United States, in the aftermath of a war between the US and an unnamed country. It is implied that America has been defeated and occupied. The story opens with the previous teacher leaving the classroom, having been removed from her position and replaced with an agent of the foreign power. The new teacher has been trained in propaganda techniques, and is responsible for re-educating the children to be supportive of their occupiers.\n');
}

//console.log(file);
//console.log(file.toString());
file.end();
