import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([
    {
        id:1,
        text: 'call mom',
        day:'Today',
        reminder: true
    
    },
    
    {
        id:2,
        text:'call dad',
        day: 'Today',
        reminder: true
    
    },
    
    {
        id:3,
        text:'finish homework',
        day:'Tommorow',
        reminder: true
    
    },
    
    {
        id:4,
        text:'go for a run',
        day:'Thursday',
        reminder: true
    
    }
    ]
)

const deleteTask =(id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;