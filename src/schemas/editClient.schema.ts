import * as yup from "yup";

const schemaEditClient = yup.object().shape({
  name: yup.string().notRequired(),

  email: yup.string().email().notRequired(),

  password: yup.string().notRequired(),

  tel: yup.string().notRequired(),
});

export { schemaEditClient };
