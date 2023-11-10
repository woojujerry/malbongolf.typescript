import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount, decreaseCount, deleteItem, sortName } from "./store";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface RootState {
  user: {
    name: string;
    age: number;
  };
  cart: {
    id: number;
    imgurl: string;
    name: string;
    count: number;
  }[];
}

function Cart(): JSX.Element {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();
  const smallProductStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    width: "100px",
    height: "100px",
    cursor: "pointer",
  };
  const textverticalAlign: React.CSSProperties = {
    verticalAlign: "middle",
    textAlign: "center",
  };
  return (
    <>
      <h5 style={{ padding: "50px" }} className="cart_userName">
        {state.user.name} 님의 장바구니
      </h5>
      <Table>
        <thead>
          <tr className="cart_table_tr">
            <th>ID</th>
            <th>상품이미지</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.cart.map((a, i) => (
            <tr key={i}>
              <td style={textverticalAlign}>{state.cart[i].id}</td>
              <td>
                <Link to={`/detail/${state.cart[i].id}`}>
                  <img
                    src={`img/${state.cart[i].imgurl}`}
                    style={smallProductStyle}
                  />
                </Link>
              </td>
              <td style={textverticalAlign}>{state.cart[i].name}</td>
              <td style={textverticalAlign}>{state.cart[i].count}</td>
              <td style={textverticalAlign}>
                <Button
                  onClick={() => {
                    dispatch(addCount(state.cart[i].id));
                  }}
                  variant="outline-success"
                  style={{ marginRight: "10px" }}
                >
                  +
                </Button>
                <Button
                  onClick={() => {
                    dispatch(decreaseCount(state.cart[i].id));
                  }}
                  variant="outline-warning"
                  style={{ marginRight: "10px" }}
                >
                  -
                </Button>
                <Button
                  onClick={() => {
                    dispatch(deleteItem(state.cart[i].id));
                  }}
                  variant="outline-danger"
                >
                  상품삭제
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button
        variant="dark"
        onClick={() => {
          dispatch(sortName(state.cart));
        }}
        style={{ marginTop: "50px" }}
      >
        이름순 정렬
      </Button>
    </>
  );
}

export default Cart;
