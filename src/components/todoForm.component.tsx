import { useAppDispatch, useAppSelector } from "@/state";
import { ADD_TODO } from "@/state/modules/todoSlice";
import React, { useState, useEffect } from "react";

const TodoForm = () => {
  const { selected } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();
  const [input, setInput] = useState<string>("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) {
      alert("Input cannot be empty");
      return;
    }
    dispatch(
      ADD_TODO({
        id: `${Math.random()}`,
        name: input,
      })
    );
    setInput("");
  };

  useEffect(() => {
    setInput(selected.name);
  }, [selected]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add Todo..."
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default React.memo(TodoForm);
