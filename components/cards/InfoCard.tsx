import { Icon } from "@/utils";

export const InfoCard = () => {
  return (
    <article className="flex items-center gap-2">
      {Icon({
        name: "CiDiscount1",
        library: "ci",
        className: "text-4xl text-emerald-500",
      })}

      <div>
        <h1 className="font-semibold">64% descuento</h1>
        <p className="text-gray-500 text-xs">Save your 64% money with us</p>
      </div>
    </article>
  );
};
