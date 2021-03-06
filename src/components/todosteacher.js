function TodoApp(props) {
  const [todoInput, setTodoInput] = useState('');
  // 將每個待辨事項改為物件值
  // { id, text: string, completed: bool }
  const [todos, setTodos] = useState([
    { id: 1, text: '買iphone 12', completed: false },
    { id: 2, text: '學好react', completed: true },
  ]);

  // 利用id值尋找對應的item的索引值，然後改變completed值
  const handleCompleted = (id) => {
    // 先複製一個新的todos陣列
    const newTodos = [...todos];

    // 利用id值尋找對應的item的索引值
    const todoItemIndex = newTodos.findIndex((item) => item.id === id);

    // 如果尋找到的索引值不是-1時，代表有找到索引值
    if (todoItemIndex !== -1) {
      // 布林值 true變false，false變true
      newTodos[todoItemIndex].completed = !newTodos[todoItemIndex].completed;

      // 設定回原本的todos
      setTodos(newTodos);
    }
  };

  // 利用id值尋找對應的item的索引值，然後移出陣列
  const handleDelete = (id) => {
    //建立一個新的陣列，其中"不包含"要被移除的項目(用filter)
    const newTodos = todos.filter((item, index) => item.id !== id);

    // 設定回原本的todos
    setTodos(newTodos);
  };

  return (
    <>
      <h1 className="mt-5">範例：待辨事項</h1>

      <input
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        onKeyPress={(e) => {
          //處理按下Enter
          if (e.key === 'Enter' && e.target.value) {
            // 建立一個新的todo項目
            const newItem = {
              id: +new Date(),
              text: e.target.value,
              completed: false,
            };

            // 建立新的陣列(合併原本的todos陣列中的值)
            const newTodos = [newItem, ...todos];

            // 設定todos狀態值
            setTodos(newTodos);

            // 清空輸入框
            setTodoInput('');
          }
        }}
      />
      <hr />
      <ul>
        {/* map使用時通常子元素會要求唯一key值(id值)  */}
        {/* 這裡用id作為key值  */}
        {/* 依照每個項目的completed來控制呈現的樣子  */}
        {todos.map((item, index) =>
          item.completed ? (
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
            </li>
          )
        )}
      </ul>
    </>
  );
}
