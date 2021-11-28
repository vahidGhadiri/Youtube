import styled from "styled-components";
import {colors as COLORS} from "../../assets/colors";

export const Container = styled.ul<{ hasBorder: boolean | undefined }>`
  user-select: none;
  cursor: pointer;
  width: 100%;
  padding: 1rem 2rem 1rem 1rem;
  color: ${COLORS.PRIMARY_TEXT};
  border-bottom: ${(props) => props.hasBorder && `1px solid ${COLORS.BORDER}`};
`

export const List = styled.li`
  line-height: 3;
  list-style: none;
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-start;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
  }

  svg {
    font-size: 1.8rem;
  }
`

