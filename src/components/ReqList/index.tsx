import { ItemType } from 'types';
import ReqItem from 'components/ReqList/ReqItem';
import * as S from './style';

interface Props {
  filteredItems: Array<ItemType>;
}

function ReqList({ filteredItems }: Props) {
  return (
    <>
      <S.Container>
        {filteredItems.map(item => (
          <ReqItem key={item.id} item={item} />
        ))}
      </S.Container>

      {filteredItems.length === 0 && (
        <S.NoResult>
          <span>조건에 맞는 견적 요청이 없습니다.</span>
        </S.NoResult>
      )}
    </>
  );
}

export default ReqList;
