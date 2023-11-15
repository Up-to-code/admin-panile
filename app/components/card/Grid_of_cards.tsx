import Card from "./Card";

function Grid_of_cards() {
  return (
    <div className="py-8 grid grid-cols-1 md:grid-cols-2  gap-y-10  ">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Grid_of_cards;
