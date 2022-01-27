import './App.scss'

import { FC, ChangeEvent, useState } from "react";

import { ReactComponent as LightModeIcon } from './assets/icons/light-mode.svg'
import { ReactComponent as DarkModeIcon } from './assets/icons/dark-mode.svg'

import { IToDo } from './interfaces/Interface'
import ToDoItem from './component/ToDoItem';


const App: FC = () => {
    const [todo, setToDo] = useState<string>('')
    const [todoList, setToDoList] = useState<IToDo[]>([])

    const addTask = (): void => {
        const newToDo = {
            todo: todo,
            isCompleted: false
        }

        setToDoList([...todoList, newToDo])
        setToDo('')
        
        console.log(todoList)        
    }

    return(
        <div className='App'>
            <div className="bg-banner"></div>
            <section className="main-container">
                <div className="heading">
                    <h1>TODO</h1>
                    <div id="toggle-btn">
                        <LightModeIcon />
                        <DarkModeIcon />
                    </div>
                </div>
                <div className="input-cr">
                        <input 
                            type="text"
                            name="todo-task"
                            placeholder='Create a new ToDo'
                            value={todo}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setToDo(event.target.value)}/>
                        <button onClick={addTask} disabled={ todo.length<1 }>Add</button>
                </div>

                <div className="task-display">
                    <ul>
                        { todoList.map((todoItem: IToDo, key: number) => {
                            return <ToDoItem key={ key } todoItem={ todoItem }/>
                        })}
                    </ul>
                </div>

                <div className="footer"></div>
            </section>
        </div>
    )
};

export default App;
