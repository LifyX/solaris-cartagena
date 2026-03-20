import { LocalExperiences } from "../components/LocalExperiences";

interface ExperiencesPageProps {
  t: any;
}

export function ExperiencesPage({ t }: ExperiencesPageProps) {
  return (
    <div className="pt-20">
      <LocalExperiences t={t} />
    </div>
  );
}
