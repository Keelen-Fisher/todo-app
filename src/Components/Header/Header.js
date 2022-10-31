import { createStyles, Header, Center, Container } from '@mantine/core';
import React from 'react';

const useStyles = createStyles((theme) => ({
  header: {
    backgroundColor: theme.fn.variant({ variant: 'filled', color: theme.primaryColor }).background,
    borderBottom: 0,
    color: theme.white,
    fontSize: theme.fontSizes.lg,
    fontWeight: 500,
    
  },

  inner: {
    height: 56,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));


function HeaderUI () {
  const { classes } = useStyles();
  return (
    <>
      <Header height={56} className={classes.header} mb={120}>
        <Container>
          <div className={classes.inner}>
            Home
          </div>
        </Container>
      </Header>
    </>
  );
}





export default HeaderUI
