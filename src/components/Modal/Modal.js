import React from 'react';
import * as S from './Modal.style';

const Modal = ({ closeModal }) => {
  return (
    <S.ModalContainer onClick={closeModal}>
      <S.DimmedBackground>
        <S.ModalBox>모달창입니다</S.ModalBox>
      </S.DimmedBackground>
    </S.ModalContainer>
  );
};

export default Modal;
