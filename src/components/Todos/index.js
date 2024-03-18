import PropTypes from 'prop-types'
import styles from './Todos.module.css'
import classNames from 'classnames';

import PlusIcon from '../../assets/plus-icon.svg'
import MinusIcon from '../../assets/minus-icon.svg'

const Todos = ({todos, onSubstraction, onAddition}) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo, i, arr) => {
        return (
          <div 
            // className={`todo ${!(arr.length === i + 1) && styles.todoDivider}`} 
            className={classNames(styles.todo, {
              [styles.todoDivider]: !(arr.length === i + 1)
            })}
            key={i}
            >
            {todo.title}
            <div className={styles.todoIconWrapper}>
              <div className={styles.todoCount}>
                {todo.count}
              </div>
              <button onClick={() => onSubstraction(i)} className={styles.todoActionButton}>
                <img src={MinusIcon} alt="minus icon"/>
              </button>
              <button onClick={() => onAddition(i)} className={styles.todoActionButton}>
                <img src={PlusIcon} alt="plus icon"/>
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Todos.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    count: PropTypes.number
  })),
  onSubstraction: PropTypes.func,
  onAddition: PropTypes.func
}

export default Todos