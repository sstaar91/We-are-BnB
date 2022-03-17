import React from 'react';
import { Footer } from 'components';
import * as S from './Test.style';
import { AA, BB } from 'utils';

const Test = () => {
  return (
    <>
      <S.Test>Test {AA + BB}</S.Test>
      <Footer />
    </>
  );
};

export default Test;
