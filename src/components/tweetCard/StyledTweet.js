import styled from "styled-components";

export const StyledTweet = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--linearGradient);
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  align-content: center;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 380px;
    height: 8px;
    background: var(--btnBgc);
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const StyledHeroImg = styled.img`
  width: 308px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 88px;
`;

export const StyledP = styled.p`
  font-size: 20px;
  line-height: 1, 2;
  text-transform: uppercase;
  color: var(--btnBgc);
  margin-bottom: 16px;
`;
export const StyledButton = styled.button`
  width: 196px;
  height: 50px;
  padding: 14px, 28px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 16px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border-color: transparent;
  background: ${(props) =>
    props.subscribed? "var(--btnHoverBgc)" : "var(--btnBgc)"};
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: var(--mainBlack);
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    color: white;
    background: darkviolet;
  }
`;

export const StyledAvatarWrapper = styled.div`
  background: var(--btnBgc);
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

export const StyledAvatarImg = styled.img`
    width: 70px;
    height: 70px;
    object-fit: cover;  
`
  export const StyledImgFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
    width: 80px;
    height: 80px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 10000;
    border-style: solid;
    border-color: var(--btnBgc);
    border-width: 9px;
    box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
      inset 0px -2.19582px 4.39163px #ae7be3,
      inset 0px 4.39163px 3.29372px #fbf8ff;
    border-radius: 50%;
    `;
