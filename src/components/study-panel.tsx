import { finalChecklist, sourceLinks, studyPlan, studyTopics } from "@/lib/study-data";

type StudyPanelProps = {
  activeTopic: string;
  onActiveTopicChange: (topic: string) => void;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
};

export function StudyPanel({
  activeTopic,
  onActiveTopicChange,
  searchQuery,
  onSearchQueryChange,
}: StudyPanelProps) {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredTopics = studyTopics.filter((topic) => {
    if (!normalizedQuery) {
      return true;
    }

    return [topic.title, topic.summary, ...topic.points]
      .join(" ")
      .toLowerCase()
      .includes(normalizedQuery);
  });
  const selectedTopic =
    filteredTopics.find((topic) => topic.id === activeTopic) ?? filteredTopics[0] ?? studyTopics[0];

  return (
    <section className="workspace" aria-label="Study guide">
      <div className="sidebar">
        <label className="search-label" htmlFor="study-search">
          Search topics
        </label>
        <input
          id="study-search"
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchQueryChange(event.target.value)}
          placeholder="selectors, queues, debugging"
        />

        <nav className="topic-list" aria-label="Knowledge base topics">
          {filteredTopics.map((topic) => (
            <button
              key={topic.id}
              type="button"
              className={topic.id === selectedTopic.id ? "active" : ""}
              onClick={() => onActiveTopicChange(topic.id)}
            >
              {topic.title}
            </button>
          ))}
        </nav>
      </div>

      <div className="content-stack">
        <article className="content-card primary-card">
          <p className="eyebrow">Knowledge Base</p>
          <h2>{selectedTopic.title}</h2>
          <p className="lead">{selectedTopic.summary}</p>
          <ul className="point-list">
            {selectedTopic.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>

        <div className="content-grid two-col">
          <section className="content-card">
            <p className="eyebrow">Two-Week Plan</p>
            <ol className="compact-list">
              {studyPlan.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </section>

          <section className="content-card">
            <p className="eyebrow">Final Review</p>
            <ul className="compact-list">
              {finalChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <section className="source-strip" aria-label="Official references">
          {sourceLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </section>
      </div>
    </section>
  );
}
