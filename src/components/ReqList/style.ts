import styled from 'styled-components';

const Container = styled.section`
  display: grid;
  gap: 16px;

  width: 100%;
  margin-top: 32px;
  margin-bottom: 100px;

  @media (min-width: 1700px) {
    min-width: 1512px;
    grid-template-columns: repeat(auto-fit, 366px);
  }

  @media (min-width: 1270px) and (max-width: 1699px) {
    width: 1130px;
    grid-template-columns: repeat(3, 366px);
  }

  @media (min-width: 840px) and (max-width: 1269px) {
    width: 748px;
    grid-template-columns: repeat(2, 366px);
  }

  @media (max-width: 839px) {
    width: 366px;
    grid-template-columns: repeat(1, 366px);
  }
`;

const NoResult = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100px;
  margin-top: 32px;
  border: 1px solid #c2c2c2;
  border-radius: 4px;

  span {
    color: #939fa5;
    font-family: 'Noto Sans KR Regular';
    font-size: 14px;
    line-height: 20px;
  }
`;

export { Container, NoResult };
