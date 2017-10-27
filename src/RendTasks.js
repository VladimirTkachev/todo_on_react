import React, { Component } from 'react';

class RendTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputTask: true
        }
        this.saveTask = this.saveTask.bind(this);
        this.editTask= this.editTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.changeText = this.changeText.bind(this);
    }
    
    saveTask() {
        this.setState({
          inputTask: true
        })
    }

    changeText(i, text) {
        this.setState({
            inputTask: false
          })
        this.props.changeText(this.props.index,text);
    }

    deleteTask() {
        this.props.deleteTask();
    }

    editTask() {
        this.setState({
          inputTask: false
        })
    }
    
    rendEdit() {
        return (
            <div className="mainwrap" >
                <div className="support"></div>
                <div className="wrap">
                    <div className="input-field col s6">
                        <input id="last_name" type="text" className="validate" onChange={e => {this.changeText(this.props.index, e.target.value)}}/>
                        <label>Новая задача</label>
                    </div>
                    <div className="wrapbtn">
                        <a className="waves-effect waves-teal btn-flat edit" onClick = {this.saveTask}>Сохранить</a>
                    </div>  
                </div>
                <div className="support"></div>
            </div>
        )
    }
    
    getTasks() {
        return (
            <div className="mainwrap" >
                <div className="support"></div>
                <div className="wrap">
                    <div className = "task" >
                        {this.props.text}
                    </div>
                    <div className="wrapbtn">
                        <a className="waves-effect waves-teal btn-flat edit" onClick={this.changeText}>Редактировать</a>
                        <a className="waves-effect waves-teal btn-flat remove" onClick={this.deleteTask} >Удалить</a>
                    </div>  
                </div>
                <div className="support"></div> 
            </div>
        );
    }
    
    render() {
        if(this.state.inputTask) {
          return (
            this.getTasks()
          )
        }
        else {
          return (
            this.rendEdit()
          )
        }
    }
}

export default RendTasks;


