function CODI (): JSX.Element {
  return(
    <div className="container">
                  <div className="row">
                    <CODIBOX />
                  </div>
                </div>
  );
}

function CODIBOX() {
  return (
    <>
      <div className="col-md-4">
        <div className="codi_box">
          <div className="codi_box_top">
            <div className="top_img" style={{ width: "100%"}}>
              <img src="/malbongolf.typescript/img/7.codi/1.color/0.jpg" width="100%" />
            </div>
            <div className="top_txt">
              <h5>SEASON COLOR</h5>
              <p>가을 시즌에 맞는 컬러의 룩으로 라운딩을 즐겨보세요!</p>
            </div>
          </div>
          <div className="codi_box_middle">
            <img src="/malbongolf.typescript/img/0.icon/mp_ban_bg.png" width="100%" />
          </div>
          <div className="codi_box_bottom">
            <div className="bot_first">
              <div className="bot_n_img">
                <img src="/malbongolf.typescript/img/7.codi/1.color/1.jpg" width="100%" />
              </div>
              <div className="bot_n_txt">
                <h5>버킷 디테처블 후드 자켓 IVORY (WOMAN)</h5>
                <p>M3322PJK16IVY</p>
                <p>499,000원</p>
              </div>
            </div>
            <div className="bot_second">
              <div className="bot_n_img">
                <img src="/malbongolf.typescript/img/7.codi/1.color/2.jpg" width="100%" />
              </div>
              <div className="bot_n_txt">
                <h5>모크넥 반팔 니트 ORANGE (WOMAN)</h5>
                <p>M3322PKT12ORG</p>
                <p>299,000원</p>
              </div>
            </div>
            <div className="bot_third">
              <div className="bot_n_img">
                <img src="/malbongolf.typescript/img/7.codi/1.color/3.jpg" width="100%" />
              </div>
              <div className="bot_n_txt">
                <h5>2단 플리츠 스커트 BEIGE (WOMAN)</h5>
                <p>M3322PSK16BEI</p>
                <p>359,000원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="codi_box">
          <div className="codi_box_top">
            <div className="top_img">
              <img src="/malbongolf.typescript/img/7.codi/2.signature/0.jpg" width="100%" />
            </div>
            <div className="top_txt">
              <h5>SIGNATURE GRAPHIC</h5>
              <p>말본의 시그니처 그래픽으로 유니크하게</p>
            </div>
          </div>
          <div className="codi_box_middle">
            <img src="/malbongolf.typescript/img/0.icon/mp_ban_bg.png" width="100%" />
          </div>
          <div className="codi_box_bottom">
            <div className="bot_first">
              <div className="bot_n_img">
                <img src="/malbongolf.typescript/img/7.codi/2.signature/1.jpg" width="100%" />
              </div>
              <div className="bot_n_txt">
                <h5>빅 버킷 로고 스웨터 BROWN (MAN)</h5>
                <p>M3321PKT04BRN</p>
                <p>439,000원</p>
              </div>
            </div>
            <div className="bot_second">
              <div className="bot_n_img">
                <img src="/malbongolf.typescript/img/7.codi/2.signature/2.jpg" width="100%" />
              </div>
              <div className="bot_n_txt">
                <h5>빅 버킷 포인트 니트 BROWN (WOMAN)</h5>
                <p>M3322PKT15BRN</p>
                <p>439,000원</p>
              </div>
            </div>
            <div className="bot_third">
              <div className="bot_n_img">
                <img src="/malbongolf.typescript/img/7.codi/2.signature/3.jpg" width="100%" />
              </div>
              <div className="bot_n_txt">
                <h5>유틸리티 플리츠 스커트 IVORY (WOMAN)</h5>
                <p>M3322PSK17IVY</p>
                <p>399,000원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="codi_box">
          <div className="codi_box_top">
            <div className="top_img">
              <img src="/malbongolf.typescript/img/7.codi/3.newSeason/0.jpg" width="100%" />
            </div>
            <div className="top_txt">
              <h5>NEW SEASON WANTED</h5>
              <p>
                필드 위에서의 SPOTLIGHT. 새로운 감성의 컬렉션을 지금 확인하세요.
              </p>
            </div>
          </div>
          <div className="codi_box_middle">
            <img src="/malbongolf.typescript/img/0.icon/mp_ban_bg.png" width="100%" />
          </div>
          <div className="codi_box_bottom">
            <div className="bot_first">
              <div className="bot_n_img">
                <img src="/malbongolf.typescript/img/7.codi/3.newSeason/1.jpg" width="100%" />
              </div>
              <div className="bot_n_txt">
                <h5>버킷 디테처블 반집업 아노락 BEIGE (MAN)</h5>
                <p>M3321PJK04BEI</p>
                <p>459,000원</p>
              </div>
            </div>
            <div className="bot_second">
              <div className="bot_n_img">
                <img src="/malbongolf.typescript/img/7.codi/3.newSeason/2.jpg" width="100%" />
              </div>
              <div className="bot_n_txt">
                <h5>유틸리티 랩 스커트 팬츠 DARK BEIGE (WOMAN)</h5>
                <p>M3322PHP11BGD</p>
                <p>319,000원</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CODI;