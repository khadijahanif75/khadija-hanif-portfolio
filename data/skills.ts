export interface SkillGroup {
  category: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming",
    skills: ["Python", "SQL", "JavaScript", "TypeScript"],
  },
  {
    category: "Machine Learning",
    skills: [
      "scikit-learn",
      "XGBoost",
      "Model Evaluation",
      "Feature Engineering",
      "Data Analysis",
    ],
  },
  {
    category: "AI & Explainability",
    skills: [
      "LLMs",
      "LLM Agents",
      "LLM Evaluation",
      "Reliability Testing",
      "SHAP",
      "NLP",
    ],
  },
  {
    category: "Backend & Applications",
    skills: ["FastAPI", "Flask", "Streamlit", "React", "PostgreSQL", "Supabase"],
  },
  {
    category: "Testing & Engineering",
    skills: ["Pytest", "Unit Testing", "Debugging", "Error Handling"],
  },
  {
    category: "Databases & Tools",
    skills: ["SQLite", "MySQL", "Git", "GitHub", "Docker", "VS Code", "Jupyter Notebook"],
  },
];

export const researchInterests: { title: string; description: string }[] = [
  {
    title: "Machine Learning",
    description:
      "Building and evaluating models that generalize reliably beyond the training set.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Designing intelligent systems that reason over and act on real-world data.",
  },
  {
    title: "Trustworthy AI",
    description:
      "Studying how AI systems can be made dependable, safe, and consistent in behavior.",
  },
  {
    title: "Explainable AI",
    description:
      "Making model decisions interpretable, using tools like SHAP to surface contributing factors.",
  },
  {
    title: "AI Reliability",
    description:
      "Measuring and improving how consistently AI systems, including LLM agents, perform under real conditions.",
  },
  {
    title: "NLP",
    description:
      "Working with language-based data and models for understanding and generation tasks.",
  },
  {
    title: "LLM Evaluation",
    description:
      "Developing structured methods to trace, benchmark, and analyze failure modes in LLM-based agents.",
  },
  {
    title: "Intelligent Systems",
    description:
      "Connecting ML components into end-to-end systems that support real decisions.",
  },
];

export const certifications: { title: string; organization: string }[] = [
  { title: "Google AI Essentials", organization: "Google" },
  { title: "Intermediate SQL", organization: "DataCamp" },
];
