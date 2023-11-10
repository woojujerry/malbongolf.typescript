const Title_BESTITEM: React.FC = () => {
  let tst1: React.CSSProperties = {
    marginTop: "80px",
    textAlign: "center",
    color: "#1a1a1a",
    fontSize: "40px",
    fontWeight: "700",
  };
  let tst2: React.CSSProperties = {
    marginBottom: "40px",
    textAlign: "center",
    color: "#1a1a1a",
    fontSize: "16px",
    fontWeight: "300",
  };
  return (
    <>
      <h3 style={tst1} className="title-h3">BEST ITEM</h3>
      <p style={tst2} className="title-p">지금 말본 골프의 인기 있는 상품들을 만나보세요.</p>
    </>
  );
};

export default Title_BESTITEM;
