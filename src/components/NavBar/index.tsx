import * as S from './style';

function NavBar() {
  return (
    <S.Container>
      <S.MenuIcon
        alt="Menu Icon"
        src={process.env.PUBLIC_URL + 'assets/icons/icon_menu.png'}
      />
      <S.MenuLogo
        alt="CAPA Partners Logo"
        src={process.env.PUBLIC_URL + 'assets/images/logo_white.png'}
      />
      <S.UserInfo>
        <img
          className="userIcon"
          alt="User Icon"
          src={process.env.PUBLIC_URL + 'assets/icons/icon_user.png'}
        />
        <span className="userName">A 가공 업체</span>
        <span className="divider" />
        <span className="signOut">로그아웃</span>
      </S.UserInfo>
    </S.Container>
  );
}

export default NavBar;
