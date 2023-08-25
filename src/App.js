
import './App.css';
import Header from './component/Header';
import AddForm from './component/AddForm';
import Item from './component/Item';
import { useState,useEffect } from 'react';

function App() {
  const [tasks,settasks] = useState(JSON.parse(localStorage.getItem("tasks"))||[]) //เป็นการใช้ Local
  const [title,setTitle] = useState("")
  const [theam,setTheam] = useState("light")
  function deleteTask(id){
    const result = tasks.filter(item=>item.id !==id)
    settasks(result)
  }
  const [edit,setEdit] = useState(null);

  //รูปแบบ eff 1
  // useEffect(()=>{
  //   console.log("เรียกใช้use Eff")
  // })
//รูปแบบ eff 2
// useEffect(()=>{
//     console.log("เรียกใช้use Eff")
//   },[])
//รูปแบบ eff 3
useEffect(()=>{
  localStorage.setItem("tasks",JSON.stringify(tasks))
},[tasks])

  function editTask(id){
   setEdit(id)
   const editTask = tasks.find((item)=>item.id == id)

   setTitle(editTask.title)
  }
  function saveTask(e){
    e.preventDefault();
    if(!title){
      alert("ป้อนข้อมูลเดี๋ยวนี้")

    }else if(edit){
      //update ข้อมูล
      const updateTasks = tasks.map((item)=>{
        //รายการใดมีรหัสตรงกับที่จะแก้ไข
        if(item.id == edit){
          return {...item,title:title}
        }
        return item;

      })
      settasks(updateTasks)
      setEdit(null)
      setTitle("")//set ค่าว่าง
    }else{
      //เพิ่มรายการใหม่

      const newTask={
        id:Math.floor(Math.random()*1000),title:title
      }
      settasks([...tasks,newTask])
      setTitle("")
    }
  }
  

  return (
    <div className={"App "+ theam}>
     <Header theam ={theam} setTheam = {setTheam} />
     <div className='container'>
     <AddForm title = {title} setTitle = {setTitle} saveTask = {saveTask} edit={edit}/>
      <section>
      {
        tasks.map((data)=>(
          <Item key={data.id} data={data} deleteTask = {deleteTask} editTask={editTask}/>
        ))
      }
      </section>
     </div>
    
    
    </div>
  );
}

export default App;
