import React from 'react';
import './styles.scss';

type ModalProps = {
  children: React.ReactNode;
  customClass: any;
  show: boolean;
  closeCallback: any;
};

function Modal(props: ModalProps) {
  return (
    <div className='ModalWrapper' style={{ display: props.show ? 'block' : 'none' }}>
      <div className='modal_content'>
        {props.children}
        <img
          src='https://www.segundamano.mx/static/img/icon_close.cfa5fef3.svg'
          alt='Close'
          className='close_modal'
          onClick={() => props.closeCallback(!props.show)}
        />
      </div>
    </div>
  );
}

export default Modal;
