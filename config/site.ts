export const siteConfig = {
  name: "Khadija Hanif",
  title: "Khadija Hanif | Data Science & AI Portfolio",
  description:
    "Professional portfolio of Khadija Hanif, a Data Science undergraduate interested in Artificial Intelligence, Machine Learning, Trustworthy AI and intelligent systems.",
  // IMPORTANT: replace this with your real deployed URL once you have one
  // (e.g. https://khadija-hanif.netlify.app), or set the NEXT_PUBLIC_SITE_URL
  // environment variable in Netlify — that takes priority automatically.
  // Getting this right matters: it's what Open Graph/Twitter previews and
  // the sitemap use to build absolute links.
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://khadija-hanif.netlify.app",
  email: "khadijahanif575@gmail.com",
  phone: "+92 313 4746466",
  location: "Lahore, Pakistan",
  links: {
    github: "https://github.com/kadijahanif75",
    linkedin: "https://www.linkedin.com/in/khadijahanif75",
    // Replace with your actual LeetCode profile URL when ready.
    leetcode: "#",
  },
  profileImage: "/images/profile.jpg",
  ogImage: "/images/og-cover.png",
  cvPath: "/documents/Khadija-Hanif-CV.pdf",
  completionLetterPath: "/documents/internship-completion-letter.pdf",
};
