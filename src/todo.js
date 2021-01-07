import React from 'react';


const Todo=({list,deletetodo})=>  {  
     
      
    return (
        <div className="todo collection">
        { list.length?(
        list.map(list1=>{
            return (
                <div className="collection-item" key={list1.id}>
                    {list1.job}
                    <span style={{color:"red",marginLeft:"20px",fontSize:"20px"}} onMouseOver={(e)=>{e.target.style.cursor="pointer"}} onClick={()=>{deletetodo(list1.id)}}>
                      <b>X</b>  
                    </span>
                </div>
            )
        })
    ):(<p className="center"> Nothing To Do </p>) }
      </div>
    )
  }

export default Todo

