import styled from "styled-components";
import { RingLoader } from "react-spinners";


export const StyledDiv = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--btnBgc);
  text-align: center;
  padding: 50px  50px;
`
export const StyledButton = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px, 28px;
  text-align: center;
  margin-bottom: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;
  background: var(--linearGradient);
  font-size: 18px;
  line-height: 1.22;
  color: var(--btnBgc);
  cursor: pointer;
  transition: 0.3s ease-in-out;

&:hover {
  color: white;
  background: darkviolet;
}
`
export const StyledWrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between; 
`

export const StyledRingLoader = styled(RingLoader)`
margin-top: 50px;
margin-left: auto;
margin-right: auto;
`