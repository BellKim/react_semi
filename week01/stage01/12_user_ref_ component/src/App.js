import React, { useRef } from 'react';

import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'neonex',
      email: 'public.neonex@neonex.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@neonex.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@neonex.com'
    }
  ];

  const nextId = useRef(4);
  const onCreate = () => {
    nextId.current += 1;
  }
  return <UserList users={users} />;
}

export default App;
