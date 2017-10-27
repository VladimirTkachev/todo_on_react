import React, { Component } from 'react';
import Tasks from './Tasks';
import tasteStorage from './validate';
import obj from './obj'
import './styles/styles.css';
import './styles/pass.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      start: true,
      logIn: '',
      pass: '',
      faild:'',
      tasks: [],
      inputTask: false
    }
    this.changeLogin = this.changeLogin.bind(this);
    this.changePass = this.changePass.bind(this);
    this.rendTasks = this.rendTasks.bind(this);
    this.out = this.out.bind(this);
    this.pushToTasks = this.pushToTasks.bind(this);
    this.add = this.add.bind(this);
    this.dltTask = this.dltTask.bind(this);
    this.changeText = this.changeText.bind(this);
  }

  changeLogin(e) {
    this.setState({
      logIn : e.target.value
    })
  }

  changeText(index, text) {
    let arr = this.state.tasks
    arr[index] = text;
    this.setState({
      tasks: arr
    });
    obj(this.state.pass, this.state.tasks, this.state.logIn);
  }

  changePass(e) {
    this.setState({
      pass : e.target.value
    })
  }

  out(e) {
    this.setState({
      start: true,
      tasks: [],
      faild: '',
      pass: '',
      logIn: ''
    })
  }

  pushToTasks(){
    let tasks = JSON.parse(localStorage.getItem(this.state.logIn));
    if (tasks === null){
      null
    }
    else {
      let task = []
      tasks.task.map(function(element){
        task.push(element)
      })
      this.setState({
        tasks: task
      })
    }
    let valid = tasteStorage(this.state.logIn, this.state.pass, this.state.tasks);
    if(valid.tasks != undefined){
      this.setState({
        tasks: valid.tasks
      })
    }
    if(valid.start != undefined){
      this.setState({
        start: valid.start
      })
    }
    if(valid.faild != undefined){
      this.setState({
        faild: valid.faild,
        start: true,
        tasks: []
      })
    }
  
  }

  dltTask(index) {
    let arr = this.state.tasks
    arr.splice(index, 1)
    this.setState({
      tasks: arr
    });
    obj(this.state.pass, this.state.tasks, this.state.logIn);
  }
 
    add() {
    this.changeInputTask();
    obj(this.state.pass, this.state.tasks, this.state.logIn);
  }

  changeInputTask() {
    let a = 'Новая задача'
    let arr = this.state.tasks
    arr.push(a)
    this.setState({
      tasks: arr
    })
    
  }

  rendStart() {
    return (
      <div className="App">
          <div className="passwrap">
            <div className="passsupport"></div>
            <div className="wrappass">
                  <div className = "faild">{this.state.faild}</div>
                  <div className="input-field col s12">
                      <input id="email" type="email" className="validate" onChange = {e => this.changeLogin(e) } />
                      <label >Login</label>
                  </div>
                  <div className="input-field col s12">
                      <input id="password" type="password" className="validate" onChange = {e => this.changePass(e) } />
                      <label >Password</label>
                   </div>
                  <div className="wrapbtn">
                      <a className="waves-effect waves-teal btn-flat enter" onClick = {this.pushToTasks}>Вход/Регистрация</a>
                  </div>  
            </div>
            <div className="passsupport"></div>
          </div>
      </div>
    );
  }

  rendTasks() {
    return (
      <div>
        <div className="header">
            <div className="login">
                {this.state.logIn}
            </div>
            <div className="out">
                    <a className="waves-effect waves-teal btn-flat remove" onClick = {this.out}>Выход</a>
            </div>
        </div>
        <Tasks tasks = {this.state.tasks} deleteTask={this.dltTask} changeText={this.changeText}/>
        <div className="mainwrap">
          <div className="support"></div>
          <div className="wrap">
              <div className = "task">
                  Создать новую задачу.
              </div>
              <div className="wrapbtn">
                  <a className="waves-effect waves-teal btn-flat edit" onClick = {this.add}>Создать</a>
              </div>  
          </div>
          <div className="support"></div>    
        </div>
      </div>
    );
  }
  
  render() {
    if (this.state.start){
      return this.rendStart()
    }
    else {
      return this.rendTasks()
    }
  }
}

export default App;

