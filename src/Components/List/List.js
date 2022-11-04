import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings/Settings";
import { Card, Group, Badge, CloseButton, Pagination, createStyles, Text } from "@mantine/core";
import { Else, If, Then, When } from "react-if";
import Auth from './';
const useStyles = createStyles((theme) => ({
  badge: {
    textTransform: 'capitalize',
    fontSize: theme.fontSizes.xs,
    margin: '3px'
  },
}));

const List = ({ list, toggleComplete, deleteItem }) => {
  const { classes } = useStyles();
  const { pageItems, showCompleted } = useContext(SettingsContext)
  const [page, setPage] = useState(1)

  /* Filtering the list based on the showCompleted value. If showCompleted is true, it will return the
  list. If showCompleted is false, it will return the list filtered by items that are not complete. */
  const listToRender = showCompleted ? list : list.filter(item => !item.complete);
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);
  const displayList = listToRender.slice(listStart, listEnd)

  return (
    <>
      {displayList.map(item => (
        <Card key={item.id} shadow="md" radius="sm" pb="xs" mb="sm">
          <Card.Section withBorder>
            <Group position="apart">
              <Group position="left">
                <If >
                  <Then>

                  </Then>
                  <Else>

                  </Else>
                </If>
                <Badge
                  data-testid={`${item.id}-complete`}
                  color={item.complete ? "red" : "green"}
                  variant="filled"
                  className={classes.badge}
                  onClick={() => toggleComplete(item.id)}
                >
                  {item.complete ? 'Complete' : 'Pending'}
                </Badge>
                
                <Text data-testid={`${item.id}-assignee`}>{item.assignee}</Text>
              </Group>

              <Group>
                <Auth capability="delete">
                  <CloseButton
                    title="delete todo item"
                    onClick={() => deleteItem(item.id)}
                  />
                  </Auth>
              </Group>
            </Group>
          </Card.Section>
          <Text data-testid={`${item.id}-text`} align="left" mt="sm">{item.text}</Text>
          <Text data-testid={`${item.id}-difficulty`} align="right"><small>Difficulty: {item.difficulty}</small></Text>
        </Card>
      ))}
      <When condition={listToRender.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}

export default List;

// onClick={() => deleteItem(item.id)}
