import React, { useState } from 'react';
import * as S from './Nav.style';
import StatusModal from './StatusModal';
import LoginModal from './LoginModal';

const Nav = () => {
  const [isOpenStatus, setIsOpenStatus] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleStatusModal = () => {
    setIsOpenStatus(!isOpenStatus);
  };

  const handleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <S.NavWrap>
      <S.LogoContainer>
        <S.Logo>B</S.Logo>
        <S.TitleName>We are BnB</S.TitleName>
      </S.LogoContainer>
      <S.UserStatusContainer>
        <S.HostBtn>호스트되기</S.HostBtn>
        <S.MyStatusBtn onClick={handleStatusModal}>
          <S.StatusImg src="/images/user.png" />
          <StatusModal
            isOpenStatus={isOpenStatus}
            handleStatusModal={handleStatusModal}
            handleModal={handleModal}
          />
        </S.MyStatusBtn>
      </S.UserStatusContainer>
      <LoginModal isOpenModal={isOpenModal} closeModal={handleModal} />
    </S.NavWrap>
  );
};

export default Nav;
