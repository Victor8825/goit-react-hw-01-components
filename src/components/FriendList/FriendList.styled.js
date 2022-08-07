import styled from "styled-components";



export const StyledFriendList = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: ${ p => p.theme.space[4]}px;
    padding: ${ p => p.theme.space[0]}px;

  }
`

export const StyledFriendListItem = styled.div`
  li {
    display: flex;
    justify-content: flex-start;
    gap: ${ p => p.theme.space[4]}px;
    align-items: center;
    width: 300px;
    height: auto;
    background-color: ${ p => p.theme.colors.white} ;
    padding: ${ p => p.theme.space[4]}px;
    border: ${p => p.theme.borders.normal} rgba(163, 159, 159, 0.5);
    border-radius: ${p => p.theme.radii.sm};
    box-shadow: 0px 5px 5px 0px rgba(143,128,128,0.75);
  }

  p {
    font-size: ${ p => p.theme.fontSizes.sm};
    font-weight: ${ p => p.theme.fontWeights.extra};
    color: ${ p => p.theme.colors.black};
  }

  span {
    width: 20px;
    height: 20px;
    border-radius: ${p => p.theme.radii.round};
    background-color: ${({isOnline}) => {
      return isOnline === true ? "green" : "red";
    }}
  }
`