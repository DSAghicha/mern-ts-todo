import './App.scss'
import { FC } from "react";
import { ReactComponent as LightModeIcon } from './assets/icons/light-mode.svg'
import { ReactComponent as DarkModeIcon } from './assets/icons/dark-mode.svg'


const App: FC = () => {
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
                        <input type="text" name="todo-task" id="todo-task" placeholder='Create a new ToDo'/>
                        <input type="submit" value='Add' />
                </div>

                <div className="task-display">
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <div className="footer"></div>
            </section>
        </div>
    )
};

export default App;
