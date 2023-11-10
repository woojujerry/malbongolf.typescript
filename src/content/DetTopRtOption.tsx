import { useState } from "react";

function DETOPTION(): JSX.Element {
  let [selectSize, setSelectSize] = useState("SIZE");
  let newSize = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectSize(e.target.value);
  };
  return (
    <div className="det_top_rt_option">
      <div className="row" id="det_opt_color">
        <p>색상</p>
        <div className="det_opt_color_list">
          <div className="det_opt_color_img">
            <img src="/malbongolf.typescript/img/10.color/1.jpg" />
          </div>
          <div className="det_opt_color_img">
            <img src="/malbongolf.typescript/img/10.color/2.jpg" />
          </div>
          <div className="det_opt_color_img">
            <img src="/malbongolf.typescript/img/10.color/3.jpg" />
          </div>
          <div className="det_opt_color_img">
            <img src="/malbongolf.typescript/img/10.color/4.jpg" />
          </div>
          <div className="det_opt_color_img">
            <img src="/malbongolf.typescript/img/10.color/5.jpg" />
          </div>
        </div>
      </div>
      <div className="det_opt_size">
        <p>사이즈</p>
        <form>
          <select value={selectSize} onChange={newSize} className="det_opt_box">
            <option value="SIZE">SIZE</option>
            <option value="S (230 ~ 240 / 80 ~ 85)">
              S (230 ~ 240 / 80 ~ 85)
            </option>
            <option value="M (250 ~ 260 / 90 ~ 95)">
              M (250 ~ 260 / 90 ~ 95)
            </option>
            <option value="L (270 ~ 280 / 100 ~ 105)">
              L (270 ~ 280 / 100 ~ 105)
            </option>
            <option value="XL (290 ~ 300 / 110 ~ 115)">
              XL (290 ~ 300 / 110 ~ 115)
            </option>
          </select>
        </form>
      </div>
      <p className="det_optInfo">(최소 주문 수량 1개 이상)</p>
    </div>
  );
}

export default DETOPTION;
