import { GlobalStyle } from '../GlobalStyle';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Box } from '../Box.styled';

import user from '../Profile/user.json';
import data from '../Statistics/data.json';
import friends from '../FriendList/friends.json';
import transactions from '../TransactionHistory/transactions.json';

export const App = () => {
  return (
    <>
      <Box justifyContent="space-around" gridGap="50px">
        <GlobalStyle />
        <Profile user={user} />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends}></FriendList>
        <TransactionHistory transactions={transactions} />
      </Box>
    </>
  );
};
