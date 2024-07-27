import { todoProps } from "@/types";
import Button from "../Button/Button"
import Form from "../Form/Form"
import Input from "../input/Input"
import * as actions from "@/actions"
import { FaCheck } from "react-icons/fa";

const ChangeTodo = ({ todo }: {todo : todoProps}) => {
  return (
    <Form action={actions.updateStatus}>
        <Input name="inputId" value={todo.id} type="hidden"></Input>
        <Button text={<FaCheck/>} actionButton bgColor={todo.isCompleted ? "bg-blue-400" : "bg-green-400"}></Button>   
    </Form>
  );
};

export default ChangeTodo
