import React,{Component} from 'react';
import Todo from "./todo.js";
import AddTodo from './AddTodo';
import imm from './a2.jpg'
class App extends Component
{
    state = { list:[] }
    
    addTodo = (Element) =>
    {
        Element.id = Math.random();
        let list=[...this.state.list,Element];
        this.setState({list});
    }

    deletetodo = (id) =>
    {
        const list=this.state.list.filter( toto => {
            return toto.id !== id
        });
        this.setState({list:list});
    }

    render()
    {
        return (
        <div className="container">
            <div class="row">
            <div  class="col s12">
                <h3 class="center header orange-text hide-on-small-only"> "If you love life, don't waste time, 
                        for time is what life is made up of"</h3>
            </div>
        </div>
            <div className="row">
               <div className="col m5 s12"><img className="responsive-img im1"  src={imm} alt="To do"/></div>
                <div className="col m7 s12">
                <div className="card pink lighten-3 center"><h2>To Do List</h2></div>
            <Todo list={this.state.list} deletetodo={this.deletetodo}/>
            <AddTodo addTodo={this.addTodo}/>
            </div>
            </div>
        </div>
        );
    }
}
export default App;




