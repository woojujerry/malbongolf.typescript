import React from "react";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import "../css/slick.css";
import "../css/slick-theme.css";
import DETOPTION from "./DetTopRtOption";
import { addItem } from "./store";
import { DataArr } from "../App";

interface DetailProps {
  product: DataArr[];
}

interface CartPopProps {
  setCartPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

function Detail(props: DetailProps): JSX.Element {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const selproduct = props.product.find((x) => x.id === Number(id));
  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: false,
    speed: 500,
    slidesToshow: 1,
    slidesToScroll: 1,
  };
  // 천 원 단위 , 찍어주는 함수
  const returnWon = (price: Number) => {
    const returnString = price
      ?.toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return returnString;
  };
  const [tab, setTab] = useState<number>(0);
  const [isClick, setIsClick] = useState<boolean>(false);
  const handleOnclick = () => {
    setIsClick(true);
  };
  // 장바구니 팝업
  const [cartPopup, setCartPopup] = React.useState<boolean>(false);
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row">
        <div className="col-md-6">
          <Slider {...settings}>
            <div>
              <img src={"/malbongolf.typescript/" + selproduct?.imgUrl} width="80%" height="80%" />
            </div>
            <div>
              <img src={"/malbongolf.typescript/" + selproduct?.imgUrl2} width="80%" height="80%" />
            </div>
          </Slider>
        </div>
        <div className="col-md-6" id="detail_top_right">
          <h4 className="pt-5">{selproduct?.title}</h4>
          <p>
            {returnWon(selproduct!.price)}
            <span>원</span>
          </p>
          <DETOPTION />
          <div id="det_top_rt_btn">
            <Button
              variant="success"
              className="det_btn"
              onClick={() => {
                dispatch(
                  addItem({
                    id: selproduct?.id || 0,
                    imgurl: selproduct?.imgUrl
                      ? selproduct.imgUrl.replace("img/", "")
                      : "",
                    name: selproduct?.title || "",
                    count: 1,
                  })
                );
                setCartPopup(true);
              }}
            >
              구매하기
            </Button>{" "}
            {cartPopup ? <CartPop setCartPopup={setCartPopup} /> : null}
            <Button variant="light" className="det_btn">
              <Link to="/cart" className="det_btn_link">
                장바구니
              </Link>
            </Button>{" "}
            <Button variant="light" className="det_btn" onClick={handleOnclick}>
              <img
                src="/malbongolf.typescript/img/0.icon/heart_icon.png"
                width="100%"
                className={
                  isClick ? "det_btn_img_onClick" : "det_btn_img_offClick"
                }
              />
              <img
                src="/malbongolf.typescript/img/0.icon/heart_full_icon.png"
                width="100%"
                className={
                  isClick ? "det_btn_img_offClick" : "det_btn_img_onClick"
                }
              />
            </Button>
          </div>
        </div>
      </div>
      <Nav
        justify
        variant="tabs"
        defaultActiveKey="link-1"
        className="detail_nav"
      >
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(0);
            }}
            eventKey="link-1"
            className="detail_navlink"
          >
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(1);
            }}
            eventKey="link-2"
            className="detail_navlink"
          >
            상품후기
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey="link-3"
            className="detail_navlink"
          >
            배송/교환/반품
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div>
        {
          [
            <div className="detail_info">
              <img
                src="/malbongolf.typescript/img/11.detail/1.jpg"
                className="detail_info_common"
                width="80%"
              />
              <div className="detail_info_product">
                <img src={"/malbongolf.typescript/" + selproduct?.imgDet1} width="80%" height="80%" />
                <img src={"/malbongolf.typescript/" + selproduct?.imgDet2} width="80%" height="80%" />
                <img src={"/malbongolf.typescript/" + selproduct?.imgDet3} width="80%" height="80%" />
              </div>
              <img
                src="/malbongolf.typescript/img/11.detail/2.jpg"
                className="detail_info_common"
                width="80%"
              />
            </div>,
            <div className="detail_review">
              <div className="detail_review_tit">
                <h4>리뷰</h4>
                <span>0</span>
              </div>
              <div className="detail_review_con">
                <div className="det_rev_con_star">
                  <div className="det_rev_con_star_svg">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium det_rev_con_star_star"
                      focusable="false"
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      data-testid="StarIcon"
                    >
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                  <div className="det_rev_con_star_num">0.0</div>
                </div>
                <div className="det_rev_con_txt">아직 리뷰가 없어요</div>
              </div>
            </div>,
            <img
              src="/malbongolf.typescript/img/9.delivery_info/1.jpg"
              className="detail_deliInfo"
              width="80%"
            />,
          ][tab]
        }
      </div>
    </div>
  );
}

function CartPop(props: CartPopProps): JSX.Element {
  let box: React.CSSProperties = {
    width: "320px",
    height: "198px",
    border: "1px solid #ddd",
    borderRadius: "3px",
    backgroundColor: "#fff",
    textAlign: "center",
    position: "absolute",
    padding: "40px 0 30px 0",
    top: "43%",
    left: "40%",
  };
  return (
    <>
      <div style={box}>
        <p className="cartpop_txt">
          장바구니에 추가하였습니다.
          <br />
          장바구니로 이동하시겠습니까?
        </p>
        <div className="cartpop_btn">
          <Link to="/cart">
            <button className="cartpop_btn_cart">확인</button>
          </Link>
          <button
            onClick={() => {
              props.setCartPopup(false);
            }}
            className="cartpop_btn_none"
          >
            취소
          </button>
        </div>
      </div>
    </>
  );
}

export default Detail;
