import { createStyles, Header, Navbar, Group} from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom'
import Login from '../Login';
const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: theme.fn.variant({ color: theme.primaryColor }).background,
    borderBottom: 0,
    color: theme.white,
    padding: theme.spacing.sm,
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
  },

  inner: {
    textDecoration: 'none',
    color: theme.colors.gray[0],
  },

}));


function HeaderUI() {
  const { classes } = useStyles();
  return (
    <>
      <Header data-testid="todo-header">
        <Navbar className={classes.navbar}>
          <Group position="apart">
            <Group>
              <Link className={classes.inner} default to="/">Home</Link>
              <Link className={classes.inner} to="/settings">Settings</Link>
            </Group>
            <Login />
          </Group>
        </Navbar>
      </Header>
    </>
  );
}




export default HeaderUI
