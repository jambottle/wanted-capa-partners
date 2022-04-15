import { useState } from 'react';
import MenuSlider from 'components/NavBar/MenuSlider';
import * as S from './style';

function NavBar() {
  const [isSliderVisible, setIsSliderVisible] = useState(false);

  return (
    <S.Container>
      <S.MenuIcon
        alt="Icon for Opening Navigation Menu"
        src={process.env.PUBLIC_URL + 'assets/icons/icon_menu.png'}
        onClick={() => setIsSliderVisible(true)}
      />
      <MenuSlider isVisible={isSliderVisible} onClick={setIsSliderVisible} />

      <S.MenuLogo
        alt="Logo of CAPA Partners"
        src={process.env.PUBLIC_URL + 'assets/images/logo_white.png'}
      />
      <S.UserInfo>
        <img
          className="userIcon"
          alt="User Icon"
          src={process.env.PUBLIC_URL + 'assets/icons/picto_white.png'}
        />
        <span className="userName">A 가공 업체</span>
        <span className="divider" />
        <span
          className="signOut"
          onClick={() => alert('정상적으로 로그아웃되었습니다.')}
        >
          로그아웃
        </span>
      </S.UserInfo>
    </S.Container>
  );
}

export default NavBar;
