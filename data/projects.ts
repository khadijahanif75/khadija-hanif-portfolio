export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  period: string;
  category: "Independent Research" | "Academic Project" | "Internship Project";
  description: string;
  technologies: string[];
  features: string[];
  metrics?: ProjectMetric[];
  image: string;
  github?: string;
  demo?: string;
}

// To add a new project, append an object shaped like this to the array
// below — no component changes needed:
//
// {
//   id: "unique-slug",
//   title: "Project Title",
//   period: "2026",
//   category: "Academic Project", // or "Independent Research" / "Internship Project"
//   description: "One or two sentences on what it does.",
//   technologies: ["Python", "FastAPI"],
//   features: ["Feature one", "Feature two"],
//   image: "/images/projects/example.png",
//   github: "#",   // optional — omit entirely if you don't have a link yet
//   demo: "#",     // optional — omit entirely if you don't have a link yet
// }
export const projects: Project[] = [
  {
    id: "llm-agent-reliability-analyzer",
    title: "LLM Agent Trace & Reliability Analyzer",
    period: "2026",
    category: "Independent Research",
    description:
      "A structured observability and tracing framework for tool-using LLM agents, built to systematically evaluate agent reliability rather than just outputs. It captures step-level decisions, tool calls, latency, retries, and errors, then surfaces failure patterns through an analysis pipeline and dashboard.",
    technologies: [
      "Python",
      "Pandas",
      "Pytest",
      "SQLite",
      "Streamlit",
      "Docker",
    ],
    features: [
      "Custom agent loop with an LLM client and tool dispatcher (calculator, search, and database tools)",
      "Trace logging of prompts, tool inputs/outputs, errors, retries, latency, and step counts",
      "Automated ground-truth benchmark and experiment pipeline",
      "Pandas-based reliability analysis and failure taxonomy",
      "Interactive Streamlit dashboard for trace-level debugging",
    ],
    metrics: [
      { label: "Eval cases", value: "17" },
      { label: "Recorded trajectories", value: "82" },
      { label: "Task success rate", value: "95.12%" },
      { label: "Avg. latency", value: "62.87 ms" },
      { label: "Tool-selection accuracy", value: "54.92%" },
    ],
    image: "/images/projects/llm-analyzer.png",
  },
  {
    id: "medassist",
    title: "MedAssist",
    period: "2026",
    category: "Academic Project",
    description:
      "An AI-assisted medical decision-support prototype for symptom-based disease prediction, built with role-based workflows for patients, doctors, pharmacists, and administrators, and explainability built into the prediction pipeline.",
    technologies: [
      "Python",
      "XGBoost",
      "scikit-learn",
      "SHAP",
      "FastAPI",
      "SQL",
      "React",
    ],
    features: [
      "Disease classification model across 41 disease classes and 134 symptom features",
      "SHAP-based explainability for feature contributions behind predictions",
      "Backend services and database integration for patient and workflow data",
      "Scenario-based testing across 8 clinical cases",
      "Role-based workflows for patients, doctors, pharmacists, and administrators",
    ],
    metrics: [
      { label: "Test accuracy", value: "98.97%" },
      { label: "OOB accuracy", value: "98.64%" },
      { label: "Training samples", value: "5,330" },
      { label: "Disease classes", value: "41" },
    ],
    image: "/images/projects/medassist.png",
  },
  {
    id: "exam-score-prediction",
    title: "Exam Score Prediction & Smart Student Monitoring System",
    period: "2025",
    category: "Academic Project",
    description:
      "A machine learning application for predicting student examination performance, comparing regression models and building an interactive interface for exploring predictions.",
    technologies: ["Python", "SQL", "Flask", "Streamlit"],
    features: [
      "Data preprocessing, feature engineering, and model training pipeline",
      "Comparison of regression models with Random Forest Regressor selected as best-performing",
      "80/20 train-test split evaluation",
      "Interactive Streamlit interface for generating and exploring predictions",
    ],
    metrics: [
      { label: "R²", value: "0.9882" },
      { label: "RMSE", value: "2.08" },
      { label: "MAE", value: "1.61" },
      { label: "Records", value: "1,000" },
    ],
    image: "/images/projects/exam-prediction.png",
  },
  {
    id: "ai-job-matching-platform",
    title: "AI Job Matching Platform",
    period: "2026",
    category: "Internship Project",
    description:
      "A full-stack, containerized job matching platform developed during her internship, covering candidate, matching, employer, and parsing services with interpretable match scoring.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Supabase",
      "TypeScript",
      "Docker",
      "Git",
    ],
    features: [
      "Candidate, matching, employer, and parsing services",
      "Compatibility scoring with structured, explainable match reasons",
      "Score breakdowns exposing contributing factors",
      "Cross-service debugging and integration testing",
    ],
    image: "/images/projects/job-matching.png",
  },
];
