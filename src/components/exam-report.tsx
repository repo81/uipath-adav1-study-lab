import { examQuestions } from "@/lib/exam-data";
import {
  formatDuration,
  getAverageMs,
  getPaceSummary,
  getTimedQuestions,
  getTotalElapsedMs,
  type ExamAnalytics,
} from "@/lib/exam-analytics";
import { getTopicStats } from "./progress-summary";

type ExamReportProps = {
  answers: Record<number, number>;
  analytics: ExamAnalytics;
};

function getQuestionLabel(optionIndex: number) {
  return String.fromCharCode(65 + optionIndex);
}

export function ExamReport({ answers, analytics }: ExamReportProps) {
  const timedQuestions = getTimedQuestions(analytics);
  const complete = timedQuestions.length === examQuestions.length;

  if (!complete) {
    return (
      <section className="report-card locked-report" aria-label="Exam analytics report">
        <p className="eyebrow">Exam Report</p>
        <h2>Complete all questions to unlock timing analytics.</h2>
        <p>
          The final report will include total time, average time per question, fastest and slowest
          questions, answer changes, pacing, topic scores, and a question-by-question timing table.
        </p>
      </section>
    );
  }

  const totalElapsedMs = getTotalElapsedMs(analytics);
  const correctQuestions = timedQuestions.filter((question) => question.isCorrect);
  const missedQuestions = timedQuestions.filter((question) => !question.isCorrect);
  const fastest = [...timedQuestions].sort((a, b) => a.durationMs - b.durationMs)[0];
  const slowest = [...timedQuestions].sort((a, b) => b.durationMs - a.durationMs)[0];
  const changedAnswers = timedQuestions.reduce((total, question) => total + question.changes, 0);
  const correctPercent = Math.round((correctQuestions.length / examQuestions.length) * 100);
  const topicStats = getTopicStats(answers);
  const weakTopics = topicStats.filter((topic) => topic.score < 70);

  return (
    <section className="report-card" aria-label="Exam analytics report">
      <div className="report-heading">
        <div>
          <p className="eyebrow">Final Exam Report</p>
          <h2>{correctPercent}% score with {formatDuration(totalElapsedMs)} total time</h2>
        </div>
        <span className={correctPercent >= 70 ? "status-pill pass" : "status-pill review"}>
          {correctPercent >= 70 ? "Passing range" : "Review range"}
        </span>
      </div>

      <div className="analytics-grid">
        <div>
          <span>Total time</span>
          <strong>{formatDuration(totalElapsedMs)}</strong>
          <p>{getPaceSummary(totalElapsedMs)}</p>
        </div>
        <div>
          <span>Average per question</span>
          <strong>{formatDuration(getAverageMs(timedQuestions))}</strong>
          <p>Target pace is 2:00 per question for a 90-minute exam.</p>
        </div>
        <div>
          <span>Fastest answer</span>
          <strong>Q{fastest.questionId} · {formatDuration(fastest.durationMs)}</strong>
          <p>{fastest.topicLabel}</p>
        </div>
        <div>
          <span>Slowest answer</span>
          <strong>Q{slowest.questionId} · {formatDuration(slowest.durationMs)}</strong>
          <p>{slowest.topicLabel}</p>
        </div>
        <div>
          <span>Correct average</span>
          <strong>{formatDuration(getAverageMs(correctQuestions))}</strong>
          <p>{correctQuestions.length} correct answers.</p>
        </div>
        <div>
          <span>Missed average</span>
          <strong>{formatDuration(getAverageMs(missedQuestions))}</strong>
          <p>{missedQuestions.length} missed answers.</p>
        </div>
        <div>
          <span>Answer changes</span>
          <strong>{changedAnswers}</strong>
          <p>Changes after first answering a question.</p>
        </div>
        <div>
          <span>Weak areas</span>
          <strong>{weakTopics.length || "None"}</strong>
          <p>{weakTopics.length ? weakTopics.map((topic) => topic.label).join(", ") : "No topic below 70%."}</p>
        </div>
      </div>

      <div className="topic-report">
        {topicStats.map((topic) => (
          <div key={topic.topic}>
            <span>{topic.label}</span>
            <strong>{topic.score}%</strong>
            <div className="meter compact" aria-hidden="true">
              <span style={{ width: `${topic.score}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="timing-table-wrap">
        <table className="timing-table">
          <thead>
            <tr>
              <th>Order</th>
              <th>Question</th>
              <th>Topic</th>
              <th>Time</th>
              <th>Result</th>
              <th>Selected</th>
              <th>Correct</th>
              <th>Changes</th>
            </tr>
          </thead>
          <tbody>
            {timedQuestions.map((question) => (
              <tr key={question.questionId}>
                <td>{question.order}</td>
                <td>Q{question.questionId}</td>
                <td>{question.topicLabel}</td>
                <td>{formatDuration(question.durationMs)}</td>
                <td>
                  <span className={question.isCorrect ? "result-pill correct" : "result-pill missed"}>
                    {question.isCorrect ? "Correct" : "Missed"}
                  </span>
                </td>
                <td>{getQuestionLabel(question.selectedIndex)}</td>
                <td>{getQuestionLabel(question.correctIndex)}</td>
                <td>{question.changes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
