import styled from "styled-components";
import {colors as COLORS} from "../../assets/colors";
import {BiMicrophone} from "react-icons/bi";
import {HiOutlineBell, HiOutlineViewGrid, HiViewGridAdd} from "react-icons/hi"


export const Container = styled.div`
  width: 100%;
  min-height: 10rem;
  border-bottom: 1px solid ${COLORS.BORDER};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
`


export const SearchContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: ${COLORS.SECONDARY_TEXT};
`

export const Input = styled.input`
  all: unset;
  margin-left: 2rem;
  height: 3rem;
  width: 50%;

  &::placeholder {
    font-size: 1.4rem;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${COLORS.SECONDARY_TEXT};
  font-size: 2.2rem;
`

export const MicrophoneIcon = styled(BiMicrophone)`
  font-size: 2.5rem;
`
export const GridIcon = styled(HiOutlineViewGrid)`
  margin: 0 1.2rem;
`
export const PlusIcon = styled(HiViewGridAdd)``

export const NotificationIcon = styled(HiOutlineBell)``