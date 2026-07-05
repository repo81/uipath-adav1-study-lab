"use client";

import { useMemo, useState } from "react";
import { examFacts } from "@/lib/study-data";
import { examQuestions } from "@/lib/exam-data";
import { emptyAnalytics, recordQuestionAnswer, type ExamAnalytics } from "@/lib/exam-analytics";
import { ExamPanel } from "./exam-panel";
import { StudyPanel } from "./study-panel";

type Tab = "study" | "exam";

export function StudyApp() {
  const [activeTab, setActiveTab] = useState<Tab>("study");
  const [activeTopic, setActiveTopic] = useState("platform");
  const [searchQuery, setSearchQuery] = useState("");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [analytics, setAnalytics] = useState<ExamAnalytics>(emptyAnalytics);

  const correctCount = useMemo(
    () =>
      examQuestions.filter((question) => answers[question.id] === question.correctIndex).length,
    [answers],
  );
  const answeredCount = Object.keys(answers).length;
  const startExam = () => {
    const now = Date.now();
    setActiveTab("exam");
    setAnalytics((current) =>
      current.startedAt
        ? current
        : {
            ...current,
            startedAt: now,
            lastFirstAnswerAt: now,
          },
    );
  };

  const resetExam = () => {
    setAnswers({});
    const now = Date.now();
    setAnalytics({
      startedAt: now,
      lastFirstAnswerAt: now,
      timings: {},
    });
  };

  const answerQuestion = (questionId: number, optionIndex: number) => {
    const answeredAt = Date.now();
    setAnswers((current) => ({ ...current, [questionId]: optionIndex }));
    setAnalytics((current) =>
      recordQuestionAnswer(current, questionId, optionIndex, answeredAt),
    );
  };

  return (
    <main className="app-shell">
      <section className="hero-band" aria-label="UiPath ADAv1 study dashboard">
        <div className="hero-copy">
          <p className="eyebrow">UiPath ADAv1</p>
          <h1>Automation Developer Associate study lab</h1>
          <p>
            A focused knowledge base and scenario-heavy practice exam for a two-week certification
            sprint.
          </p>
        </div>

        <div className="fact-grid" aria-label="Exam facts">
          {examFacts.map((fact) => (
            <span key={fact}>{fact}</span>
          ))}
        </div>
      </section>

      <section className="control-band" aria-label="Study controls">
        <div className="tabs" role="tablist" aria-label="Study app sections">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "study"}
            className={activeTab === "study" ? "active" : ""}
            onClick={() => setActiveTab("study")}
          >
            Study Guide
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "exam"}
            className={activeTab === "exam" ? "active" : ""}
            onClick={startExam}
          >
            Practice Exam
          </button>
        </div>

        <div className="mini-score">
          <span>{answeredCount} answered</span>
          <strong>
            {correctCount}/{examQuestions.length}
          </strong>
        </div>
      </section>

      {activeTab === "study" ? (
        <StudyPanel
          activeTopic={activeTopic}
          onActiveTopicChange={setActiveTopic}
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
        />
      ) : (
        <ExamPanel
          answers={answers}
          analytics={analytics}
          onAnswer={answerQuestion}
          onReset={resetExam}
        />
      )}
    </main>
  );
}
