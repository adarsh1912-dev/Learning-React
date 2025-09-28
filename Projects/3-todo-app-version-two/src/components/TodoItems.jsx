import TodoItem from "./Todoitem";
const TodoItems = ({todoItems}) => {



    return <>
        <div className="items-container">

        {todoItems.map(item => 
            <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate}></TodoItem> 
        )}
       
      </div>
    </>
};

export default TodoItems;