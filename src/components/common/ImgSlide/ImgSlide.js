import React, { useEffect, useRef, useState } from 'react';

import * as S from './Img.style';

const ImgSlide = ({ list }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [newImgArr, setNewImgArr] = useState([]);
  let nextIndex = currentIndex + 1;
  let prevIndex = currentIndex - 1;
  const slideImageBox = useRef();

  console.log(
    '다음인덱스',
    nextIndex,
    '이전인덱스',
    prevIndex,
    '현재인덱스',
    currentIndex
  );

  const settingArr = [...list];

  useEffect(() => {
    settingArr.push(list[0]);
    settingArr.unshift(list[list.length - 1]);
    setNewImgArr(settingArr);
  }, []);

  // console.log(newImgArr);

  const handleImgSlide = (e) => {
    const { name } = e.target;
    if (name === 'right') {
      let changeArr = [...newImgArr];
      changeArr.shift();
      changeArr.push(newImgArr[2]);
      setNewImgArr(changeArr);
      if (currentIndex === 5) {
        slideImageBox.current.style.transform = `translateX(-100%)`;
        slideImageBox.current.style.transition = `0s all`;
        setCurrentIndex(2);
      } else {
        slideImageBox.current.style.transform = `translateX(${
          nextIndex * -100
        }%)`;
        slideImageBox.current.style.transition = `0.5s all ease-in-out`;
        setCurrentIndex(currentIndex + 1);
      }
    }

    // if (name === 'right') {
    //   if (currentIndex === 4) {
    //     slideImageBox.current.style.transform = `translateX(0%)`;
    //     setCurrentIndex(0);
    //   } else {
    //     slideImageBox.current.style.transform = `translateX(${
    //       nextIndex * -100
    //     }%)`;
    //     setCurrentIndex(currentIndex + 1);
    //   }
    // } else {
    //   if (currentIndex === 0) {
    //     slideImageBox.current.style.transform = `translateX(-400%)`;
    //     setCurrentIndex(4);
    //   } else {
    //     slideImageBox.current.style.transform = `translateX(${
    //       prevIndex * -100
    //     }%)`;
    //     setCurrentIndex(currentIndex - 1);
    //   }
    // }
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
          {newImgArr.map((src, idx) => {
            return <S.SlideImg key={idx} alt={idx} src={src} />;
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
