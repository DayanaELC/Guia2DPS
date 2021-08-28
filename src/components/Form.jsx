import React, { useState } from 'react'
import Todo from '../components/Todo';

const Form = () => {
    const [todo, setTodo] = useState({})
    const [num, setNum] = useState({})
    const [todos, setTodos] = useState([
        { num: '5',todo: 'Manzanas' },
        { num: '6',todo: 'Gaseosas' },
        { num: '4',todo: 'Detergente' },
        { num: '6',todo: 'Jugo de manzana' } 
    ])
    const handleChange1 = e => setTodo({[e.target.name]: e.target.value})
    const handleChange2 = e => setNum({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '' || Object.keys(num).length === 0 || num.num.trim() === ''){
            alert('Los campos son obligatorios')
            return
        }
        /*console.log(num['num']);
        console.log(todo['todo']);*/
        
        let ban=0;
        todos.map((data) =>{
            if(data.num == num['num']){
                ban = 1;
            }
        });

        setTodos([...todos,{'num': num['num'],'todo':todo['todo']}])

    }
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }
    return (
        <>
            <form onSubmit={e => e.preventDefault() }>
                <label>Agregar tarea</label><br/>
                <input type="text" name="todo" placeholder="Nombre tarea" onChange={handleChange1}/>
                <input type="number" name="num" placeholder="Número tarea" onChange={handleChange2}/>
                <button onClick={handleClick}>Agregar</button>
            </form>
            {
                todos.map((value, index) => (<Todo num={value.num} todo={value.num + "-" + value.todo} key={index} index={index} deleteTodo={deleteTodo}/> ))
            }
         
        </>
    )
}
export default Form

