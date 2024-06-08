export const inputs = [
    {
      id: 1,
      entry: 'input',
      placeholder: "Email",
      name: "email",
      type: "email",
      autocomplete: "off",
      pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      required: true,
    },
    {
      id: 2,
      entry: 'input',
      placeholder: "Password",
      name: "password",
      type: "password",
      required: true,
    },
  ];