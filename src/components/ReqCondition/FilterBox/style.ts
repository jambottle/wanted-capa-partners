import styled from 'styled-components';

interface Props {
  isSelected: boolean;
}

const Wrapper = styled.article`
  position: relative;
`;

const FilterTitle = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding: 4px 12px;

  background-color: ${props => (props.isSelected ? '#1565C0' : '#ffffff')};
  color: ${props => (props.isSelected ? '#ffffff' : '#323d45')};

  .title {
    margin: 0 5px;
    font-family: 'Noto Sans KR Regular';
    font-size: 12px;
    line-height: 14px;
  }

  .dropDown {
    width: 24px;
    height: 24px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const FilterList = styled.ul`
  position: absolute;
  top: 36px;
  left: 0;
  z-index: 10;

  min-width: 130px;
  border: 1px solid #939fa5;
  border-radius: 4px;
  padding: 12px;
  background-color: #ffffff;
`;

const FilterItem = styled.li`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 8px 0;

  .checkbox {
    width: 18px;
    height: 18px;
    border-radius: 2px;

    &:hover {
      cursor: pointer;
    }
  }

  .itemName {
    color: #323d45;
    font-family: 'Noto Sans KR Medium';
    font-size: 14px;
    line-height: 20px;
  }
`;

export { Wrapper, FilterTitle, FilterList, FilterItem };
