import { Button } from 'antd';
import inquiryImg from '/images/inquiry.png';
import { Flex } from 'antd';
import { Input } from 'antd';
import { useState } from 'react';
import Loading from '../components/Loading';
import { useRef } from 'react';
import { removeUnicode } from '../constants';
import Results from '../components/Results';

const TextScreen = () => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const value = useRef('');

  const search = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (
        ['ly', '1 lan'].some((el) => removeUnicode(value.current).includes(el))
      ) {
        setCategory(1);
      } else {
        setCategory(3);
      }
    }, 1000);
  };

  if (category !== null) {
    return <Results category={category} />;
  }

  return loading ? (
    <Loading />
  ) : (
    <Flex vertical justify="center" align="center">
      <Input
        onChange={(ev) => {
          value.current = ev.target.value;
        }}
        className="inquiry-input"
        size="large"
        style={{ width: 300 }}
        onPressEnter={search}
      />
      <Button
        type="text"
        onClick={search}
        icon={<img src={inquiryImg} width={220} />}
      />
    </Flex>
  );
};
export default TextScreen;
