import React from 'react';
import './styles.scss';

type HeaderProps = {
  toggle: any;
};

function Header(props: HeaderProps) {
  return (
    <header>
      <button onClick={props.toggle}>
        <img
          className='Icon'
          src='https://images.segundamano.mx/api/v1/smmx/images/static/icon-user.svg?rule=web_icon_1x'
          alt='user-icon'
        />
        <p>Ingresa</p>
      </button>
    </header>
  );
}

export default Header;
