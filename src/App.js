import { useState } from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  
  

    // state and function that updates it
    const [tasks, setTasks] = useState([

            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th at 2: 30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'Choir Practice',
                day: 'Feb 6th at 7:330pm',
                reminder: false,
            },
            {
                id: 3,
                text: 'Online Meeting',
                day: 'Feb 8th at 4:00am',
                reminder: true,
            },
            {
              id: 4,
              text: 'Go To Airport',
              day: 'Feb 15th at 4:30pm',
              reminder: false,
          },
        
        ]
    )

    // Add task
    const addTask = (task) => {
      const id = Math.floor(Math.random() *
      10000) + 1
     const newTask = { id, ...task }
      setTasks([...tasks, newTask])
    }

    // Delete a task
    const deleteTask = (id) => {
      console.log('Task deleted!')
      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
      // 
      setTasks(
        tasks.map((task) =>
        task.id === id ? { ...task, reminder:
        !task.reminder } : task
        )
      )
    }



  return (
    <div className="container">

      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask} />

     {showAddTask && <AddTask onAdd={addTask} />}
      
      { tasks.length > 0 ? 
      ( <Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder} 
        />) : 
      ( "No Tasks To Show" ) }


    </div>

  );
}

export default App;
