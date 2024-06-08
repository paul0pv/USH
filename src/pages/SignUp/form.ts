export const inputs = [
    {
      id: 1,
      entry: 'input',
      placeholder: "Name",
      name: "name",
    },
    {
      id: 2,
      entry: 'input',
      placeholder: "Lastname",
      name: "lastname",
    },
    {
      id: 3,
      entry: 'input',
      placeholder: "Email",
      name: "email",
      type: "email",
      pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    },
    {
      id: 5,
      entry: 'input',
      placeholder: "Password",
      name: "password",
      type: "password",
      minLength: 8,
    },
  /*  {
      id: 6,
      entry: 'input',
      placeholder: "Confirmar contraseña",
      name: "checkPassword",
      type: "password",
    }, */
  ];