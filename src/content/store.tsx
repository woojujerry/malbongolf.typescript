import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  age: number;
}

const user = createSlice({
  name: "user",
  initialState: { name: "JERRY", age: 28 } as UserState,
  reducers: {
    changeName(state) {
      state.name = "PAX";
    },
    increase(state, action: PayloadAction<number>) {
      state.age += action.payload;
    },
  },
});

export const { changeName, increase } = user.actions;

interface CartItem {
  id: number;
  imgurl: string;
  name: string;
  count: number;
}

const cart = createSlice({
  name: "cart",
  initialState: [
    {
      id: 6,
      imgurl: "../img/3.newin/7.jpg",
      name: "플리스 넥 워머 BEIGE",
      count: 2,
    },
    {
      id: 31,
      imgurl: "../img/5.topseller/2.men/4.jpg",
      name: "스웨터 방풍 가디건 GREEN (MAN)",
      count: 1,
    },
    {
      id: 75,
      imgurl: "../img/8.bestitem/1.jpg",
      name: "말본 코스 BEIGE",
      count: 1,
    },
  ] as CartItem[],
  reducers: {
    addCount(state, action: PayloadAction<number>) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      console.log(num);
      state[num].count++;
    },
    decreaseCount(state, action: PayloadAction<number>) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      console.log(num);
      if (state[num].count > 0) {
        state[num].count--;
      } else if (state[num].count === 0) {
        alert("상품이 없습니다.");
      }
    },
    addItem(state, action: PayloadAction<CartItem>) {
      let num = state.findIndex((a) => a.id === action.payload.id);
      if (num !== -1) {
        state[num].count++;
      } else {
        state.push(action.payload);
      }
    },
    deleteItem(state, action: PayloadAction<number>) {
      let num = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state.splice(num, 1);
    },
    sortName(state, action) {
      state.sort((a, b) => (a.name > b.name ? 1 : -1));
    },
  },
});

export const { addCount, decreaseCount, addItem, deleteItem, sortName } =
  cart.actions;
export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
