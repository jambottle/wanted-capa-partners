import { ItemType } from 'types';
import * as S from './style';

interface Props {
  item: ItemType;
}

function ReqItem({ item }: Props) {
  const { title, client, due, count, amount, method, material, status } = item;

  return (
    <S.Wrapper>
      {/* 요청서 개요 */}
      <h3>{title}</h3>
      <h5>{client}</h5>
      <span className="due">{due}까지 납기</span>

      <hr />

      <dl>
        <dt>도면개수</dt>
        <dd>{count}개</dd>
      </dl>
      <dl>
        <dt>총 수량</dt>
        <dd>{amount}개</dd>
      </dl>
      <dl>
        <dt>가공방식</dt>
        <dd>{method.join(', ')}</dd>
      </dl>
      <dl>
        <dt>재료</dt>
        <dd>{material.join(', ')}</dd>
      </dl>

      {/* 요청서 확인 및 상담 */}
      <div>
        <button type="button" className="show">
          요청 내역 보기
        </button>
        <button type="button" className="chat">
          채팅하기
        </button>

        {status === '상담중' && <span className="status">{status}</span>}
      </div>
    </S.Wrapper>
  );
}

export default ReqItem;
