type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type CompareTop = Pick<AllType, "name" | "color">;
type CompareBottom = Pick<AllType, "position" | "weight">;

function compare(top: CompareTop, bottom: CompareBottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
