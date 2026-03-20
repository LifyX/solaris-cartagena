import { ContactUs } from "../components/ContactUs";

interface ContactPageProps {
  t: any;
}

export function ContactPage({ t }: ContactPageProps) {
  return (
    <div className="pt-20">
      <ContactUs t={t} />
    </div>
  );
}
