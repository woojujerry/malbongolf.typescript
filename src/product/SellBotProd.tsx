import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav } from "react-bootstrap";
import bottmArr from "../data/TopSellerBottomData";
export interface BottomArr {
  id: number;
  title: string;
  imgUrl: string;
  imgUrl2: string;
  content: string;
  price: number;
}

interface SELLERBOTTOMProps {
  product: BottomArr;
  res1: number[];
  i: number;
}


function BOTTOM(): JSX.Element {
  let [product] = useState<BottomArr[]>(bottmArr);
  let [res1] = useState([43, 44, 45, 46, 47, 48, 49, 50]);
  return (
    <div className="container">
      <div className="row">
        {product.map((ele, i) => {
          return <SELLERBOTTOM product={product[i]} res1={res1} i={i} />;
        })}
      </div>
    </div>
  );
}

// TOP SELLER - BOTTOM 상품
function SELLERBOTTOM(props: SELLERBOTTOMProps): JSX.Element {
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

export default BOTTOM;
