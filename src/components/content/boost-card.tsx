import { useMemo } from "react";
import { ItemCard } from "./item-card";
import { items } from "@/data/items";

export const BoostCard = () => {
  const boostItems = useMemo(
    () => items.filter((i) => i.category === "boost"),
    []
  );

  return (
    <ItemCard
      items={boostItems}
      bgGradient="bg-gradient-to-b from-neutral-400 to-neutral-300"
      category="boost"
    />
  );
};
