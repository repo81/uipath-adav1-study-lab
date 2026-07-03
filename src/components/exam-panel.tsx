import { examQuestions, topicLabels } from "@/lib/exam-data";
import { ProgressSummary } from "./progress-summary";

type ExamPanelProps = {
  answers: Record<number, number>;
  onAnswer: (questionId: number, optionIndex: number) => void;
  onReset: () => void;
};

export function ExamPanel({ answers, onAnswer, onReset }: ExamPanelProps) {
  const answeredCount = Object.keys(answers).length;

  return (
    <section className="exam-layout" aria-label="Practice exam">
      <div className="exam-main">
        <div className="exam-toolbar">
          <div>
            <p className="eyebrow">Practice Exam</p>
            <h2>{answeredCount} of {examQuestions.length} answered</h2>
          </div>
          <button type="button" className="reset-button" onClick={onReset}>
            Reset
          </button>
        </div>

        {Object.entries(topicLabels).map(([topic, label]) => {
          const topicQuestions = examQuestions.filter((question) => question.topic === topic);

          return (
            <section key={topic} className="question-group">
              <h3>{label}</h3>
              <div className="question-stack">
                {topicQuestions.map((question) => {
                  const selected = answers[question.id];
                  const answered = selected !== undefined;
                  const correct = selected === question.correctIndex;

                  return (
                    <article key={question.id} className="question-card">
                      <div className="question-title">
                        <span>Q{question.id}</span>
                        <p>{question.prompt}</p>
                      </div>

                      <div className="answer-list">
                        {question.options.map((option, optionIndex) => {
                          const isSelected = selected === optionIndex;
                          const isCorrect = question.correctIndex === optionIndex;
                          const stateClass = !answered
                            ? ""
                            : isCorrect
                              ? "correct"
                              : isSelected
                                ? "incorrect"
                                : "muted";

                          return (
                            <button
                              key={option}
                              type="button"
                              className={`answer-option ${stateClass}`}
                              onClick={() => onAnswer(question.id, optionIndex)}
                              aria-pressed={isSelected}
                            >
                              <span>{String.fromCharCode(65 + optionIndex)}</span>
                              {option}
                            </button>
                          );
                        })}
                      </div>

                      {answered ? (
                        <div className={`explanation ${correct ? "is-correct" : "is-incorrect"}`}>
                          <strong>{correct ? "Correct" : "Review this one"}</strong>
                          <p>{question.explanation}</p>
                        </div>
                      ) : null}
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      <ProgressSummary answers={answers} />
    </section>
  );
}
