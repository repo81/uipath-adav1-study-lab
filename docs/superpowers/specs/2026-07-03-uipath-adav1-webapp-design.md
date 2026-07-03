# UiPath ADAv1 Web App Design

## Goal

Build a Vercel-ready Next.js web app from the existing UiPath ADAv1 study resource, with a readable knowledge base and an interactive practice exam that supports selectable answers, scoring, and weak-area review.

## Audience

The primary user is an intermediate UiPath learner preparing for the ADAv1 Automation Developer Associate exam in about two weeks. The app should be fast to study from, concise, and practical rather than marketing-oriented.

## Architecture

Use a single Next.js App Router application. Keep exam and knowledge-base data as local TypeScript modules so the app is static, inexpensive to host, and easy to deploy on Vercel without a database. Use one client component for interactive exam state and server-render the surrounding page shell.

## Interface

The first screen is the actual study dashboard, not a landing page. It includes a compact progress header, tabbed navigation for Study Guide and Practice Exam, topic navigation, and a scoring panel. The visual style should feel focused and exam-prep oriented: quiet, dense, legible, and polished.

## Core Features

- Knowledge base grouped by ADAv1 topic.
- Topic filter/search for study content.
- Interactive exam grouped by topic.
- Clickable multiple-choice answers.
- Immediate correctness feedback after answering.
- Concise explanation for the correct answer.
- Topic-level and overall scoring.
- Weak-area summary based on topic performance.
- Reset exam action.
- Official source links for UiPath certification references.

## Deployment

Initialize the repository, commit the app, push it to GitHub, and deploy to Vercel if the local `gh` and `vercel` CLIs are authenticated. If either CLI is not authenticated, leave the project ready with exact next commands.

## Constraints

- No database or authentication.
- No actual exam dumps or protected exam content.
- Do not store secrets in the repository.
- Keep the app deployable with standard Vercel Next.js detection.
- Verify locally with `npm run build`.
