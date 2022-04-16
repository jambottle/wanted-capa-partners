import styled from 'styled-components';
import { WIDTH } from 'constants/styleData';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 78%;
  margin: 110px auto 0;

  @media (max-width: ${WIDTH.MOBILE}px) {
    width: 88.89%;
    margin: 68px auto 0;
  }
`;

const Title = styled.h1`
  color: #323d45;
  font-family: 'Noto Sans KR Bold';
  font-size: 20px;
  line-height: 32px;
`;

const Description = styled.p`
  color: #323d45;
  font-family: 'Noto Sans KR Regular';
  font-size: 16px;
  line-height: 24px;
`;

export { Container, Title, Description };
