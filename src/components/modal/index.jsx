import "./index.css";
import { useState } from "react";

export default function Modal({ isOpen, setIsOpen, handleTask }) {
  const [inputNameTask, setInputNameTask] = useState("");
    const [inputDescriptionTask, setInputDescriptionTask] = useState("");
    

   async function close(e) {
       

        (e.target.parentNode.parentNode.style.animation =
            "disappear 0.2s forwards linear"),
            setTimeout(() => {
                setInputNameTask("");
                setInputDescriptionTask("");
              setIsOpen(false);
              e.target.parentNode.parentNode.style.animation =
                "appear 0.2s forwards linear";
            }, 199);
    }

  return (
    <div
      style={{
        display: isOpen ? "flex" : "none",
        width: "100vw",
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "1rem",
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <div className="modal">
        <section className="modal-section">
          <label htmlFor="nameModal">Nome da task:</label>
          <input
            type="text"
            id="nameModal"
                      name="nameModal"
                      placeholder="Ex:Tarefas de casa"
                      value={inputNameTask}
                      title="Coloque no mínimo 3 caracteres para poder adicionar a task"

            onChange={(e) => setInputNameTask(e.target.value)}
          />
        </section>
        <section className="modal-section">
          <label htmlFor="descriptionModal">Descrição da task:</label>
          <textarea
            id="descriptionModal"
            name="descriptionModal"
            minLength={2}
                      placeholder="Descrição da task"
                      value={inputDescriptionTask}
            onChange={(e) => setInputDescriptionTask(e.target.value)}
          ></textarea>
        </section>

        <section className="modal-section-buttons">
                  <button
                      title="Cancelar"
            className="cancel-btn"
            onClick={(e) => {
              close(e)
            }}
          >
            Cancelar
          </button>
                  <button
                      disabled={inputNameTask.length >= 3 ? false : true}
                      title={inputNameTask.length >= 3 ? 'Adicionar task' : 'Coloque o nome da task\n(3 caracteres no mínimo)'}
                      type="submit"
            className="add-btn"  
                      onClick={async (e) => {
                          await handleTask((prev) => {
                              return [
                                  ...prev,
                                {
                                    id: prev.length,
                                      taskLabel: inputNameTask,
                                      taskDescription:
                                          inputDescriptionTask,
                                      taskCompleted: false,
                                  },
                              ]
                          }); close(e) }
              
            }
          >
            Adicionar
          </button>
        </section>
      </div>
    </div>
  );
}
