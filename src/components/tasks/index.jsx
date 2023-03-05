import  Task  from "./tasksMap";

export default function Tasks({tasks, setTasks, srcTask, handleTaskModal, taskModalOn}) {
    return (
        <div className="tasks"  style={{display:'flex',flexDirection:'column',gap: '1rem', padding: '1rem'}}>
           <Task task={tasks} handleTask={setTasks} searchTask={srcTask} setTaskModal={handleTaskModal} taskModalOn={taskModalOn} />
        </div>
    )
}