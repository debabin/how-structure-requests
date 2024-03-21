import React from 'react';

import './App.css';

import * as axios from './api/axios/requests';
import * as fetch from './api/fetch/requests';
import * as ky from './api/ky/requests';

function App() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [loading, setLoading] = React.useState(true);

  // omg wrong
  React.useEffect(() => {
    setLoading(false);
  }, [users.length]);

  return (
    <>
      <div>{loading ? 'loading...' : JSON.stringify(users, null, 2)}</div>
      <button
        onClick={async () => {
          setLoading(true);
          const getUsersResponses = await Promise.all([
            axios.getUsers(),
            fetch.getUsers(),
            ky.getUsers()
          ]);

          // setLoading(false);

          const [axiosGetUsersResponse] = getUsersResponses;

          setUsers(axiosGetUsersResponse.data);
        }}
      >
        get users
      </button>
    </>
  );
}

export default App;
