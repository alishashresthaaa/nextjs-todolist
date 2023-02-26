import { useAppDispatch, useAppSelector } from "@/state";
import { DELETE_TODO, TodoTypes, VIEW_TODO } from "@/state/modules/todoSlice";
import React from "react";
import styles from "@/styles/card.module.css";

const Card = () => {
  const { todos } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const handleTodoEdit = (id: string) => {
    dispatch(VIEW_TODO({ id }));
  };

  const handleTodoDelete = (id: string) => {
    dispatch(DELETE_TODO({ id }));
    alert("item deleted")
  };
  if (todos.length < 1) {
    return <h1>No list found</h1>;
  }
  return (
    <div>
      <h1>Todos</h1>
      {todos.map((item: TodoTypes) => {
        return (
          <div className={styles.card} key={item.id}>
            <h1 className={styles.title}>{item.name}</h1>
            <button className={styles.edit} type="button" onClick={() => handleTodoEdit(item.id)}>
              Edit
            </button>
            <button className={styles.delete} type="button" onClick={() => handleTodoDelete(item.id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default React.memo(Card);
