import React from "react";
import { useState} from "react";
import Header from "./components/header";
import Tasks from "./components/tasks/index";
import './styles/app.css';
import * as Icon from 'react-bootstrap-icons';
import Modal from "./components/modal";


export const InitialTasks = [
 
];

export default function App() {

  const [isModal, setIsModal] = useState(false);  
  const [tasks, setTasks] = useState(InitialTasks);
  const [searchTasks, setSearchTasks] = useState('');
  const [isTaskModal, setIsTaskModal] = useState(false);
  const [taskModal, setTaskModal] = useState();
  

  
  return (
    <div className='App' style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <Header />

      <main >
        <section className="tasks-header">
          <input type="text" onChange={(e) => setSearchTasks(e.target.value)} title="Pesquisar task pelo nome" aria-label="Pesquisar task"  />
          <button className="task-header-buttons" onClick={() => setIsModal(true)} title="Adicionar task" aria-label="Adicionar taks" >
            <Icon.PlusCircle/>
          </button>
        </section>
        <Tasks tasks={tasks} setTasks={setTasks} srcTask={searchTasks} handleTaskModal={setTaskModal} taskModalOn= {setIsTaskModal} />
      
        <Modal isOpen={isModal} setIsOpen={setIsModal} handleTask={setTasks} />

      </main>

      <TaskId isTaskModal={isTaskModal} handleTaskModal={setIsTaskModal}  currentTask={taskModal} />
      
    </div>
  )
  
  
}

export function TaskId({ currentTask, isTaskModal, handleTaskModal }) {


  async function close(e) {
       

    (e.target.parentNode.parentNode.style.animation =
        "disappear 0.2s forwards linear"),
        setTimeout(() => {
          handleTaskModal(false);
          e.target.parentNode.parentNode.style.animation =
            "appear 0.2s forwards linear";
        }, 199);
}
  
  
  return (
    <div style={{ display: `${isTaskModal == true ? 'flex' : 'none'}`, flexDirection: 'column', position: 'absolute', left: 0, right: 0, top: 70, textAlign: 'center', height: '60%', width: '70%', margin: 'auto', gap: '2rem', borderRadius: '0.5rem', backdropFilter: 'blur(3rem)', backgroundColor: 'var(--background-modal)', color: 'var(--Poseidon-3-rgba)',animation: 'appear 0.2s forwards linear;' }}>
          
      <section style={{display:'flex',justifyContent: 'space-between',alignItems:'center',verticalAlign:'middle',width:'100%',}}>
          <button style={{backgroundColor:'transparent',border:'none',fontSize:'1.5rem',padding:'0.5rem',cursor:'pointer',marginLeft:'auto'}} onClick={(e) => close(e)  } >
            x
          </button>
      </section>
      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%', marginTop: '2rem' }}>
      <h2 style={{ color: 'var(--Poseidon-4-rgba)', }}>
        {currentTask ? currentTask.id : null}
      </h2>
      <h1>
        {currentTask ? currentTask.taskLabel :  ''}
      </h1>
      </section>
      <section style={{ overflow:'auto',padding:'1rem', backgroundColor:'var(--background-modal)'}}>
      <h2>
          {currentTask ? currentTask.taskDescription : ''}
        </h2>
     </section>
    </div>
  )
}
