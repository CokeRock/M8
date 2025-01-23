// src/config/data.js

export const users = [
    {
        firstName: "Mateo",
        lastName: "Díaz",
        email: "mateo.diaz@correo.com",
        password: "mateo123456"
    },
    {
        firstName: "Santiago",
        lastName: "Mejías",
        email: "santiago.mejias@correo.com",
        password: "santiago123456"
    },
    {
        firstName: "Lucas",
        lastName: "Rojas",
        email: "lucas.rojas@correo.com",
        password: "lucas123456"
    },
    {
        firstName: "Facundo",
        lastName: "Fernandez",
        email: "facundo.fernandez@correo.com",
        password: "facundo123456"
    }
];

export const bootcamps = [
    {
        title: "Introduciendo el bootcamp de React",
        cue: 10,
        description: "React es la librería más usada en JavaScript para el desarrollo de interfaces."
    },
    {
        title: "Bootcamp Desarrollo Web Full Stack",
        cue: 12,
        description: "Crearás aplicaciones web utilizando las tecnologias y lenguajes más populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS."
    },
    {
        title: "Bootcamp Big Data, inteligencia Artificial & Machine Learning",
        cue: 18,
        description: "Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning."
    }
];

export const userBootcamps = [
    { idBootcamp: 1, idUser: 1 },
    { idBootcamp: 1, idUser: 2 },
    { idBootcamp: 2, idUser: 1 },
    { idBootcamp: 3, idUser: 1 },
    { idBootcamp: 3, idUser: 2 },
    { idBootcamp: 3, idUser: 3 }
];
