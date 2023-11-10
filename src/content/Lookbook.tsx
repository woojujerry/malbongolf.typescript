import Title_LOOK from "../title/LookbookTitle";
import { Link } from "react-router-dom";

let Lookbook = (): JSX.Element => {
  return (
    <>
      <Title_LOOK />
      <div className="container">
        <div className="row" style={{ marginTop: "40px" }}>
          <LOOK />
        </div>
      </div>
    </>
  );
};

function LOOK() {
    return(
        <>
            <div className="col-md-6">
                <Link to="/detail/72">
                    <img src="/malbongolf.typescript/img/13.lookbook/1.jpg" width="100%"/>
                    <h3 className="look_h3">Malbon Golf</h3>
                    <p className="look_p">MALBON 23 1st WINTER COLLECTION</p>
                </Link>
            </div>
            <div className="col-md-6">
            <Link to="/detail/68">
                    <img src="/malbongolf.typescript/img/13.lookbook/2.jpg" width="100%"/>
                    <h3 className="look_h3">Malbon Golf</h3>
                    <p className="look_p">MALBON 23 PRE-FALL COLLECTION V2.</p>
                </Link>
            </div>
            <div className="col-md-6">
            <Link to="/detail/22">
                    <img src="/malbongolf.typescript/img/13.lookbook/3.jpg" width="100%"/>
                    <h3 className="look_h3">Malbon Golf</h3>
                    <p className="look_p">MALBON 23 PRE-FALL COLLECTION</p>
                </Link>
            </div>
            <div className="col-md-6">
            <Link to="/detail/70">
                    <img src="/malbongolf.typescript/img/13.lookbook/4.jpg" width="100%"/>
                    <h3 className="look_h3">Malbon Golf</h3>
                    <p className="look_p">MALBON 23 SUMMER COLLECTION</p>
                </Link>
            </div>
            <div className="col-md-6">
            <Link to="/detail/30">
                    <img src="/malbongolf.typescript/img/13.lookbook/5.jpg" width="100%"/>
                    <h3 className="look_h3">Malbon Golf</h3>
                    <p className="look_p">MALBON 23 PRE-SUMMER COLLECTION</p>
                </Link>
            </div>
            <div className="col-md-6">
            <Link to="/detail/35">
                    <img src="/malbongolf.typescript/img/13.lookbook/6.jpg" width="100%"/>
                    <h3 className="look_h3">Malbon Golf</h3>
                    <p className="look_p">MALBON 23 Spring Collection</p>
                </Link>
            </div>
        </>
    );
}

export default Lookbook;
