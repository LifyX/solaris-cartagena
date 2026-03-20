import { FAQs } from "../components/FAQs";
import { ContactForm } from "../components/ContactForm";

interface FAQPageProps {
  t: any;
}

export function FAQPage({ t }: FAQPageProps) {
  return (
    <div className="pt-20">
      <ContactForm t={t} />
      <FAQs t={t} />
    </div>
  );
}