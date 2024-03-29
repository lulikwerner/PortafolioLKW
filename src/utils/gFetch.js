let projects = [
  { id: 1, title: "FULLSTACK", img:"../assets/img/fullstack.png", description:"Javascript - Mongoose - Postman - NPM - Token - Cookies - Sockets- CSS - HTML - Sweet Alert", link:"https://backend-commerce-dev.onrender.com/"},
    {id: 2, title: "AGENDA ANTARTICA", img:"../assets/img/agenda.png", description:"WordPress", link:"https://agendaantartica.org/en/"},
    { id: 3, title: "OYL FASHION", img:"../assets/img/OYL.png", description:"Javascript - React - CSS - HTML - Figma", link:"https://oyl-indumentaria.netlify.app/"},
    { id: 4, title: "MIA JEWELERS", img:"../assets/img/jewelry2.png", description:"Javascript - React - CSS - HTML", link:"https://miajewelers.netlify.app/" },
    { id: 5, title: "BMI", img:"../assets/img/scale.png", description:"Javascript - CSS - HTML", link:"https://bodymass-calculator.netlify.app/" },
    { id: 6, title: "PORTAFOLIO", img:"../assets/img/ecommerce.png", description:" Firebase - SAAS - CSS - HTML - Boostrap ", link:"https://lkportafolio.netlify.app/"},
    { id: 7, title: "CODER STORE", img:"../assets/img/coderstore.png", description:"Python - Virtualenv - Django- CSS - HTML", link:"https://coderstore.onrender.com"}

  ];
  
  export const gFetch = () =>
    new Promise((res, rej) => {
      let condition = true;
      if (condition) {
        setTimeout(() => {
          res(projects);
        });
      } else {
        rej("error en el fetch");
      }
    });