import { createStyles, Header, Container, Navbar, Text } from '@mantine/core';
import React from 'react';

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
    height: 56,
  },

  h1: {
    backgroundColor: theme.colors.gray[8],
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.xl,
    fontWeight: 'bold',
    margin: 'auto',
    padding: theme.spacing.md,
    width: '80%',

  },
}));


function HeaderUI () {
  const { classes } = useStyles();
  return (
    <>
      <Header>
          <Navbar className={classes.navbar}>
           <Text>
            Home
            </Text> 
          </Navbar>
      </Header>
    </>
  );
}




export default HeaderUI
