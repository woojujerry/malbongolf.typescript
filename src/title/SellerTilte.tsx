const Title_SELLER: React.FC = () => {
  let tst1: React.CSSProperties = {
    marginTop: "100px",
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
      <h3 style={tst1} className="title-h3">TOP SELLER</h3>
      <p style={tst2} className="title-p">지금 가장 인기 있는</p>
    </>
  );
};

export default Title_SELLER;
