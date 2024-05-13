import { Flex } from 'antd';
import loadingImg from '/images/loading.png';

const Loading = () => {
  return (
    <Flex vertical gap={16}>
      <img src={loadingImg} width={300} height={300} className="loading" />
      <strong className="font-26 color_0005ae">
        Đang xử lý dữ liệu <br /> vui lòng chờ
      </strong>
    </Flex>
  );
};

export default Loading;
