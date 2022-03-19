import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

export const DimmedBackground = styled.div`
  ${({ theme }) => theme.style.flex('column', 'center')};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
`;

export const ModalBox = styled.div`
  position: relative;
  width: 40%;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  z-index: 11;
`;
