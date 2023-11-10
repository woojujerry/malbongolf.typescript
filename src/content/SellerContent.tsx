import { useState } from "react";
import { Nav } from "react-bootstrap";
import WOMEN from "../product/SellWomProd";
import MEN from "../product/SellMenProd";
import TOP from "../product/SellTopProd";
import BOTTOM from "../product/SellBotProd";
import SKIRT from "../product/SellSkiProd";
import ACC from "../product/SellAccProd";
import HAT from "../product/SellHatProd";

function TOPSELLER(): JSX.Element {
  let [tab, setTab] = useState<number>(0);
  return (
    <>
      <div className="seller_tap_nav">
        <Nav variant="underline" defaultActiveKey="link-1">
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(0);
              }}
              eventKey="link-1"
              className="seller_tap_nav_child"
            >
              <span>WOMAN</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(1);
              }}
              eventKey="link-2"
              className="seller_tap_nav_child"
            >
              <span>MEN</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(2);
              }}
              eventKey="link-3"
              className="seller_tap_nav_child"
            >
              <span>TOP</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(3);
              }}
              eventKey="link-4"
              className="seller_tap_nav_child"
            >
              <span>BOTTOM</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(4);
              }}
              eventKey="link-5"
              className="seller_tap_nav_child"
            >
              <span>SKIRT</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(5);
              }}
              eventKey="link-6"
              className="seller_tap_nav_child"
            >
              <span>ACC</span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              onClick={() => {
                setTab(6);
              }}
              eventKey="link-7"
              className="seller_tap_nav_child"
            >
              <span>HAT</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <TabContents tab={tab} />
    </>
  );
}

interface TabContentsProps {
  tab: number;
}

// TOP SELLER - TAB CLICK VIEW
function TabContents({ tab }: TabContentsProps): JSX.Element {
  return (
    <div>
      {
        [<WOMEN />, <MEN />, <TOP />, <BOTTOM />, <SKIRT />, <ACC />, <HAT />][
          tab
        ]
      }
    </div>
  );
}

export default TOPSELLER;
