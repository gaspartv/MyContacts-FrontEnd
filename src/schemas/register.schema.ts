import * as yup from "yup";

const schemaRegister = yup.object().shape({
  name: yup.string().min(3).required(),

  email: yup.string().email().required(),

  password: yup
    .string()
    .min(8)
    .required()
    .matches(/(\d)/, "At least one number."),

  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords are different."),

  tel: yup.string().required(),
});

export { schemaRegister };
