import FilterBox from 'components/ReqCondition/FilterBox';
import ToggleBox from 'components/ReqCondition//ToggleBox';
import { METHODS, MATERIALS } from 'constants/filterData';
import * as S from './style';

interface Props {
  methods: string[];
  setMethods: (methods: string[]) => void;
  materials: string[];
  setMaterials: (materials: string[]) => void;
  setStatus: (status: boolean | ((prevStatus: boolean) => boolean)) => void;
}

function ReqCondition({
  methods,
  setMethods,
  materials,
  setMaterials,
  setStatus,
}: Props) {
  const refreshFilters = () => {
    setMethods([]);
    setMaterials([]);
  };

  return (
    <S.Container>
      <S.FilterBoxGroup>
        {/* 필터링 적용: (1) 가공방식 */}
        <FilterBox
          title={METHODS.title}
          list={METHODS.list}
          filter={methods}
          setFilter={setMethods}
        />

        {/* 필터링 적용: (2) 재료 */}
        <FilterBox
          title={MATERIALS.title}
          list={MATERIALS.list}
          filter={materials}
          setFilter={setMaterials}
        />

        {/* 필터링 리셋 버튼 */}
        {methods.length || materials.length ? (
          <S.ResetBox onClick={() => refreshFilters()}>
            <img
              alt="Icon for Refreshing Filters"
              src={process.env.PUBLIC_URL + 'assets/icons/icon_refresh.png'}
            />
            <span>필터링 리셋</span>
          </S.ResetBox>
        ) : null}
      </S.FilterBoxGroup>

      {/* 필터링 적용: (3) 상담 중 여부 */}
      <ToggleBox setStatus={setStatus} />
    </S.Container>
  );
}

export default ReqCondition;
