export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  type: string; // e.g. "Internship", "Part-time", "Research"
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  responsibilities: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "oriental-nippon",
    role: "Data Science / AI Intern",
    organization: "Oriental Nippon Development",
    type: "Internship",
    duration: "2026",
    location: "Lahore, Pakistan",
    description:
      "Built backend services for an AI-powered job matching platform, focused on compatibility scoring and explainable match outputs.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "TypeScript",
      "Docker",
      "Git",
    ],
    responsibilities: [
      "Developed and maintained the Candidate and Matching services for an AI-powered job matching platform, implementing compatibility scoring and structured match explanations.",
      "Designed matching outputs to expose score components and contributing factors, supporting more interpretable analysis of candidate-job compatibility.",
      "Diagnosed and resolved integration issues across Candidate, Matching, Employer, and Parsing services, including API validation, database schemas, structured data storage, and inter-service communication.",
      "Performed end-to-end debugging and testing of interconnected backend workflows, collaborating with team members to integrate and troubleshoot service components.",
    ],
  },
];

// Internship completion letter — place the PDF at
// public/documents/internship-completion-letter.pdf
export const completionLetter = {
  available: true,
  label: "Oriental Nippon Development — Internship Completion Letter",
};
