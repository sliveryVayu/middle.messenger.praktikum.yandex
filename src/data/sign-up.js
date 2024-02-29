export default {
  title: 'Регистрация',
  fields: [
    {
      label: 'Почта',
      name: 'email',
      type: 'email'
    },
    {
      label: 'Логин',
      name: 'login',
      type: 'text'
    },
    {
      label: 'Имя',
      name: 'first_name',
      type: 'text'
    },
    {
      label: 'Фамилия',
      name: 'second_name',
      type: 'text'
    },
    {
      label: 'Телефон',
      name: 'phone',
      type: 'text'
    },
    {
      label: 'Пароль',
      name: 'password',
      type: 'password'
    },
    {
      label: 'Пароль (еще раз)',
      name: 'password-again',
      type: 'password'
    }
  ],
  actions: [
    {
      type: 'submit',
      text: 'Зарегистрироваться'
    },
    {
      type: 'link',
      href: '/sign-in.html',
      text: 'Войти'
    }
  ]
}