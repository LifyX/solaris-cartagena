import { AboutUs } from "../components/AboutUs";

interface AboutPageProps {
  t: any;
}

export function AboutPage({ t }: AboutPageProps) {
  return (
    <div className="pt-20">
      <AboutUs t={t} />
    </div>
  );
}