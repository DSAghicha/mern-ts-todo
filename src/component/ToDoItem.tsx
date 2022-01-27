import './todo-item.scss'

import { IToDo } from '../interfaces/Interface'

interface Props {
    todoItem: IToDo
}

const ToDoItem = ({ todoItem }: Props) => {
    return(
        <li>
            <input type="checkbox" name='taskCompleted'/>
            <p>{ todoItem.todo }</p>
        </li>
    )
};

export default ToDoItem
