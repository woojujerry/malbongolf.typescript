const Title_CODI: React.FC = () => {
  let tst1: React.CSSProperties = {
    marginTop: "110px",
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
      <h3 style={tst1} className="title-h3">SPOTLIGHT CODI</h3>
      <p style={tst2} className="title-p">셋업으로 입어야 멋이나요!</p>
    </>
  );
};

export default Title_CODI;
