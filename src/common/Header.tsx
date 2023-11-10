import { Link } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <div className="head_wrap">
      <div className="head_top">
        <div className="ht_wrap">
          <Link to="/" className="h_logo">
            <div className="h_logo_img"></div>
          </Link>
          <div className="h_search">
            <form className="h_search_box">
              <input
                type="text"
                className="h_input_text"
                placeholder="검색어를 입력해주세요"
              ></input>
              <div className="h_input_image">
                <input type="submit" className="h_input_img"></input>
              </div>
            </form>
          </div>
          <div className="h_memberlogin">
            <ul className="h_login_menu">
              <li>
                <Link to="/login">
                  <a href="#">
                    <span className="h_login_menu_link">로그인</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <a href="#">
                    <span className="h_login_menu_link">회원가입</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <a href="#">
                    <span className="h_login_menu_link">마이페이지</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/cart">
                  <a href="#">
                    <span className="h_login_menu_link">장바구니</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="head_bottom">
        <div className="hb_wrap">
          <ul className="h_category">
            <li>
              <Link to="/detail/0">
                <a href="#">
                  <span className="h_category_span">NEW RELEASES</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/detail/28">
                <a href="#">
                  <span className="h_category_span">MEN</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/detail/20">
                <a href="#">
                  <span className="h_category_span">WOMEN</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/detail/5">
                <a href="#">
                  <span className="h_category_span">UNISEX</span>
                </a>
              </Link>
            </li>
          </ul>
          <ul className="h_right_box">
            <li>
              <Link to="/detail/37">
                <a href="#">
                  <span className="h_right_box_span">OUTLET</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/detail/29">
                <a href="#">
                  <span className="h_right_box_span">EVENT</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/lookbook">
                <a href="#">
                  <span className="h_right_box_span">LOOKBOOK</span>
                </a>
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <a href="#">
                  <span className="h_right_box_span">THANKS, ARCHIVE</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
