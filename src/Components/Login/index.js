import { useContext, useState } from 'react';
import { AuthContext } from '../../Context/Auth/Auth';
import { Else, If, Then } from 'react-if';
import { Button, Group, TextInput } from '@mantine/core';
import useForm from '../../hooks/form.js';

const Login = () => {
  const [defaultValues] = useState({});
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const { handleChange, handleSubmit } = useForm(handleLogin, defaultValues);

  // const handleLogout = () => {
  //   setUsername(''),
  //     setPassword(''),
  //   login(''),
  // }

  function handleLogin(user) {
    login(user.username, user.password);
  }

  return (
    <>
      <If condition={isLoggedIn}>
        <Then>
          <Button color="red" onClick={login}>Log Out</Button>
        </Then>
        <Else>
          <form onSubmit={handleSubmit}>
            <Group>
              <TextInput
                onChange={handleChange}
                placeholder="Username"
                name="username"
              />
              <TextInput
                 onChange={handleChange}
                 type="password"
                placeholder="Password"
              />
              <Button color="gray.8" type="submit">Login</Button>
            </Group>
          </form>
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
