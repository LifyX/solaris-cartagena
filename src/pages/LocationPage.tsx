import { MapSection } from "../components/MapSection";

interface LocationPageProps {
  t: any;
}

export function LocationPage({ t }: LocationPageProps) {
  return (
    <div className="pt-20">
      <MapSection t={t} />
    </div>
  );
}
