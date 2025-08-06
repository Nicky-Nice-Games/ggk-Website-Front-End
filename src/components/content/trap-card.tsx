import { ItemCard } from "./item-card";
import { items } from "@/data/items";

export const TrapCard = () => {
  const trapItems = items.filter((i) => i.category === "trap");

  return (
    <ItemCard
      items={trapItems}
      bgGradient="bg-gradient-to-b from-neutral-400 to-neutral-300"
      category="trap"
    />
  );
};
