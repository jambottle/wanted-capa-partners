import * as S from './style';

interface Props {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
}

function MenuSlider({ isVisible, setIsVisible }: Props) {
  return (
    <>
      <S.Overlay isVisible={isVisible} onClick={() => setIsVisible(false)} />
      <S.Wrapper isVisible={isVisible}>
        <S.MenuLogo
          alt="Logo of CAPA Partners"
          src={process.env.PUBLIC_URL + 'assets/images/logo_color.png'}
        />

        <hr />

        <S.MenuList>
          <S.MenuItem>
            <img
              className="itemIcon"
              alt="Menu for Precision Machining"
              src={process.env.PUBLIC_URL + 'assets/icons/picto_black.png'}
            />
            <span className="itemName">파트너정밀가공</span>
          </S.MenuItem>
          <S.MenuItem>
            <span
              className="signOut"
              onClick={() => alert('정상적으로 로그아웃되었습니다.')}
            >
              로그아웃
            </span>
          </S.MenuItem>
        </S.MenuList>
      </S.Wrapper>
    </>
  );
}

export default MenuSlider;
