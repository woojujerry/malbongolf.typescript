import { useState } from "react";
import "./css/App.css";
import { Routes, Route} from 'react-router-dom'
/* common */
import Header from "./common/Header";
import Footer from "./common/Footer";
import Goto from "./common/GotoTop"
import AllData from "./data/AllData";
/* main */
import Slider from "./content/Slider";
import Title_NEWIN from "./title/NewinTitle";
import NEWIN from "./product/NewInProduct";
import Title_PROMOTION from "./title/PromotionTitle";
import PROMOTION from "./content/PromotionImg";
import Title_SELLER from "./title/SellerTilte";
import TOPSELLER from "./content/SellerContent";
import BannerSlide from "./content/BannerSlide";
import Title_CODI from "./title/CodiTitle";
import CODI from "./content/CodiContent";
import Title_BESTITEM from "./title/BestitemTitle";
import BESTITEM from "./product/BestItemProduct";
/* sub */
import Detail from "./content/Detail";
import Cart from"./content/Cart";
import Login from "./content/Login";
import NotFound from "./content/Notfound";
import LookBook from "./content/Lookbook";
import Thanksarchive from "./content/Thanks";
/* export */
export interface DataArr {
  id: number;
  title: string;
  imgUrl: string;
  imgUrl2: string;
  imgDet1: string;
  imgDet2: string;
  imgDet3: string;
  content: string;
  price: number;
}

function App(): JSX.Element {
  let [product] = useState<DataArr[]>(AllData);
  return (
    <div className="App">
      <>
        {/* HEADER */}
        <Header />
        <Routes>
          {/* MAIN PAGE */}
          <Route path="/" element={<div>
            {/* SLDIER */}
            <Slider />
            {/* NEW IN - 타이틀, 상품, MORE 버튼 */}
            <Title_NEWIN />
            <NEWIN/>
            {/* BRAND PROMOTION - 배너 */}
            <Title_PROMOTION />
            <PROMOTION/>
            {/* TOP SELLER - 타이틀, 탭, 상품 */}
            <Title_SELLER />
            <TOPSELLER/>
            {/* BANNER SLIDE */}
            <BannerSlide />
            {/* SPOTLIGHT CODI - 타이틀, 코디 박스(콘텐츠) */}
            <Title_CODI />
            <CODI/>
            {/* BEST ITEM - 타이틀, 콘테이너(콘텐츠) */}
            <Title_BESTITEM />
            <BESTITEM/>
          </div>} />
          <Route path="/detail/:id" element={<Detail product={product}/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/lookbook" element={<LookBook />} />
          <Route path="/gallery" element={<Thanksarchive />} />
        </Routes>
        {/* FOOTER */}
        <Footer />
        <Goto/>
      </>
    </div>
  );
}

export default App;
