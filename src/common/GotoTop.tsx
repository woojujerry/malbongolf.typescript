function Goto(): JSX.Element {
  return (
    <button
      type="button"
      className="gotoTop"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    />
  );
}

export default Goto;
