import { createStyles, Header, Container, Navbar, Text, Group, NavLink } from '@mantine/core';
import React from 'react';
import { BrowserRouter } from 'react-router-dom/dist';
import { Link } from 'react-router-dom'
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
      <Header>
          <Navbar className={classes.navbar}>
            <Group>  
                <Link className={classes.inner} default to="/">Home</Link>
                <Link className={classes.inner} to="/settings">Settings</Link>         
            </Group>
          </Navbar>
      </Header>
    </>
  );
}




export default HeaderUI
