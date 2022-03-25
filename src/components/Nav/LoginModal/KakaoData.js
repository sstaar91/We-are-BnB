const AUTH_CODE_URL = 'https://kauth.kakao.com/oauth/authorize?';
const AUTH_TOKEN_URL = 'https://kauth.kakao.com/oauth/token?';
const CLIENT_ID = `client_id=${process.env.REACT_APP_KAKAO_KEY}`;
const REDIRECT_URI = 'redirect_uri=http://localhost:3000/auth/kakao';
const RESPONSE_TYPE = 'response_type=code';
const GRANT_TYPE = 'grant_type=authorization_code';

const kakaoLogin = {
  AUTH_CODE_URL,
  AUTH_TOKEN_URL,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  GRANT_TYPE,
};

export default kakaoLogin;
