import styled from 'styled-components';

export const StyledFriendList = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    gap: ${p => p.theme.space[4]}px;
    padding: ${p => p.theme.space[0]}px;
  }
`;
