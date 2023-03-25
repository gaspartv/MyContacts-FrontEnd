import * as yup from "yup";

const schemaEditContact = yup.object().shape({
  name: yup.string().notRequired(),

  email: yup.string().email().notRequired(),

  tel: yup.string().notRequired(),
});

export { schemaEditContact };
