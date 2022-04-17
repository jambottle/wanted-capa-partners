import { useRef } from 'react';
import * as S from './style';

interface Props {
  setStatus: (status: boolean | ((prevStatus: boolean) => boolean)) => void;
}

function ToggleBox({ setStatus }: Props) {
  const toggleRef = useRef<HTMLButtonElement>(null);
  const handleToggle = () => {
    toggleRef.current?.classList.toggle('active');
    setStatus((prevStatus: boolean) => !prevStatus);
  };

  return (
    <S.Wrapper>
      <S.Toggle type="button" ref={toggleRef} onClick={handleToggle}>
        <i className="toggle" />
      </S.Toggle>
      <span>상담 중인 요청만 보기</span>
    </S.Wrapper>
  );
}

export default ToggleBox;
