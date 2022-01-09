
/*
const myMap = new Map();

console.log(myMap.set('apple', 'fruit'));
console.log(myMap.get('apple'));
console.log(myMap.delete('apple'));
console.log(myMap.get('apple'));
*/



function getAdmins(map) {
    let admins = [];

    for([key, value] of map) {

        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
};

const usuarios = new Map();

usuarios.set('Darley','Admin');
usuarios.set('Cris','Assistente');
usuarios.set('Raissa','Admin');
usuarios.set('Paulo','Admin');
usuarios.set('Luiza','Trainner');

console.log(getAdmins(usuarios));