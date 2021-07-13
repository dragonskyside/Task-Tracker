import { useState } from 'react' 
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {

  

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
        
        ]
    )

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
        task.id == id ? { ...task, reminder:
        !task.reminder } : task
        )
      )
    }



  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? 
      ( <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : 
      ( "No Tasks To Show" ) }
    </div>

  );
}

export default App;
