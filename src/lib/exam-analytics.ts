import { examQuestions, topicLabels } from "./exam-data";

export type QuestionTiming = {
  questionId: number;
  selectedIndex: number;
  durationMs: number;
  answeredAt: number;
  order: number;
  changes: number;
};

export type ExamAnalytics = {
  startedAt: number | null;
  lastFirstAnswerAt: number | null;
  timings: Record<number, QuestionTiming>;
};

export type TimedQuestion = QuestionTiming & {
  prompt: string;
  topic: string;
  topicLabel: string;
  correctIndex: number;
  isCorrect: boolean;
};

export const emptyAnalytics: ExamAnalytics = {
  startedAt: null,
  lastFirstAnswerAt: null,
  timings: {},
};

export function recordQuestionAnswer(
  analytics: ExamAnalytics,
  questionId: number,
  selectedIndex: number,
  answeredAt: number,
): ExamAnalytics {
  const existing = analytics.timings[questionId];

  if (existing) {
    return {
      ...analytics,
      timings: {
        ...analytics.timings,
        [questionId]: {
          ...existing,
          selectedIndex,
          answeredAt,
          changes: existing.changes + 1,
        },
      },
    };
  }

  const startedAt = analytics.startedAt ?? answeredAt;
  const segmentStartedAt = analytics.lastFirstAnswerAt ?? startedAt;
  const durationMs = Math.max(0, answeredAt - segmentStartedAt);

  return {
    startedAt,
    lastFirstAnswerAt: answeredAt,
    timings: {
      ...analytics.timings,
      [questionId]: {
        questionId,
        selectedIndex,
        durationMs,
        answeredAt,
        order: Object.keys(analytics.timings).length + 1,
        changes: 0,
      },
    },
  };
}

export function getTimedQuestions(analytics: ExamAnalytics): TimedQuestion[] {
  return Object.values(analytics.timings)
    .map((timing) => {
      const question = examQuestions.find((item) => item.id === timing.questionId);

      if (!question) {
        return null;
      }

      return {
        ...timing,
        prompt: question.prompt,
        topic: question.topic,
        topicLabel: topicLabels[question.topic],
        correctIndex: question.correctIndex,
        isCorrect: timing.selectedIndex === question.correctIndex,
      };
    })
    .filter((question): question is TimedQuestion => question !== null)
    .sort((a, b) => a.order - b.order);
}

export function getTotalElapsedMs(analytics: ExamAnalytics) {
  const timedQuestions = getTimedQuestions(analytics);

  if (timedQuestions.length === 0) {
    return 0;
  }

  return timedQuestions.reduce((total, question) => total + question.durationMs, 0);
}

export function getAverageMs(timedQuestions: TimedQuestion[]) {
  if (timedQuestions.length === 0) {
    return 0;
  }

  const totalMs = timedQuestions.reduce((total, question) => total + question.durationMs, 0);
  return Math.round(totalMs / timedQuestions.length);
}

export function formatDuration(durationMs: number) {
  const totalSeconds = Math.max(0, Math.round(durationMs / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${hours}h ${remainingMinutes}m ${seconds.toString().padStart(2, "0")}s`;
  }

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

export function getPaceSummary(totalElapsedMs: number) {
  const examWindowMs = 90 * 60 * 1000;
  const differenceMs = examWindowMs - totalElapsedMs;

  if (differenceMs >= 0) {
    return `${formatDuration(differenceMs)} under the 90-minute exam window`;
  }

  return `${formatDuration(Math.abs(differenceMs))} over the 90-minute exam window`;
}
