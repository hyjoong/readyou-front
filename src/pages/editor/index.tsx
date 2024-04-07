import { useEffect, useState } from 'react';
import { stepState } from '@/recoil/states';
import DefaultSetting from '@/shared/components/DefaultSetting';
import Editor from '@/shared/components/Editor';
import Preview from '@/shared/components/Preview';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';

const EditorPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const EditorBox = styled.div`
  flex: 1;
  height: 97.2rem;
  max-width: 50%;
  background: ${(props) => props.theme.colors.lightgray};
  border-radius: 1rem;
  margin: 2rem 0 2rem 2rem;
  padding: 2rem;
`;

const EditorPage = () => {
  const [step, setStep] = useRecoilState(stepState);
  const [isSsr, setIsSsr] = useState(false);
  useEffect(() => {
    setIsSsr(true);
  }, []);

  if (!isSsr) return <></>;
  return (
    <EditorPageContainer>
      <EditorBox>
        {step === 0 && <DefaultSetting />}
        {step === 1 && <Editor />}
      </EditorBox>
      <Preview />
    </EditorPageContainer>
  );
};

export default EditorPage;
