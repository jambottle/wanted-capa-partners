import styled from 'styled-components';
import { WIDTH } from 'constants/styleData';

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5000;

  width: 100%;
  height: 70px;

  @media (max-width: ${WIDTH.MOBILE}px) {
    height: 44px;
  }

  background-color: #1565c0;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
`;

const MenuIcon = styled.img`
  position: absolute;
  top: 35.71%;
  left: 23px;

  display: none;

  @media (max-width: ${WIDTH.MOBILE}px) {
    display: block;
  }

  width: 18px;
  height: 12px;

  &:hover {
    cursor: pointer;
  }
`;

const MenuLogo = styled.img`
  position: absolute;
  top: 35.71%;
  left: 2.78%;

  width: 153px;
  height: 20px;

  @media (max-width: ${WIDTH.MOBILE}px) {
    left: 60px;

    width: 91.8px;
    height: 12px;
  }
`;

const UserInfo = styled.div`
  position: absolute;
  top: 25px;
  right: 40px;

  @media (max-width: ${WIDTH.MOBILE}px) {
    display: none;
  }

  width: 208.67px;
  height: 20px;

  .userIcon {
    position: absolute;
    top: 5.5%;
    left: 0;

    width: 16.67px;
    height: 15px;
  }

  .userName {
    position: absolute;
    top: 0;
    left: 11.82%;

    color: #ffffff;
    font-family: 'Noto Sans KR Medium';
    font-size: 14px;
    line-height: 20px;
  }

  .divider {
    position: absolute;
    top: 10%;
    left: 59.27%;

    width: 2px;
    height: 16px;
    background-color: #ffffff;
  }

  .signOut {
    position: absolute;
    top: 0;
    left: 75.08%;

    color: #ffffff;
    font-family: 'Noto Sans KR Regular';
    font-size: 14px;
    line-height: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;

export { Container, MenuIcon, MenuLogo, UserInfo };
