import React, { useState } from 'react';
import * as S from './Nav.style';

import Modal from '../../components/Modal';

const Nav = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const clickLoginBtn = () => {
    setIsOpenModal((isOpenModal) => !isOpenModal);
  };

  return (
    <S.NavWrap>
      <S.LogoContainer>
        <S.Logo>B</S.Logo>
        <S.TitleName>We are BnB</S.TitleName>
      </S.LogoContainer>
      <S.UserStatusContainer>
        <S.HostBtn>호스트되기</S.HostBtn>
        <S.MyStatus onClick={clickLoginBtn}>M</S.MyStatus>
        {isOpenModal && <Modal />}
      </S.UserStatusContainer>
    </S.NavWrap>
  );
};

export default Nav;
