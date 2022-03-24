import React from 'react';
import * as S from './StatusModal.style';

const StatusModal = ({ isOpenStatus, handleStatusModal, handleModal }) => {
  return (
    <S.StatusBackground hidden={!isOpenStatus} onClick={handleStatusModal}>
      <S.ModalWrap>
        <S.MenuCategori onClick={handleModal}>로그인</S.MenuCategori>
      </S.ModalWrap>
    </S.StatusBackground>
  );
};

export default StatusModal;
