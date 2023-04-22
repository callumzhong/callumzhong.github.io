---
sidebar_position: 1
title: 用 React 思考
---

:::info

性質：讀後感與反思  
來源：https://react.dev/learn/thinking-in-react

:::

> _React can change how you think about the designs you look at and the apps you build_

這意思是 React 可以改變看到設計稿與構建應用程式過程的看法

![](https://react.dev/images/docs/s_thinking-in-react_ui.png)

```json
[
  {
    "category": "Fruits",
    "price": "$1",
    "stocked": true,
    "name": "Apple"
  },
  {
    "category": "Fruits",
    "price": "$1",
    "stocked": true,
    "name": "Dragonfruit"
  },
  {
    "category": "Fruits",
    "price": "$2",
    "stocked": false,
    "name": "Passionfruit"
  },
  {
    "category": "Vegetables",
    "price": "$2",
    "stocked": true,
    "name": "Spinach"
  },
  {
    "category": "Vegetables",
    "price": "$4",
    "stocked": false,
    "name": "Pumpkin"
  },
  {
    "category": "Vegetables",
    "price": "$1",
    "stocked": true,
    "name": "Peas"
  }
]
```

利用 CSS 不抽象的規劃如下

```scss
.product {
  &__header {
    // 寫產品標頭排版 Name, price
  }
  &__category {
    // 寫產品類別排版 Fruits
  }
  &__item {
    // 寫產品名稱與價格
  }
}

.search-bar {
  // 搜尋 bar
}

.card {
  // 容器
  &__header {
  }
  &__body {
  }
}
```

Step 1: Break the UI into a component hierarchy

筆者撰寫中...

<!-- // TODO: 用 React 思考 -->
