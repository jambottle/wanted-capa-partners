import ReqCondition from 'components/ReqCondition';
import ReqList from 'components/ReqList';
import * as S from './style';

function DashBoard() {
  return (
    <S.Container>
      {/* 대시보드 개요 */}
      <S.Title>들어온 요청</S.Title>
      <S.Description>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.Description>

      {/* 필터링 적용 영역 */}
      <ReqCondition />

      {/* 필터링 결과 영역 */}
      <ReqList />
    </S.Container>
  );
}

export default DashBoard;
