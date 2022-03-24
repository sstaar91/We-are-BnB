import { keyframes } from 'styled-components';

const popUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
`;

const animation = { popUp };

export default animation;
