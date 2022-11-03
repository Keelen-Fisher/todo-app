import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth/Auth';
import { Else, If, Then } from 'react-if';
import { Button, Group, TextInput } from '@mantine/core';


const Login = () => {
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // const handleLogout = () => {
  //   setUsername(''),
  //     setPassword(''),
  //   login(''),
  // }

  return (
    <>
      <If condition={isLoggedIn}>
        <Then>
          <Button color="red" onClick={login}>Log Out</Button>
        </Then>
        <Else>
          <Group>
            <TextInput
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <TextInput
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <Button color="gray.8" onClick={() => login(username, password)}>Login</Button>
          </Group>
        </Else>
      </If>


      {/* <label>Username:
        <input onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label>Password:
        <input onChange={(e) => setPassword(e.target.value)} />
      </label> */}


    </>
  )
}

export default Login
