import { useState, useEffect } from 'react';
import { ItemType } from 'types';
import ReqCondition from 'components/ReqCondition';
import ReqList from 'components/ReqList';
import * as S from './style';

function DashBoard() {
  const [fetchedItems, setFetchedItems] = useState<Array<ItemType>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/requests');
        if (response.status === 200) {
          const data = await response.json();
          setFetchedItems(data);
        } else {
          throw new Error('서버 요청에 실패했습니다.');
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [filteredItems, setFilteredItems] = useState<Array<ItemType>>([]);
  const [methods, setMethods] = useState<string[]>([]);
  const [materials, setMaterials] = useState<string[]>([]);
  const [status, setStatus] = useState<boolean>(false);

  useEffect(() => {
    let temp = fetchedItems;
    methods.forEach(method => {
      temp = temp.filter(item => item.method.includes(method));
    });
    materials.forEach(material => {
      temp = temp.filter(item => item.material.includes(material));
    });
    if (status) {
      temp = temp.filter(item => item.status === '상담중');
    }
    setFilteredItems(temp);
  }, [fetchedItems, methods, materials, status]);

  return (
    <S.Container>
      {/* 대시보드 개요 */}
      <S.Title>들어온 요청</S.Title>
      <S.Description>파트너님에게 딱 맞는 요청서를 찾아보세요.</S.Description>

      {/* 필터링 적용 영역 */}
      <ReqCondition
        methods={methods}
        setMethods={setMethods}
        materials={materials}
        setMaterials={setMaterials}
        setStatus={setStatus}
      />

      {/* 필터링 결과 영역 */}
      <ReqList filteredItems={filteredItems} />
    </S.Container>
  );
}

export default DashBoard;
