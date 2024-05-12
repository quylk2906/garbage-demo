import { Button } from 'antd';
import inquiryImg from '/images/inquiry.png';
import { Flex } from 'antd';
import { Input } from 'antd';
import { useState } from 'react';
import Loading from '../components/Loading';

const TextScreen = () => {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Loading />
  ) : (
    <Flex vertical justify="center" align="center">
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
export default TextScreen;
