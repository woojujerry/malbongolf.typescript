import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import bestitemArr from "../data/BestitemData";
export interface BestitemArr {
  id: number;
  title: string;
  imgUrl: string;
  imgUrl2: string;
  content: string;
  price: number;
}

interface BESTTEMProps {
  product: BestitemArr;
  res1: number[];
  i: number;
}


function BESTITEM(): JSX.Element {
  let [product] = useState<BestitemArr[]>(bestitemArr);
  let [res1] = useState<number[]>([75, 76, 77, 78, 79, 80, 81, 82]);
  return (
    <div className="container">
      <div className="row">
        {product.map((ele, i) => {
          return <BESTTEM product={product[i]} res1={res1} i={i} />;
        })}
      </div>
    </div>
  );
}

// BESTITEM 상품
function BESTTEM(props: BESTTEMProps): JSX.Element {
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

export default BESTITEM;
