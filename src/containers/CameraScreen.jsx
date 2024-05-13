import { useState } from 'react';
import OpenAI from 'openai';
import Loading from '../components/Loading';
import ScannerImg from '/images/scanner.png';
import { Button } from 'antd';
import { useRef } from 'react';
import { useCallback } from 'react';
import Webcam from 'react-webcam';
import { categories } from '../constants';
import Results from '../components/Results';
import { message } from 'antd';

const apiKey = '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';

const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
});

const videoConstraints = {
  // width: '100%',
  height: '100%',
  facingMode: 'user',
};

const CameraScreen = () => {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const webcamRef = useRef(null);

  const showRecord = (result) => {
    const foundCategory = categories.find((el) =>
      el.classifications.some((el2) => result.includes(el2))
    );

    setCategory(foundCategory?.key);
  };

  const recognizeText = async (image) => {
    setLoading(true);
    try {
      const chatCompletion = await openai.chat.completions.create({
        model: 'gpt-4-vision-preview',
        max_tokens: 100,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Extract text from this image',
              },
              {
                type: 'image_url',
                image_url: {
                  url: image,
                },
              },
            ],
          },
        ],
      });
      showRecord(chatCompletion.choices[0].message.content);
    } catch (error) {
      message.error('Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    recognizeText(imageSrc);
  }, [webcamRef]);

  if (category !== null) {
    return <Results category={category} />;
  }

  return loading ? (
    <Loading />
  ) : (
    <div style={{ position: 'relative' }}>
      <Webcam
        audio={false}
        height={'100%'}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={'auto'}
        videoConstraints={videoConstraints}
      />
      <Button
        type="text"
        onClick={capture}
        icon={<img src={ScannerImg} width={300} />}
        className="capture-btn"
      />
    </div>
  );
};

export default CameraScreen;
