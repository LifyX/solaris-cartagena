import { BookingSection } from "../components/BookingSection";

interface BookingPageProps {
  t: any;
}

export function BookingPage({ t }: BookingPageProps) {
  return (
    <div className="pt-20">
      <BookingSection t={t} />
    </div>
  );
}
