import './tasksMap.css';
import * as Icon from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';



export default function Task({ task, handleTask, searchTask, setTaskModal, taskModalOn }) {
    

    


    const taskFilter = task.filter((tsk) => tsk.taskLabel.toString().substring(0, searchTask.length).toLowerCase() == searchTask.toLowerCase() );

    if (searchTask.length > 0) {
        if (taskFilter.length == 0) {
            return ( <h2 style={{color: 'var(--Poseidon-1-rgba'}}>Item não encontrado, tente novamente</h2>)
        }
        return taskFilter.map((task) => {
            return (
                <>
                        <section className={task.taskCompleted == 'true' ? 'task-complete' : 'task'}  >
                    <h3 onClick={() => {setTaskModal(task), taskModalOn(true)} }>
                        {task.taskLabel}
                    </h3>
                    <section className="task-button">
                        <button className={task.taskCompleted == 'true'   ? 'btn-task-complete' : 'btn-delete'} onClick={(e) => handleTask(task.filter((tk) => (tk.id == task.id ? false : true) ))} title={`Deletar task, ${task.taskLabel}`} ><Icon.Trash3 /></button>
                         <button className={task.taskCompleted == 'true' ? 'btn-task-complete' : 'btn-task'} onClick={(e) => { handleTask(task.filter((tk) => (tk.id == task.id ? task.taskCompleted =`${task.taskCompleted == 'false' ? 'true' : 'false'}`  : true))) }} title={task.taskCompleted == 'true' ? `Marcar task , ${task.taskLabel} , como não concluída` : `Marcar task , ${task.taskLabel} , como concluída`} >{task.taskCompleted == 'true' ? <Icon.CircleFill></Icon.CircleFill>: <Icon.CheckLg/>}</button>
                    </section>
                        </section>
                       
                    
                </>
            )
        })
    }
    
    
    

    {if (task.length == 0) {
        return (
            <h2>
                Adicione tasks 
    </h2>
) 
}}

    return task.map((tsk) => {
        


        return (
            
            <>
                
                    <section className={tsk.taskCompleted == 'true' ? 'task-complete' : 'task'}  >
                    <h3 onClick={() => {setTaskModal(tsk), taskModalOn(true)} } >
                            {tsk.taskLabel}
                    </h3>
                    <section className="task-button">
                        <button className={tsk.taskCompleted == 'true'   ? 'btn-task-complete' : 'btn-delete'} onClick={(e) => handleTask(task.filter((tk) => (tk.id == tsk.id ? false : true) ))} title={`Deletar task, ${tsk.taskLabel}`} ><Icon.Trash3 /></button>
                        <button className={tsk.taskCompleted == 'true' ? 'btn-task-complete' : 'btn-task'} onClick={(e) => { handleTask(task.filter((tk) => (tk.id == tsk.id ? tsk.taskCompleted = `${tsk.taskCompleted == 'false' ? 'true' : 'false'}` : true))) }} title={task.taskCompleted == 'true' ? `Marcar task , ${tsk.taskLabel} , como não concluída` : `Marcar task , ${tsk.taskLabel} , como concluída`}  > {tsk.taskCompleted == 'true' ? <Icon.CircleFill></Icon.CircleFill>: <Icon.CheckLg/>}</button>
                    </section>
                        </section>
                
                </>
               )
       })}
        
    

