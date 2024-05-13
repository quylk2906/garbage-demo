import { useState } from 'react';
import Loading from '../components/Loading';
import inquiryImg from '/images/inquiry.png';
import { Button, Flex } from 'antd';
import { Input } from 'antd';

const SearchScreen = () => {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Loading />
  ) : (
    <Flex vertical justify="center" align="center">
      <Flex vertical gap={16}>
        <strong className="font-26 color_0005ae">
          Đang xử lý dữ liệu <br /> vui lòng chờ
        </strong>
      </Flex>
      <Input className="inquiry-input" size="large" style={{ width: 300 }} />
      <Button
        type="text"
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 2000);
        }}
        icon={<img src={inquiryImg} width={220} />}
      />
    </Flex>
  );
};

export default SearchScreen;
