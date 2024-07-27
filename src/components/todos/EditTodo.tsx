"use client"
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import Button from "../Button/Button";
import Input from "../input/Input";
import { todoProps } from "@/types";
import * as actions from "@/actions"
import Form from "../Form/Form";
const EditTodo = ({todo}: {todo: todoProps}) => {
    const [editTodoState, setEditTodoState] =  useState(false);
    if(todo.isCompleted){
        return null; // Don't render if todo is completed. It will not be editable.  // This is a workaround to prevent rendering the edit button for completed todos.  // In a real-world application, you would want to handle this differently.  // For example, you might want to display a different message or style the edit button.  // For now, we'll just skip rendering the edit button for completed todos.  // This is a simple example to illustrate how to conditionally render components.  // In a real-world application, you would handle this differently.  // For example, you might want to display a different message or style the edit button.  // For now, we'll just skip rendering the edit button for completed todos.  // This is a simple example to illustrate how to conditionally render components.  // In a real-world application, you would handle this differently.  // For example, you might want to display a different message
    }
    const handleEdit = () => {
        setEditTodoState(!editTodoState);
    };
    const handleSubmit = () => {
        setEditTodoState(false);
    }

  return (
    <div className="flex gap-5 items-center">
        <Button onClick={handleEdit} text={<MdEdit/>} actionButton/>
        {editTodoState ? (
            <Form action={actions.editTodo} onSubmit={handleSubmit}>
                <Input name="inputId" value={todo.id} type="hidden"></Input>
                <div className="flex justify-center">
                    <Input name="newTitle" type="text" placeholder="Edit Todo..."></Input>
                    <Button type="submit" text="save"></Button>
                </div>
            </Form>
        ): null}
    </div>
  )
}

export default EditTodo
