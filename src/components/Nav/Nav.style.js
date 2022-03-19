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
  color: white;
`;

export const HostBtn = styled.button`
  ${buttonStyle('none')};
  margin-right: 20px;
  font-size: 15px;
`;

export const MyStatus = styled.button`
  ${buttonStyle('1px solid white')};
  padding: 10px;
  text-align: center;
  border-radius: 20%;
  font-size: 15px;
  font-family: 'Fredoka Medium';
`;
