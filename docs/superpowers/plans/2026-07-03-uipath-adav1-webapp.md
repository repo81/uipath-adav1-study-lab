# UiPath ADAv1 Web App Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build, commit, push, and deploy a Next.js ADAv1 study web app with an interactive practice exam.

**Architecture:** Create a static Next.js App Router app with local TypeScript content modules. Keep the page shell server-rendered and place exam/search state in focused client components.

**Tech Stack:** Next.js App Router, React, TypeScript, CSS modules/global CSS, GitHub CLI, Vercel CLI.

## Global Constraints

- No database or authentication.
- No actual exam dumps or protected exam content.
- Do not store secrets in the repository.
- Keep the app deployable with standard Vercel Next.js detection.
- Verify locally with `npm run build`.

---

### Task 1: Scaffold The Next.js Application

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `src/app/layout.tsx`
- Create: `src/app/page.tsx`
- Create: `src/app/globals.css`
- Create: `.gitignore`

**Interfaces:**
- Produces: working Next.js app root with `npm run dev`, `npm run build`, and `npm run lint`.

- [ ] **Step 1: Scaffold with create-next-app**

Run:

```bash
npx create-next-app@latest . --yes --force --typescript --eslint --app --src-dir --import-alias "@/*" --turbopack --use-npm
```

Expected: Next.js files exist under `src/app`.

- [ ] **Step 2: Preserve the study resource**

Confirm:

```bash
test -f uipath_adav1_study_resource.md
```

Expected: exit code 0.

### Task 2: Add Study And Exam Data

**Files:**
- Create: `src/lib/study-data.ts`
- Create: `src/lib/exam-data.ts`

**Interfaces:**
- Produces: `studyTopics`, `examQuestions`, `topicLabels`, and TypeScript types consumed by UI components.

- [ ] **Step 1: Define typed study data**

Create sections for ADAv1 exam facts, study plan, knowledge base topics, source links, and final checklist.

- [ ] **Step 2: Define typed exam data**

Create 45 multiple-choice questions grouped by topic, each with options, correct answer, and explanation.

### Task 3: Build Interactive UI Components

**Files:**
- Create: `src/components/study-app.tsx`
- Create: `src/components/exam-panel.tsx`
- Create: `src/components/study-panel.tsx`
- Create: `src/components/progress-summary.tsx`

**Interfaces:**
- Consumes: `studyTopics` and `examQuestions`.
- Produces: tabbed study/exam interface, answer selection, scoring, reset, and weak-area output.

- [ ] **Step 1: Implement study search and topic navigation**

Use a client component with local state for active tab, active topic, and search query.

- [ ] **Step 2: Implement exam answer selection**

Track selected answers by question ID, show correctness after selection, and compute score by topic.

- [ ] **Step 3: Implement reset**

Provide a button that clears selected answers and returns the exam to unanswered state.

### Task 4: Style The App

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Produces: focused, responsive, production-grade study UI.

- [ ] **Step 1: Add global design tokens**

Use a restrained light interface with strong typography, high contrast, and non-monochrome accents.

- [ ] **Step 2: Build responsive layout**

Support desktop and mobile without overlapping text, with stable controls and readable cards.

### Task 5: Verify, Commit, Push, And Deploy

**Files:**
- Modify: repository state only.

**Interfaces:**
- Produces: GitHub repository and Vercel deployment when CLIs are authenticated.

- [ ] **Step 1: Run local checks**

Run:

```bash
npm run lint
npm run build
```

Expected: both commands exit 0.

- [ ] **Step 2: Commit app**

Run:

```bash
git add -A
git commit -m "feat: build uipath adav1 study app"
```

Expected: commit created.

- [ ] **Step 3: Push to GitHub**

Use `gh auth status`, create a GitHub repo if needed, add `origin`, and push `main`.

- [ ] **Step 4: Deploy to Vercel**

Use `vercel deploy --prod --yes` if authenticated. If not authenticated, report the blocker and exact commands.

## Self-Review

- Spec coverage: app, interactive exam, scoring, weak-area summary, GitHub, Vercel, and local verification are covered.
- Placeholder scan: no placeholders remain.
- Type consistency: study and exam data modules are consumed by the listed UI components.
