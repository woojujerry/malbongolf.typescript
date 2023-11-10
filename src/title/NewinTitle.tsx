const Title_NEWIN: React.FC = () => {
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
      <h3 style={tst1} className="title-h3">NEW IN</h3>
      <p style={tst2} className="title-p">
        이번 주, 새롭게 공개된 말본골프의 컬렉션을 지금 바로 확인하세요.
      </p>
    </>
  );
};

export default Title_NEWIN;