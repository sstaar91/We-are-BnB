import React, { useRef, useState } from 'react';

import * as S from './Img.style';

const ImgSlide = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideImageBox = useRef();
  let nextIndex = currentIndex + 1;
  let prevIndex = currentIndex - 1;

  console.log(
    '다음인덱스',
    nextIndex,
    '이전인덱스',
    prevIndex,
    '현재인덱스',
    currentIndex
  );

  const handleImgSlide = (e) => {
    const { name } = e.target;
    if (name === 'right') {
      if (currentIndex === 4) {
        slideImageBox.current.style.transform = `translateX(0%)`;
        setCurrentIndex(0);
      } else {
        slideImageBox.current.style.transform = `translateX(${
          nextIndex * -100
        }%)`;
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      if (currentIndex === 0) {
        slideImageBox.current.style.transform = `translateX(-400%)`;
        setCurrentIndex(4);
      } else {
        slideImageBox.current.style.transform = `translateX(${
          prevIndex * -100
        }%)`;
        setCurrentIndex(currentIndex - 1);
      }
    }
  };

  return (
    <S.ImgContainerWrap>
      <S.ArrowBtn
        alt="left_slide_button"
        name="left"
        src="/images/arrow.png"
        onClick={handleImgSlide}
      />
      <S.ImgContainer>
        <S.ImgBox ref={slideImageBox}>
          {list.map((src, idx) => {
            return <S.SlideImg key={src} alt={idx} src={src} />;
          })}
        </S.ImgBox>
      </S.ImgContainer>
      <S.ArrowBtn
        alt="right_slide_button"
        name="right"
        src="/images/arrow.png"
        onClick={handleImgSlide}
      />
    </S.ImgContainerWrap>
  );
};

export default ImgSlide;
