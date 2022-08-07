import styled from "styled-components";

export const StyledTransactionHistory = styled.div`
table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 600px;
  border: ${p => p.theme.borders.normal} rgba(163, 159, 159, 0.5);;
  box-shadow: 0px 5px 5px 0px rgba(143,128,128,0.75);
  margin-bottom: ${ p => p.theme.space[4]}px;
  font-size: ${ p => p.theme.fontSizes.sm};
  font-weight: ${ p => p.theme.fontWeights.extra};
  color: ${ p => p.theme.colors.black};
  text-align: center;
}

thead {
  background-color: #569de8;
}

th, td {
  padding: 20px;
}

tbody tr:nth-child(even) {
  background-color: #beccc3;
}

`