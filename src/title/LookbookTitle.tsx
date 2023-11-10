const Title_LOOK: React.FC = () => {
  let tst1: React.CSSProperties = {
    margin: "80px 0 70px 0",
    textAlign: "center",
    color: "#1a1a1a",
    fontSize: "26px",
    fontWeight: "700",
  };
  return (
    <>
      <h3 style={tst1} className="title-h3">
        LOOKBOOK
      </h3>
    </>
  );
};

export default Title_LOOK;
