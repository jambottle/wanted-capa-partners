import styled from 'styled-components';
import { WIDTH } from 'constants/styleData';

const Wrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${WIDTH.MOBILE}px) {
    margin-top: 20px;
  }

  span {
    margin-left: 16px;
    color: #323d45;
    font-family: 'Noto Sans KR Medium';
    font-size: 14px;
    line-height: 20px;
  }
`;

const Toggle = styled.button`
  position: relative;

  width: 34px;
  height: 14px;
  border: 0;
  border-radius: 160px;
  background-color: #c2c2c2;

  .toggle {
    position: absolute;
    top: -3px;
    left: -2px;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #f5f5f5;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

    transition: 0.5s;
  }

  &.active {
    background-color: #bbdefb;

    .toggle {
      left: 15px;
      background-color: #2196f3;
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export { Wrapper, Toggle };
