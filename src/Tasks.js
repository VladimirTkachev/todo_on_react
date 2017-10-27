import React from 'react';
import RendTasks from './RendTasks';

const Tasks = ({dlt, deleteTask, changeText, tasks}) => {


        if (tasks.length === 0){
           return null
          }
          else {
            return (tasks.map(function(element, i){
                return (<RendTasks key = {i} index= {i} text = {element} deleteTask={() => deleteTask(i)} changeText={changeText}/> )
            }))
        }
    }


export default Tasks;

