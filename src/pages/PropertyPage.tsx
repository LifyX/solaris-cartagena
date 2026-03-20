import { PropertyDetails } from "../components/PropertyDetails";
import { CoffeeSection } from "../components/CoffeeSection";
import { LuxuryAddons } from "../components/LuxuryAddons";

interface PropertyPageProps {
  t: any;
}

export function PropertyPage({ t }: PropertyPageProps) {
  return (
    <div className="pt-20">
      <PropertyDetails t={t} />
      <CoffeeSection t={t} />
      <LuxuryAddons t={t} />
    </div>
  );
}
