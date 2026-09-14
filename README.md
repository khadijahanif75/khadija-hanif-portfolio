# Khadija Hanif — Portfolio

A single-page portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. All frequently changing content lives in a handful of data/config files — you should never need to open a component to update your information.

## Install & run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm start
```

---

## Where everything lives

| What | File |
|---|---|
| Name, email, location, social links, CV/photo paths | `config/site.ts` |
| Projects | `data/projects.ts` |
| Certificates | `data/certificates.ts` |
| Experience / internship | `data/experience.ts` |
| Skills & research interests | `data/skills.ts` |
| Achievements (currently empty) | `components/Achievements.tsx` (the `items` array at the top) |
| Images, PDFs | `public/` |

Every list above renders automatically from its data file — components never need to be touched to add, remove, or edit an entry.

---

## Asset folder structure

```
public/
  images/
    profile.jpg
    projects/
      llm-analyzer.png
      medassist.png
      exam-prediction.png
      job-matching.png
    certificates/
      certificate-1.jpg
      certificate-2.jpg
  documents/
    Khadija-Hanif-CV.pdf
    internship-completion-letter.pdf
```
