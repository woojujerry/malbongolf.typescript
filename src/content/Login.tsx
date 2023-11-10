function Login (): JSX.Element {
    return(
        <div className="login">
            <div className="login_box">
                <h1>로그인</h1>
                <form>
                    <fieldset>
                        <div className="member_box">
                            <input type="text" name="member_id" placeholder="아이디" id="login_id" className="member_box_input" />
                            <input type="password" name="member_pw" placeholder="비밀번호" id="login_pw" className="member_box_input" />
                        </div>
                        <div className="member_search">
                            <div className="idpw_search">
                                <a href="#">아이디/비밀번호 찾기</a>
                            </div>
                            <div className="member_join">
                                <a href="#">회원가입 하기</a>
                            </div>
                        </div>
                        <div className="member_login">
                            <input type="submit" value="로그인"/>
                        </div>
                    </fieldset>
                </form>
                <div className="login_form">
                    <div className="sns_box">
                        <p>SNS 계정으로 로그인하기</p>
                        <ul className="sns_img">
                            <li>
                                <a href="#">
                                    <img src="/malbongolf.typescript/img/0.icon/ico_naver.png" />
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src="/malbongolf.typescript/img/0.icon/ico_kakaotalk.png" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="malbon_box">
                        <p>비회원 주문 조회</p>
                        <ul className="malbon_img">
                            <li>
                                <a href="#">
                                    <img src="/malbongolf.typescript/img/0.icon/ico_malbon.png" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;