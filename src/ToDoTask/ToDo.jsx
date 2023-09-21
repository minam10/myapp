import React, {useRef, useState } from 'react'
import Styles from './new.module.css'

const ToDo = () => {
    const [newTask, setNewTask]=useState("");
    const [tasks, setTasks]=useState([]);

    const handleInputChange=event=>{
        setNewTask(event.target.value);
    }
    let inref=useRef();
    const handleAddTask=(e)=>{
        // console.log(e);
        e.preventDefault()
        if(newTask.trim() !== " "){
            setTasks([...tasks,{text:newTask,completed:false}])
            setNewTask(" ")
        }
   
    setTimeout(()=>{
        inref.current.value=" "
    })
    }
    const handleRemoveTask=index=>{
        const UpdatedTask = [...tasks];
        UpdatedTask.splice(index, 1);
        setTasks(UpdatedTask)
    }
  return (
    <section className={Styles.mainContainer}>
        <article className={Styles.subContainer}>
            <h2>ToDo App</h2>
            <div>
                <form onSubmit={handleAddTask}>
                    <input type="text" placeholder='Enter the task' onChange={handleInputChange} ref={inref} />
                    <button onClick={handleAddTask} className={Styles.btn1}>Add</button>
                </form>
            </div>
            <ul>
                {tasks.map((task,index)=>(
                    <li key={index}>
                        <span>
                            {task.text}
                        </span>
                        <span> 
                            <button className={Styles.close} onClick={()=>handleRemoveTask(index)}>delete</button>
                        </span>
                    </li>
                ))}
            </ul>
        </article>
    </section>
   
  )
}

export default ToDo