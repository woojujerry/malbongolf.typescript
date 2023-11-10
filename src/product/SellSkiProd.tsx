import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import skirtArr from "../data/TopSellerSkirtData";
export interface SkirtArr {
  id: number;
  title: string;
  imgUrl: string;
  imgUrl2: string;
  content: string;
  price: number;
}

interface SELLERASKIRTProps {
  product: SkirtArr;
  res1: number[];
  i: number;
}


function SKIRT(): JSX.Element {
  let [product] = useState<SkirtArr[]>(skirtArr);
  let [res1] = useState([51, 52, 53, 54, 55, 56, 57, 58]);
  return (
    <div className="container">
      <div className="row">
        {product.map((ele, i) => {
          return <SELLERSKIRT product={product[i]} res1={res1} i={i} />;
        })}
      </div>
    </div>
  );
}

// TOP SELLER - SKIRT 상품
function SELLERSKIRT(props: SELLERASKIRTProps): JSX.Element {
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

export default SKIRT;
