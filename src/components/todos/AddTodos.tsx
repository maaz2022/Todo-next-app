import * as actions from "@/actions"
import Button from "../Button/Button"
import Form from "../Form/Form"
import Input from "../input/Input"

const AddTodos = () => {
  return (
    <div>
      <Form action={actions.createTodo}>
        <div className="flex gap-2">
            <Input name="input" type="text" placeholder="Add a new todo..." />
            <Button type="submit" text="Add Todo" bgColor="bg-green-600" />
        </div>  
      </Form>   
    </div>
  )
}

export default AddTodos
