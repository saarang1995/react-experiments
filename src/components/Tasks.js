import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import Task from './Task';

const Tasks = () => {
  const { tasks } = useContext(AppContext);
  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </>
  );
};

export default Tasks;
