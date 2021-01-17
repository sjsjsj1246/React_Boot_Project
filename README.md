# TodoList

- 벨로퍼트 [강의](https://react.vlpt.us/mashup-todolist/01-create-components.html) 참고하였음
- styled-components 사용 시 vscode의 extension인 vscode-styled-components / Diego Lincoln 사용 추천
- styled 컴포넌트를 써보고 꽤 놀랐다. 조건부로 스타일링 하기 편할 것 같다. 하지만 그래도 원래 방식이 스타일링 하기엔 편한 것 같다.
- context-API 상태를 전역적으로 관리할 수 있다는 것이 굉장히 편했다.

## libaray

- React
- react-icons
- styled-components

## Context-API 정리

- Context 안엔느 Provider와 Consumer 컴포넌트가 있다.

  - provider는 Context를 구독하는 컴포넌트들에게 Context의 변화를 알려준다
  - Consumer는 Context의 변화를 구독해 변화 시 재렌더링 하는 컴포넌트이다.

- Provider의 value는 하위 컴포넌트들에게 전달된다. 이때 value가 변하면 하위 컴포넌트들은 재렌더링 된다.

  - context 내부의 value A를 바꾸면 value B만 사용하는 컴포넌트도 재렌더링 될 수 있다는 것이다.

  1. 이를 막기 위해 1. context를 목적에 맞게 따로 만들어 준다.
  2. useMemo() 사용

- TypeScript와 같이 사용 시

  1. Typescript와 함께 사용 하다보면 createContext() 사용시 default 값으로 null 또는 undefined 처리를 해주어야 하는 불편한 점을 해결
  2. useContext 사용시 parent에 provider가 선언되어 있는지 아닌지에 대한 명확한 에러처리

- Context API를 사용하면 Consumer와 Provider를 분리할 수 없기에 컴포넌트의 재사용성이 떨어질 수 있다. 이 문제를 해결하기 위해 컴포넌트를 불변 컴포넌트(UI컴포넌트)와 가변 컴포넌트(Consumer컴포넌트)로 분리하여 해결할 수 있다.
  - 중요한 style요소, event 등의 데이터를 구조화하여 전달한다.
  - Context에 의해 영향을 받는 요소, 로직은 Consumer 컴포넌트에서 구현한다.
  - 이를통해 Context가 바뀌더라도 UI 컴포넌트를 재사용 할 수 있다.

# Connect_API

## Callback unction & promise & 비동기처리

자바스크립트에서 함수는 일급객체이다. 일급 객체가 되기 위해서는 몇 가지 조건을 만족해야 한다.

1. 변수나 데이터 구조 안에 담을 수 있다.
2. 파라미터로 전달 할 수 있다.
3. 반환값으로 사용 할 수 있다.
4. 런타임에 생성될 수 있다.

따라서 우리는 함수를 인자로 사용하는 콜백 패턴을 자바스크립트에서 사용할 수 있다.

콜백함수의 개념은 인자로 함수를 전달하여 전달받은 함수를 함수의 내부에서 실행시키는 것이다.

```jsx
items = [
    {
        id: "1",
        title: "1번째"
    }
    {
        id: "2",
        title: "2번째"
    }
]
...
render(
    items.map((item) => <h1 key={item.id}>{title}</h1>)
)
```

map 함수에 익명함수를 전달해 주는 것도 콜백함수의 개념이다.
주의할 점은 함수들이 [[Scope]]를 중복해서 사용하지 않도록 함수의 이름이나 익명함수를 사용해야 한다.

### 비동기처리

자바스크립트는 특정 코드의 연산이 끝날 때까지 코드의 실행을 기다리지 않고 다음 코드를 실행한다.
이것이 필요한 이유는 코드가 동기적으로 실행된다면 웹사이트를 띄우는데에 하나 실행하고 될때까지 기다리고 실행하고 딜때까지 기다리고를 반복하여 시간이 매우 오래 걸릴 것이다.

이 문제를 해결하기 위해서 만약 A함수 다음 B함수가 실행되도록 하고 싶다면 A함수에 콜백함수로 B함수를 넣어주게 되면 A함수의 코드가 실행되고 B 함수가 실행될 것이다.

또는 프로미스 개념을 사용할 수 있는데.

```js
function getData() {
  return new Promise(function (resolve, reject) {
    var data = 100;
    data > 50 ? resolve(data) : reject(new Error('Request is failed'));
  });
}

getData().then(function (resolvedData) {
  console.log(resolvedData); // 100
});
```

new Promise()메서드를 호출하면 대기(Pendding) 상태가 되며 콜백함수 내부의 resolve를 호출하면 완료(Fulfilled) 상태가 되며 reject 함수를 실행하면 실패(Rejected) 상태가 된다. 이는 catch()로 받을 수 있다. Fulfilled 상태가 되면 then()이 실행되며 처리 결과를 받을 수 있다.

## What is Async, Await

- 기존 비동기 처리방식인 콜백 함수와 프로미스의 단점을 보완한 문법

```js
function logName() {
  var user = fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
```

fetchUser()가 서버에서 데이터를 받아오는 HTTP통신 함수라고 가정했을 때 코드의 실행 순서를 보장하기 위해 일반적으로 다음과 같이 작성했었다.

```js
function logName() {
  fetchUser('domain.com/users/1', function (user) {
    if (user.id === 1) {
      console.log(user.name);
    }
  });
}
```

하지만 async와 await를 사용하면 다음과 같이 간단하고 이해하기 쉽게 코드를 짤 수 있다.

```js
async function logName() {
  var user = await fetchUser('domain.com/users/1');
  if (user.id === 1) {
    console.log(user.name);
  }
}
```

다른예제

```js
function fetchItems() {
  return new Promise(function (resolve, reject) {
    var items = [1, 2, 3];
    resolve(items);
  });
}

async function logItems() {
  var resultItems = await fetchItems();
  console.log(resultItems); // [1,2,3]
}
```

다음과 같이 비동기함수 fetchItems()를 만들고 logItems에서 await를 통해 호출했다. async, await가 아니었으면 then을 통해 비동기함수를 처리했어야 했지만 더 간단하게 처리할 수 있게 됐다.
