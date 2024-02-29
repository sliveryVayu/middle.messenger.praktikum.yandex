export default {
  avatar: 'https://placehold.co/260x260',
  info: [
    {
      label: 'Почта',
      value: 'pochta@yandex.ru',
      name: 'email'
    },
    {
      label: 'Логин',
      value: 'ivanivanov',
      name: 'login'
    },
    {
      label: 'Имя',
      value: 'Иван',
      name: 'first_name'
    },
    {
      label: 'Фамилия',
      value: 'Иванов',
      name: 'second_name'
    },
    {
      label: 'Имя в чате',
      value: 'Иван',
      name: 'display_name'
    },
    {
      label: 'Телефон',
      value: '+7 (909) 967 30 30',
      name: 'phone'
    }
  ],
  passwordInfo: [
    {
      label: 'Старый пароль',
      value: '123456',
      name: 'oldPassword',
      type: 'password'
    },
    {
      label: 'Новый пароль',
      value: '123321',
      name: 'newPassword',
      type: 'password'
    },
    {
      label: 'Повторите новый пароль',
      value: '123321',
      name: 'newPasswordRepeat',
      type: 'password'
    },
  ],
  actions: [
    {
      href: '/edit-profile.html',
      text: 'Изменить данные',
    },
    {
      href: '/edit-password.html',
      text: 'Изменить пароль',
    },
    {
      href: '#',
      text: 'Выйти',
      isRed: true
    },
  ]
}
