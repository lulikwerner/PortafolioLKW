let projects = [
    { id: 1, title: "CODER STORE", img:"", description:"Python - Virtualenv - Node- CSS - HTML"},
    { id: 2, title: "BMI", img:"", description:"Javascript - CSS - HTML" },
    { id: 3, title: "MIA JEWELERS", img:"", description:"Javascript - React - CSS - HTML" },
    { id: 4, title: "OYL FASHION", img:"../src/assets/img/OYL.png", description:"Javascript - React - CSS - HTML - Figma"},
    { id: 5, title: "FULLSTACK", img:"", description:"Javascript - Mongoose - NPM - Token - Cookies - CSS - HTML "}

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