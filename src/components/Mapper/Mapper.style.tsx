import styled from "styled-components";
import {colors as COLORS} from "../../assets/colors";

export const Container = styled.ul<{ hasBorder: boolean | undefined }>`
  user-select: none;
  cursor: pointer;
  width: 100%;
  padding: 1.5rem 2rem 2.5rem 1rem;
  color: ${COLORS.PRIMARY_TEXT};
  border-bottom: ${(props) => props.hasBorder && `1px solid ${COLORS.BORDER}`};

  p {
    margin: -1.5rem 0 1.5rem;
    text-transform: uppercase;
    color: ${COLORS.SECONDARY_TEXT};
  }

`

export const List = styled.li`
  line-height: 3.5;
  list-style: none;
  font-size: 1.3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;


  img {
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    margin: 0 1rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;
    white-space: nowrap;

    &:hover {
      transition: all .2s ease;
      color: ${COLORS.SECONDARY_TEXT};
    }

  }

  svg {
    font-size: 1.8rem;
  }
`

