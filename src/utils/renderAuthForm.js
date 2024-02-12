import AuthForm from "../components/AuthForm/index.js";
import TextInput from "../components/TextInput/index.js";
import Link from "../components/Link/index.js";
import Button from "../components/Button/index.js";

export default (formData) => AuthForm({
  title: formData.title,
  fields: formData.fields.map(TextInput).join(''),
  actions: formData.actions.map((action) =>
    action.type === 'link' ? Link(action) : Button(action)
  ).join('')
});