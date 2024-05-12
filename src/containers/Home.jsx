import { Button, Flex } from 'antd';
import avatarImg from '/images/avatar.jpg';
import sunImg from '/images/sun.png';
import textImg from '/images/text.png';
import cameraImg from '/images/camera.png';
import searchImg from '/images/search.png';
import textActiveImg from '/images/text-active.png';
import cameraActiveImg from '/images/camera-active.png';
import searchActiveImg from '/images/search-active.png';
import bgImg from '/images/bg.png';
import { useState } from 'react';
import TextScreen from './TextScreen';
import CameraScreen from './CameraScreen';
import SearchScreen from './SearchScreen';

const Home = () => {
  const [selectFunc, setSelectFunc] = useState(-1);
  console.log(`⚡ ~~ Home ~~ selectFunc`, selectFunc);

  const functions = [
    {
      img: textImg,
      imgActive: textActiveImg,
    },
    {
      img: cameraImg,
      imgActive: cameraActiveImg,
    },
    {
      img: searchImg,
      imgActive: searchActiveImg,
    },
  ];

  const handleClick = (idx) => {
    if (idx === selectFunc) {
      setSelectFunc(-1);
    } else {
      setSelectFunc(idx);
    }
  };

  return (
    <Flex vertical justify="space-between" gap={24} style={{ height: '100%' }}>
      <header>
        <img
          width={80}
          height={80}
          src={avatarImg}
          className="avatar"
          style={{ borderRadius: 10 }}
        />
        <Flex vertical className="color_93cfba font-20">
          <strong>Xin chào</strong>
          <strong>Hoàng Việt</strong>
        </Flex>
        <img
          src={sunImg}
          className="avatar"
          width={50}
          height={50}
          style={{ marginLeft: 'auto' }}
        />
      </header>

      <section className="body">
        {selectFunc === -1 && (
          <>
            <img src={bgImg} className="avatar" width={'90%'} height={'auto'} />
            <p className="color_ffff68 font-20">
              Nào, hãy cùng chăm sóc mẹ thiên nhiên của chúng ta
            </p>
          </>
        )}
        {selectFunc === 0 && <TextScreen />}
        {selectFunc === 1 && <CameraScreen />}
        {selectFunc === 2 && <SearchScreen />}
      </section>

      <footer>
        {functions.map((el, idx) => {
          const isActive = idx === selectFunc;
          return (
            <Button
              key={idx}
              type="text"
              className={isActive && 'activated'}
              onClick={() => handleClick(idx)}
              icon={
                <img
                  src={isActive ? el.imgActive : el.img}
                  width={'auto'}
                  height={50}
                />
              }
            ></Button>
          );
        })}
      </footer>
    </Flex>
  );
};

export default Home;
