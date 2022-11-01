import { useContext, useState } from "react";
import { SettingsContext } from "../../Context/Settings/Settings";
import { Card, Group, Badge, CloseButton, Pagination, createStyles } from "@mantine/core";
import { When } from "react-if";

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

  const listToRender = showCompleted ? list : list.filter(item => !item.complete);
  const listStart = pageItems * (page - 1);
  const listEnd = listStart + pageItems;
  const pageCount = Math.ceil(listToRender.length / pageItems);
  const displayList = listToRender.slice(listStart, listEnd)

  return (
    <>
      {displayList.map(item => (
        <Card key={item.id} shadow="md" radius="sm" pb="xs" mb="sm">
          <Group position="apart">
            <Group flex-wrap="wrap-reverse">
              <CloseButton
                onClick={() => deleteItem(item.id)} />
              <Badge
                color="green"
                variant="filled"
                className={classes.badge}
                onClick={() => toggleComplete(item.id)}
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
      ))}

      <When condition={listToRender.length > 0}>
        <Pagination page={page} onChange={setPage} total={pageCount} />
      </When>
    </>
  )
}

export default List;

// onClick={() => deleteItem(item.id)}
