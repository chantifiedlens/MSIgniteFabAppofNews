export const BOOK_OF_NEWS_URL =
  'https://news.microsoft.com/events/ignite/2026/book-of-news/';

export type SectionId =
  | 'azure'
  | 'fabric'
  | 'ai'
  | 'security'
  | 'developer'
  | 'windows';

export interface UpdatePoint {
  label: string;
  availability: string;
  detail: string;
}

export interface Announcement {
  id: string;
  title: string;
  section: SectionId;
  summary: string;
  whyItMatters: string;
  availability: string;
  audiences: string[];
  updates: UpdatePoint[];
  relatedIds?: string[];
  sourceUrl?: string;
}

export const SECTIONS: {
  id: SectionId;
  title: string;
  shortTitle: string;
  description: string;
}[] = [
  {
    id: 'azure',
    title: 'Azure & data platforms',
    shortTitle: 'Azure & data',
    description:
      'Infrastructure, databases and modernization updates for workloads running across Azure and hybrid environments.',
  },
  {
    id: 'fabric',
    title: 'Fabric, Power BI & apps',
    shortTitle: 'Fabric & apps',
    description:
      'The announcements that connect trusted analytics, operational data and application experiences in Microsoft Fabric.',
  },
  {
    id: 'ai',
    title: 'AI, Copilot & Microsoft IQ',
    shortTitle: 'AI & Copilot',
    description:
      'Models, agent-building tools and Microsoft experiences designed to bring AI into everyday work.',
  },
  {
    id: 'security',
    title: 'Security, identity & governance',
    shortTitle: 'Security',
    description:
      'Controls, visibility and protections for agents, identities, data, endpoints and security operations.',
  },
  {
    id: 'developer',
    title: 'Developer ecosystem',
    shortTitle: 'Developers',
    description:
      'Tools and platform updates for building, reviewing and running software and agents.',
  },
  {
    id: 'windows',
    title: 'Windows & Cloud PC',
    shortTitle: 'Windows',
    description:
      'Updates for Windows devices, Cloud PCs, server infrastructure and governed agent workspaces.',
  },
];

const source = {
  chaos: 'https://aka.ms/chaosstudio/workspaces-ga',
  confidential: 'https://aka.ms/acc-ignite2026',
  cobalt: 'https://aka.ms/Cobalt200VMs-GA',
  agenticOps: 'https://aka.ms/ignite2026/agenticops',
  aiInfrastructure: 'https://aka.ms/ai-infra-ignite26',
  catalyst: 'https://aka.ms/modernization-ignite26',
  server2028: 'https://aka.ms/WindowsServer2028Announcement',
  cosmos: 'https://aka.ms/ignite26/cosmosdb',
  documentDb: 'https://aka.ms/ignite26/documentdb',
  horizonDb: 'https://aka.ms/ignite26/horizondb',
  managedRedis: 'https://aka.ms/ignite26/AMR',
  sql: 'https://aka.ms/ignite26/mssql',
  databaseHub: 'https://aka.ms/ignite26/databases',
  fabricHorizonDb:
    'https://techcommunity.microsoft.com/blog/ADforPostgreSQL/introducing-microsoft-fabric-horizondb-serverless-postgresql-for-applications-an/4572455',
  postgres: 'https://aka.ms/Ignite26/Postgres_on_Azure',
  powerBiApps:
    'https://community.fabric.microsoft.com/blog/fbc_pbiupdatesblog/power-bi-at-ignite-building-on-the-momentum/5422974',
  fabricApps: 'https://aka.ms/FabricApps-Ignite26',
  foundry: 'https://aka.ms/miq-ignitelaunchblog',
  decision: 'https://aka.ms/decision-model-ga',
  models: 'https://aka.ms/foundrymodelsignite2026',
  copilotSdk: 'https://aka.ms/copilot-sdk/blog-2.0',
  agentAnalytics:
    'https://techcommunity.microsoft.com/blog/ai-finops-blog/introducing-microsoft-agent-365-business-analytics-turn-ai-investment-into-busin/4574149',
  copilot: 'https://aka.ms/MicrosoftIgnite26Blog',
  managedRuntime: 'https://aka.ms/CopilotManagedRuntime-Ignite-Blog',
  dynamics: 'https://aka.ms/A365AnalyticsLearn',
  dynamicsActivate: 'https://aka.ms/D365Ignite2026',
  salesforce: 'https://aka.ms/AA1457n5',
  edge: 'https://aka.ms/EdgeIgnite26',
  webIq: 'https://aka.ms/webiqnews',
  secureAi: 'https://aka.ms/secureAIannounce',
  agent365:
    'https://techcommunity.microsoft.com/blog/agent-365-blog/whats-new-in-microsoft-agent-365-ignite-2026/4571753',
  perception: 'https://aka.ms/perceptionignite',
  defender:
    'https://techcommunity.microsoft.com/blog/microsoftthreatprotectionblog/ignite-2026-whats-new-in-microsoft-defender--sentinel/4569975',
  threatIntel:
    'https://www.microsoft.com/en-us/security/blog/2026/11/17/security-for-the-agentic-era-powered-by-microsoft-perception/',
  onPrem: 'https://aka.ms/OnpremSecInitiativeBlog',
  entra: 'https://aka.ms/ignite/entra',
  exposure: 'https://aka.ms/exposurenewsignite',
  intune:
    'https://techcommunity.microsoft.com/blog/microsoftintuneblog/what%E2%80%99s-new-in-microsoft-intune-at-ignite/4570003',
  purview: 'https://aka.ms/SecureData/Blog',
  windows: 'https://aka.ms/WindowsAtIgnite2026',
  windows365: 'https://aka.ms/W365Ignite26Blog',
};

export const ANNOUNCEMENTS: Announcement[] = [
  {
    id: 'azure-chaos-studio',
    title: 'Azure Chaos Studio Workspaces and AKS extension',
    section: 'azure',
    summary:
      'Chaos Studio Workspaces and its AKS extension are generally available for organizing and repeating controlled resilience tests.',
    whyItMatters:
      'Teams can validate how applications respond to planned disruptions before similar failures happen unexpectedly.',
    availability: 'Generally available',
    audiences: ['Cloud architects', 'SREs', 'Platform teams'],
    updates: [
      {
        label: 'Chaos Studio Workspaces',
        availability: 'Generally available',
        detail:
          'Organize test resources and reuse scenarios such as an availability-zone loss or database failover.',
      },
      {
        label: 'AKS extension',
        availability: 'Generally available',
        detail:
          'Run resilience experiments on Kubernetes pods with fewer permissions than before.',
      },
    ],
    sourceUrl: source.chaos,
  },
  {
    id: 'azure-confidential-computing',
    title: 'Expanded confidential computing',
    section: 'azure',
    summary:
      'Three Azure confidential-computing offerings are in preview, extending protection to data while it is being processed.',
    whyItMatters:
      'The announcements focus on reducing what must be trusted when organizations protect models or collaborate on sensitive data.',
    availability: 'Preview',
    audiences: ['Security teams', 'AI architects', 'Regulated industries'],
    updates: [
      {
        label: 'VR72 multi-GPU confidential computing',
        availability: 'Preview',
        detail:
          'Advances confidential AI workloads that extend beyond a single GPU.',
      },
      {
        label: 'Confidential Enclaves and AKS Kata CoCo',
        availability: 'Preview',
        detail:
          'Create a smaller trusted execution environment within a virtual machine.',
      },
      {
        label: 'Azure Confidential Clean Room',
        availability: 'Preview',
        detail:
          'Support multiparty analytics while helping protect participants’ raw data.',
      },
    ],
    sourceUrl: source.confidential,
  },
  {
    id: 'azure-cobalt-200',
    title: 'Azure Cobalt 200 virtual machines',
    section: 'azure',
    summary:
      'Microsoft’s Arm-based Cobalt 200 VMs are generally available, with new VM options for in-memory and storage-heavy workloads.',
    whyItMatters:
      'The Book positions the processor for CPU work around AI models and describes up to 50% better CPU performance than Cobalt 100.',
    availability: 'Generally available',
    audiences: ['Cloud architects', 'Developers', 'Infrastructure teams'],
    updates: [
      {
        label: 'Cobalt 200 VMs',
        availability: 'Generally available',
        detail:
          'Microsoft says deployments will reach 24 Azure regions by year-end; the Book lists regions already served.',
      },
      {
        label: 'Consistent-speed and boost modes',
        availability: 'Generally available',
        detail:
          'Choose between consistent speed and peak-speed behavior per VM.',
      },
      {
        label: 'Mpsv4 and Lpsv5',
        availability: 'Generally available',
        detail:
          'New VM types target large in-memory databases and storage-heavy jobs; Lpsv5 offers up to 23 TB built-in storage.',
      },
    ],
    sourceUrl: source.cobalt,
  },
  {
    id: 'azure-agentic-operations',
    title: 'Agentic operations across Azure',
    section: 'azure',
    summary:
      'Azure Monitor, Azure Copilot and Azure SRE Agent are gaining operational context, natural-language workflows and agent controls.',
    whyItMatters:
      'The updates connect telemetry and application dependencies to investigations while retaining permissions, governance and human approval boundaries.',
    availability: 'Mixed: GA and preview',
    audiences: ['SREs', 'Cloud operators', 'IT administrators'],
    updates: [
      {
        label: 'Azure Monitor natural-language capabilities',
        availability: 'Generally available',
        detail: 'Help users plan and deploy cloud workloads.',
      },
      {
        label: 'Azure Copilot spaces and custom skills',
        availability: 'Preview',
        detail:
          'Let teams tailor operational agents and carry persistent context.',
      },
      {
        label: 'Azure Workload Center for Oracle and SAP',
        availability: 'Preview',
        detail:
          'Extend workload health monitoring and configuration validation.',
      },
      {
        label: 'Azure SRE Agent enterprise features',
        availability: 'Preview',
        detail:
          'Add customer-managed keys, Entra Agent ID and Agent 365 integration, cross-agent communication, Teams integration and multicloud investigations.',
      },
      {
        label: 'Azure Monitor health models',
        availability: 'Generally available',
        detail:
          'Turn telemetry into a health graph connecting architecture, dependencies and business priorities.',
      },
    ],
    sourceUrl: source.agenticOps,
  },
  {
    id: 'azure-ai-infrastructure',
    title: 'Azure infrastructure for production AI and agents',
    section: 'azure',
    summary:
      'New infrastructure capabilities address agent networking, security, isolation, confidentiality, context and state.',
    whyItMatters:
      'The Book describes a path from Foundry development to AKS deployment while teams choose infrastructure based on performance, security, cost and data residency.',
    availability: 'Mostly preview; Cobalt 200 is GA',
    audiences: ['AI engineers', 'Platform teams', 'Cloud architects'],
    updates: [
      {
        label: 'Foundry to AKS deployment',
        availability: 'Preview',
        detail:
          'Deploy open-weight models and agents from Foundry to customer AKS clusters with selected GPUs and regions.',
      },
      {
        label: 'Agent Grid',
        availability: 'Preview',
        detail:
          'Centralize policy enforcement for interactions among agents, models, tools and Azure services.',
      },
      {
        label: 'Agent Sandbox extension for AKS',
        availability: 'Preview',
        detail: 'Run agent-written code in VM-isolated sandboxes.',
      },
      {
        label: 'Flex nodes for AKS',
        availability: 'Preview',
        detail: 'Extend an AKS cluster to customer servers outside Azure.',
      },
    ],
    relatedIds: ['azure-cobalt-200', 'foundry-models', 'windows-agent-controls'],
    sourceUrl: source.aiInfrastructure,
  },
  {
    id: 'azure-catalyst',
    title: 'Azure Catalyst',
    section: 'azure',
    summary:
      'Azure Catalyst is a generally available experience for agent-assisted modernization across Azure and GitHub.',
    whyItMatters:
      'It combines discovery, planning, migration and modernization work so teams can carry context through an estate transformation.',
    availability: 'Generally available; some new capabilities in preview',
    audiences: ['IT leaders', 'Developers', 'Migration teams'],
    updates: [
      {
        label: 'Azure Catalyst agent',
        availability: 'Generally available',
        detail:
          'Formerly Azure Copilot migration agent; new planning and execution capabilities are in preview.',
      },
      {
        label: 'GitHub Copilot modernization',
        availability: 'Mixed',
        detail:
          'Governance rulebooks and bring-your-own-model support are GA; integrated app/database modernization and BizTalk-to-Logic-Apps migration are in preview.',
      },
    ],
    sourceUrl: source.catalyst,
  },
  {
    id: 'windows-server-2028',
    title: 'Introducing Windows Server 2028',
    section: 'azure',
    summary:
      'Windows Server 2028 is in preview, with planned security, storage, management and hybrid AI investments.',
    whyItMatters:
      'The announcement describes extending familiar Windows Server infrastructure toward enterprise AI inference and hybrid intelligence.',
    availability: 'Preview; some hybrid-intelligence features are limited early access',
    audiences: ['IT administrators', 'Security teams', 'Infrastructure architects'],
    updates: [
      {
        label: 'Security foundation',
        availability: 'Preview',
        detail:
          'Includes a hardened Server Core configuration, security baseline, Trusted Launch, post-quantum cryptography and certificate management.',
      },
      {
        label: 'Storage and management',
        availability: 'Preview',
        detail:
          'Adds NVMe-related capabilities and management across datacenters, cloud and remote locations.',
      },
      {
        label: 'Hybrid intelligence',
        availability: 'Limited early access',
        detail:
          'Describes supported local inference runtimes, Agent 365 governance and accelerated AI hardware; hardware requirements apply.',
      },
    ],
    sourceUrl: source.server2028,
  },
  {
    id: 'azure-cosmos-db',
    title: 'Azure Cosmos DB developer, retrieval and protection updates',
    section: 'azure',
    summary:
      'Seven updates span development tools, search relevance and production data protection.',
    whyItMatters:
      'The bundle covers multiple stages of the application lifecycle, from model design through retrieval and backup.',
    availability: 'Mixed: GA and preview',
    audiences: ['Application developers', 'Data architects', 'Operations teams'],
    updates: [
      {
        label: 'Cosmos DB Shell',
        availability: 'Generally available',
        detail:
          'Available in VS Code and Azure portal for resource exploration, queries, data management and MCP-assisted workflows.',
      },
      {
        label: 'VS Code extension and AI-assisted data modeler',
        availability: 'Preview',
        detail:
          'Adds account insights and guided partition-key and container configuration recommendations.',
      },
      {
        label: 'Rust SDK',
        availability: 'Generally available',
        detail: 'A native SDK with performance and resilience capabilities.',
      },
      {
        label: 'Semantic reranker and FuzzyBM25 score projection',
        availability: 'Generally available',
        detail:
          'Reorder candidate results by meaning and expose relevance scores to full-text-search applications.',
      },
      {
        label: 'Azure Backup for Cosmos DB',
        availability: 'Generally available',
        detail:
          'Adds an independent vault-based layer for centralized backup policies, monitoring, retention and recovery.',
      },
    ],
    sourceUrl: source.cosmos,
  },
  {
    id: 'azure-documentdb',
    title: 'Azure DocumentDB developer, hybrid and security updates',
    section: 'azure',
    summary:
      'Five feature updates cover developer tooling, faster provisioning, hybrid deployment and finer-grained access controls.',
    whyItMatters:
      'The updates address application development and deployment choices while adding database- and collection-scoped permissions.',
    availability: 'Mixed: GA and preview',
    audiences: ['Application developers', 'Database teams', 'Security teams'],
    updates: [
      {
        label: 'VS Code extension and M10–M30 provisioning',
        availability: 'Generally available',
        detail:
          'Browse databases and documents, run queries, and provision supported cluster sizes near-instantly.',
      },
      {
        label: 'DocumentDB on Azure Arc and Azure Local',
        availability: 'Preview',
        detail:
          'Bring MongoDB-compatible workloads to hybrid environments for residency and infrastructure-control needs.',
      },
      {
        label: 'Fine-grained role-based access control',
        availability: 'Preview',
        detail:
          'Scope custom roles and permissions to individual databases and collections.',
      },
    ],
    sourceUrl: source.documentDb,
  },
  {
    id: 'azure-horizondb',
    title: 'Azure HorizonDB generally available',
    section: 'azure',
    summary:
      'Azure HorizonDB is a managed PostgreSQL-compatible service with enterprise security, resilience, vector search and AI capabilities.',
    whyItMatters:
      'The Book describes AI model management, SQL-invoked AI capabilities and Fabric mirroring as additional platform connections.',
    availability: 'Generally available; AI features and Fabric mirroring in preview',
    audiences: ['PostgreSQL developers', 'Database administrators', 'AI engineers'],
    updates: [
      {
        label: 'Security and continuity',
        availability: 'Generally available',
        detail:
          'Includes Entra authentication, private endpoints, managed identities, encryption and multi-zone replication.',
      },
      {
        label: 'AI model management, AI Functions and AI Pipelines',
        availability: 'Preview',
        detail:
          'Manage models alongside data and invoke models from SQL queries.',
      },
      {
        label: 'Microsoft Fabric mirroring',
        availability: 'Preview',
        detail:
          'Make operational HorizonDB data available for analytics in Fabric.',
      },
    ],
    relatedIds: ['fabric-horizondb', 'fabric-apps'],
    sourceUrl: source.horizonDb,
  },
  {
    id: 'azure-managed-redis',
    title: 'Azure Managed Redis previews Redis 8 and an agent kit',
    section: 'azure',
    summary:
      'Two preview updates combine Redis data types and search capabilities and add an AI-assisted configuration review kit.',
    whyItMatters:
      'The Redis 8 update brings JSON, search, time-series and vector capabilities into one version; the agent kit targets reliability and performance settings.',
    availability: 'Preview',
    audiences: ['Application developers', 'AI engineers', 'Platform teams'],
    updates: [
      {
        label: 'Redis 8',
        availability: 'Preview',
        detail:
          'Combines JSON, search, time-series, vector search and other data types.',
      },
      {
        label: 'Azure Managed Redis agent kit',
        availability: 'Preview',
        detail:
          'Reviews service configuration and suggests changes for developers to evaluate.',
      },
    ],
    sourceUrl: source.managedRedis,
  },
  {
    id: 'azure-sql',
    title: 'Azure SQL modernization, resilience and local development',
    section: 'azure',
    summary:
      'Azure SQL updates add managed-instance resilience, multi-database migration and disaster recovery, and a local Azure SQL Database container.',
    whyItMatters:
      'Developers can test against the Azure SQL Database engine locally, while existing SQL Server environments gain additional migration options.',
    availability: 'Mixed: GA and preview',
    audiences: ['Database administrators', 'Developers', 'Migration teams'],
    updates: [
      {
        label: 'Next-gen General Purpose zone redundancy and flexible memory',
        availability: 'Generally available',
        detail:
          'Adds zone redundancy and independent memory adjustment for supported Premium-series instances.',
      },
      {
        label: 'Managed Instance link for SQL Server availability groups',
        availability: 'Generally available',
        detail:
          'Replicates multiple databases to Azure SQL Managed Instance for migration or disaster recovery.',
      },
      {
        label: 'Azure SQL Database container',
        availability: 'Preview',
        detail:
          'Runs the Azure SQL Database engine locally without an Azure subscription; the Book notes ledger, vector and embedding workflows.',
      },
    ],
    sourceUrl: source.sql,
  },
  {
    id: 'database-hub',
    title: 'Database Hub in Fabric and database agents',
    section: 'fabric',
    summary:
      'Database Hub in Fabric is generally available; SQL and PostgreSQL database agents are in preview.',
    whyItMatters:
      'The hub provides a cross-environment database view, while agents bring guided operations into Database Hub and the PostgreSQL VS Code extension.',
    availability: 'Hub GA; agents in preview',
    audiences: ['Database administrators', 'Developers', 'Platform teams'],
    updates: [
      {
        label: 'Database Hub in Fabric',
        availability: 'Generally available',
        detail:
          'Discover, monitor and manage databases across Fabric, Azure, on-premises environments and other clouds.',
      },
      {
        label: 'SQL and PostgreSQL database agents',
        availability: 'Preview',
        detail:
          'Use Microsoft-authored skills to observe operational signals, explain issues, recommend fixes or carry out approved actions.',
      },
    ],
    sourceUrl: source.databaseHub,
  },
  {
    id: 'fabric-horizondb',
    title: 'Microsoft Fabric HorizonDB',
    section: 'fabric',
    summary:
      'Fabric HorizonDB is a preview serverless PostgreSQL offering that connects operational applications with Fabric analytics.',
    whyItMatters:
      'The Book describes a managed backend for Fabric apps and ways to query or move data between operational PostgreSQL and OneLake analytics.',
    availability: 'Preview',
    audiences: ['App developers', 'Data engineers', 'Database teams'],
    updates: [
      {
        label: 'Serverless PostgreSQL',
        availability: 'Preview',
        detail:
          'Databases are described as provisioning quickly, scaling with demand, and pausing while idle.',
      },
      {
        label: 'Managed backend for Fabric apps',
        availability: 'Preview',
        detail:
          'The Book describes data APIs, authentication, storage and hosting for apps.',
      },
      {
        label: 'Translytical queries, mirroring and reverse ETL',
        availability: 'Preview',
        detail:
          'Connect live PostgreSQL data with OneLake and Fabric Data Warehouse analytics, including moving enriched data back to the operational database.',
      },
    ],
    relatedIds: ['fabric-apps', 'fabric-iq', 'azure-horizondb'],
    sourceUrl: source.fabricHorizonDb,
  },
  {
    id: 'postgres-azure',
    title: 'PostgreSQL on Azure modernization updates',
    section: 'azure',
    summary:
      'Azure PostgreSQL updates cover Oracle migration, HorizonDB migration, compute choice, confidential computing, immutable restore and backup.',
    whyItMatters:
      'The announcements provide a set of migration and operational options across the PostgreSQL lifecycle.',
    availability: 'Mixed: GA and preview',
    audiences: ['PostgreSQL developers', 'Database administrators', 'Migration teams'],
    updates: [
      {
        label: 'Oracle-to-PostgreSQL and HorizonDB migration',
        availability: 'Preview',
        detail:
          'Azure Database Migration Service adds migration paths and online synchronization workflows.',
      },
      {
        label: 'Burstable v2 compute and Cobalt 200',
        availability: 'Preview / GA',
        detail:
          'Adds burstable compute in preview and generally available Arm64 Cobalt 200 compute.',
      },
      {
        label: 'Confidential compute and immutable point-in-time restore',
        availability: 'Generally available',
        detail:
          'Adds AMD v6 confidential compute and protection against backup changes or deletion.',
      },
      {
        label: 'Backup and high availability',
        availability: 'Mixed',
        detail:
          'Azure Backup for flexible server and elastic clusters v2 is in preview; same-zone to zone-redundant conversion is GA.',
      },
    ],
    relatedIds: ['azure-horizondb', 'fabric-horizondb'],
    sourceUrl: source.postgres,
  },
  {
    id: 'powerbi-data-apps',
    title: 'Custom data app creation in Power BI',
    section: 'fabric',
    summary:
      'Power BI Pro customers will be able to create purpose-built data apps in Power BI Desktop, in preview.',
    whyItMatters:
      'The announcement extends a semantic-model experience from viewing trusted metrics toward interactive tasks that can write changes to a data source.',
    availability: 'Preview',
    audiences: ['Power BI users', 'Business users', 'App makers'],
    updates: [
      {
        label: 'Natural-language app creation',
        availability: 'Preview',
        detail:
          'Start from a trusted Power BI semantic model and describe the desired app.',
      },
      {
        label: 'Fabric Database capabilities',
        availability: 'Preview',
        detail:
          'Power BI Pro customers will have access to Fabric Database capabilities for analytical and transactional app scenarios.',
      },
    ],
    relatedIds: ['fabric-apps', 'fabric-horizondb', 'fabric-iq'],
    sourceUrl: source.powerBiApps,
  },
  {
    id: 'fabric-apps',
    title: 'Rayfin and Fabric apps reach general availability',
    section: 'fabric',
    summary:
      'Rayfin and Fabric apps are generally available, bringing app development, data services, authentication, governance and observability together in Fabric.',
    whyItMatters:
      'The announcement describes choosing supported Fabric data backends and reusing trusted data definitions and access controls rather than assembling a separate backend stack.',
    availability: 'Generally available',
    audiences: ['App developers', 'AI builders', 'Fabric administrators'],
    updates: [
      {
        label: 'App backend choices',
        availability: 'Generally available',
        detail:
          'The Book names Microsoft SQL database or Fabric HorizonDB, and connections to existing semantic models, warehouses and lakehouses.',
      },
      {
        label: 'Governance, security and observability',
        availability: 'Generally available',
        detail:
          'The Book describes centralized app governance in OneLake Governance hub, enhanced security controls and built-in observability.',
      },
      {
        label: 'Microsoft Copilot integration',
        availability: 'Announced',
        detail:
          'Natural-language app creation is connected with Copilot Managed Runtime for apps that need backend services.',
      },
      {
        label: 'Power BI Pro and Desktop integration',
        availability: 'Announced',
        detail:
          'Connects trusted semantic models with interactive business applications.',
      },
      {
        label: 'Adoption reported in the Book',
        availability: 'Since preview launch',
        detail:
          'Microsoft says more than 100,000 apps have been created with Rayfin.',
      },
    ],
    relatedIds: ['powerbi-data-apps', 'fabric-horizondb', 'fabric-iq'],
    sourceUrl: source.fabricApps,
  },
  {
    id: 'foundry-improvement',
    title: 'Continuous improvement in Microsoft Foundry',
    section: 'ai',
    summary:
      'Foundry connects evaluation, production traces, human annotation, agent optimization and model training into an improvement loop.',
    whyItMatters:
      'Teams can compare proposed changes against their own quality, safety, latency and cost criteria before choosing what to deploy.',
    availability: 'Mixed: GA and preview',
    audiences: ['AI engineers', 'Developers', 'AI platform teams'],
    updates: [
      {
        label: 'Multi-turn evaluation and production insights',
        availability: 'Generally available',
        detail:
          'Evaluate conversations and group recurring production issues for investigation.',
      },
      {
        label: 'Human annotation and safety evaluation',
        availability: 'Preview',
        detail:
          'Add expert ratings and expected answers to traces and curate golden datasets; new safety support is in preview.',
      },
      {
        label: 'Agent optimizer',
        availability: 'Generally available',
        detail:
          'Propose candidate agent changes and test them against team evaluations.',
      },
      {
        label: 'Managed and Programmed Training',
        availability: 'Preview',
        detail:
          'Adapt supported models with organizational data; Programmed Training supports custom loops for supported open-weight models.',
      },
    ],
    relatedIds: ['foundry-models', 'microsoft-iq', 'foundry-iq'],
    sourceUrl: source.foundry,
  },
  {
    id: 'decision-model',
    title: 'Microsoft-Decision-1.1',
    section: 'ai',
    summary:
      'Microsoft-Decision-1.1 is generally available as a model for structured decisions such as routing, classification and prioritization.',
    whyItMatters:
      'The model is designed to choose among developer-defined actions with confidence scores and can defer when uncertainty is high.',
    availability: 'Generally available',
    audiences: ['AI engineers', 'Application developers'],
    updates: [
      {
        label: 'Structured decision tasks',
        availability: 'Generally available',
        detail:
          'Targets routing, classification, prioritization, verification and workflow control.',
      },
      {
        label: 'Image input and product integration',
        availability: 'Generally available',
        detail:
          'The Book notes image inputs and integration in Copilot Auto and Cowork Auto.',
      },
    ],
    relatedIds: ['foundry-models', 'copilot-home'],
    sourceUrl: source.decision,
  },
  {
    id: 'foundry-models',
    title: 'New models and model-routing options in Foundry',
    section: 'ai',
    summary:
      'Foundry adds model choices for code, image creation, cybersecurity and decisions, plus expanded model routing and partner offerings.',
    whyItMatters:
      'The announcements emphasize matching models and inference options to task requirements and using supported models in the Foundry workflow.',
    availability: 'Mixed: GA, preview and private preview',
    audiences: ['Developers', 'AI engineers', 'Security teams'],
    updates: [
      {
        label: 'MAI-Code-2 and MAI-Code-2-Flash',
        availability: 'GA in GitHub; Flash private preview in Foundry',
        detail:
          'Differentiate demanding agentic coding workloads from high-volume coding tasks.',
      },
      {
        label: 'MAI-Image-2.7 and 2.7-Flash',
        availability: 'Preview',
        detail: 'New image generation and editing model options.',
      },
      {
        label: 'MAI-Cyber-2-Flash',
        availability: 'Preview in Codename MDASH',
        detail:
          'A cybersecurity model for vulnerability discovery, validation and remediation.',
      },
      {
        label: 'Model router and expanded model pool',
        availability: 'Announced',
        detail:
          'The Book describes support for the top 50 Foundry models and model selection through AI Gateway and messages/responses APIs.',
      },
      {
        label: 'Video generation and Baseten on Foundry',
        availability: 'Preview',
        detail:
          'Adds video models from fal and Baseten inference options.',
      },
    ],
    relatedIds: ['decision-model', 'foundry-improvement', 'codename-mdash'],
    sourceUrl: source.models,
  },
  {
    id: 'microsoft-iq',
    title: 'Microsoft IQ',
    section: 'ai',
    summary:
      'Microsoft IQ is presented as an enterprise context-management and continuous-improvement platform built on products customers already use.',
    whyItMatters:
      'It frames business context, reusable agent building blocks and production learning as shared foundations across apps and agents.',
    availability: 'Generally available; some capabilities are in preview or Frontier',
    audiences: ['Business leaders', 'Developers', 'AI platform teams'],
    updates: [
      {
        label: 'Enterprise context management',
        availability: 'Generally available',
        detail:
          'Connects work, business data, unstructured content and web information through Work IQ, Fabric IQ, Foundry IQ and Web IQ.',
      },
      {
        label: 'Continuous improvement',
        availability: 'Generally available',
        detail:
          'Connects evaluation and production insights to agent optimization and model training.',
      },
      {
        label: 'Packaging and licensing',
        availability: 'Announced',
        detail:
          'The Book says Microsoft IQ is built on existing products with no new SKU or subscription.',
      },
    ],
    relatedIds: ['fabric-iq', 'foundry-iq', 'work-iq', 'foundry-improvement'],
    sourceUrl: source.foundry,
  },
  {
    id: 'enterprise-context',
    title: 'Enterprise context and business plugins',
    section: 'ai',
    summary:
      'Microsoft IQ introduces reusable building blocks and business plugins to connect agents with organizational expertise and authoritative sources.',
    whyItMatters:
      'Teams can organize reusable skills, tools and agents, with business plugins adding scenario-specific guidance and governance.',
    availability: 'Mixed: GA and Frontier',
    audiences: ['AI platform teams', 'Business experts', 'Administrators'],
    updates: [
      {
        label: 'Business plugins, skills, tools and agents',
        availability: 'Generally available',
        detail:
          'Package capabilities for installation and reuse across supported Microsoft experiences and through Microsoft IQ APIs.',
      },
      {
        label: 'Business plugins in Microsoft IQ',
        availability: 'Frontier program',
        detail:
          'Add expert-curated hierarchical guidance with sensitivity labels, change auditing and governance insights.',
      },
    ],
    relatedIds: ['microsoft-iq', 'agent365-governance'],
    sourceUrl: source.foundry,
  },
  {
    id: 'foundry-iq',
    title: 'Foundry IQ for knowledge retrieval',
    section: 'ai',
    summary:
      'Foundry IQ adds knowledge graphs, a retrieval model and SharePoint indexing to search and agent grounding.',
    whyItMatters:
      'The announced options support both search-driven apps and more complex retrieval that follows relationships across knowledge sources.',
    availability: 'Mixed: GA and preview',
    audiences: ['Developers', 'AI engineers', 'Knowledge management teams'],
    updates: [
      {
        label: 'Knowledge graphs and Microsoft-Retriever-1',
        availability: 'Preview',
        detail:
          'Connect entities across documents and support iterative search and query planning.',
      },
      {
        label: 'Foundry IQ resource in new Foundry projects',
        availability: 'Preview',
        detail: 'Provides grounding on a usage-based serverless plan.',
      },
      {
        label: 'SharePoint indexed knowledge source',
        availability: 'Generally available',
        detail:
          'Bring SharePoint content into retrieval while respecting source permissions.',
      },
    ],
    relatedIds: ['microsoft-iq', 'foundry-improvement'],
    sourceUrl: source.foundry,
  },
  {
    id: 'work-iq',
    title: 'Work IQ context, actions and controls',
    section: 'ai',
    summary:
      'Work IQ expands organizational context and agent actions, with proactive listening and additional governance controls also announced.',
    whyItMatters:
      'The updates extend agents from answering questions toward acting on work within enterprise controls.',
    availability: 'Mixed: GA and preview',
    audiences: ['Microsoft 365 users', 'IT administrators', 'Developers'],
    updates: [
      {
        label: 'Richer context and more ways to act',
        availability: 'Generally available',
        detail:
          'Add permission-aware retrieval, memory and support for creating or editing content and longer workflows.',
      },
      {
        label: 'Listen capability and expanded enterprise controls',
        availability: 'Preview',
        detail:
          'Respond to relevant events and add more-granular policies and human-approval options.',
      },
      {
        label: 'Third-party AI platform integrations',
        availability: 'Generally available / coming soon',
        detail:
          'The Book says integrations with OpenAI and Anthropic are planned as available.',
      },
    ],
    relatedIds: ['microsoft-iq', 'copilot-workspaces'],
    sourceUrl: source.foundry,
  },
  {
    id: 'copilot-sdk',
    title: 'Microsoft Copilot SDK 2.0',
    section: 'developer',
    summary:
      'Copilot SDK 2.0 is generally available with a native Rust runtime and support for six programming languages.',
    whyItMatters:
      'The SDK brings Microsoft’s production Copilot harness to developers building secure, scalable agent experiences.',
    availability: 'Generally available',
    audiences: ['Application developers', 'AI engineers'],
    updates: [
      {
        label: 'Native Rust runtime',
        availability: 'Generally available',
        detail:
          'The Book describes a production-proven harness for integrating agents into applications, including multi-tenant applications.',
      },
      {
        label: 'Six programming languages',
        availability: 'Generally available',
        detail: 'The SDK is supported across six languages.',
      },
    ],
    sourceUrl: source.copilotSdk,
  },
  {
    id: 'agent365-finops',
    title: 'FinOps for AI in Agent 365',
    section: 'ai',
    summary:
      'Agent 365 adds cost-management and business-analytics experiences for understanding AI service spend and outcomes.',
    whyItMatters:
      'The announcements connect usage visibility and forecasting with business measures such as success rate, satisfaction and assisted hours.',
    availability: 'Mixed: preview and Frontier',
    audiences: ['IT leaders', 'Finance teams', 'Business leaders'],
    updates: [
      {
        label: 'Agent 365 Cost Management',
        availability: 'Preview; some features in Frontier',
        detail:
          'View usage-based AI services, set policies and alerts, forecast spend, ask questions and review optimization recommendations.',
      },
      {
        label: 'Agent 365 Business Analytics',
        availability: 'Frontier program',
        detail:
          'Analyze AI spend and value, including cost by agent/service/model/user and business measures.',
      },
    ],
    relatedIds: ['agent365-governance', 'microsoft-iq'],
    sourceUrl: source.agentAnalytics,
  },
  {
    id: 'copilot-autopilot',
    title: 'Autopilot for personal productivity',
    section: 'ai',
    summary:
      'Autopilot is rolling out to Frontier customers as a long-running agent with its own identity, memory and tools.',
    whyItMatters:
      'The announcement describes persistent work that can continue across threads and recurring tasks, with agent identity and admin visibility.',
    availability: 'Frontier program rollout',
    audiences: ['Microsoft 365 users', 'IT administrators'],
    updates: [
      {
        label: 'Long-running work',
        availability: 'Frontier program',
        detail:
          'Follow up on threads, run recurring work and continue projects without another prompt.',
      },
      {
        label: 'Teams collaboration and administration',
        availability: 'Frontier program',
        detail:
          'Colleagues can mention an Autopilot in Teams; activity is tied to its agent ID and is manageable by admins.',
      },
    ],
    relatedIds: ['copilot-workspaces', 'agent365-governance'],
    sourceUrl: source.copilot,
  },
  {
    id: 'copilot-managed-runtime',
    title: 'Copilot Managed Runtime',
    section: 'ai',
    summary:
      'Copilot Managed Runtime is generally available as Microsoft-managed app hosting, with an optional Fabric data backend.',
    whyItMatters:
      'The announcement separates where apps are created from how they are hosted and governed, while allowing Fabric to provide optional backend services.',
    availability: 'Generally available',
    audiences: ['App developers', 'IT administrators', 'AI builders'],
    updates: [
      {
        label: 'Optional Fabric backend',
        availability: 'Generally available',
        detail:
          'Fabric can provide database, storage and data APIs while the runtime provides application hosting and enterprise management.',
      },
      {
        label: 'Agents and Workflows',
        availability: 'Announced',
        detail:
          'The first iteration supports local authoring and publishing Copilot Studio agents and workflows through the CLI.',
      },
    ],
    relatedIds: ['fabric-apps', 'powerbi-data-apps'],
    sourceUrl: source.managedRuntime,
  },
  {
    id: 'copilot-workspaces',
    title: 'Copilot Workspaces',
    section: 'ai',
    summary:
      'Copilot Workspaces brings teams, shared work and Copilot into a shared space in the Copilot app.',
    whyItMatters:
      'The workspace is intended to help teams maintain shared context and identify changes, unresolved issues and next actions.',
    availability: 'Frontier program',
    audiences: ['Teams', 'Project leads', 'Microsoft 365 users'],
    updates: [
      {
        label: 'Shared workspaces',
        availability: 'Frontier program',
        detail:
          'Work IQ can suggest workspaces; Copilot can summarize what changed and what needs attention.',
      },
      {
        label: 'Personal Autopilot collaboration',
        availability: 'Coming soon',
        detail:
          'The Book says teams will be able to bring personal Autopilot into Workspaces.',
      },
    ],
    relatedIds: ['work-iq', 'copilot-autopilot'],
    sourceUrl: source.copilot,
  },
  {
    id: 'dynamics-copilot-plugins',
    title: 'Dynamics 365 plugins in Copilot',
    section: 'ai',
    summary:
      'Dynamics 365 Sales and ERP plugins are generally available in Copilot experiences.',
    whyItMatters:
      'Users can work with sales, finance and operations context and actions without switching from their Copilot workflow.',
    availability: 'Generally available',
    audiences: ['Sales teams', 'Finance teams', 'Operations teams'],
    updates: [
      {
        label: 'Dynamics 365 Sales plugin',
        availability: 'Generally available',
        detail:
          'Supports account plans, meeting preparation, deal insights, pipeline prioritization and PowerPoint workflows.',
      },
      {
        label: 'Dynamics 365 ERP apps plugin',
        availability: 'Generally available',
        detail:
          'Brings ERP context and purpose-built finance and operations skills to Copilot Cowork and Excel.',
      },
    ],
    sourceUrl: source.dynamics,
  },
  {
    id: 'copilot-code',
    title: 'Copilot Code',
    section: 'ai',
    summary:
      'Copilot Code lets users create apps with natural language and offers tenant-bound cloud and local sandbox options.',
    whyItMatters:
      'The announcement pairs app creation with sandboxing and the option to publish supported apps through Copilot Managed Runtime.',
    availability: 'Frontier; GA planned for December 2026',
    audiences: ['Business users', 'App makers', 'IT administrators'],
    updates: [
      {
        label: 'Cloud and local sandboxes',
        availability: 'Frontier',
        detail:
          'Cloud projects stay in the tenant; local sandbox limits what Code and its processes can access.',
      },
      {
        label: 'Managed publishing and administration',
        availability: 'Frontier',
        detail:
          'Supported apps can be published through Copilot Managed Runtime and managed in the Microsoft 365 admin center.',
      },
    ],
    relatedIds: ['copilot-managed-runtime', 'fabric-apps'],
    sourceUrl: source.copilot,
  },
  {
    id: 'copilot-home',
    title: 'Home and Office in the Microsoft Copilot app',
    section: 'ai',
    summary:
      'Copilot Home brings Chat and Cowork together, while Office apps in Copilot are generally available.',
    whyItMatters:
      'The updates help users move between quick questions, delegated work and document creation in one experience.',
    availability: 'Mixed: GA and Frontier',
    audiences: ['Microsoft 365 users', 'Business users'],
    updates: [
      {
        label: 'Home and Auto',
        availability: 'Rolling out; some capabilities GA or Frontier',
        detail:
          'Home is rolling out worldwide; Auto can recommend switching to Cowork, and Cowork Auto uses Microsoft-Decision-1.1 for effort selection.',
      },
      {
        label: 'Office in Copilot',
        availability: 'Generally available',
        detail:
          'Create and edit Word, Excel and PowerPoint files with familiar collaboration features; files are saved in OneDrive.',
      },
      {
        label: 'Declarative agents in Cowork',
        availability: 'Private preview through Frontier',
        detail:
          'Copilot Cowork can invoke company-built declarative agents.',
      },
    ],
    relatedIds: ['decision-model', 'copilot-workspaces'],
    sourceUrl: source.copilot,
  },
  {
    id: 'dynamics-activate',
    title: 'Dynamics 365 Activate expands to ERP migration',
    section: 'ai',
    summary:
      'Dynamics 365 Activate adds agent-assisted SAP ECC assessment and ERP migration capabilities; the Salesforce CRM migration experience is GA.',
    whyItMatters:
      'The product carries project context from discovery through implementation while project teams review and validate recommendations.',
    availability: 'Rolling out over coming weeks',
    audiences: ['ERP architects', 'Migration partners', 'Project teams'],
    updates: [
      {
        label: 'SAP ECC discovery and requirements',
        availability: 'Rolling out',
        detail:
          'Analyze processes, customizations and dependencies and translate business needs into Dynamics 365 requirements.',
      },
      {
        label: 'Configuration and data migration',
        availability: 'Rolling out',
        detail:
          'Support setup and data movement while carrying project context through the lifecycle.',
      },
      {
        label: 'Salesforce CRM migration experience',
        availability: 'Generally available',
        detail: 'The Book identifies the CRM migration experience as GA.',
      },
    ],
    sourceUrl: source.dynamicsActivate,
  },
  {
    id: 'salesforce-integrations',
    title: 'Microsoft and Salesforce integrations',
    section: 'ai',
    summary:
      'New Salesforce integrations bring customer context into Copilot and Teams, alongside a two-way Zero Copy connection with Fabric.',
    whyItMatters:
      'The announcement spans sales workflows, collaboration and access to Fabric OneLake data without moving source data.',
    availability: 'Mixed: GA, preview and pilot',
    audiences: ['Sales teams', 'Data leaders', 'Microsoft and Salesforce administrators'],
    updates: [
      {
        label: 'Salesforce in Copilot',
        availability: 'Preview',
        detail:
          'Connects Salesforce customer context and supported actions to Microsoft 365 work, respecting Salesforce permissions.',
      },
      {
        label: 'Sales Cloud in Teams',
        availability: 'Pilot',
        detail:
          'Provides pipeline and quota progress, deal notifications and briefing material in Teams.',
      },
      {
        label: 'Data Federation between Salesforce Data 360 and Fabric',
        availability: 'Generally available',
        detail:
          'Query supported OneLake data from Salesforce Data 360 while source data remains in Fabric.',
      },
    ],
    relatedIds: ['fabric-iq', 'fabric-apps'],
    sourceUrl: source.salesforce,
  },
  {
    id: 'copilot-today',
    title: 'Today in Copilot and Outlook',
    section: 'ai',
    summary:
      'Today is a new experience that surfaces priorities and prepares work for people to review and approve.',
    whyItMatters:
      'It brings email, calendar, chat and meeting context into a changing view of work rather than requiring users to assemble it manually.',
    availability: 'Private preview through Frontier',
    audiences: ['Microsoft 365 users', 'Business users'],
    updates: [
      {
        label: 'Today Brief',
        availability: 'Included with Microsoft 365 Copilot license',
        detail: 'Provides a personalized morning briefing and next steps.',
      },
      {
        label: 'Today Feed',
        availability: 'Copilot credits required for recurring refreshes',
        detail:
          'Refreshes during the day as new messages, emails and meetings arrive.',
      },
    ],
    sourceUrl: source.copilot,
  },
  {
    id: 'edge-business',
    title: 'Edge for Business governed AI and security',
    section: 'security',
    summary:
      'Edge for Business adds governed agent browsing, workflow recording and enterprise security capabilities.',
    whyItMatters:
      'The updates give IT more control over agent browser activity and extension risk while integrating browser signals with security tools.',
    availability: 'Mixed: GA, preview and pilot',
    audiences: ['Security teams', 'IT administrators', 'Employees'],
    updates: [
      {
        label: 'Skills recorder and managed agent browsing',
        availability: 'Preview',
        detail:
          'Record reusable Cowork workflows and provide agents dedicated Edge windows with their own Entra agent identity.',
      },
      {
        label: 'Extension safety and leak control',
        availability: 'GA / preview',
        detail:
          'Inventory and risk-score extensions; preview controls can prevent selected extensions from reading protected pages.',
      },
      {
        label: 'Sentinel connector and Global Secure Access',
        availability: 'Preview',
        detail:
          'Bring Edge security events to Sentinel and support identity-aware access to private web apps.',
      },
    ],
    relatedIds: ['entra-agentic-access', 'defender-agent-protection'],
    sourceUrl: source.edge,
  },
  {
    id: 'fabric-iq',
    title: 'Fabric IQ integrations',
    section: 'fabric',
    summary:
      'Fabric IQ brings trusted business context into Copilot, Fabric apps and other experiences, with additional integrations in preview.',
    whyItMatters:
      'It combines OneLake data, Power BI semantic-model metrics and ontology context so users and agents can work from consistent business definitions.',
    availability: 'Mixed: GA and preview',
    audiences: ['BI developers', 'Data engineers', 'Business users', 'App developers'],
    updates: [
      {
        label: 'Copilot and Fabric apps',
        availability: 'Generally available',
        detail:
          'Use Fabric IQ context in Copilot and embed semantic-model or data-agent experiences in apps.',
      },
      {
        label: 'Excel and GitHub Copilot',
        availability: 'Preview',
        detail:
          'Ask questions of governed semantic models, create live Fabric-connected PivotTables, and use ontology context in GitHub Copilot.',
      },
      {
        label: 'ChatGPT and Claude connectors',
        availability: 'Preview',
        detail:
          'Ask questions of Power BI semantic models using measures maintained by the organization.',
      },
    ],
    relatedIds: ['fabric-apps', 'powerbi-data-apps', 'fabric-horizondb'],
    sourceUrl: source.foundry,
  },
  {
    id: 'web-iq',
    title: 'Web IQ for Azure customers',
    section: 'ai',
    summary:
      'Web IQ is generally available to Azure customers with Auto mode, iterative retrieval, content scopes and new knowledge domains.',
    whyItMatters:
      'Developers can ground agents in current web information and constrain which sites or categories contribute to responses.',
    availability: 'Mixed: GA and private preview',
    audiences: ['Developers', 'AI engineers', 'Enterprise administrators'],
    updates: [
      {
        label: 'Auto, Auto Advanced and Scopes',
        availability: 'Generally available',
        detail:
          'Orchestrate web categories, refine retrieval for complex questions and include or exclude URL, domain, site or path scopes.',
      },
      {
        label: 'Places and Weather',
        availability: 'Generally available',
        detail:
          'Add specialized real-world place and weather information.',
      },
      {
        label: 'Commerce',
        availability: 'Private preview',
        detail:
          'Provide structured product listings for AI shopping agents.',
      },
      {
        label: 'Healthcare ranking',
        availability: 'Generally available',
        detail:
          'Use source credibility signals to rank health evidence in Web IQ results.',
      },
    ],
    relatedIds: ['microsoft-iq', 'foundry-iq'],
    sourceUrl: source.webIq,
  },
  {
    id: 'agent365-risk',
    title: 'Dynamic Agent Risk in Agent 365',
    section: 'security',
    summary:
      'Dynamic Agent Risk will combine runtime, identity, access, endpoint, cloud and network signals into an evolving agent risk assessment.',
    whyItMatters:
      'Security teams can see risk as agent behavior and exposure change, with supported partner signals also contributing evidence.',
    availability: 'Preview',
    audiences: ['Security teams', 'IT administrators', 'AI governance teams'],
    updates: [
      {
        label: 'Risk assessment across security signals',
        availability: 'Preview',
        detail:
          'Combine posture, runtime signals and blast radius and surface agent risk across Microsoft security experiences.',
      },
      {
        label: 'Partner agent-security signals',
        availability: 'Announced',
        detail:
          'The Book names Check Point, Cyera, Darktrace and Zenity signals through partner connectors and Sentinel analytics.',
      },
    ],
    relatedIds: ['agent365-governance', 'microsoft-perception', 'entra-agentic-access'],
    sourceUrl: source.secureAi,
  },
  {
    id: 'agent365-insights',
    title: 'Agent 365 management insights',
    section: 'security',
    summary:
      'Usage and activity insights for Microsoft agents are expanding in Microsoft Admin Center, including for organizations without Agent 365 licensing.',
    whyItMatters:
      'More administrators can see foundational agent activity, while advanced governance and security capabilities continue to require qualifying licenses.',
    availability: 'Generally available',
    audiences: ['IT administrators', 'Security teams', 'Microsoft 365 leaders'],
    updates: [
      {
        label: 'Agent usage and activity metrics',
        availability: 'Generally available',
        detail:
          'View agent overview, active users, activity, sessions, exception rate and run time.',
      },
      {
        label: 'Viva Insights agent metrics',
        availability: 'License requirement updated',
        detail:
          'The Book says the Agent 365 license requirement is removed while at least 50 assigned Copilot licenses remain required.',
      },
    ],
    relatedIds: ['agent365-finops', 'agent365-governance'],
    sourceUrl: source.agent365,
  },
  {
    id: 'agent365-governance',
    title: 'Agent 365 governance for agents and tools',
    section: 'security',
    summary:
      'Agent 365 is adding an action center, use-case classification and controls for plugins, skills, MCP servers and local agents.',
    whyItMatters:
      'The controls address agent discovery and lifecycle decisions as organizations adopt more built-in, third-party and local agents.',
    availability: 'Mixed: GA, preview and private preview',
    audiences: ['IT administrators', 'Security teams', 'AI governance teams'],
    updates: [
      {
        label: 'Action center and business use-case classification',
        availability: 'Private preview / preview',
        detail:
          'Surface ownerless or inactive agents and help identify agents doing similar work.',
      },
      {
        label: 'Plugin and skill governance',
        availability: 'Generally available',
        detail:
          'Centrally manage availability and assign access to users and groups.',
      },
      {
        label: 'MCP and local-agent governance',
        availability: 'Preview',
        detail:
          'Add visibility and controls for supported MCP gateways, local agents and shadow MCP servers.',
      },
    ],
    relatedIds: ['agent365-risk', 'enterprise-context', 'intune-agent-governance'],
    sourceUrl: source.agent365,
  },
  {
    id: 'agent365-business-analytics',
    title: 'Agent 365 Business Analytics',
    section: 'ai',
    summary:
      'Agent 365 Business Analytics gives business leaders visibility into AI costs, outcomes and optimization opportunities.',
    whyItMatters:
      'It connects service-level spend with measures such as task success, user satisfaction and assisted hours.',
    availability: 'Frontier program',
    audiences: ['Business leaders', 'Finance teams', 'IT leaders'],
    updates: [
      {
        label: 'Spend and value reporting',
        availability: 'Frontier program',
        detail:
          'Analyze spend by agent, service, model and user and measure value for jobs and tasks.',
      },
      {
        label: 'Cost forecasting and recommendations',
        availability: 'Frontier program',
        detail:
          'Review scenarios, recommendations and natural-language questions about AI investments.',
      },
    ],
    relatedIds: ['agent365-finops', 'agent365-insights'],
    sourceUrl: source.agentAnalytics,
  },
  {
    id: 'codename-mdash',
    title: 'Codename MDASH agentic code security',
    section: 'security',
    summary:
      'Codename MDASH is a preview code-security system that uses a multi-agent pipeline to discover and validate vulnerabilities.',
    whyItMatters:
      'The workflow is designed to filter low-quality findings and give security and engineering teams more actionable evidence.',
    availability: 'Preview for eligible organizations',
    audiences: ['Security engineers', 'Developers', 'AppSec teams'],
    updates: [
      {
        label: 'Four-stage pipeline',
        availability: 'Preview',
        detail:
          'Map attack surface, scan code, validate findings through agent debate, deduplicate and reproduce findings where possible.',
      },
      {
        label: 'Quality, repository sharding and progress',
        availability: 'Preview',
        detail:
          'Improve finding quality, analyze large repositories in logical units and expose scan progress.',
      },
      {
        label: 'MAI Cyber model support',
        availability: 'Preview',
        detail:
          'Expand support across the MAI Cyber model family, with MAI-Cyber-2 planned after evaluation testing.',
      },
    ],
    relatedIds: ['foundry-models', 'microsoft-perception'],
    sourceUrl: source.perception,
  },
  {
    id: 'defender-isoc',
    title: 'Integrated Security Operations Center and vulnerability shielding',
    section: 'security',
    summary:
      'Core Integrated Security Operations Center capabilities are GA, while broader SIEM capabilities and vulnerability shielding are in preview.',
    whyItMatters:
      'The updates bring security operations together and describe temporary protections for vulnerable systems during active attacks.',
    availability: 'Mixed: GA and preview',
    audiences: ['SOC teams', 'Security analysts', 'IT administrators'],
    updates: [
      {
        label: 'Integrated Security Operations Center',
        availability: 'Core capabilities GA; full SIEM preview',
        detail:
          'Bring SIEM and threat protection together around a shared view for people and agents.',
      },
      {
        label: 'Vulnerability shielding',
        availability: 'Preview',
        detail:
          'Deploy targeted, temporary controls against known vulnerable systems while a permanent fix is pending.',
      },
    ],
    relatedIds: ['microsoft-perception', 'defender-agent-protection'],
    sourceUrl: source.defender,
  },
  {
    id: 'defender-agent-protection',
    title: 'Defender runtime protection for local AI agents',
    section: 'security',
    summary:
      'Microsoft Defender adds runtime protections for named local AI agents and apps on Windows.',
    whyItMatters:
      'The controls monitor agent activity and can work with Network DLP, Entra and Purview to help protect sensitive data and access.',
    availability: 'Generally available for listed agent coverage',
    audiences: ['Security teams', 'Endpoint administrators', 'AI users'],
    updates: [
      {
        label: 'Agent-native runtime protection',
        availability: 'Generally available',
        detail:
          'The Book lists Claude Code, GitHub Copilot CLI/app, Claude Desktop (Code), and their VS Code extensions.',
      },
      {
        label: 'Network-based runtime protection',
        availability: 'Generally available',
        detail:
          'The Book lists Open Claw, Ollama Desktop, ChatGPT Classic and ChatGPT Desktop (Chat).',
      },
      {
        label: 'Configuration and eligibility',
        availability: 'Defender for Endpoint P2',
        detail:
          'Configure Audit or Block mode in Defender or Intune portals.',
      },
    ],
    relatedIds: ['purview-agents', 'intune-agent-governance', 'edge-business'],
    sourceUrl: source.defender,
  },
  {
    id: 'defender-threat-intel',
    title: 'Zero-day and emerging threat intelligence',
    section: 'security',
    summary:
      'Microsoft Defender threat intelligence adds a preview experience for highlighting zero-day and emerging threats.',
    whyItMatters:
      'The experience brings time-sensitive research, industry and region filters, email alerts and protection validation together.',
    availability: 'Preview',
    audiences: ['Security analysts', 'Threat hunters', 'SOC teams'],
    updates: [
      {
        label: 'Threat tags, overview and notifications',
        availability: 'Preview',
        detail:
          'Label zero-day and emerging content, highlight latest threats and let teams subscribe to email updates.',
      },
      {
        label: 'Protection validation',
        availability: 'Preview',
        detail:
          'Run a Perception playbook from threat analytics to check coverage and create tailored detections.',
      },
    ],
    relatedIds: ['microsoft-perception', 'defender-isoc'],
    sourceUrl: source.threatIntel,
  },
  {
    id: 'onprem-security',
    title: 'On-premises security initiative',
    section: 'security',
    summary:
      'Microsoft is starting an on-premises security initiative for supported Exchange Server, SharePoint Server and Skype for Business Server workloads.',
    whyItMatters:
      'The initiative pairs migration guidance for eligible workloads with product investments for systems that must remain on-premises.',
    availability: 'Rolling out; availability varies by product and workload',
    audiences: ['IT administrators', 'Security teams', 'Hybrid infrastructure teams'],
    updates: [
      {
        label: 'On-Premises Baseline Security Mode',
        availability: 'Planned / rolling out over time',
        detail:
          'Intended to make recommended security settings easier to apply and maintain on supported products.',
      },
      {
        label: 'Current and upcoming protections',
        availability: 'Varies by product',
        detail:
          'The Book mentions security updates, hardening guidance, health tools and emergency mitigation where supported.',
      },
    ],
    sourceUrl: source.onPrem,
  },
  {
    id: 'entra-agentic-access',
    title: 'Microsoft Entra identity and access for agents',
    section: 'security',
    summary:
      'Entra announces agent identities, enterprise MCP access, access-policy planning, backup, governance and secure network controls.',
    whyItMatters:
      'The updates address identity lifecycle and policy enforcement for both Microsoft cloud agents and local agents.',
    availability: 'Mixed: GA and preview',
    audiences: ['Identity administrators', 'Security teams', 'AI governance teams'],
    updates: [
      {
        label: 'Entra Agent ID',
        availability: 'Preview',
        detail:
          'Assign IDs to discovered local agents and Microsoft Autopilot agents.',
      },
      {
        label: 'Microsoft MCP Server for Enterprise',
        availability: 'Generally available',
        detail:
          'Provide a controlled, permissions-based interface to Entra data for agents and applications.',
      },
      {
        label: 'Conditional Access, credentials and backup',
        availability: 'Preview',
        detail:
          'Add policy plans, high-assurance credentials, and Entra Backup and Recovery Premium.',
      },
      {
        label: 'Tenant governance and identity lifecycle',
        availability: 'Preview',
        detail:
          'Manage configuration across tenants and add just-in-time privilege and dynamic group capabilities.',
      },
      {
        label: 'Global Secure Access for agentic traffic',
        availability: 'Mixed: GA and preview',
        detail:
          'Add agent traffic acquisition and preview controls for local agents, MCP, unsanctioned agents and adaptive access.',
      },
      {
        label: 'External ID customer experiences',
        availability: 'Preview',
        detail:
          'Add application-native and hosted sign-in options, AI-assisted development and security controls.',
      },
    ],
    relatedIds: ['agent365-risk', 'agent365-governance', 'intune-agent-governance'],
    sourceUrl: source.entra,
  },
  {
    id: 'ai-readiness',
    title: 'AI Readiness Initiatives in Perception',
    section: 'security',
    summary:
      'Preview initiatives will track progress against security foundations using live tenant data.',
    whyItMatters:
      'The initiatives provide a structured way to identify and measure work on vulnerabilities, authentication and agent governance.',
    availability: 'Preview planned for January',
    audiences: ['Security teams', 'IT administrators', 'AI governance teams'],
    updates: [
      {
        label: 'Patching and vulnerability management',
        availability: 'Preview planned',
        detail:
          'Assess exposure, prioritize vulnerabilities, apply shielding where appropriate and coordinate patching.',
      },
      {
        label: 'Modernize authentication and agent governance',
        availability: 'Preview planned',
        detail:
          'Guide phishing-resistant passkey adoption and agent discovery and governance.',
      },
    ],
    relatedIds: ['microsoft-perception', 'entra-agentic-access'],
    sourceUrl: source.exposure,
  },
  {
    id: 'intune-agent-governance',
    title: 'Intune controls for local AI agents',
    section: 'security',
    summary:
      'Intune previews controls to discover local agents on managed devices and apply compliance and access policies.',
    whyItMatters:
      'Organizations can set boundaries for approved agents and respond when unapproved agents appear on managed endpoints.',
    availability: 'Preview',
    audiences: ['Endpoint administrators', 'Security teams', 'IT administrators'],
    updates: [
      {
        label: 'Discovery and compliance',
        availability: 'Preview',
        detail:
          'Use Agent 365 discovery, mark devices with unapproved agents noncompliant and apply Entra Conditional Access.',
      },
      {
        label: 'Execution and network boundaries',
        availability: 'Preview',
        detail:
          'Use Microsoft Execution Containers and Global Secure Access for agent access and network controls.',
      },
    ],
    relatedIds: ['agent365-governance', 'entra-agentic-access', 'purview-agents'],
    sourceUrl: source.intune,
  },
  {
    id: 'microsoft-perception',
    title: 'Microsoft Perception generally available',
    section: 'security',
    summary:
      'Microsoft Perception is generally available with specialized security agents and playbooks for investigation and response.',
    whyItMatters:
      'The service organizes security work into specialized agent roles and orchestrated playbooks, with governance and cost visibility.',
    availability: 'Generally available; some capabilities in preview or private preview',
    audiences: ['Security operations teams', 'Threat hunters', 'Security leaders'],
    updates: [
      {
        label: 'Triage, investigation and third-party data',
        availability: 'Generally available',
        detail:
          'Expand alert coverage and investigation across supported Microsoft and third-party sources named in the Book.',
      },
      {
        label: 'Threat detection and web app testing',
        availability: 'Mixed: GA and preview',
        detail:
          'Add KQL detection recommendations; authorized web app testing is in preview.',
      },
      {
        label: 'Agentic risk and exposure playbooks',
        availability: 'Mixed: GA, preview and private preview',
        detail:
          'Coordinate posture prioritization, vulnerability protection and agent risk workflows; some agent-security playbooks are private preview.',
      },
      {
        label: 'SOC workflows and extensibility',
        availability: 'Generally available',
        detail:
          'Trigger playbooks from Microsoft Defender or via APIs and MCP; include least privilege, approvals, audit and cost views.',
      },
    ],
    relatedIds: ['codename-mdash', 'defender-isoc', 'agent365-risk', 'ai-readiness'],
    sourceUrl: source.perception,
  },
  {
    id: 'purview-agents',
    title: 'Purview data security for Copilot and agents',
    section: 'security',
    summary:
      'Microsoft Purview previews expanded sensitive-data classification, Copilot protections and controls for endpoint agents.',
    whyItMatters:
      'The updates focus on identifying sensitive data and governing how Copilot and agents can access or share it.',
    availability: 'Preview',
    audiences: ['Data security teams', 'Compliance teams', 'IT administrators'],
    updates: [
      {
        label: 'Classification and labeling',
        availability: 'Preview',
        detail:
          'Advance automatic classification and labeling for sensitive information.',
      },
      {
        label: 'Data loss prevention for Copilot',
        availability: 'Preview',
        detail:
          'Prevent Copilot from referencing sensitive unlabelled files and extend prompt protection to attachments and linked content.',
      },
      {
        label: 'Endpoint agent data controls',
        availability: 'Preview',
        detail:
          'Apply protections to individual agents or groups to help prevent sensitive information exposure.',
      },
    ],
    relatedIds: ['defender-agent-protection', 'intune-agent-governance'],
    sourceUrl: source.purview,
  },
  {
    id: 'windows-copilot',
    title: 'Copilot on Windows file operations and diagnostics',
    section: 'windows',
    summary:
      'Preview Windows Copilot capabilities use on-device context for file management, PC diagnostics and taskbar search access.',
    whyItMatters:
      'People can ask for supported local file tasks or troubleshooting guidance without leaving the Windows experience.',
    availability: 'Preview',
    audiences: ['Windows users', 'IT administrators'],
    updates: [
      {
        label: 'Local file management',
        availability: 'Preview',
        detail:
          'Describe finding, organizing, moving, copying or renaming files in natural language.',
      },
      {
        label: 'Local PC diagnostics',
        availability: 'Preview',
        detail:
          'Use Windows diagnostic information to explain possible issues and recommended next steps.',
      },
      {
        label: 'Copilot in Windows Search',
        availability: 'Preview',
        detail:
          'Provide taskbar access to Copilot, with opt-in settings and IT policy controls.',
      },
    ],
    sourceUrl: source.windows,
  },
  {
    id: 'windows-365-cloud-pc',
    title: 'Windows 365 Cloud PC and administration updates',
    section: 'windows',
    summary:
      'Windows 365 adds streaming improvements, an Intune admin assistant, mobile application management and context-based redirections.',
    whyItMatters:
      'The updates address Cloud PC connectivity, troubleshooting and controls over data redirection.',
    availability: 'Mixed: GA and preview',
    audiences: ['IT administrators', 'Remote workers', 'Endpoint teams'],
    updates: [
      {
        label: 'Direct Stream improvements',
        availability: 'Generally available',
        detail:
          'Improve connectivity and multimedia; NVIDIA collaboration enhancements are previewed for select regions early next year.',
      },
      {
        label: 'Windows 365 admin assistant and Windows MAM',
        availability: 'Preview',
        detail:
          'Assist Cloud PC health investigations and apply policies to Windows App while leaving accessing devices unmanaged.',
      },
      {
        label: 'Context-based redirections',
        availability: 'Generally available',
        detail:
          'Allow or restrict clipboard, drive, printer and USB redirection based on Entra authentication context.',
      },
    ],
    sourceUrl: source.windows365,
  },
  {
    id: 'windows-intune-controls',
    title: 'Windows and Intune security and management',
    section: 'windows',
    summary:
      'Windows and Intune add baseline protection, application updates, declarative management and reliability reporting.',
    whyItMatters:
      'The updates focus on keeping devices and applications secure and manageable while giving IT more control over rollout timing.',
    availability: 'Mixed: GA, preview and private preview',
    audiences: ['IT administrators', 'Endpoint security teams'],
    updates: [
      {
        label: 'Windows baseline protection',
        availability: 'Private preview',
        detail:
          'Apply and maintain core security settings from device boot.',
      },
      {
        label: 'Windows Endpoint Security Platform',
        availability: 'Generally available',
        detail:
          'Provide approved security products a safer way to protect Windows devices.',
      },
      {
        label: 'Server, app and device management',
        availability: 'Preview / private preview',
        detail:
          'Cover Windows Server 2028 client-like management, automatic application updates, declarative management and experience controls.',
      },
      {
        label: 'OS reliability reporting',
        availability: 'Private preview',
        detail:
          'Surface stop-error trends, failure patterns and affected devices in Windows Autopatch.',
      },
    ],
    sourceUrl: source.windows,
  },
  {
    id: 'windows-365-agents',
    title: 'Windows 365 for Agents',
    section: 'windows',
    summary:
      'Windows 365 for Agents adds billing, Foundry and Copilot Studio integration, on-premises access and persistent Cloud PCs.',
    whyItMatters:
      'The announcement offers managed workspaces for agents, including scenarios that interact with legacy applications without APIs.',
    availability: 'Mixed: Copilot Credits eligibility and preview capabilities',
    audiences: ['Agent builders', 'IT administrators', 'Automation teams'],
    updates: [
      {
        label: 'Copilot Credits',
        availability: 'Eligible',
        detail:
          'Bring supported usage into common billing, governance, reporting and cost management.',
      },
      {
        label: 'Copilot Studio and Foundry integrations',
        availability: 'Mixed: available and preview',
        detail:
          'Use Cloud PCs as computer-use tools; Foundry MCP support is previewed for early next year.',
      },
      {
        label: 'On-premises application access and persistent Cloud PCs',
        availability: 'Preview',
        detail:
          'Use agent identities to reach on-premises apps and support always-on agent workspaces through Frontier.',
      },
    ],
    relatedIds: ['copilot-managed-runtime', 'agent365-governance'],
    sourceUrl: source.windows365,
  },
  {
    id: 'windows-hybrid-ai',
    title: 'Windows local and hybrid AI options',
    section: 'windows',
    summary:
      'Windows expands AI workload options across local PCs, Cloud PCs and managed server environments.',
    whyItMatters:
      'Teams can choose where supported models run based on their compute and environment requirements.',
    availability: 'Mixed: GA and private preview',
    audiences: ['Developers', 'IT administrators', 'AI platform teams'],
    updates: [
      {
        label: 'Local models on Windows 365 Cloud PCs',
        availability: 'Generally available',
        detail:
          'Use compatible Foundry Local models on supported Cloud PCs, including high-compute and GPU-enabled options.',
      },
      {
        label: 'Windows Server 2025 with AVD Hybrid',
        availability: 'Private preview',
        detail:
          'Support multi-user AI development environments managed through Windows Server and Azure Virtual Desktop.',
      },
    ],
    relatedIds: ['windows-server-2028', 'azure-ai-infrastructure'],
    sourceUrl: source.windows,
  },
  {
    id: 'windows-agent-controls',
    title: 'Windows controls for isolating AI agents',
    section: 'windows',
    summary:
      'Windows previews process-container controls for agent communications, network access and identity proofing.',
    whyItMatters:
      'The controls are intended to establish clearer boundaries around agent access and activity on Windows devices.',
    availability: 'Mixed: preview and GA',
    audiences: ['IT administrators', 'Security teams', 'Developers'],
    updates: [
      {
        label: 'Process containers',
        availability: 'Preview',
        detail:
          'Provide each agent or app with defined communication, network and identity boundaries, including COM and IPC governance.',
      },
      {
        label: 'Learning and permissive mode',
        availability: 'Generally available',
        detail:
          'Observe normal agent communication with system services before enforcing restrictions.',
      },
    ],
    relatedIds: ['azure-ai-infrastructure', 'intune-agent-governance'],
    sourceUrl: source.windows,
  },
];

export const ANNOUNCEMENT_BY_ID = new Map(
  ANNOUNCEMENTS.map((announcement) => [announcement.id, announcement])
);
