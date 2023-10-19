let projects = [
    { id: 1, title: "CODER STORE", img:""},
    { id: 2, title: "BMI", img:"" },
    { id: 3, title: "MIA JEWELERS", img:"" },
    { id: 4, title: "OYL FASHION", img:"" },
    { id: 5, title: "FULLSTACJ", img:""}

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