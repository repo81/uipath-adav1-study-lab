# Exam Analytics Report Design

## Goal

Add a client-side report to the UiPath ADAv1 practice exam that appears when all questions are answered and summarizes timing, scoring, pacing, answer changes, and weak areas.

## Design

The exam timer starts when the Practice Exam tab is opened for the first time or when the user resets the exam. Each question records the duration from the previous first answer to that question's first answer. Re-answering a question updates the selected answer and increments a change count, but it does not overwrite the first-answer duration.

## Report Content

- Total elapsed time.
- Average time per answered question.
- Fastest and slowest answered questions.
- Correct-answer average time and missed-answer average time.
- Pace versus the 90-minute exam window.
- Topic score breakdown.
- Per-question timing table with selected answer, correct answer, result, duration, answer order, and changes.

## Constraints

- Client-side only.
- No database, accounts, cookies, or external analytics service.
- Reset clears answers and timing data.
- Existing score behavior remains intact.
