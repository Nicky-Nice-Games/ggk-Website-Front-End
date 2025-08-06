import { ItemCard } from "./item-card";
import { items } from "@/data/items";

export const DefenseCard = () => {
  const defenseItems = items.filter((i) => i.category === "defense");

  return (
    <ItemCard
      items={defenseItems}
      bgGradient="bg-gradient-to-b from-neutral-400 to-neutral-300"
      category="defense"
    />
  );
};
