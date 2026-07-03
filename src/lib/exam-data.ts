export type ExamQuestion = {
  id: number;
  topic: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const topicLabels: Record<string, string> = {
  studio: "Studio And Workflow Design",
  variables: "Variables And Arguments",
  orchestrator: "Orchestrator",
  selectors: "Selectors And UI Automation",
  debugging: "Debugging And Testing",
  exceptions: "Exception Handling And Logging",
  queues: "Queues And Assets",
  reframework: "REFramework",
  deployment: "Deployment And Integration",
};

export const examQuestions: ExamQuestion[] = [
  {
    id: 1,
    topic: "studio",
    prompt:
      "A developer is creating a new automation that must run both in Studio Desktop and Studio Web where possible. Which compatibility choice is most appropriate?",
    options: ["Windows-Legacy", "Cross-platform", "Windows only", "Library only"],
    correctIndex: 1,
    explanation:
      "Cross-platform is designed for broader runtime compatibility, including Studio Web-supported scenarios. A library is reusable packaging, not the compatibility mode for a process.",
  },
  {
    id: 2,
    topic: "studio",
    prompt:
      "A workflow has 70 activities, 5 nested If blocks, and repeated login logic in three places. What is the best design improvement?",
    options: [
      "Increase activity timeouts",
      "Split repeated logic into reusable workflows and pass data through arguments",
      "Convert every variable to a global variable",
      "Add comments without changing the structure",
    ],
    correctIndex: 1,
    explanation:
      "Reusable workflows reduce duplication and make the automation easier to test. More timeouts and globals do not solve structural complexity.",
  },
  {
    id: 3,
    topic: "studio",
    prompt:
      "You need to model a process that can move between Init, Process Item, Retry, Manual Review, and End based on events. Which workflow layout best fits?",
    options: ["Sequence", "State machine", "Single Assign activity", "Excel Process Scope"],
    correctIndex: 1,
    explanation:
      "State machines are best for lifecycle-driven processes with states and transitions. A sequence is better for linear work.",
  },
  {
    id: 4,
    topic: "studio",
    prompt:
      "A workflow must branch based on one status value: Approved, Rejected, Pending, or Escalated. Which control activity is usually clearest?",
    options: ["Switch", "Do While", "Retry Scope", "Parallel"],
    correctIndex: 0,
    explanation:
      "Switch is clearest when one expression can match multiple known values. Loops and retries solve different problems.",
  },
  {
    id: 5,
    topic: "studio",
    prompt:
      "A developer publishes reusable validation logic that multiple projects should consume with versioning. What should they create?",
    options: ["A process library", "A queue", "A trigger", "A breakpoint"],
    correctIndex: 0,
    explanation:
      "Libraries package reusable components for other projects. Queues store work items, triggers start jobs, and breakpoints support debugging.",
  },
  {
    id: 6,
    topic: "variables",
    prompt:
      "A workflow reads invoice rows from Excel and passes the entire table to another workflow for validation. What is the best argument type and direction for the called workflow?",
    options: ["String, Out", "DataTable, In", "GenericValue, In/Out", "Boolean, In"],
    correctIndex: 1,
    explanation:
      "The child workflow receives the table as input, so DataTable with In direction is appropriate. GenericValue is unnecessarily vague.",
  },
  {
    id: 7,
    topic: "variables",
    prompt:
      "A child workflow calculates a final file path and must return it to the parent workflow. Which argument direction should be used in the child workflow?",
    options: ["In", "Out", "Private", "Constant"],
    correctIndex: 1,
    explanation:
      "Out arguments return values from an invoked workflow to its caller.",
  },
  {
    id: 8,
    topic: "variables",
    prompt:
      "You need to store customer IDs and quickly retrieve the customer name for each ID. Which data type is best?",
    options: ["Array", "List", "Dictionary", "Boolean"],
    correctIndex: 2,
    explanation:
      "A dictionary is designed for key-value lookup. Arrays and lists are better for ordered collections.",
  },
  {
    id: 9,
    topic: "variables",
    prompt:
      "A variable used only inside a For Each Row loop is scoped to the whole workflow. Why is narrowing the scope better?",
    options: [
      "It always makes execution faster",
      "It reduces accidental reuse and improves readability",
      "It automatically turns the variable into an argument",
      "It prevents all exceptions",
    ],
    correctIndex: 1,
    explanation:
      "Narrow scope makes intent clear and reduces side effects. It does not automatically improve speed or eliminate exceptions.",
  },
  {
    id: 10,
    topic: "variables",
    prompt:
      'An amount read from Excel is " $1,240.50 ". Before numeric comparison, what should the automation do?',
    options: [
      "Compare it directly as a string",
      "Trim and clean the string, then convert to a numeric type",
      "Store it as SecureString",
      "Convert it to Boolean",
    ],
    correctIndex: 1,
    explanation:
      "Values read from Excel or UI fields often arrive as strings. Clean formatting and convert to Decimal or another numeric type before comparison.",
  },
  {
    id: 11,
    topic: "variables",
    prompt: "Which statement best describes the difference between an array and a list?",
    options: [
      "Arrays are fixed-size; lists can grow and shrink",
      "Lists cannot contain strings",
      "Arrays are only for DataTables",
      "Lists are always faster than arrays",
    ],
    correctIndex: 0,
    explanation:
      "Arrays have fixed size after creation. Lists are dynamic and support add/remove operations.",
  },
  {
    id: 12,
    topic: "orchestrator",
    prompt:
      "A process runs locally but fails unattended because it cannot find a URL configured on the developer's machine. What is the best deployment fix?",
    options: [
      "Hard-code the production URL in the workflow",
      "Store the URL in an Orchestrator asset and retrieve it at runtime",
      "Add a breakpoint before opening the browser",
      "Set log level to Fatal only",
    ],
    correctIndex: 1,
    explanation:
      "Assets centralize environment-specific configuration. Hard-coding makes deployments brittle.",
  },
  {
    id: 13,
    topic: "orchestrator",
    prompt: "Which Orchestrator entity represents one execution of a process?",
    options: ["Package", "Process", "Job", "Folder"],
    correctIndex: 2,
    explanation:
      "A job is one run. A package is the artifact, and a process maps a package version for execution.",
  },
  {
    id: 14,
    topic: "orchestrator",
    prompt:
      "A user should only view logs and jobs for one department folder, not manage tenant-wide settings. What should you configure?",
    options: [
      "Tenant admin permissions",
      "Folder-level role with limited permissions",
      "Credential asset",
      "Machine template only",
    ],
    correctIndex: 1,
    explanation:
      "Folder roles and permissions enforce least privilege within folder boundaries.",
  },
  {
    id: 15,
    topic: "orchestrator",
    prompt:
      "A robot appears disconnected in Orchestrator. Which concept is directly related to robot status signaling?",
    options: ["Heartbeat", "DataTable", "Switch", "Regex"],
    correctIndex: 0,
    explanation:
      "Heartbeat is the status signal between Robot and Orchestrator.",
  },
  {
    id: 16,
    topic: "orchestrator",
    prompt:
      "A developer wants a private area to publish and test packages without affecting shared team folders. Which feature is designed for this?",
    options: ["Personal Workspace", "Queue trigger", "Object Repository", "Global variable"],
    correctIndex: 0,
    explanation:
      "Personal Workspaces provide isolated areas for individual development and testing.",
  },
  {
    id: 17,
    topic: "orchestrator",
    prompt: "An unattended automation must run every weekday at 7 AM. What should be configured?",
    options: ["Time trigger", "Conditional breakpoint", "UI descriptor", "Library template"],
    correctIndex: 0,
    explanation:
      "Time triggers schedule jobs. Breakpoints and descriptors do not schedule process execution.",
  },
  {
    id: 18,
    topic: "selectors",
    prompt:
      "A selector includes a changing order number: <webctrl aaname='Order 87291' />. Tomorrow the number will be different. What is the best fix?",
    options: [
      "Replace the dynamic part with a variable or wildcard where appropriate",
      "Increase the delay before the click",
      "Convert the workflow to Windows-Legacy",
      "Disable logging",
    ],
    correctIndex: 0,
    explanation:
      "Dynamic selectors handle changing attributes. Delays do not fix unstable selectors.",
  },
  {
    id: 19,
    topic: "selectors",
    prompt:
      "A button has no stable ID, but there is a stable label next to it. What should you use?",
    options: ["Anchor-based targeting", "Throw activity", "SMTP activity", "Queue item retry"],
    correctIndex: 0,
    explanation:
      "Anchors locate the target relative to a stable nearby element.",
  },
  {
    id: 20,
    topic: "selectors",
    prompt:
      "A target works on the developer machine but fails in a remote desktop environment where selectors are unreliable. Which target method may help?",
    options: ["Computer Vision or image-based targeting", "Dictionary lookup", "Write Range Workbook", "Git commit"],
    correctIndex: 0,
    explanation:
      "Computer Vision and image targeting can help when traditional selectors are unavailable or unreliable.",
  },
  {
    id: 21,
    topic: "selectors",
    prompt: "A team uses the same CRM elements across many workflows. What improves maintainability?",
    options: [
      "Store elements in Object Repository",
      "Copy selectors into every workflow manually",
      "Use only fixed delays",
      "Avoid naming UI elements",
    ],
    correctIndex: 0,
    explanation:
      "Object Repository centralizes UI elements and reduces duplicated selector maintenance.",
  },
  {
    id: 22,
    topic: "selectors",
    prompt:
      "A workflow often fails because a page is still loading when the robot clicks Submit. What is the best first improvement?",
    options: [
      "Add Check App State or another explicit synchronization check",
      "Add a random 2-60 second delay",
      "Remove exception handling",
      "Store the button name in an integer asset",
    ],
    correctIndex: 0,
    explanation:
      "Explicit synchronization waits for the application state. Random delays make execution slow and unreliable.",
  },
  {
    id: 23,
    topic: "debugging",
    prompt:
      'A variable has the wrong value halfway through execution. You want to pause only when row("Status").ToString = "Failed". What should you use?',
    options: ["Conditional breakpoint", "Time trigger", "Storage bucket", "Queue retry"],
    correctIndex: 0,
    explanation:
      "Conditional breakpoints pause only when the expression evaluates to true.",
  },
  {
    id: 24,
    topic: "debugging",
    prompt: "You want to log a value during debugging without stopping execution. Which tool is best?",
    options: ["Tracepoint", "Throw", "Stop Job", "Credential asset"],
    correctIndex: 0,
    explanation:
      "Tracepoints write diagnostic information without pausing execution.",
  },
  {
    id: 25,
    topic: "debugging",
    prompt:
      "While paused in debug mode, you want to evaluate an expression immediately. Which panel is most useful?",
    options: ["Immediate panel", "Orchestrator queues page", "Package manager", "Publish window"],
    correctIndex: 0,
    explanation:
      "The Immediate panel evaluates expressions during debugging.",
  },
  {
    id: 26,
    topic: "debugging",
    prompt:
      "A project is ready for review. You want to catch maintainability and rule violations before publishing. What should you run?",
    options: ["Workflow Analyzer", "Queue trigger", "IMAP Get Mail", "Computer Vision"],
    correctIndex: 0,
    explanation:
      "Workflow Analyzer validates workflows against quality rules.",
  },
  {
    id: 27,
    topic: "debugging",
    prompt:
      "A workflow depends on an external API. During testing, you want predictable results without calling the real API. What should you use?",
    options: ["Mock testing", "Production credentials", "Manual screenshots only", "Fatal logs only"],
    correctIndex: 0,
    explanation:
      "Mock testing replaces external behavior with controlled test behavior.",
  },
  {
    id: 28,
    topic: "exceptions",
    prompt:
      "An invoice is missing a mandatory invoice number. The application is working correctly. What exception category best fits?",
    options: ["Business exception", "System exception", "Selector exception", "Timeout exception only"],
    correctIndex: 0,
    explanation:
      "Missing required business data is an expected process condition, not a technical failure.",
  },
  {
    id: 29,
    topic: "exceptions",
    prompt: "A browser crashes during transaction processing. What exception category best fits?",
    options: ["Business exception", "System/application exception", "Successful transaction", "Global constant"],
    correctIndex: 1,
    explanation:
      "A browser crash is a technical failure and may be retryable.",
  },
  {
    id: 30,
    topic: "exceptions",
    prompt:
      "Inside a Catch block, you want to propagate the original exception without losing its stack/context. What should you use?",
    options: ["Rethrow", "Throw New Exception always", "Assign", "Add Queue Item"],
    correctIndex: 0,
    explanation:
      "Rethrow preserves the current exception context from inside the Catch block.",
  },
  {
    id: 31,
    topic: "exceptions",
    prompt: "Which logging message is most useful for production troubleshooting?",
    options: [
      "Started",
      "Processing invoice INV-1045 for vendor ACME from queue item 48291",
      "Hello",
      "Password is MyPassword123",
    ],
    correctIndex: 1,
    explanation:
      "Useful logs include transaction context without exposing secrets. Passwords should never be logged.",
  },
  {
    id: 32,
    topic: "exceptions",
    prompt:
      "A workflow catches every exception and continues without logging or marking the item failed. What is the main risk?",
    options: [
      "Failures become invisible and data may be incorrect",
      "The workflow will always run faster",
      "Orchestrator will automatically fix the data",
      "It improves auditability",
    ],
    correctIndex: 0,
    explanation:
      "Silent exception handling hides failures and can create incorrect outputs.",
  },
  {
    id: 33,
    topic: "queues",
    prompt:
      "You have 5,000 invoices to process independently, need retry tracking, and want multiple robots to share work. What is the best Orchestrator feature?",
    options: ["Queue", "Text asset", "Breakpoint", "Local variable"],
    correctIndex: 0,
    explanation:
      "Queues distribute transaction work, track status, and support retries.",
  },
  {
    id: 34,
    topic: "queues",
    prompt:
      "A queue item fails because the vendor is not approved. Should it be retried automatically?",
    options: [
      "Usually no, because it is a business exception",
      "Always yes, indefinitely",
      "Yes, because all queue failures are system failures",
      "Only if it has no reference",
    ],
    correctIndex: 0,
    explanation:
      "Business exceptions usually should not retry because the same business condition will remain unless data changes.",
  },
  {
    id: 35,
    topic: "queues",
    prompt: "A queue item fails because the target website times out. Should retry be considered?",
    options: [
      "Yes, because it may be a transient system/application issue",
      "No, because timeouts are always business exceptions",
      "No, queue items cannot be retried",
      "Only if logs are disabled",
    ],
    correctIndex: 0,
    explanation:
      "Timeouts are often transient technical failures and may benefit from retry logic.",
  },
  {
    id: 36,
    topic: "queues",
    prompt: "Which value is best stored as a credential asset?",
    options: ["Robot login username/password", "Current loop counter", "Temporary DataTable", "The name of a local variable"],
    correctIndex: 0,
    explanation:
      "Credential assets store secrets centrally and securely. Temporary runtime values belong in variables.",
  },
  {
    id: 37,
    topic: "queues",
    prompt:
      "A dispatcher adds duplicate transaction references to a queue. What design improvement helps prevent duplicate processing?",
    options: [
      "Use unique references and duplicate checks when adding queue items",
      "Disable queue item statuses",
      "Store all transactions in one string variable",
      "Remove the dispatcher logs",
    ],
    correctIndex: 0,
    explanation:
      "Queue references and duplicate checks help maintain transaction uniqueness.",
  },
  {
    id: 38,
    topic: "reframework",
    prompt: "In REFramework, where should application initialization and login normally happen?",
    options: ["Init state", "End Process only", "Process Transaction after every click", "Get Transaction Data only"],
    correctIndex: 0,
    explanation:
      "Initialization belongs in the Init state, often through InitAllApplications.xaml.",
  },
  {
    id: 39,
    topic: "reframework",
    prompt: "In REFramework, which state retrieves the next queue item or transaction?",
    options: ["Get Transaction Data", "End Process", "Init All Settings", "Close All Applications"],
    correctIndex: 0,
    explanation:
      "Get Transaction Data retrieves the next item to process.",
  },
  {
    id: 40,
    topic: "reframework",
    prompt:
      "A transaction fails with a system exception and retry is enabled. What is the expected REFramework behavior?",
    options: [
      "Retry according to configured retry logic, then mark failed if retries are exhausted",
      "Always mark successful",
      "Never log the exception",
      "Convert it into a credential asset",
    ],
    correctIndex: 0,
    explanation:
      "REFramework supports retry for system exceptions. Business exceptions are not normally retried.",
  },
  {
    id: 41,
    topic: "reframework",
    prompt: "Why is config-driven design important in REFramework?",
    options: [
      "It separates environment-specific values from business logic",
      "It removes the need for logs",
      "It makes selectors unnecessary",
      "It prevents all application crashes",
    ],
    correctIndex: 0,
    explanation:
      "Config-driven design lets settings change without editing core workflow logic.",
  },
  {
    id: 42,
    topic: "deployment",
    prompt:
      "After publishing a package, what must usually be created or updated in Orchestrator before running it as an automation?",
    options: ["Process", "Local variable", "Conditional breakpoint", "Regex group"],
    correctIndex: 0,
    explanation:
      "A process maps a package version for execution in a folder. Jobs run from processes.",
  },
  {
    id: 43,
    topic: "deployment",
    prompt:
      "A business wants an automation to start when a new record is created in a SaaS application supported by UiPath connectors. What feature is most relevant?",
    options: ["Integration Service trigger", "Manual breakpoint", "Excel chart", "Do While loop"],
    correctIndex: 0,
    explanation:
      "Integration Service triggers can start automations from external application events.",
  },
  {
    id: 44,
    topic: "deployment",
    prompt:
      "During implementation, which document usually describes the business process, rules, inputs, outputs, and exception cases?",
    options: ["PDD", "Robot log", "Credential asset", "Git branch"],
    correctIndex: 0,
    explanation:
      "The Process Design Document captures business process details. The SDD captures technical solution design.",
  },
  {
    id: 45,
    topic: "deployment",
    prompt:
      "A developer resolves a production bug. Which set of actions is the best professional practice before deployment?",
    options: [
      "Validate, run tests, run Workflow Analyzer, commit changes, publish a versioned package, deploy, and monitor",
      "Edit directly in production and disable logs",
      "Change the package version without testing",
      "Delete all old queue items",
    ],
    correctIndex: 0,
    explanation:
      "Reliable deployment requires validation, testing, analysis, version control, controlled publishing, and monitoring.",
  },
];
