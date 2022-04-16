import styled from 'styled-components';
import { WIDTH } from 'constants/styleData';

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${WIDTH.MOBILE}px) {
    flex-direction: column;
    align-items: start;
  }

  width: 100%;
  margin-top: 32px;
`;

const FilterBoxGroup = styled.article`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const ResetBox = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;

  margin-left: 16px;
  border: 0;
  padding: 0;
  background: none;

  img {
    width: 16px;
    height: 16px;
  }

  span {
    color: #2196f3;
    font-family: 'Noto Sans KR Regular';
    font-size: 12px;
    line-height: 20px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export { Container, FilterBoxGroup, ResetBox };
