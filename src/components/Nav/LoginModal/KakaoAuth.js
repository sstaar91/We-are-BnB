import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import kakaoLogin from './KakaoData';
import { LoadingImg } from 'components/common';

const KakaoAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { search } = location;
  const authCode = search.substring(search.indexOf('=') + 1);
  const { AUTH_TOKEN_URL, GRANT_TYPE, CLIENT_ID, REDIRECT_URI } = kakaoLogin;

  useEffect(() => {
    if (!authCode) return;
    sendCode();
  }, []);

  const sendCode = () => {
    fetch(
      `${AUTH_TOKEN_URL}${GRANT_TYPE}&${CLIENT_ID}&${REDIRECT_URI}&code=${authCode}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        sessionStorage.setItem('TOKEN', res.access_token);
        navigate('/');
      });
  };

  return <LoadingImg />;
};

export default KakaoAuth;
