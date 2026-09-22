export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

// Add a new certificate by adding an object here and dropping the
// matching image into public/images/certificates/.
// You do not need to touch any component to add one.
export const certificates: Certificate[] = [
  {
    id: "google-ai-essentials",
    title: "Google AI Essentials",
    issuer: "Google",
    date: "2025",
    image: "/images/certificates/certificate-1.jpg",
    credentialUrl: "https://coursera.org/share/d04fc4165c09be8e5529105c66dee424"
  },
  {
    id: "google-prompting-essentials",
    title: "Google Prompting Essentials",
    issuer: "Google",
    date: "2025",
    image: "/images/certificates/certificate-2.jpg",
    credentialUrl: "https://coursera.org/share/59f9b7876d13dd139c0e3a29297f7a06"
  },
  {
    id: "intermediate-sql",
    title: "Intermediate SQL",
    issuer: "DataCamp",
    date: "2025",
    image: "/images/certificates/certificate-3.jpg",
  },
  
];
