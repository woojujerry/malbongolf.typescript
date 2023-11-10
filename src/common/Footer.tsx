import { Link } from "react-router-dom";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="footer_one">
        <div className="footer_wrap">
          <div className="footer_left">
            <Link to="/" className="f_logo">
              <div className="f_logo_img"></div>
            </Link>
            <div className="f_link">
              <ul className="f_link_ul">
                <li>
                  <a href="#">회사소개</a>
                </li>
                <li>
                  <a href="#">이용안내</a>
                </li>
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">이용약관</a>
                </li>
                <li>
                  <a href="#">구매안전(에스크로)서비스</a>
                </li>
              </ul>
            </div>
            <div className="f_info">
              <div className="f_info_ul_wrap">
                <ul className="f_info_ul">
                  <li>
                    <span>계좌번호 : 신한은행 140-013-349110</span>
                  </li>
                  <li>
                    <span>상호명 : 주식회사 하이라이트브랜즈</span>
                  </li>
                  <li>
                    <span>호스팅 제공자 : (주)위사</span>
                  </li>
                </ul>
                <ul className="f_info_ul">
                  <li>
                    <span>말본골프 | malbon golf</span>
                  </li>
                  <li>
                    <span>대표이사 : Jun Kwon Lee</span>
                  </li>
                  <li>
                    <span>
                      주소 : 경기 성남시 분당구 판교로 242 PDC빌딩 A동 8F
                    </span>
                  </li>
                </ul>
                <ul className="f_info_ul">
                  <li>
                    <span>통신판매업신고 : 2019-성남분당B-0523</span>
                  </li>
                  <li>
                    <span>사업자등록번호 : 788-81-01239</span>
                  </li>
                  <li>
                    <span>개인정보취급관리자 : 하이라이트브랜즈</span>
                  </li>
                </ul>
                <ul className="f_info_ul">
                  <li>
                    <span>이메일 : imgak.park@hibs.co.kr</span>
                  </li>
                  <li>
                    <span>고객센터 : 031-8060-0290</span>
                  </li>
                  <li>
                    <span>대리점 입점 문의 : jongho.bae@hibs.co.kr</span>
                  </li>
                  <li>
                    <span>마케팅 제휴 : marketing@hibs.co.kr</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="f_copy">
              <ul>
                <li>
                  Copyright by 말본골프 | malbon golf. all rights reserved.
                </li>
                <li>
                  The Malbon golf's trademark, logo and other rights are solely
                  used by
                </li>
                <li>
                  Modern Works under license from Malbon golf. Hilight Brands is
                  a division within Modern Works.
                </li>
              </ul>
            </div>
          </div>
          <div className="footer_right">
            <div className="f_right_wrap">
              <ul className="f_right_ul">
                <li>
                  <a href="#">NOTICE</a>
                </li>
                <li>
                  <a href="#">REVIEW</a>
                </li>
                <li>
                  <a href="#">매장안내</a>
                </li>
              </ul>
              <ul className="f_right_ul">
                <li>
                  <a href="#">마이페이지</a>
                </li>
                <li>
                  <a href="#">주문배송조회</a>
                </li>
                <li>
                  <a href="#">위시리스트</a>
                </li>
                <li>
                  <a href="#">1:1 문의하기</a>
                </li>
              </ul>
              <ul className="f_right_ul">
                <li>
                  <a href="https://www.facebook.com/malbongolf.korea/" target="_blank">Facebook</a>
                </li>
                <li>
                  <a href="https://www.instagram.com/malbongolf.kr/" target="_blank">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;