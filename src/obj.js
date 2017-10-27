export default function obj(pass, task, login) {
    
  let obj = {
    passWord: pass,
    task: task
  }
  let serialObj = JSON.stringify(obj)
  localStorage.setItem(login, serialObj)
}