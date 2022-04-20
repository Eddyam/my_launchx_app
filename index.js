const MissionCommander = require("./app/missionCommander"); //Importa clase MissionCommander

//Instanciando objetos
const edd = new MissionCommander("Edder")
const maria = new MissionCommander("Maria del Carmen")
const alex = new MissionCommander("Alejandro")

console.log(edd.name)
console.log(maria.name)
console.log(alex.name)