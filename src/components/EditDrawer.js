import React, { useEffect, useState } from "react";
import WestIcon from "@mui/icons-material/West";
import { Box, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { changeTodo } from "../todoSlice";
import { useSelector } from "react-redux";
const EditDrawer = ({ id, listId, setOpen }) => {
  const dispatch = useDispatch();
  const [editTodo, setEditTodo] = useState({
    title: "",
    desc: "",
  });

  const todos = useSelector((state) => state.todoSlice);
  useEffect(() => {
    const toEdit = todos.todoList.find((ele) => {
      if (ele.id === listId) {
        const newList = ele.todos.filter((item) => item.id === id);
        console.log(newList);
        setEditTodo(newList[0]);
        console.log(editTodo);
      }
    });
    // console.log(editTodo);
    // setEditTodo({ title: toEdit[0].title, desc: toEdit[0].desc });
  }, []);

  return (
    <div
      style={{
        width: "20vw",
        height: "100%",
        paddingLeft: "2vw",
        color: "white",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <WestIcon />
        <h4 style={{ marginLeft: "1vw" }}>Edit Todo</h4>
      </div>
      <Box
        sx={{
          backgroundColor: "#242731",
          width: "15vw",
          padding: "1vh",
          borderRadius: "10px",
          display: "flex",
          height: "5vh",
          marginBottom: "2vh",
        }}
      >
        <input
          placeholder="Add Todo - List"
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "lightgrey",
            fontSize: "18px",
            fontWeight: "bold",
          }}
          value={editTodo.title}
          onChange={(e) => {
            setEditTodo({ ...editTodo, title: e.target.value });
          }}
        />
      </Box>
      <Box
        sx={{
          backgroundColor: "#242731",
          width: "15vw",
          padding: "1vh",
          borderRadius: "10px",
          // display: "flex",
          height: "15vh",
        }}
      >
        <input
          placeholder="Add Todo - List"
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "lightgrey",
            fontSize: "10px",
          }}
          value={editTodo.desc}
          onChange={(e) => {
            setEditTodo({ ...editTodo, desc: e.target.value });
          }}
        />
      </Box>
      <Button
        sx={{
          backgroundColor: "#3772FF",
          color: "white",
          marginTop: "2vh",
          width: "16vw",
        }}
        onClick={() => {
          const toEdit = todos.todoList.map((ele) => {
            if (ele.id === listId) {
              const newSublist = ele.todos.map((todo) => {
                if (todo.id === id) {
                  return { id: id, title: editTodo.title, desc: editTodo.desc };
                }
                return todo;
              });
              return newSublist;
            }
            return ele;
          });
          dispatch(changeTodo({ id: listId, updatedList: toEdit[listId] }));
          setOpen(false);
        }}
      >
        Save Changes
      </Button>
    </div>
  );
};

export default EditDrawer;
