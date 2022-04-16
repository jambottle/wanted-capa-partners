import { useState } from 'react';
import * as S from './style';

interface Props {
  title: string;
  list: string[];
  filter: string[];
  setFilter: (filter: string[]) => void;
}

function FilterBox({ title, list, filter, setFilter }: Props) {
  const [isListVisible, setIsListVisible] = useState(false);

  const toggleList = () =>
    isListVisible ? setIsListVisible(false) : setIsListVisible(true);

  const hideList = () => {
    if (isListVisible) setIsListVisible(false);
  };

  const addFilterItem = (item: string) => {
    if (filter.includes(item)) {
      setFilter(filter.filter(el => el !== item));
    } else setFilter([...filter, item]);
  };

  return (
    <S.Wrapper tabIndex={0} onBlur={hideList}>
      <S.FilterTitle isSelected={filter.length > 0} onClick={toggleList}>
        <span className="title">
          {title}
          {filter.length ? `(${filter.length})` : null}
        </span>
        <img
          className="dropDown"
          alt="Icon for Filtering Methods and Materials"
          src={process.env.PUBLIC_URL + 'assets/icons/icon_dropdown.png'}
        />
      </S.FilterTitle>

      {isListVisible && (
        <S.FilterList>
          {list.map(item => (
            <S.FilterItem key={item}>
              <img
                className="checkbox"
                alt="Checkbox for Choosing "
                src={
                  filter.includes(item)
                    ? `${process.env.PUBLIC_URL}/assets/icons/checkbox_on.png`
                    : `${process.env.PUBLIC_URL}/assets/icons/checkbox_off.png`
                }
                onClick={() => addFilterItem(item)}
              />
              <span className="itemName">{item}</span>
            </S.FilterItem>
          ))}
        </S.FilterList>
      )}
    </S.Wrapper>
  );
}

export default FilterBox;
