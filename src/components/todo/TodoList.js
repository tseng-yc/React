import React from 'react';
import TodoItem from './TodoItem';
import TodoItemEditForm from './TodoItemEditForm';
import QueueAnim from 'rc-queue-anim';
function TodoList(props) {
  // 解構賦值的語法，先把要用的變數值從props解出來
  const {
    todos,
    handleCompleted,
    handleDelete,
    handleEditedToggle,
    handleEditedSave,
    viewFilter,
  } = props;
  return (
    <>
      <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
        {/* map使用時通常子元素會要求唯一key值(id值)  */}
        {/* 這裡用索引值作為key值(id值)  */}
        {/* 依照每個項目的completed來控制呈現的樣子  */}
        {/* key要寫在最接近map的子項目，目前是改為TodoItem */}
        {/* {todos.map((value, index) => {
          return <li key={index}>{value}</li>;
        })} */}

        {todos.map((item, index) => {
          if (viewFilter === 1 && !item.completed) return <></>;
          if (viewFilter === 2 && item.completed) return <></>;
          return item.edited ? (
            <TodoItemEditForm
              key={item.id}
              id={item.id}
              text={item.text}
              handleEditedSave={handleEditedSave}
            />
          ) : (
            <TodoItem
              key={item.id}
              text={item.text}
              completed={item.completed}
              completedMethod={() => handleCompleted(item.id)}
              deleteMethod={() => handleDelete(item.id)}
              editedToggleMethod={() => handleEditedToggle(item.id)}
            />
          );

          /* item.completed ? (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
              />
              <del>{item.text}</del>
              <button onClick={() => handleDelete(item.id)}>刪除</button>
            </li>
          ) : (
            <li key={item.text}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => handleCompleted(item.id)}
              />
              {item.text}
              <button onClick={() => handleDelete(item.id)}>刪除</button>
            </li>)*/
        })}
      </QueueAnim>
    </>
  );
}

export default TodoList;
