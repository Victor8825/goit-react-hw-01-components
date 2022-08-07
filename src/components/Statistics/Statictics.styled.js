import styled from "styled-components";

export const StyledStatisticEl = styled.div`
  background-color: ${() => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`

export const StyledStatistic = styled.div`
  background-color: ${ p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal} rgba(163, 159, 159, 0.5);
  border-radius: ${p => p.theme.radii.sm};
  width: auto;

  h2 {
    text-align: center;
    margin: 0;
    padding-top: ${ p => p.theme.space[5]}px;
    padding-bottom: ${ p => p.theme.space[5]}px;
    font-size: ${ p => p.theme.fontSizes.sm};
    font-weight: ${ p => p.theme.fontWeights.extra};
    color: ${ p => p.theme.colors.black};
  }

  ul {
    margin: ${ p => p.theme.space[0]}px;
    padding: ${ p => p.theme.space[0]}px;
    display: flex;
    justify-content: space-around; 
  }

  li {
    text-align: center;
    padding: ${ p => p.theme.space[3]}px;
    width: 60px;
    height: 60px;
    color: ${ p => p.theme.colors.black};
        
    span:first-of-type {
      font-size: ${ p => p.theme.fontSizes.s};
    }
  }
` 