import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import About from './components/About';
import Footer from './components/Footer';
import { AppContext } from './contexts/AppContext';

function App() {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks');
    const data = await res.json();
    return data;
  };

  return (
    <Router>
      <AppContext.Provider
        value={{ showAddTask, setShowAddTask, setTasks, tasks }}
      >
        <div className='container'>
          <Header />

          <Route
            path='/'
            exact
            render={(props) => (
              <>
                {showAddTask ? <AddTask /> : ''}
                {tasks.length > 0 ? <Tasks /> : 'No Tasks'}
              </>
            )}
          />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
