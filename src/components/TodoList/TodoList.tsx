import { FC } from "react";
import { useSelector } from "react-redux";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

import { RootState } from "../../store";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList: FC = (): JSX.Element => {
  const todos = useSelector((store: RootState) => store.todos);
  return (
    <Container maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Todo List
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <List>
            {todos.map((item) => (
              <TodoItem key={item.id} item={item} />
            ))}
          </List>
        </Grid>
      </Grid>
    </Container>
  );
};
