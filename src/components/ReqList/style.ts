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

export { Container };
