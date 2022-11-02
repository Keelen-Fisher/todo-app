import { useContext, useState } from 'react';
import { SettingsContext } from '../../Context/Settings/Settings';
import { Button, Card, Text, TextInput, createStyles, Grid, Switch } from '@mantine/core';


const useStyles = createStyles((theme) => ({

  settingCss: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
  },

  h1: {
    backgroundColor: theme.colors.gray[5],
    color: theme.colors.gray[0],
    fontWeight: 'bold',
    margin: 'auto',
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.md,
    padding: theme.spacing.md,
    width: '80%',
  },

}));

const FormSet = () => {
  const { classes } = useStyles();
  const [show, setShow] = useState(false)
  const {
    showCompleted,
    pageItems,
    sort,
    setShowCompleted,
    setPageItems,
    setSort,
    localSave,
  } = useContext(SettingsContext);

  const handleClick = () => {
    setShow(true);
    localSave();
  }

  // similar structure to todo jsx:
  return (
    <>
      <h1 className={classes.h1}>Manage Settings</h1>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Card>
          <Text className={classes.settingCss}>Update Settings</Text>

          <Switch
            onChange={(e) => setShowCompleted(e.currentTarget.checked)}
            checked={showCompleted}
            label="Show Completed ToDos"
            md="sm"
          />

          {/* Number Bar? How to make that. */}

          <TextInput
            mb="sm"
            onChange={(e) => setSort(e.target.value)}
            placeholder={sort}
            label="Sort Keyword"
          />
          <Button onClick={handleClick}>Show New Settings</Button>
        </Card>

        <Card>
          <Card.Section>
            <Text className={classes.settingCss}>Update Settings</Text>
          </Card.Section>
          {/* <Text m="sm">{showCompleted ? 'Show' : 'Hide'} Completed ToDos</Text>
            <Text m="sm">Items Per page:  {pageItems}</Text>
            <Text m="sm">Sort Keyword: {sort}</Text> */}
        </Card>
      </Grid>
    </>
  )
};

export default FormSet;
