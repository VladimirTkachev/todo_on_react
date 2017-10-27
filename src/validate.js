import obj from './obj'

export default function tasteStorage(login, pasSword, task) {
  let start, tasks, faild, valid
  
  let pass = JSON.stringify(pasSword)
  let parsePass = JSON.parse(localStorage.getItem(login))
  if (localStorage.getItem(login) == undefined) {
    localStorage.setItem(login, pass)
    obj(pasSword, task, login)
    start = false
  }
  else if (parsePass.passWord == pasSword){
    tasks = parsePass.task
    start = false
  }
  else {
    faild = "Пользователь с таким ником существует, либо вы ввели не верный пароль"
  }

  valid = {
      start,
      tasks,
      faild
  }

  return valid
}