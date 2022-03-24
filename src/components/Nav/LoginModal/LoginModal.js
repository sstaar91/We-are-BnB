import React from 'react';
import Modal from 'components/Modal';
import * as S from './LoginModal.style';

const LoginModal = ({ isOpenModal, closeModal }) => {
  return (
    <Modal isOpenModal={isOpenModal} closeModal={closeModal}>
      <S.LoginWrap>
        <S.ModalCloseBtn onClick={closeModal}>X</S.ModalCloseBtn>
        <S.LoginTitle>로그인 또는 회원가입</S.LoginTitle>
      </S.LoginWrap>
      <S.KakaoLoginBtn />
    </Modal>
  );
};

export default LoginModal;
