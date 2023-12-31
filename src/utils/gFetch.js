let projects = [
    { id: 1, title: "CODER STORE", img:"../src/assets/img/coderstore.png", description:"Python - Virtualenv - Node- CSS - HTML", link:"https://github.com/lucasbadino/trabajo_1"},
    { id: 2, title: "BMI", img:"../src/assets/img/scale.png", description:"Javascript - CSS - HTML", link:"https://bodymass-calculator.netlify.app/" },
    { id: 3, title: "MIA JEWELERS", img:"../src/assets/img/jewelry2.png", description:"Javascript - React - CSS - HTML", link:"https://miajewelers.netlify.app/" },
    { id: 4, title: "OYL FASHION", img:"../src/assets/img/OYL.png", description:"Javascript - React - CSS - HTML - Figma", link:"https://oyl-indumentaria.netlify.app/"},
    { id: 5, title: "FULLSTACK", img:"../src/assets/img/ecommerce.png", description:"Javascript - Mongoose - Postman - NPM - Token - Cookies - CSS - HTML - Sweet Alert", link:"https://backend-commerce-dev.onrender.com/"},
    { id: 6, title: "PORTAFOLIO", img:"../src/assets/img/portafolio.png", description:" Firebase - SAAS - CSS - HTML - Boostrap ", link:"https://lkwportafolio.netlify.app/"}

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