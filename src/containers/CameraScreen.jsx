import { useEffect } from 'react';
import { useState } from 'react';
import { Buffer } from 'buffer';
import OpenAI from 'openai';
import Loading from '../components/Loading';
import ScannerImg from '/images/scanner.png';
import { Button } from 'antd';

const apiKey = 'sk-proj-06V0uuvcSQoyu9V95sRBT3BlbkFJDtJDVQE1BMizs22O9C9e';

const openai = new OpenAI({
  apiKey,
  dangerouslyAllowBrowser: true,
});

const classifyImage = async (file) => {
  const encoded = await file
    .arrayBuffer()
    .then((buffer) => Buffer.from(buffer).toString('base64'));
  return encoded;
};

const CameraScreen = () => {
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [result, setResult] = useState('');

  const handleImageUpload = async (event) => {
    const image = event.target.files[0];
    const base64 = await classifyImage(image);
    console.log(`⚡ ~~ handleImageUpload ~~ base64`, base64);
    setSelectedImage(base64);
    //  setSelectedImage(URL.createObjectURL(image));
  };

  useEffect(() => {
    const recognizeText = async () => {
      if (selectedImage) {
        setLoading(true);
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
                    url: `data:image/jpeg;base64,${selectedImage}`,
                  },
                },
              ],
            },
          ],
        });
        setResult(chatCompletion.choices[0].message.content);
        setLoading(false);
      }
    };
    //  recognizeText();
  }, [selectedImage]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Button
            type="text"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 2000);
            }}
            icon={<img src={ScannerImg} width={300} />}
          />
        </div>
      )}
    </div>
  );
};

export default CameraScreen;
