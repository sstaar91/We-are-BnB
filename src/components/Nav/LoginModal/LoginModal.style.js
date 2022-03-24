import styled from 'styled-components';
import { common } from 'styles';

const { flex, buttonStyle } = common;

export const LoginWrap = styled.article`
  ${flex};
  position: relative;
  padding-bottom: 20px;
  width: 500px;
  border-bottom: 1px solid #eeeeee;
  font-size: 15px;
`;

export const ModalCloseBtn = styled.button`
  ${buttonStyle('none', 'black')}
  position: absolute;
  left: 0;
`;

export const LoginTitle = styled.h2`
  font-size: 15px;
  font-weight: 600;
`;

export const KakaoLoginBtn = styled.button``;
