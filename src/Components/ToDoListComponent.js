import {useEffect , useState } from "react";

const ToDoListComponent = ()=>{

//   const [myTask , setmyTask] =useState( [
//         "I play cricket",
//         "Love to spend time on laptop computers",
//         "Love to do multitask at a time",
//         "Love to sleep",
//         "Love to do working out",
//     ]);
let initialValue = JSON.parse(localStorage.getItem("user_task_array")) || [
    {text:'play cricket' , complete:false},
    {text:'Spend time on laptop' , complete:false},
    {text:'multitask' , complete:false},
    {text:'sleep' , complete:false},
    {text:'working-out' , complete:false},
];
const [myTask , setmyTask] = useState(initialValue);
    
const [activeValue , setActiveValue] = useState(myTask.length)
   

function handleAddTask(){
        if(item){
            let arr =[...myTask , {text:item ,complete:false }]; 
            setmyTask( arr);
            setItem("");
    }
    };

    

    useEffect(()=>{
        let arr = [...myTask];
        let newArr = arr.filter((each)=> !each.complete).length;
        let stringedData = JSON.stringify(myTask)
        localStorage.setItem('user_task_array', stringedData)
        setActiveValue(newArr);
    },[myTask]);

    const [item , setItem] = useState("");
    const handleChange = (e)=>{
        console.log(e);
        setItem(e.target.value)
  }

    function handleCheckbox(index){
        
        let arr = [...myTask]
        console.log(myTask[index]   )
        arr[index].complete = !arr[index].complete;
       
        setmyTask(arr)  
        
        
        //filter

        let countArray = arr.filter((each)=> !each.complete);
        setActiveValue(countArray.length)
    }
        
     
    return (
        <>
        
    <h1>My todo app:</h1>


    <input type="text" 
    placeholder="Add item here"
     onChange={handleChange} // Onchange is a evnet function which show the changes occured in input field.
      value={item}/>
      {/* // define initial value of the useState . */}
    <button onClick={handleAddTask}> Add Item</button>
        

        <ul>

          {myTask.map((eachValue,index) =>(
          // Remember to use curly braces inside html part to use js in html .
           <li>
            <input
             type="checkbox"
             checked={eachValue.complete}
              onChange={() => {
                handleCheckbox(index)
              }}

              />
            <span  style={{textDecoration:eachValue.complete ? "line-through" : " ",
        }}
        >
             {eachValue.text}</span>
           </li>                     
          ))}
        </ul>
        
        activeValue                                                                                                                                                 Active to do Item : {activeValue }
        </>
    )

};
export default ToDoListComponent;