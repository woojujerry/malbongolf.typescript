import { Link } from "react-router-dom";

function PROMOTION(): JSX.Element {
  return (
    <div className="container">
      <div className="row" style={{ marginTop: "40px" }}>
        <PROMOTIONBANNER />
      </div>
    </div>
  );
}

// BRAND PROMOTION 배너
function PROMOTIONBANNER() {
  return (
    <>
      <Link to="/detail/37" className="col-md-6">
        <img src="/malbongolf.typescript/img/4.promotion/1.jpg" width="100%" />
      </Link>
      <Link to="/detail/29" className="col-md-6">
        <img src="/malbongolf.typescript/img/4.promotion/2.jpg" width="100%" />
      </Link>
    </>
  );
}

export default PROMOTION;
