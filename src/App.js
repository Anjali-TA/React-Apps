import jwt_decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask/NewTask";
import TaskList from "./components/Tasks/TaskList";
import Card from "./components/UI/Card";

function App() {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false);

  function handleCallbackResponse(response) {
    var userObj = jwt_decode(response.credential);
    setUser(userObj);
    setIsLogin(true);
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "709380805594-nvtnc6tvb097n8ppds5j53i7g2l85bal.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signInDiv"), {
      theme: "outline",
      size: "large",
    });
  }, [isLogin]);

  const logOutHandler = (event) => {
    setUser({});
    setIsLogin(false);
  };

  const Dummy_tasks = [
    {
      id: "t1",
      title: "Learning React",
      completed: true,
    },
    {
      id: "t2",
      title: "Start building new project",
      completed: false,
    },
  ];
  const [tasks, setTasks] = useState(Dummy_tasks);

  const addTaskHandler = (enteredTaskData) => {
    setTasks((prevState) => {
      return [...prevState, enteredTaskData];
    });
  };
  const updateTaskStatusHandler = (id) => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    const existingTaskData = tasks[taskIndex];
    const updatedTask = {
      ...existingTaskData,
      completed: true,
    };
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex] = updatedTask;
    setTasks(updatedTasks);
  };

  const taskDeleteHandler = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <React.Fragment>
      {!isLogin && (
        <Card>
          <h2> Hey, Login To Todo App</h2>
          <div id="signInDiv"></div>
        </Card>
      )}
      {isLogin && (
        <React.Fragment>
          <Card>
            <div className="logout">
              <h2> Hey, {user.name}</h2>
              <button onClick={logOutHandler}> Logout</button>
            </div>
          </Card>
          <NewTask onAddTask={addTaskHandler} />
          <TaskList
            tasks={tasks}
            onUpdateStatus={updateTaskStatusHandler}
            onTaskDelete={taskDeleteHandler}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

export default App;
