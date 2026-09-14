import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CertificateCard } from "@/components/CertificateCard";
import { certificates } from "@/data/certificates";
import { certifications } from "@/data/skills";
import { publicFileExists } from "@/lib/files";

export function Certificates() {
  return (
    <section id="certificates" className="section section-rule">
      <Reveal>
        <SectionHeading
          eyebrow="Certificates"
          title="Certifications"
          description="Add a new certificate by editing data/certificates.ts and dropping the image into public/images/certificates/."
        />
      </Reveal>

      {certificates.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, i) => (
            <Reveal key={cert.id} delay={(i % 3) * 0.06}>
              <CertificateCard
                certificate={cert}
                imageExists={publicFileExists(cert.image)}
              />
            </Reveal>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <span key={cert.title} className="chip">
              {cert.title} — {cert.organization}
            </span>
          ))}
        </div>
      )}
    </section>
  );
}
