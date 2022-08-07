import styled from "styled-components";

export const StyledProfile = styled.div`
  margin-top: 20px;
  width: 300px;
  min-height: auto;
  border: ${p => p.theme.borders.normal} rgba(163, 159, 159, 0.5);
  border-radius: ${p => p.theme.radii.lg};
  background-color: ${ p => p.theme.colors.white} ;

  div {
    padding: ${ p => p.theme.space[5]}px;
    display: flex;
    flex-direction: column;
    align-items: center;

      img {
        width: 100px;
        height: auto;
        border: ${p => p.theme.borders.normal} rgba(163, 159, 159, 0.5);
        border-radius: ${p => p.theme.radii.round};
      }

      p:first-of-type {
        font-size: ${ p => p.theme.fontSizes.sm};
        font-weight: ${ p => p.theme.fontWeights.extra};
        color: ${ p => p.theme.colors.black};
      }
  }

  ul {
  padding: ${ p => p.theme.space[5]}px;
  margin: ${ p => p.theme.space[0]};
  border-top: ${p => p.theme.borders.normal} rgba(163, 159, 159, 0.5);
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #DEE0E1;
  border-bottom-left-radius: ${p => p.theme.radii.lg};
  border-bottom-right-radius: ${p => p.theme.radii.lg};
  }

  li {
      text-align: center;

      span:last-child {
        font-size: ${ p => p.theme.fontSizes.m};
        font-weight: ${ p => p.theme.fontWeights.extra};
        color: ${ p => p.theme.colors.black};
      }
  }
  
  
  

`

