/* eslint-disable react/prop-types */
import { useMemo } from 'react';
import { Flex } from 'antd';
import cate1Img from '/images/type-1-entity.png';
import cate1_logo_Img from '/images/type-1-logo.png';

import cate2Img from '/images/type-2-entity.png';
import cate2_logo_Img from '/images/type-2-logo.png';

import cate3Img from '/images/type-3-entity.png';
import cate3_logo_Img from '/images/type-3-logo.png';

const Results = ({ category }) => {
  const render = useMemo(() => {
    switch (category) {
      case 1:
        return (
          <Flex justify="space-between" align="center">
            <img src={cate1_logo_Img} width={120} height={120} />
            <img src={cate1Img} width={200} height={200} />
          </Flex>
        );
      case 2:
        return (
          <Flex justify="space-between" align="center">
            <img src={cate2_logo_Img} width={120} height={120} />
            <img src={cate2Img} width={200} height={200} />
          </Flex>
        );
      default:
        return (
          <Flex justify="space-between" align="center">
            <img src={cate3_logo_Img} width={120} height={120} />
            <img src={cate3Img} width={200} height={200} />
          </Flex>
        );
    }
  }, [category]);

  return <div>{render}</div>;
};

export default Results;
