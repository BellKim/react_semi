import React from 'react';

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
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
      username: 'moon',
      email: 'moon@neonex.com'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;