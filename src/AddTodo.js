import React,{Component} from 'react';

class AddTodo extends Component
{
    state=
    {
        job:''
    }

    handleChange = (e) =>
    {
        this.setState({job: e.target.value});
    }

    handleSubmit = (e) =>
    {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({job:''});

    }
    render()
    {
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>Add New To Do</label>
                <input type="text" id="job" value={this.state.job} onChange={this.handleChange}/>
            </form>
        </div>
        )
    }


}

export default AddTodo;