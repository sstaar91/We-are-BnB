import styled from 'styled-components';

const buttonStyle = (border = 'none') => `
  border: ${border};
  background-color: transparent;
  color: white;
  cursor: pointer;
`;

const alignCenter = () => `
  display: flex;
  align-items: center;
`;

export const NavWrap = styled.nav`
  ${alignCenter};
  justify-content: space-between;
  padding: 20px 100px;
`;

export const LogoContainer = styled.button`
  ${buttonStyle('none')};
  ${alignCenter};
`;

export const Logo = styled.span`
  font-size: 50px;
  font-family: 'Fredoka Bold';
  color: ${({ theme }) => theme.colors.white};
`;

export const TitleName = styled.span`
  margin-left: 20px;
  font-size: 20px;
`;

export const UserStatusContainer = styled.div`
  ${alignCenter};
  position: relative;
  color: white;
`;

export const HostBtn = styled.button`
  ${buttonStyle('none')};
  margin-right: 20px;
  font-size: 15px;
`;

export const MyStatusBtn = styled.img`
  padding: 5px;
  width: 30px;
  border-radius: 20%;
  background-color: white;
  cursor: pointer;
`;

export const StatusModal = styled.div`
  position: absolute;
  top: 20px;
  right: 0;
  padding: 10px;
  width: 200px;
  border-radius: 20px;
  background-color: white;
  font-size: 15px;
  color: black;
`;
