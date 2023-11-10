import { useState } from "react";
import { useNavigate } from "react-router-dom";
import newinArr from "../data/NewinData";
import { Button, Nav } from "react-bootstrap";
import axios from "axios";
export interface NewinArr {
  id: number;
  title: string;
  imgUrl: string;
  imgUrl2: string;
  content: string;
  price: number;
}

interface NEWINTEMProps {
  product: NewinArr;
  res1: number[];
  i: number;
}

function NEWIN(): JSX.Element {
  let [product, setProduct] = useState<NewinArr[]>(newinArr);
  let [count, setCount] = useState<number>(1);
  let [res1, setRes1] = useState<number[]>([
    0, 1, 2, 3, 4, 5, 6, 75, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
  ]);
  return (
    <>
      <div className="container">
        <div className="row">
          {product.map((ele, i) => {
            return <NEWINTEM product={product[i]} res1={res1} i={i} />;
          })}
        </div>
      </div>
      <Button
        variant="outline-secondary"
        style={{
          fontSize: "13px",
          opacity: "0.7",
          padding: "7px 20px 7px 20px",
          marginTop: "30px",
        }}
        onClick={() => {
          if (count === 1) {
            axios
              .get<NewinArr[]>(
                "https://woojujerry.github.io/malbondata/src/NewinData2.json"
              )
              .then((result) => {
                let copyNewin1 = [...product, ...result.data];
                setProduct(copyNewin1);
                setCount(2);
                let res = copyNewin1.map((product) => product.id);
                setRes1(res);
              });
          } else if (count === 2) {
            axios
              .get<NewinArr[]>(
                "https://woojujerry.github.io/malbondata/src/NewinData3.json"
              )
              .then((result) => {
                let copyNewin2 = [...product, ...result.data];
                setProduct(copyNewin2);
                setCount(3);
                let res = copyNewin2.map((product) => product.id);
                setRes1(res);
              });
          } else if (count === 3) {
            axios
              .get<NewinArr[]>(
                "https://woojujerry.github.io/malbondata/src/NewinData4.json"
              )
              .then((result) => {
                let copyNewin3 = [...product, ...result.data];
                setProduct(copyNewin3);
                setCount(4);
                let res = copyNewin3.map((product) => product.id);
                setRes1(res);
              });
          } else if (count === 4) {
            axios
              .get<NewinArr[]>(
                "https://woojujerry.github.io/malbondata/src/NewinData5.json"
              )
              .then((result) => {
                let copyNewin4 = [...product, ...result.data];
                setProduct(copyNewin4);
                setCount(5);
                let res = copyNewin4.map((product) => product.id);
                setRes1(res);
              });
          }
          if (count === 5) {
            alert("더 이상 상품이 없습니다.");
          }
        }}
      >
        MORE
      </Button>{" "}
    </>
  );
}

// NEW IN 상품
function NEWINTEM(props: NEWINTEMProps): JSX.Element {
  let navigate = useNavigate();
  let [isHovering, setIsHovering] = useState(false);
  let handleMouseover = () => {
    setIsHovering(true);
  };
  let handleMouseout = () => {
    setIsHovering(false);
  };
  // 천 원 단위 , 찍어주는 함수
  let returnWon = (price:Number) => {
    let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };
  return (
    <div className="col-md-3">
      <Nav.Link
        onClick={() => {
          navigate("/detail/" + props.res1[props.i]);
        }}
        className="c1"
      >
        <div onMouseOver={handleMouseover} onMouseOut={handleMouseout}>
          <img
            src={"/malbongolf.typescript/" + props.product.imgUrl}
            className={isHovering ? "prodImgactive" : "prodImginactive"}
            width="80%"
          />
          <img
            src={"/malbongolf.typescript/" + props.product.imgUrl2}
            className={isHovering ? "prodImginactive" : "prodImgactive"}
            width="80%"
          />
        </div>
        <h5>{props.product.title}</h5>
        <p>{props.product.content}</p>
        <p>{returnWon(props.product.price)}원</p>
      </Nav.Link>
    </div>
  );
}

export default NEWIN;
