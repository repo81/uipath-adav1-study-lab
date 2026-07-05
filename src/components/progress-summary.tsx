import { examQuestions, topicLabels } from "@/lib/exam-data";
import {
  formatDuration,
  getAverageMs,
  getTimedQuestions,
  getTotalElapsedMs,
  type ExamAnalytics,
} from "@/lib/exam-analytics";

type ProgressSummaryProps = {
  answers: Record<number, number>;
  analytics: ExamAnalytics;
};

export function getTopicStats(answers: Record<number, number>) {
  return Object.keys(topicLabels).map((topic) => {
    const questions = examQuestions.filter((question) => question.topic === topic);
    const answered = questions.filter((question) => answers[question.id] !== undefined);
    const correct = answered.filter(
      (question) => answers[question.id] === question.correctIndex,
    );

    return {
      topic,
      label: topicLabels[topic],
      total: questions.length,
      answered: answered.length,
      correct: correct.length,
      score: questions.length ? Math.round((correct.length / questions.length) * 100) : 0,
    };
  });
}

export function ProgressSummary({ answers, analytics }: ProgressSummaryProps) {
  const answeredCount = Object.keys(answers).length;
  const correctCount = examQuestions.filter(
    (question) => answers[question.id] === question.correctIndex,
  ).length;
  const score = answeredCount ? Math.round((correctCount / examQuestions.length) * 100) : 0;
  const topicStats = getTopicStats(answers);
  const weakAreas = topicStats.filter((stat) => stat.answered === stat.total && stat.score < 70);
  const timedQuestions = getTimedQuestions(analytics);
  const totalElapsedMs = getTotalElapsedMs(analytics);

  return (
    <aside className="score-panel" aria-label="Practice exam progress">
      <div>
        <p className="eyebrow">Practice Score</p>
        <div className="score-row">
          <strong>{score}%</strong>
          <span>
            {correctCount}/{examQuestions.length} correct
          </span>
        </div>
        <div className="meter" aria-hidden="true">
          <span style={{ width: `${score}%` }} />
        </div>
      </div>

      <div className="live-timing">
        <div>
          <span>Elapsed</span>
          <strong>{formatDuration(totalElapsedMs)}</strong>
        </div>
        <div>
          <span>Avg/question</span>
          <strong>{formatDuration(getAverageMs(timedQuestions))}</strong>
        </div>
      </div>

      <div className="score-grid">
        {topicStats.map((stat) => (
          <div key={stat.topic} className="score-topic">
            <span>{stat.label}</span>
            <strong>
              {stat.correct}/{stat.total}
            </strong>
          </div>
        ))}
      </div>

      <div className="readiness">
        <p className="eyebrow">Readiness</p>
        {answeredCount < examQuestions.length ? (
          <p>{examQuestions.length - answeredCount} questions left before a full diagnostic.</p>
        ) : weakAreas.length > 0 ? (
          <p>
            Review {weakAreas.map((area) => area.label).join(", ")} before another timed run.
          </p>
        ) : score >= 84 ? (
          <p>Strong pass range. Keep drilling scenario questions and hands-on workflows.</p>
        ) : score >= 70 ? (
          <p>Passing range. Review missed explanations and rebuild weak concepts in Studio.</p>
        ) : (
          <p>Below target. Re-study missed topics, then retake the exam closed-book.</p>
        )}
      </div>
    </aside>
  );
}
