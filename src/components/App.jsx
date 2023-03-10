
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import users from '../user.json';
import data from '../data.json';
import friends from '../friends.json';
import transactions from '../transactions.json';

export default function App() {
  return (
    <>
      <Section items={users}/>;

      <Statistics title="Upload stats" stats={data} />;

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />;

    </>
  );
}

