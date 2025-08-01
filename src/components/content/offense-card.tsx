import { ItemCard } from "./item-card";
import { items } from "@/data/items";

export const OffenseCard = () => {
  const offenseItems = items.filter((i) => i.category === "offense");

  return (
    <ItemCard
      items={offenseItems}
      bgGradient="bg-gradient-to-b from-neutral-400 to-neutral-300"
      category="offense"
    />
  );
};
