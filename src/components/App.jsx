
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

import users from '../user.json';
import data from '../data.json';

export default function App() {
  return (
    <>
      <Section items={users}/>

      <Statistics title="Upload stats" stats={data} />

    </>
  );
}

