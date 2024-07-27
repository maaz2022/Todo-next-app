import { todoProps } from "@/types"
import Form from "../Form/Form"
import Input from "../input/Input"
import Button from "../Button/Button"
import { FaTrash } from "react-icons/fa"
import * as actions from "@/actions"
const DeleteTodo = ({todo}: {todo: todoProps}) => {
  return (
    <Form action={actions.deleteTodo}>
        <Input type="hidden" name="inputId" value={todo.id}></Input>
        <Button actionButton type="submit" bgColor="bg-red-400" text={<FaTrash/>}></Button>
    </Form>
  )
}

export default DeleteTodo
