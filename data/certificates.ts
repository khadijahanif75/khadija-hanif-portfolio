export interface Certificate {
  id: string;
  title: string;
  organization: string;
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
    organization: "Google",
    date: "2026",
    image: "/images/certificates/certificate-1.jpg",
    // credentialUrl: "#",
  },
  {
    id: "intermediate-sql",
    title: "Intermediate SQL",
    organization: "DataCamp",
    date: "2025",
    image: "/images/certificates/certificate-2.jpg",
    // credentialUrl: "#",
  },
];
