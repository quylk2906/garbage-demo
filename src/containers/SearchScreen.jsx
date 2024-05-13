import { useState } from 'react';
import Loading from '../components/Loading';
import inquiryImg from '/images/inquiry.png';
import mapImg from '/images/map.jpg';
import { Button, Flex } from 'antd';
import { Input } from 'antd';

const SearchScreen = () => {
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const search = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowMap(true);
    }, 1000);
  };

  if (showMap) {
    return (
      <div
        style={{
          marginTop: -112,
          marginBottom: -110,
        }}
      >
        <img src={mapImg} style={{ width: 414 }} />
      </div>
    );
  }

  return loading ? (
    <Loading />
  ) : (
    <Flex vertical align="center" style={{ flexGrow: 1 }} justify="center">
      <div
        style={{
          lineHeight: 1.3,
          marginTop: -100,
          transform: 'translateY(-50px)',
        }}
      >
        <strong className="font-26 color_0005ae">
          ĐỊA ĐIỂM <br />
          THU GOM PIN CŨ
        </strong>
      </div>
      <div>
        <div>
          <p className="color_466291" style={{ marginBottom: 4 }}>
            <strong>Nhập vị trí hiện tai của bạn:</strong>
          </p>
          <Input
            className="inquiry-input"
            size="large"
            style={{ width: 300 }}
            onPressEnter={search}
          />
        </div>
        <Button
          style={{ marginTop: '1rem' }}
          type="text"
          onClick={search}
          icon={<img src={inquiryImg} width={220} />}
        />
      </div>
    </Flex>
  );
};

export default SearchScreen;
