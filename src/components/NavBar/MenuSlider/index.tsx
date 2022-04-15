import * as S from './style';

interface Props {
  isVisible: boolean;
  onClick: (isVisible: boolean) => void;
}

function MenuSlider({ isVisible, onClick }: Props) {
  return (
    <>
      <S.Wrapper isVisible={isVisible}>
        <S.MenuLogo
          alt="Logo of CAPA Partners"
          src={process.env.PUBLIC_URL + 'assets/images/logo_color.png'}
        />
        <S.Divider />

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
            <span className="itemName">로그아웃</span>
          </S.MenuItem>
        </S.MenuList>
      </S.Wrapper>

      <S.Overlay isVisible={isVisible} onClick={() => onClick(false)} />
    </>
  );
}

export default MenuSlider;
