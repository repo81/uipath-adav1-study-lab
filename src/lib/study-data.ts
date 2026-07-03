export type StudyTopic = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

export const sourceLinks = [
  {
    label: "UiPath Certifications",
    href: "https://academy.uipath.com/certifications",
  },
  {
    label: "ADAv1 Exam Description",
    href: "https://start.uipath.com/rs/995-XLT-886/images/UiPath%20Certified%20Professional%20-%20Automation%20Developer%20Associate%20Exam%20Description.pdf?version=5",
  },
  {
    label: "Automation Developer Associate Training",
    href: "https://academy.uipath.com/learning-plans/automation-developer-associate-training",
  },
];

export const examFacts = [
  "Exam number: UiPath-ADAv1",
  "Product version: UiPath 2024.10 and later",
  "Duration: 90 minutes",
  "Passing score: 70%",
  "Prerequisite: none",
  "Credential validity: 3 years",
];

export const studyPlan = [
  "Days 1-2: Studio layout, project compatibility, variables, arguments, data types, strings, dates, arrays, lists, dictionaries.",
  "Days 3-4: Sequences, flowcharts, state machines, invoked workflows, modern UI automation, descriptors, selectors, anchors.",
  "Days 5-6: Excel, files, email, PDF, DataTables, debugging panels, breakpoints, tracepoints, Workflow Analyzer.",
  "Days 7-8: Try Catch, Throw, Rethrow, Retry Scope, logging, Orchestrator entities, assets, queues, triggers.",
  "Days 9-10: Integration Service, unattended setup, roles, permissions, deployment, Git, libraries, templates, snippets.",
  "Days 11-12: REFramework, transaction processing, RPA testing, mock testing, PDD, SDD, implementation methodology.",
  "Days 13-14: Take the practice exam, review weak areas, and build one mini project using assets, queues, logging, and exception handling.",
];

export const studyTopics: StudyTopic[] = [
  {
    id: "platform",
    title: "Business Automation And Platform Concepts",
    summary:
      "Business automation uses robots, integrations, and workflow logic to complete repeatable digital work. ADAv1 expects you to understand where Studio, Robots, Orchestrator, and Integration Service fit.",
    points: [
      "Good automation candidates have stable rules, clear inputs, repeatable decisions, and measurable business value.",
      "Attended robots work with a user; unattended robots run independently through Orchestrator jobs and triggers.",
      "Execution can be local, VM-based, or serverless depending on infrastructure and process needs.",
      "Studio builds automations, Robot executes them, Assistant launches attended automations, and Orchestrator centrally manages execution.",
      "Integration Service supports API-based automation with connectors and event triggers.",
    ],
  },
  {
    id: "studio",
    title: "UiPath Studio Layout And Features",
    summary:
      "Studio is the primary development environment. Know the purpose of the Backstage view, Designer, Activities, Project, Properties, Variables, Arguments, Output, Debug, and Test Explorer panels.",
    points: [
      "Backstage view handles project creation, settings, templates, tools, and Orchestrator connection.",
      "Windows is the modern desktop compatibility mode; Windows-Legacy is older; Cross-platform supports broader runtimes and Studio Web scenarios.",
      "Packages provide activity sets. Keep dependencies intentional and avoid unnecessary package bloat.",
      "Templates define reusable project structure. Libraries package reusable components. Snippets are smaller workflow fragments.",
      "Use Workflow Analyzer before publishing to catch maintainability and reliability issues.",
    ],
  },
  {
    id: "variables",
    title: "Variables, Arguments, Data Types, And Globals",
    summary:
      "Variables store runtime values in a scope. Arguments pass values between workflows. Strong typing and narrow scope make automations easier to debug.",
    points: [
      "Argument directions are In, Out, and In/Out.",
      "Common types include String, Int32, Double, Decimal, Boolean, DateTime, Array, List, Dictionary, DataTable, GenericValue, and SecureString.",
      "Prefer strong types over GenericValue when the data shape is known.",
      "Global constants are project-wide values that do not change; global variables should be used sparingly.",
      "Use descriptive naming such as dtInvoices, in_Config, out_Result, and currentQueueItem.",
    ],
  },
  {
    id: "workflow",
    title: "Workflow Design And Control Flow",
    summary:
      "Choose workflow layouts based on process shape. Sequences fit linear work, flowcharts fit branching, and state machines fit lifecycle-driven transitions.",
    points: [
      "Use If for binary decisions, Else If for ordered alternatives, and Switch for multiple branches from one expression.",
      "For Each iterates collections; While checks before each loop; Do While runs at least once.",
      "Invoke Workflow File with arguments to split logic into smaller units.",
      "Keep workflows focused on one responsibility and avoid deeply nested logic.",
      "Make failure paths explicit and design workflows so reruns are predictable.",
    ],
  },
  {
    id: "activities",
    title: "Activities",
    summary:
      "Activities are the building blocks for UI automation, Excel, email, PDF, files, data manipulation, Orchestrator, and Integration Service.",
    points: [
      "Modern UI activities are preferred for new development.",
      "Excel modern activities use Excel Process Scope and Use Excel File; workbook activities can work without opening Excel.",
      "Mail activities include SMTP/IMAP/POP3 plus Microsoft 365 and Gmail integrations.",
      "PDF extraction differs for native PDFs and scanned PDFs that require OCR.",
      "Orchestrator activities retrieve assets, manage queue items, and interact with centralized resources.",
    ],
  },
  {
    id: "selectors",
    title: "Selectors, Targets, Descriptors, And Object Repository",
    summary:
      "Selectors and descriptors identify UI elements. Reliable UI automation depends on stable targets, anchors, and synchronization.",
    points: [
      "Strict selectors are precise; fuzzy selectors tolerate minor changes; image and Computer Vision targets help when selectors are weak.",
      "Dynamic descriptors use variables or wildcards for values that change, such as order IDs.",
      "Anchors locate a target relative to a stable neighboring label or control.",
      "Object Repository centralizes reusable UI elements and can be published as UI libraries.",
      "Remove volatile attributes and validate selectors with realistic data and environments.",
    ],
  },
  {
    id: "sync",
    title: "Synchronization And Reliable UI Automation",
    summary:
      "Many UI failures occur because the robot acts before the application is ready. Prefer readiness checks over blind delays.",
    points: [
      "Use Check App State, Element Exists, Find Element, and Wait for Download when relevant.",
      "Use Retry Scope for transient UI instability, not for known bad business data.",
      "Hardware events simulate a real user; simulate/browser methods can be faster but may not work for every app.",
      "Tune timeouts to the application and environment.",
      "Avoid fixed delays unless there is no meaningful event or condition to wait for.",
    ],
  },
  {
    id: "data",
    title: "Excel, Files, Email, PDF, And DataTables",
    summary:
      "ADAv1 expects practical data handling across common business inputs: Excel ranges, files, emails, PDFs, and DataTables.",
    points: [
      "Use DataTable activities to build, filter, join, merge, and iterate tabular data.",
      "Access columns by name where possible and validate column presence before use.",
      "Clean and convert values from Excel or UI before numeric/date comparisons.",
      "Native PDFs contain selectable text; scanned PDFs require OCR.",
      "Avoid hard-coded local paths and handle locked files, missing files, and permissions.",
    ],
  },
  {
    id: "debugging",
    title: "Debugging",
    summary:
      "Debugging is about isolating the failing assumption. Use breakpoints, tracepoints, watch expressions, and debug panels intentionally.",
    points: [
      "Step Into enters invoked workflows or detailed activity logic; Step Over executes without entering internals.",
      "Conditional breakpoints pause only when an expression is true.",
      "Tracepoints log diagnostic information without stopping execution.",
      "Locals shows current values; Watch tracks selected expressions; Immediate evaluates expressions while paused.",
      "Call Stack shows the workflow invocation path.",
    ],
  },
  {
    id: "exceptions",
    title: "Exception Handling",
    summary:
      "Reliable automations separate expected business failures from technical failures and handle each differently.",
    points: [
      "Business exceptions represent expected process conditions, such as missing mandatory invoice data.",
      "System/application exceptions represent technical problems, such as timeouts, app crashes, or selector failures.",
      "Try Catch handles risky operations; Throw raises a new exception; Rethrow preserves the current exception context.",
      "Retry Scope is useful for transient technical failures.",
      "Do not swallow exceptions silently. Log context and mark transaction status correctly.",
    ],
  },
  {
    id: "logging",
    title: "Logging",
    summary:
      "Logs are the production evidence trail. Good logs explain what happened, for which transaction, and why it matters without exposing secrets.",
    points: [
      "Use Info for normal progress, Warn for recoverable surprises, Error for failures, and Debug/Trace for diagnostics.",
      "Log transaction IDs, queue references, file names, and business keys.",
      "Never log passwords, tokens, secure strings, or sensitive personal data.",
      "Log before and after important external actions.",
      "Consistent log text makes Orchestrator troubleshooting faster.",
    ],
  },
  {
    id: "orchestrator",
    title: "Orchestrator",
    summary:
      "Orchestrator is the control plane for packages, processes, jobs, robots, assets, queues, triggers, logs, folders, and permissions.",
    points: [
      "A package is the published artifact. A process maps a package version for execution. A job is one execution.",
      "Tenant entities include users, machines, licenses, webhooks, and alerts.",
      "Folder entities include assets, queues, triggers, storage buckets, and credential stores.",
      "Roles and permissions should follow least privilege.",
      "Personal Workspaces let developers publish and test without affecting shared folders.",
    ],
  },
  {
    id: "assets",
    title: "Assets",
    summary:
      "Assets store reusable Orchestrator configuration values so workflows avoid hard-coded environment settings.",
    points: [
      "Asset types include Text, Bool, Integer, and Credential.",
      "Use assets for URLs, thresholds, email addresses, feature flags, and credentials.",
      "Credential assets should be retrieved and handled securely.",
      "Environment-specific values belong in assets or config, not buried in workflow activities.",
      "Clear asset naming reduces deployment mistakes across folders.",
    ],
  },
  {
    id: "queues",
    title: "Queues",
    summary:
      "Queues support transaction-based processing, retry tracking, parallel robot work, and auditability.",
    points: [
      "A dispatcher adds items; a performer gets and processes one transaction at a time.",
      "Queue states include New, In Progress, Successful, Failed, Retried, and Abandoned.",
      "Business exceptions should usually not retry automatically.",
      "System exceptions may retry according to queue or framework settings.",
      "Use unique references and duplicate checks to avoid processing the same business item twice.",
    ],
  },
  {
    id: "triggers",
    title: "Triggers",
    summary:
      "Triggers start jobs automatically based on schedules, queue volume, or external application events.",
    points: [
      "Time triggers schedule runs such as weekdays at 7 AM.",
      "Queue triggers start work when queue items are available.",
      "Integration Service triggers start automations from connector events.",
      "Design triggers with concurrency, robot availability, and duplicate prevention in mind.",
      "Confirm non-working days and calendars for production schedules.",
    ],
  },
  {
    id: "reframework",
    title: "REFramework",
    summary:
      "REFramework is a transaction-processing template with states for initialization, retrieving work, processing work, and cleanup.",
    points: [
      "Core states are Init, Get Transaction Data, Process Transaction, and End Process.",
      "Init loads configuration and initializes applications.",
      "Get Transaction Data retrieves a queue item or other transaction.",
      "Process Transaction performs the business work for one item.",
      "REFramework separates business and system exceptions and supports retry logic for technical failures.",
    ],
  },
  {
    id: "deployment",
    title: "Deployment, Git, And Version Control",
    summary:
      "Deployment turns a tested project into a package, process, and runnable job. Git tracks the source changes behind that package.",
    points: [
      "Validate, test, run Workflow Analyzer, publish, configure Orchestrator, run, and monitor logs.",
      "Use meaningful commits, branches, show changes, and conflict resolution.",
      "Do not deploy untested package versions to production.",
      "Configure required assets, queues, triggers, robots, and permissions before unattended runs.",
      "Use versioned packages so production changes are traceable.",
    ],
  },
  {
    id: "testing",
    title: "Workflow Analyzer, RPA Testing, And Methodology",
    summary:
      "Quality practices help catch errors before production and make implementation easier to support.",
    points: [
      "Workflow Analyzer checks naming, unused variables, maintainability, and rule violations.",
      "Test cases validate workflow behavior. Data-driven tests run one test with multiple inputs.",
      "Mock testing replaces external dependencies with controlled behavior.",
      "A PDD describes the business process. An SDD describes the technical solution.",
      "Implementation typically moves through discovery, design, development, testing, deployment, hypercare, and maintenance.",
    ],
  },
  {
    id: "best-practices",
    title: "Reliable Automation Best Practices",
    summary:
      "Strong UiPath solutions are maintainable, observable, resilient, and easy to deploy across environments.",
    points: [
      "Use modern activities, stable descriptors, anchors, and explicit synchronization.",
      "Externalize configuration and credentials.",
      "Validate input data early and separate business from system exceptions.",
      "Use queues for independent transactions and production tracking.",
      "Design for reruns, cleanup applications reliably, and log enough context to troubleshoot.",
    ],
  },
];

export const finalChecklist = [
  "Studio Desktop, Studio Web, Backstage view, panels, project compatibility",
  "Variables, arguments, data types, global constants, global variables",
  "Sequences, flowcharts, state machines, If, Else If, Switch, loops",
  "Modern UI automation, selectors, descriptors, anchors, Object Repository",
  "Excel, email, PDF, files, folders, DataTables, strings, Regex, dates",
  "Debugging panels, breakpoints, conditional breakpoints, tracepoints",
  "Try Catch, Throw, Rethrow, Retry Scope, business vs system exceptions",
  "Logging levels and production logging practices",
  "Orchestrator folders, robots, machines, packages, processes, jobs",
  "Assets, queues, triggers, storage buckets, credential stores",
  "Integration Service connectors and triggers",
  "Git, libraries, templates, snippets, Workflow Analyzer, RPA testing",
  "PDD, SDD, implementation methodology, and REFramework states",
];
