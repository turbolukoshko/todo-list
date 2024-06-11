import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import { Input } from "@mui/material";

import { changeStatus, editTitle } from "../../store/reducers/todo-reducer";
import styles from "./TodoItem.module.css";

type ItemType = {
  title: string;
  active: boolean;
  id: number;
};

export const TodoItem: FC<{ item: ItemType }> = ({ item }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(item.title);
  const dispatch = useDispatch();

  const handleCheckbox = (id: number, isActive: boolean) => {
    dispatch(changeStatus({ id, isActive }));
  };

  const handleInput = (value: string) => {
    setTitle(value);
  };

  const handleSave = () => {
    setEditMode(false);
    dispatch(editTitle({ id: item.id, title }));
  };

  return (
    <ListItem
      key={item.id}
      className={`${item.active ? styles.done : styles["in-progress"]} ${
        styles.item
      }`}
    >
      {!isEditMode ? (
        <>
          <Checkbox
            onChange={() => handleCheckbox(item.id, item.active)}
            checked={item.active}
          />
          <p>
            <span>{item.title} | </span>
            <span>{item.active ? "done" : "pending"}</span>
          </p>
          <IconButton onClick={() => setEditMode(true)}>
            <EditIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Input
            type="text"
            value={title}
            onChange={(e) => handleInput(e.target.value)}
          />
          <IconButton onClick={handleSave}>
            <SaveIcon />
          </IconButton>
        </>
      )}
    </ListItem>
  );
};
