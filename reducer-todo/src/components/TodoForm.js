import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

export function TodoForm (props) {
    const [form, setForm] = useState('')
   return(

    <form onSubmit={(event) => {
        event.preventDefault()
        props.addTodo(form)
        setForm('')
    }}>
        <Input
            name='todo'
            placeholder='Add Todo'
            value={form}
            onChange={(event) => {
                setForm(event.target.value)
            }}
        />
        <Button variant="contained" color="Primary" type="submit">Add Task</Button>
        {/* <button type='submit'>Add Todo</button> */}
    </form>
   )
}