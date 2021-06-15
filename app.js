




let userName = prompt("Bienvenido, mi nombre es Mateo y soy su asistente hoy, Cual es su nombre? ");
let userSurname = prompt("Genial! Y su apellido?");
console.log("Aghhh que nombre mas feo...");
let fullName = `${userName} ${userSurname}`;
let userAge = Number(prompt("\edad?"));
console.log("Ah, un poco mas y se jubila.");
let bornYear = (new Date().getFullYear()) - userAge;
let boolPepsi= prompt("Cualquier edad esta bien!\nAhora la pregunta final, le gusta la musica?");
console.log("Ni me importaba la verdad");
alert(`Recopile estos datos de usted, usted se llama ${fullName.toUpperCase()}! Nacio en el año ${bornYear} y ${boolPepsi.toLowerCase()} le gusta la Musica`)
