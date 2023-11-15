type isacktiv = {
  isActive: boolean;
  isNotActive: Function;
};
function Icone({ isActive, isNotActive }: isacktiv) {
  function ClickIcon() {
    if (isActive == true) {
      isNotActive(false);
      console.log("1");
    } else {
      isNotActive(true);
      console.log("0");
    }
  }

  return (
    <div
      onClick={() => {
        ClickIcon();
      }}
      className="block sm:hidden "
    >
      <div className="rotate-90 px-2 font-bold text-lg ">|||</div>
    </div>
  );
}

export default Icone;
