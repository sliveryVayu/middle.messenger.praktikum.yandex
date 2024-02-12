export default {
  title: 'Вход',
  fields: [
    {
      label: 'Логин',
      name: 'login',
      type: 'text',
      error: 'Неверный логин'
    },
    {
      label: 'Пароль',
      name: 'password',
      type: 'password'
    }
  ],
  actions: [
    {
      type: 'submit',
      text: 'Авторизоваться'
    },
    {
      type: 'link',
      href: '/sign-up.html',
      text: 'Нет аккаунта?'
    }
  ]
}