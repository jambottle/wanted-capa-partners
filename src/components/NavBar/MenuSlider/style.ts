import styled from 'styled-components';

interface Props {
  isVisible: boolean;
}

const Wrapper = styled.nav<Props>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10000;

  width: 280px;
  height: 100vh;
  background-color: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);

  transition: transform 0.5s ease 0s;
  transform: translate3d(
    ${props => (props.isVisible ? '0vw' : '-100vw')},
    0,
    0
  );
`;

const MenuLogo = styled.img`
  position: absolute;
  top: 16px;
  left: 20px;

  width: 91.52px;
  height: 12px;
`;

const Divider = styled.hr`
  position: absolute;
  top: 44px;
  left: 0;

  width: 280px;
  height: 1px;
  margin: 0;
  border: 0;
  border-top: 1px solid #e5e5e5;
`;

const MenuList = styled.ul`
  position: absolute;
  top: 80px;
  left: 32px;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;

  height: 20px;
  margin-bottom: 20px;

  .itemIcon {
    width: 15px;
    height: 15px;
  }

  .itemName,
  .signOut {
    color: #323d45;
    font-family: 'Noto Sans KR Medium';
    font-size: 14px;
    line-height: 20px;
  }

  .signOut:hover {
    cursor: pointer;
  }
`;

const Overlay = styled.aside<Props>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9500;

  display: ${props => (props.isVisible ? 'block' : 'none')};

  width: 100vw;
  height: 100vh;
  background-color: #323d45;
  opacity: 0.5;
`;

export { Wrapper, MenuLogo, Divider, MenuList, MenuItem, Overlay };
