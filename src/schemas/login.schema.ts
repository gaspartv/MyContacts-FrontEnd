import * as yup from "yup";

const schemaLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export { schemaLogin };
