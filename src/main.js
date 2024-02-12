
import renderAuthForm from './utils/renderAuthForm.js';

import signInFormData from './data/sign-in.js';
import signUpFormData from './data/sign-up.js';
import chatData from './data/chat.js';
import profileData from './data/profile.js';

import Chat from './pages/chat';
import ChatList from './pages/chat/modules/ChatList';
import ChatListItem from './pages/chat/modules/ChatListItem';
import Link from './components/Link/index.js';

import './styles/_normalize.css';
import './styles/typography.css';
import './styles/layouts.css';
import chatNotChosen from './pages/chat/modules/ChatNotChosen/index.js';
import Profile from './pages/profile/index.js';
import Avatar from "./components/Avatar/index.js";
import ProfileList from "./pages/profile/modules/ProfileList/index.js";
import ProfileListItem from "./pages/profile/modules/ProfileListItem/index.js";
import IconButton from "./components/IconButton/index.js";
import Error from "./pages/error/index.js";

document.addEventListener('DOMContentLoaded', () => {
  const signInPageEl = document.getElementById('sign-in');

  if (signInPageEl) {
    signInPageEl.innerHTML = renderAuthForm(signInFormData);
  }

  const signUpPageEl = document.getElementById('sign-up');

  if (signUpPageEl) {
    signUpPageEl.innerHTML = renderAuthForm(signUpFormData);
  }

  const chatPageEl = document.getElementById('chat');

  if (chatPageEl) {
    chatPageEl.innerHTML = Chat({
      chatList: ChatList({
        profileLink: Link({
          href: '/profile.html',
          className: 'link--gray',
          arrowIcon: true,
          text: 'Профиль'
        }),
        searchInput: '',
        items: chatData.chats.map(ChatListItem).join(''),
        className: 'chat-page__list'
      }),
      chat: chatNotChosen()
    })
  }

  const profilePageEl = document.getElementById('profile');

  if (profilePageEl) {
    profilePageEl.innerHTML = Profile({
      backButton: IconButton({
        iconLeft: true
      }),
      avatar: Avatar({
        image: 'https://placehold.co/260x260'
      }),
      name: 'Иван',
      userInfo: ProfileList({
        items: profileData.info.map((item) => ProfileListItem({
          ...item,
          className: 'profile-list__item',
        })).join(''),
        className: 'profile-page__user-info'
      }),
      actions: ProfileList({
        items: profileData.actions.map((item) => Link({
          ...item,
          className: item.isRed ? 'link--red link--big profile-list__item' : 'link--big profile-list__item',
        })).join(''),
        className: 'profile-page__user-info'
      })
    })
  }

  const error404PageEl = document.getElementById('error-404');

  if (error404PageEl) {
    error404PageEl.innerHTML = Error({
      title: '404',
      label: 'Не туда попали',
      link: Link({
        href: '/chat.html',
        text: 'Назад к чатам'
      })
    })
  }

  const error500PageEl = document.getElementById('error-500');

  if (error500PageEl) {
    error500PageEl.innerHTML = Error({
      title: '500',
      label: 'Мы уже фиксим',
      link: Link({
        href: '/chat.html',
        text: 'Назад к чатам'
      })
    })
  }
})



