import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { Card, Grid, Text, TextInput, createStyles, Button, Slider, Badge, CloseButton, Group } from '@mantine/core';
import { v4 as uuid } from 'uuid';

const useStyles = createStyles((theme) => ({
  formHeading: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 'bold',
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

  header: {
    marginTop: '0px'
  },

  badge: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs,
    margin: '3px'
  },
}));



const ToDo = () => {
  const { classes } = useStyles();
  const [defaultValues] = useState({
    difficulty: 4,
  });
  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }



  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    <>
      <header className={classes.header} data-testid="todo-header">
        <h1 className={classes.h1} data-testid="todo-h1">To Do List: {incomplete} items pending</h1>
      </header>
      <Grid style={{ width: '80%', margin: 'auto' }}>
        <Grid.Col xs={12} sm={4}>
          <Card withBorder p="xs">
            <Text className={classes.formHeading}>Add To Do Item</Text>
            <form onSubmit={handleSubmit}>

              <TextInput
                mb="sm"
                onChange={handleChange}
                name="text"
                placeholder="Item Details"
                label="To Do Item"
              />
              <TextInput
                mb="sm"
                onChange={handleChange}
                name="assignee"
                placeholder="Assignee Name"
                label="Assigned To"
              />
              <Text>Difficulty</Text>
              <Slider
                mb="lg"
                onChange={handleChange}
                defaultValue={defaultValues.difficulty}
                step={1}
                min={1}
                max={5}
                name="difficulty"
              />

              <label>
                {/* <button type="submit">Add Item</button> */}
                <Button type="submit" color="blue">Add Item</Button>
              </label>
            </form>
          </Card>
        </Grid.Col>
      </Grid>

      {list.map(item => (
        <Card  key={item.id} shadow="md" radius="sm" pb="xs" mb="sm">
          <Group position="apart">
            <Group  flex-wrap="wrap-reverse">
              <CloseButton
                onClick={() => deleteItem(item.id)} />
              <Badge
                color="green"
                variant="filled"
                className={classes.badge}
                onClick={() => toggleComplete(item._id)}
              >
                Pending
              </Badge>
              <p>{item.text}</p>
              <p><small>Assigned to: {item.assignee}</small></p>
              <p><small>Difficulty: {item.difficulty}</small></p>
              <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
              <hr />
            </Group>
          </Group>
        </Card>
      ))
      }

    </>
  );
};

export default ToDo;
