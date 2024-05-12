import { Button } from 'antd';
import loadingImg from '/images/loading.png';
import inquiryImg from '/images/inquiry.png';
import { Flex } from 'antd';
import { Input } from 'antd';
import { useState } from 'react';
import { Spin } from 'antd';

const TextScreen = () => {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Spin spin indicator={<img src={loadingImg} />} />
  ) : (
    <Flex vertical>
      <Input className="inquiry-input" />
      <Button
        type="text"
        onClick={() => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }}
      >
        <img src={inquiryImg} />
      </Button>{' '}
    </Flex>
  );
};
export default TextScreen;
