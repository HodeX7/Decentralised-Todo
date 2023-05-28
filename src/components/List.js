import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AddIcon from "@mui/icons-material/Add";
import Todo from "./Todo";

const List = ({ title }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoDescription, setTodoDescription] = useState("");
  const [todoList, setTodoList] = useState([]);
  return (
    <div style={{ marginRight: "1vw" }}>
      <Box
        sx={{
          backgroundColor: "#242731",
          width: "15vw",
          padding: "1vh",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h4>List: {title}</h4>
        <Box
          sx={{
            // backgroundColor: "#242731",
            width: "15vw",
            borderRadius: "10px",
            border: "2px dotted rgb(78, 78, 78)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <WorkspacePremiumIcon />
            <input
              placeholder="Add Todo"
              style={{
                border: "none",
                outline: "none",
                boxShadow: "none",
                backgroundColor: "transparent",
                color: "white",
                width: "100%",
                marginLeft: "0.5vw",
              }}
              value={todoTitle}
              onChange={(e) => {
                setTodoTitle(e.target.value);
              }}
            />
            <IconButton
              onClick={() => {
                if (todoTitle === "") {
                  window.alert("Title cannot be empty");
                } else {
                  const newList = [
                    ...todoList,
                    { title: todoTitle, description: todoDescription },
                  ];
                  setTodoList(newList);
                  setTodoTitle("");
                  setTodoDescription("");
                }
              }}
              sx={{ color: "white" }}
            >
              <AddIcon className="addButton" />
            </IconButton>
          </div>
          <input
            placeholder="Add Todo Description"
            style={{
              border: "none",
              outline: "none",
              boxShadow: "none",
              backgroundColor: "transparent",
              color: "white",
            }}
            value={todoDescription}
            onChange={(e) => {
              setTodoDescription(e.target.value);
            }}
          />
        </Box>
        {todoList.map((todo) => {
          return <Todo title={todo.title} desc={todo.description} />;
        })}
      </Box>
    </div>
  );
};

export default List;
