import React, { useState } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const AppContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
  border-radius: 25px;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TextInput = styled.input`
  flex: 1;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px 10px;
  border-radius: 15px;
`;

const AddButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const TaskListHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  color: #9999a3;
`;

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;

  return (
    <AppContainer>
      <Image src="./todo.jpg" alt="Todo" />
      <InputContainer>
        <TextInput
          type="text"
          placeholder="Add a new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <TaskListHeading id="taskListHeading">
          <div>{`${completedTasksCount}/${tasks.length} done`}</div>
        </TaskListHeading>
      </InputContainer>
      <h2>Task List</h2>
      <TodoList>
        {tasks.map((item, index) => (
          <TodoItem
            key={index}
            text={item.text}
            completed={item.completed}
            onToggleCompleted={() => toggleCompleted(index)}
            taskNumber={index + 1}
            totalTasks={tasks.length}
          />
        ))}
        <br />
        <AddButton onClick={addTask}>Add Task</AddButton>
      </TodoList>
    </AppContainer>
  );
};

export default App;
