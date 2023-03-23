import * as yup from "yup";

const schemaNewContact = yup.object().shape({
  name: yup.string().min(3).required(),

  email: yup.string().email().required(),

  tel: yup.string().required(),
});

export { schemaNewContact };
