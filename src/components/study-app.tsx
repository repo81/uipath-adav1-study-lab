"use client";

import { useMemo, useState } from "react";
import { examFacts } from "@/lib/study-data";
import { examQuestions } from "@/lib/exam-data";
import { ExamPanel } from "./exam-panel";
import { StudyPanel } from "./study-panel";

type Tab = "study" | "exam";

export function StudyApp() {
  const [activeTab, setActiveTab] = useState<Tab>("study");
  const [activeTopic, setActiveTopic] = useState("platform");
  const [searchQuery, setSearchQuery] = useState("");
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const correctCount = useMemo(
    () =>
      examQuestions.filter((question) => answers[question.id] === question.correctIndex).length,
    [answers],
  );
  const answeredCount = Object.keys(answers).length;

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
            onClick={() => setActiveTab("exam")}
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
          onAnswer={(questionId, optionIndex) =>
            setAnswers((current) => ({ ...current, [questionId]: optionIndex }))
          }
          onReset={() => setAnswers({})}
        />
      )}
    </main>
  );
}
