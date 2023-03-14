---
sidebar_position: 1
hide_table_of_contents: true
title: React 備忘單
---

## Elements

```jsx
import { createElement } from "react";

// ✅
<h1 className="greeting">Hello</h1>;

// ❌
createElement("h1", { className: "greeting" }, "Hello");
```

使用 JSX 語法替代 createElement 函式

## Components

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function Hello({ name }) {
  return <div>Hello {name}</div>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Hello name="Callum" />
  </StrictMode>,
);
```

reference: [strictMode](https://beta.reactjs.org/reference/react/strictMode), [your-first-component](https://beta.reactjs.org/learn/your-first-component)

## Props

```jsx
function User({ name, children }) {
  return <h1>Hello, {name}!</h1>;
}

function App() {
  return <User name="Callum" />;
}
```

Props 可以接受任何 JavaScript 值，包含物件、陣列、函式。

reference: [passing-props-to-a-component](https://beta.reactjs.org/learn/passing-props-to-a-component)

## Children

```jsx
function User({ children }) {
  return <h1>Hello, {children}!</h1>;
}

function App() {
  return <User>Callum</User>;
}
```

當內容崁套在標籤內，則由 children 接收的內容

## States

```jsx
const [state, setState] = useState(initial);
```

```jsx
const [count, setCount] = useState(0);
```

```jsx
setCount((val) => val + 1); // ✅
```

以函式更新的話參數表示當前狀態

```jsx
setCount(count + 1); // ❌
```

若直接調用 count 變數則不能確保是最新狀態，因為是異步批次處理狀態更新。

reference: [useState](https://beta.reactjs.org/reference/react/useState), [state-as-a-snapshot](https://beta.reactjs.org/learn/state-as-a-snapshot)

## Nesting

```jsx
// ✅
function Info({ avatar, username }) {
  return (
    <>
      <UserAvatar src={avatar} />
      <UserProfile username={username} />
    </>
  );
}
// ❌
function Info({ avatar, username }) {
  return (
    <div>
      <UserAvatar src={avatar} />
      <UserProfile username={username} />
    </div>
  );
}
```

透過 `<Fragment>` (`<>...</>`) 包覆避免使用不必要的節點。

reference: [Fragment](https://beta.reactjs.org/reference/react/Fragment)

## Defaults & Spread

### Default Props

```jsx
function Avatar({ person, size = 100 }) {
  // person => callum
  // size => 100
}
```

```jsx
<Avatar person="callum" />
```

reference: [specifying-a-default-value-for-a-prop](https://beta.reactjs.org/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop)

### Spread Props

```jsx
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}
```

使用 spread 語法轉發 Props 更精簡 Component

reference: [specifying-a-default-value-for-a-prop](https://beta.reactjs.org/learn/passing-props-to-a-component#specifying-a-default-value-for-a-prop)

## JSX patterns

### Attributes

```jsx
<div className="container"></div>
```

JSX 實際上是寫 JavaScript 語法糖，經過 babel 會是物件的 key 值，但是 JavaScript 對於變數的名稱有保留字與限制(不能包含破折號)，所以改用小駝峰撰寫屬性。

reference: [Common components "div"](https://beta.reactjs.org/reference/react-dom/components/common)

### Style

```jsx
<div
  style={{
    fontSize: 36,
    margin: "0 auto",
    textAlign: "center",
  }}
>
  Hello World
</div>
```

inline styles 是傳入物件，以 Key Value 撰寫 CSS 屬性

## Conditional Rendering

```jsx
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting({ isLoggedIn }) {
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
```

```jsx
function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
}
```

```jsx
function Greeting({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn && <UserGreeting />}
      {!isLoggedIn && <GuestGreeting />}
    </>
  );
}
```

```jsx
<Greeting isLoggedIn={false} />
```

透過 if 陳述式可以有條件的判斷 render 哪個 Component，由 Props 決定讓元件可以更乾淨。

## Rendering Lists

```jsx
const people = [
  {
    id: 0, // Used in JSX as a key
    name: "Creola Katherine Johnson",
  },
  {
    id: 1, // Used in JSX as a key
    name: "Mario José Molina-Pasquel Henríquez",
  },
  {
    id: 2, // Used in JSX as a key
    name: "Mohammad Abdus Salam",
  },
  {
    id: 3, // Used in JSX as a key
    name: "Percy Lavon Julian",
  },
  {
    id: 4, // Used in JSX as a key
    name: "Subrahmanyan Chandrasekhar",
  },
];

export default function List() {
  const listItems = people.map((person) => (
    <li key={person.id}>{person.name}</li>
  ));
  return <ul>{listItems}</ul>;
}
```

對於複數以上的資料，需要跑迴圈檢索每一筆資料組成 HTML，可以透過 Map 方法組成結果回傳 JSX array。但是我們需要 key 讓 React 辨識 JSX 唯一性.

reference: [why-does-react-need-keys](https://beta.reactjs.org/learn/rendering-lists#why-does-react-need-keys)

## DOM nodes

### References

```jsx
import { useEffect, useRef } from "react";

export default function App() {
  const ref = useRef(null);

  const countHandler = () => {
    alert("useRef is so good!");
  };

  useEffect(() => {
    if (ref) {
      ref.current.click();
    }
  }, []);

  return (
    <button onClick={countHandler} ref={ref}>
      Click me
    </button>
  );
}
```

ref 掛載 JSX ref 屬性可以訪問 DOM 節點

reference: [useRef Hook](https://beta.reactjs.org/reference/react/useRef)

### DOM Events

```jsx
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <input
      value={name}
      type="text"
      onChange={changeNameHandler}
    />
  );
}
```

函式傳遞給 onChange 屬性，監聽 DOM Change 事件, 查看過多屬性請前往[文件](https://beta.reactjs.org/reference/react-dom/components/common)

reference: [responding-to-events](https://beta.reactjs.org/learn/responding-to-events)

## Lifecycle

### Effects

```jsx
// Class Component
class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

```jsx
// Function Component
function Hello({ name }) {
  return <h1>Hello, {name}</h1>;
}
```

在 React v16.8 中， React Hook 開始於穩定版使用，社群開始推廣 Function Component，不再建議使用 Class Component。 Function Component 沒有 Lifecycle Function 可以使用，改用 Effect Hook 只有 `開始` 與 `停止` 兩種狀態。

reference: [react-lifecycle-methods-diagram](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/), [lifecycle-of-reactive-effects](https://beta.reactjs.org/learn/lifecycle-of-reactive-effects)

## Hooks

### State

```jsx
const [name, setName] = useState("Taylor");
```

```jsx
setName("Callum");
```

```jsx
const [score, setScore] = useState(() =>
  calculateScore("Taylor"),
);
```

```jsx
setState((pervState) => pervState + 1);
```

reference: [useState Hook](https://beta.reactjs.org/reference/react/useState)

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    age: 42,
  });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```

以下是假設初始值需要經過某計算函式回傳結果

```jsx
function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit);
}

function createInitialState({ age }) {
  return {
    age: getRandomNumber(age),
  };
}

const [state, dispatch] = useReducer(
  reducer,
  { age: 42 },
  createInitialState,
);
```

reference: [useReducer Hook](https://beta.reactjs.org/reference/react/useReducer)

### Context

```jsx
import { useContext } from "react";
import { exampleContext } from "@/store/exampleContext.js";

function MyComponent() {
  const value = useContext(exampleContext);

  // ...
}
```

訂閱與讀取 Context

reference: [useContext Hook](https://beta.reactjs.org/reference/react/useContext)

### Ref

```jsx
const ref = useRef(initialValue);

function handleStartClick() {
  const intervalId = setInterval(() => {
    // ...
  }, 1000);
  intervalRef.current = intervalId;
}

function handleStopClick() {
  const intervalId = intervalRef.current;
  clearInterval(intervalId);
}
```

ref 物件初次渲染時會被保存，下一次渲染則會被忽略，你應該避免渲染期間寫入或讀取。

```jsx
function MyComponent() {
  // ...
  // ❌ Don't write a ref during rendering
  myRef.current = 123;
  // ...
  // ❌ Don't read a ref during rendering
  return <h1>{myOtherRef.current}</h1>;
}
```

```jsx
function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}
```

```jsx
function MyComponent() {
  const playerRef = useRef(null);
  // ✅ 使用 current === null 避免再次建立 VideoPlayer 實體
  if (playerRef.current === null) {
    playerRef.current = new VideoPlayer();
  }

  // ❌ 每次執行都會調用 new VideoPlayer();
  playerRef.current = new VideoPlayer();
  // ...
```

注意 ref 也可以 [訪問 DOM 節點](#references)

```jsx
return <input ref={inputRef}>
```

reference: [useRef Hook](https://beta.reactjs.org/reference/react/useRef)

```jsx
useImperativeHandle(ref, createHandle, dependencies?)
```

```jsx
import {
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";

const MyInput = forwardRef(function MyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current.focus();
        },
        scrollIntoView() {
          inputRef.current.scrollIntoView();
        },
      };
    },
    [],
  );

  return <input {...props} ref={inputRef} />;
});
```

自定義向外部公開 ref 的方法，其餘僅限自身 Component 作用域內可調用

reference: [useImperativeHandle Hook](https://beta.reactjs.org/reference/react/useImperativeHandle)

### Effect

```jsx
useEffect(() => {
  (async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
      );
      const json = await response.json();
      setPosts(json);
    } catch (error) {
      console.log("error", error);
    }
  })();
}, []);
```

```jsx
useEffect(() => {
  const connection = createConnection(serverUrl, roomId);
  connection.connect();
  return () => {
    connection.disconnect();
  };
}, [roomId]);
```

reference: [useEffect Hook](https://beta.reactjs.org/reference/react/useEffect)

```jsx
useLayoutEffect(setup, dependencies?)
```

```jsx
function Tooltip() {
  const ref = useRef(null);
  const [tooltipHeight, setTooltipHeight] = useState(0); // You don't know real height yet

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    setTooltipHeight(height); // Re-render now that you know the real height
  }, []);

  // ...use tooltipHeight in the rendering logic below...
}
```

與 useEffect 不同的版本 useLayoutEffect 執行時間點在重繪前運行 (較損害效能) ，適用於以判斷 DOM 螢幕的位置與大小來進行條件渲染。

上述程式碼截取片段以黏貼式提示訊息為例，以滑鼠 Hover 及視窗大小判斷顯示上、下、左、右。

完整程式碼請至 [useLayoutEffect#examples](https://beta.reactjs.org/reference/react/useLayoutEffect#examples)

### Performance

```jsx
import { useCallback } from 'react';

export default function ProductPage({ productId, referrer, theme }) {
  const handleSubmit = useCallback((orderDetails) => {
    post('/product/' + productId + '/buy', {
      referrer,
      orderDetails,
    });
  }, [productId, referrer]);
```

緩存(cache) 函式的 hook，用來提高效能避免重新建立

reference: [useCallback Hook](https://beta.reactjs.org/reference/react/useCallback)

```jsx
import { useMemo } from "react";

function TodoList({ todos, tab }) {
  const visibleTodos = useMemo(
    () => filterTodos(todos, tab),
    [todos, tab],
  );
  // ...
}
```

緩存(cache) 計算函式執行結果的 hook，用來提高效能避免重新計算

reference: [useMemo Hook](https://beta.reactjs.org/reference/react/useMemo)

```jsx
const [isPending, startTransition] = useTransition();
```

reference: [useTransition Hook](https://beta.reactjs.org/reference/react/useTransition)

```jsx
const deferredValue = useDeferredValue(value);
```

reference: [useDeferredValue Hook](https://beta.reactjs.org/reference/react/useDeferredValue)

### Other

```jsx
useDebugValue(value, format?)
```

reference: [useDebugValue Hook](https://beta.reactjs.org/reference/react/useDebugValue)

```jsx
const id = useId();
```

reference: [useId Hook](https://beta.reactjs.org/reference/react/useId)

```jsx
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?)
```

reference: [useId Hook](https://beta.reactjs.org/reference/react/useSyncExternalStore)

## Reducer and Context

### Reducer

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1,
    };
  }
  throw Error("Unknown action.");
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    age: 42,
  });

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
```

useReducer 與 useState 非常相似，但是 useReducer 狀態處理函式是不依賴 Component 的純函式。可以參考 [comparing-usestate-and-usereducer](https://beta.reactjs.org/learn/extracting-state-logic-into-a-reducer#comparing-usestate-and-usereducer) 來選擇使用哪個。

### Passing Data Deeply with Context

```jsx title="/src/store/authContext.js"
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  onLogin: () => {},
  onLogout: () => {},
});

export default function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {};
  const logoutHandler = () => {};
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
```

以 Component 封裝 `AuthContext.Provider` 撰寫 Auth 相關邏輯。

```jsx title="/src/component/User.jsx"
import { createContext } from "react";
import { AuthContext } from "@/store/authContext";

export default function User() {
  const authCtx = useContext(AuthContext);
  // 登入狀態 false
  return <div>登入狀態 {authCtx.isLoggedIn}</div>;
}
```

使用 useContext Hook 讀取 AuthContext

```jsx title="/src/main.js"
import AuthContextProvider from "@/store/authContext";

// 中間省略...

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
);
```

根節點使用 Provider 表示供應 AuthContext 到任一子節點皆有 Consumer 權利
value 屬性可改變 AuthContext 值。

### Scaling Up with Reducer and Context

```jsx title="@/store/TaskContext.js"
import {
  createContext,
  useContext,
  useReducer,
} from "react";

const TasksContext = createContext(null);

const TasksDispatchContext = createContext(null);

export default function TasksProvider({ children }) {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks,
  );

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialTasks = [
  { id: 0, text: "Philosopher’s Path", done: true },
  { id: 1, text: "Visit the temple", done: false },
  { id: 2, text: "Drink matcha", done: false },
];
```

Reducers 讓您可以整合組件的狀態更新邏輯。 Context 使您可以將信息深入傳遞給其他 Component。 您可以將 reducers 和 Context 結合在一起來管理複雜屏幕的狀態。

```jsx
export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
```

完整程式請看 [scaling-up-with-reducer-and-context](https://beta.reactjs.org/learn/scaling-up-with-reducer-and-context)

## Other Component

### StrictMode

```jsx
<StrictMode>
  <App />
</StrictMode>
```

使用 StrictMode 為內部的整個元件樹啟用額外的開發行為和警告

reference: [strictMode](https://beta.reactjs.org/reference/react/StrictMode)

### Component with Ref

```jsx
const input = forwardRef((props, ref) => {
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
});
```

ref 可以訪問 DOM 節點，使用方式以屬性賦予到 JSX，Component 之間傳遞 ref 需要透過 forwardRef

reference: [forwardRef](https://beta.reactjs.org/reference/react/forwardRef), [useRef](https://beta.reactjs.org/reference/react/useRef)

### Suspense

```jsx
function Loading() {
  return <h2>🌀 Loading...</h2>;
}
```

```jsx
<Suspense fallback={<Loading />}>
  <Albums />
</Suspense>
```

Suspense 允許執行 fallback，直到 Suspense 的子項渲染完成。

reference: [Suspense](https://beta.reactjs.org/reference/react/Suspense)

### Profiler

```jsx
<App>
  <Profiler id="Sidebar" onRender={onRender}>
    <Sidebar />
  </Profiler>
  <PageContent />
</App>
```

開發者環境下測量 React 樹的渲染性能，搭配 React Developer Tools 查看

```jsx
function onRenderCallback(
  id, // the "id" prop of the Profiler tree that has just committed
  phase, // either "mount" (if the tree just mounted) or "update" (if it re-rendered)
  actualDuration, // time spent rendering the committed update
  baseDuration, // estimated time to render the entire subtree without memoization
  startTime, // when React began rendering this update
  commitTime, // when React committed this update
  interactions, // the Set of interactions belonging to this update
) {
  // Aggregate or log render timings...
}
```

`onRender` 接收測量數據

reference: [Profiler](https://beta.reactjs.org/reference/react/Profiler)

### lazy

```jsx
import { lazy } from "react";
```

```jsx
const MarkdownPreview = lazy(() =>
  import("./MarkdownPreview.js"),
);

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <h2>Preview</h2>
      <MarkdownPreview />
    </Suspense>
  );
}
```

延遲載入 Component 的 Code，直到它第一次被使用。意指可以動態載入 Component 的 Code 英文名詞稱為 Code-Splitting.

```log
Error
A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.
```

lazy 載入時為了避免 UI 渲染阻塞的狀況，必須搭配 `<Suspense>`，若有 UI 阻塞問題則會有上述 Error 錯誤訊息

```jsx
export default function App() {
  const [showPreview, setShowPreview] = useState(false);
  const changeHandler = (e) =>
    startTransition(() => {
      setShowPreview((val) => !val);
    });
  return (
    <>
      <button onClick={changeHandler}>Show preview</button>
      {showPreview && <MarkdownPreview />}
    </>
  );
}
```

使用 startTransition 也可以避免 UI 阻塞，但是畫面會沒有 Loading (fallback) 顯示

reference: [lazy](https://beta.reactjs.org/reference/react/lazy), [Code-Splitting](https://reactjs.org/docs/code-splitting.html#gatsby-focus-wrapper)

### memo

```jsx
import { memo } from "react";
```

```jsx
const Greeting = memo(({ name }) => {
  return <h1>Hello, {name}!</h1>;
});

export default Greeting;
```

memo 可以讓 Component 避免重新渲染，只要 props 未異動的話。

reference: [memo](https://beta.reactjs.org/reference/react/memo)

## Other Features

### Return multiple elements

```jsx
// Don't need the keys!
return (
  <>
    <li>First item</li>
    <li>Second item</li>
  </>
);
```

```jsx
// Don't forget the keys!
return [
  <li key="A">First item</li>,
  <li key="B">Second item</li>,
];
```

reference: [return types](https://reactjs.org/docs/react-component.html#render)

### Return String or Number

```jsx
return "string";
```

```jsx
return 1;
```

渲染純文本, 沒有標籤。

reference: [return types](https://reactjs.org/docs/react-component.html#render)

### Return Boolean or null or undefined

```jsx
return true;
```

```jsx
return false;
```

```jsx
return null;
```

```jsx
return undefined;
```

不會渲染任何東西

reference: [return types](https://reactjs.org/docs/react-component.html#render)

### Portals

```jsx
import { createPortal } from "react-dom";
```

```jsx
<div>
  <SomeComponent />
  {createPortal(children, domNode)}
</div>
```

createPortal 可以把 `children` 渲染到指定的 `domNode`

### startTransition

```jsx
import { startTransition } from "react";
```

```jsx
function TabContainer() {
  const [tab, setTab] = useState("about");

  function selectTab(nextTab) {
    startTransition(() => {
      setTab(nextTab);
    });
  }
  // ...
}
```

startTransition 可以不阻塞 UI 的情況下更新狀態、其函式作用域範疇內同步狀態更新

reference: [startTransition](https://beta.reactjs.org/reference/react/startTransition)

## Also see

- [reactjs.org](https://reactjs.org/)
- [beta.reactjs.org](https://beta.reactjs.org/)
