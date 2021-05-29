import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import { useContext } from 'react';

const Header = ({ title }) => {
  const { showAddTask, setShowAddTask } = useContext(AppContext);
  const location = useLocation();
  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          color={!showAddTask ? 'green' : 'red'}
          text={!showAddTask ? 'Add' : 'Close'}
          onClick={() => setShowAddTask(!showAddTask)}
        />
      )}
    </header>
  );
};
Header.defaultProps = {
  title: 'Task Tracker',
};
Header.propTypes = {
  title: PropTypes.string,
  onAdd: PropTypes.func,
  showAddTask: PropTypes.bool,
};

export default Header;
