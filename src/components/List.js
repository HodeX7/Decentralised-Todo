import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AddIcon from "@mui/icons-material/Add";
import Todo from "./Todo";
import { Droppable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { addTodo, removeList } from "../todoSlice";
import { useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";

const List = ({ list }) => {
  const todos = useSelector((state) => state.todoSlice);
  // console.log("This is redux state", todos);
  const [todo, setTodo] = useState({
    title: "",
    desc: "",
    id: 0,
  });
  const dispatch = useDispatch();
  const [todoList, setTodoList] = useState([]);
  return (
    <Droppable droppableId={list.title}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{ marginRight: "1vw" }}
          >
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h4>List: {list.title}</h4>
                <IconButton
                  // Implement List delete logic from smart contract
                  onClick={() => {
                    dispatch(removeList(list.id));
                  }}
                  sx={{ color: "white" }}
                >
                  <DeleteIcon className="addButton" />
                </IconButton>
              </div>
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
                    value={todo.title}
                    onChange={(e) => {
                      setTodo({ ...todo, title: e.target.value });
                    }}
                  />
                  <IconButton
                    // implement Todo Add logic from smart contract
                    onClick={() => {
                      if (todo.title === "") {
                        window.alert("Title cannot be empty");
                      } else {
                        dispatch(
                          addTodo({
                            id: list.id,
                            item: {
                              title: todo.title,
                              desc: todo.desc,
                              id: todo.id,
                            },
                          })
                        );
                        let id = todo.id + 1;
                        setTodo({ ...todo, title: "", desc: "", id: id });
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
                  value={todo.desc}
                  onChange={(e) => {
                    setTodo({ ...todo, desc: e.target.value });
                  }}
                />
              </Box>
              {/* {console.log(list)} */}
              {list.todos &&
                list.todos.map((ele, index) => {
                  return (
                    <Todo
                      todoList={todoList}
                      setTodoList={setTodoList}
                      index={index}
                      key={index}
                      title={ele.title}
                      desc={ele.desc}
                      id={ele.id}
                      listId={list.id}
                    />
                  );
                })}

              {provided.placeholder}
            </Box>
          </div>
        );
      }}
    </Droppable>
  );
};

export default List;
