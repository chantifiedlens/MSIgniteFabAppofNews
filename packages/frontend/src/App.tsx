import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  ChevronRight,
  Cloud,
  ExternalLink,
  Fingerprint,
  Layers3,
  Moon,
  Search,
  Shield,
  Sparkles,
  Sun,
  X,
  type LucideIcon,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';

import { useTheme } from '@/hooks/theme.context';
import {
  ANNOUNCEMENTS,
  ANNOUNCEMENT_BY_ID,
  BOOK_OF_NEWS_URL,
  SECTIONS,
  type Announcement,
  type SectionId,
} from '@/ignite-news';

const SECTION_ICONS: Record<SectionId, LucideIcon> = {
  azure: Cloud,
  fabric: Layers3,
  ai: Sparkles,
  security: Shield,
  developer: Braces,
  windows: Fingerprint,
};

function routeFromHash() {
  const [section, announcementId] = window.location.hash
    .replace(/^#\/?/, '')
    .split('/');

  if (section === 'overview') return { section: 'overview', announcementId: '' };
  if (SECTIONS.some((entry) => entry.id === section))
    return { section, announcementId: announcementId ?? '' };
  return { section: 'overview', announcementId: '' };
}

function ExternalSource({
  href,
  children,
  className = '',
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center gap-200 text-primary underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring ${className}`}
    >
      {children}
      <ExternalLink size={14} aria-hidden="true" />
    </a>
  );
}

function CountBadge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-background px-300 py-100 text-200 font-medium text-muted-foreground">
      {children}
    </span>
  );
}

function ThemeButton() {
  const { isDark, toggleTheme } = useTheme();
  const Icon = isDark ? Sun : Moon;
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      <Icon size={17} aria-hidden="true" />
    </button>
  );
}

function Overview({
  onNavigate,
  onAnnouncementNavigate,
}: {
  onNavigate: (section: SectionId) => void;
  onAnnouncementNavigate: (section: SectionId, announcementId: string) => void;
}) {
  const exploreHeading = useRef<HTMLHeadingElement>(null);
  const featured = ['fabric-apps', 'microsoft-iq', 'entra-agentic-access']
    .map((id) => ANNOUNCEMENT_BY_ID.get(id))
    .filter((entry): entry is Announcement => entry !== undefined);

  return (
    <div className="overview-layout">
      <section className="overflow-hidden rounded-4xl border border-border bg-card shadow-sm">
        <div className="grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)]">
          <div className="@container/hero p-600 md:p-800 short-screen:p-600">
            <div className="flex flex-wrap items-center gap-200">
              <span className="inline-flex items-center gap-200 rounded-full bg-primary px-300 py-200 text-200 font-bold uppercase tracking-widest text-primary-foreground">
                <Layers3 size={15} aria-hidden="true" />
                Microsoft Fabric App
              </span>
              <span className="text-200 font-semibold uppercase tracking-widest text-muted-foreground">
                Independent field notes · 2026
              </span>
            </div>
            <p className="mt-700 text-300 font-semibold uppercase tracking-widest text-primary short-screen:mt-400">
              Your interactive guide to Ignite
            </p>
            <h1 className="mt-200 max-w-3xl font-heading text-hero-900 leading-hero-900 font-semibold tracking-tight lg:text-hero-1000 lg:leading-hero-1000 @max-2xl/hero:text-hero-900 @max-2xl/hero:leading-hero-900 short-screen:text-hero-900 short-screen:leading-hero-900">
              Explore the Microsoft Ignite 2026 Book of News.
            </h1>
            <p className="mt-500 max-w-2xl text-400 leading-500 text-muted-foreground">
              Discover announcements by topic, understand what was announced
              and why it matters, and follow connections across Microsoft
              technologies—all in an interactive Fabric App.
            </p>
            <div className="mt-700 flex flex-wrap items-center gap-300 short-screen:mt-400">
              <button
                type="button"
                onClick={() => {
                  exploreHeading.current?.scrollIntoView({ block: 'start' });
                  exploreHeading.current?.focus({ preventScroll: true });
                }}
                className="inline-flex items-center gap-200 rounded-full bg-primary px-500 py-300 text-300 font-semibold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                Explore the news
                <ArrowRight size={16} aria-hidden="true" />
              </button>
              <ExternalSource
                href={BOOK_OF_NEWS_URL}
                className="rounded-full px-300 py-300 text-300 font-semibold"
              >
                Open the Book of News
              </ExternalSource>
            </div>
            <p className="mt-600 max-w-2xl border-t border-border pt-400 text-200 leading-300 text-muted-foreground">
              An independently created Fabric App, not an official Microsoft
              Ignite product. Microsoft’s Book of News is the primary source.
            </p>
          </div>

          <div className="flex flex-col justify-between bg-foreground p-600 text-background md:grid md:grid-cols-2 md:items-start md:gap-400 md:p-800 lg:flex short-screen:p-600">
            <div>
              <div className="flex items-center justify-between gap-300 border-b border-background/25 pb-400">
                <span className="text-200 font-semibold uppercase tracking-widest">
                  The Fabric App experience
                </span>
                <Layers3 size={20} aria-hidden="true" />
              </div>
              <p className="mt-600 font-heading text-hero-700 leading-hero-700 font-semibold">
                A different way into the news.
              </p>
              <p className="mt-300 text-300 leading-300 text-background/80">
                Move from the big picture to the details, at your own pace.
              </p>
            </div>
            <ol className="mt-700 max-w-xl space-y-400 md:mt-0 lg:mt-700 short-screen:mt-400">
              {[
                ['01', 'Discover', 'Browse announcements by technology area.'],
                ['02', 'Understand', 'Read what changed and why it may matter.'],
                ['03', 'Go deeper', 'Follow related topics and official sources.'],
              ].map(([number, title, description]) => (
                <li key={number} className="flex gap-300 border-t border-background/20 pt-400">
                  <span className="font-heading text-500 text-background/70">{number}</span>
                  <span>
                    <span className="block text-300 font-semibold">{title}</span>
                    <span className="mt-100 block text-200 leading-200 text-background/80">{description}</span>
                  </span>
                </li>
              ))}
            </ol>
            <p className="mt-700 text-200 font-semibold uppercase tracking-widest text-background/70 md:mt-0 lg:mt-700">
              Ignite / 2026 · Field notes
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="explore-heading">
        <div className="mb-500 flex flex-wrap items-end justify-between gap-300">
          <div>
            <p className="text-200 font-semibold uppercase tracking-widest text-primary">
              The news, organized for exploration
            </p>
            <h2
              id="explore-heading"
              ref={exploreHeading}
              tabIndex={-1}
              className="mt-100 scroll-mt-32 font-heading text-hero-700 leading-hero-700 font-semibold focus:outline-2 focus:outline-offset-4 focus:outline-ring"
            >
              Choose a path through Ignite
            </h2>
          </div>
          <p className="max-w-xl text-300 leading-300 text-muted-foreground">
            Browse the Book by area, then open an announcement for its
            availability, context, related topics and sources.
          </p>
        </div>
        <div className="topic-grid grid gap-px overflow-hidden rounded-3xl border border-border bg-border">
          {SECTIONS.map((section, index) => {
            const Icon = SECTION_ICONS[section.id];
            const count = ANNOUNCEMENTS.filter(
              (item) => item.section === section.id
            ).length;
            return (
              <button
                type="button"
                key={section.id}
                onClick={() => onNavigate(section.id)}
                className="group flex gap-400 bg-card p-500 text-left transition-colors hover:bg-accent/70 focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:p-600"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-center justify-between gap-300">
                    <span className="text-200 font-semibold uppercase tracking-widest text-muted-foreground">
                      {String(index + 1).padStart(2, '0')} / {count} {count === 1 ? 'entry' : 'entries'}
                    </span>
                    <ArrowUpRight size={17} className="shrink-0 text-primary" aria-hidden="true" />
                  </span>
                  <span className="mt-200 block font-heading text-500 leading-500 font-semibold">
                    {section.title}
                  </span>
                  <span className="mt-200 block text-300 leading-300 text-muted-foreground">
                    {section.description}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="rounded-3xl bg-accent p-600 md:p-800 min-[110rem]:col-span-2">
        <div className="flex flex-wrap items-end justify-between gap-300">
          <div>
            <p className="text-200 font-semibold uppercase tracking-widest text-primary">From the Book of News</p>
            <h2 id="featured-heading" className="mt-100 font-heading text-hero-700 leading-hero-700 font-semibold">
              Start with a story
            </h2>
          </div>
          <p className="max-w-xl text-300 leading-300 text-muted-foreground">
            A few entry points into apps, AI and security. Open each announcement to explore its details and related news.
          </p>
        </div>
        <div className="mt-500 grid gap-300 lg:grid-cols-3">
          {featured.map((announcement) => {
            const section = SECTIONS.find((entry) => entry.id === announcement.section);
            return (
              <a
                key={announcement.id}
                href={`#${announcement.section}/${announcement.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  onAnnouncementNavigate(announcement.section, announcement.id);
                }}
                className="group flex flex-col rounded-2xl border border-border bg-card p-500 text-card-foreground transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <span className="flex items-center justify-between gap-300 text-200 font-semibold uppercase tracking-widest text-primary">
                  {section?.shortTitle}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </span>
                <span className="mt-400 font-heading text-500 leading-500 font-semibold">{announcement.title}</span>
                <span className="mt-200 max-w-xl flex-1 text-300 leading-300 text-muted-foreground">{announcement.summary}</span>
                <span className="mt-400 text-200 font-semibold text-primary">Explore announcement</span>
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function AnnouncementCard({
  announcement,
  selected,
  onRelatedNavigate,
}: {
  announcement: Announcement;
  selected: boolean;
  onRelatedNavigate: (section: SectionId, announcementId: string) => void;
}) {
  const section = SECTIONS.find((item) => item.id === announcement.section)!;
  const related = (announcement.relatedIds ?? [])
    .map((id) => ANNOUNCEMENT_BY_ID.get(id))
    .filter((entry): entry is Announcement => !!entry);

  return (
    <article
      id={announcement.id}
      className={`@container scroll-mt-24 rounded-3xl border border-border bg-card p-500 transition-colors ${selected ? 'ring-2 ring-primary/40' : ''}`}
    >
      <div className="flex flex-wrap items-center gap-200">
        <span className="inline-flex items-center gap-100 rounded-full bg-primary/10 px-300 py-100 text-200 font-semibold text-primary">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          {announcement.availability}
        </span>
        <span className="text-200 text-muted-foreground">{section.shortTitle}</span>
      </div>
      <h3 className="mt-300 font-heading text-500 leading-500 font-semibold">
        {announcement.title}
      </h3>
      <p className="mt-200 text-300 leading-300 text-muted-foreground">
        {announcement.summary}
      </p>

      <details className="group mt-400 border-t border-border pt-300" open={selected}>
        <summary className="flex cursor-pointer list-none items-center justify-between gap-300 rounded-lg py-100 text-300 font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring [&::-webkit-details-marker]:hidden">
          <span>Explore this announcement</span>
          <ChevronRight
            size={17}
            className="shrink-0 text-primary transition-transform group-open:rotate-90"
            aria-hidden="true"
          />
        </summary>
        <div className="mt-400 space-y-500">
          <div className="grid gap-400 @2xl:grid-cols-[minmax(0,1fr)_minmax(180px,0.45fr)]">
            <div>
              <h4 className="text-200 font-semibold uppercase tracking-widest text-primary">
                What Microsoft announced
              </h4>
              <ul className="mt-300 space-y-300">
                {announcement.updates.map((update) => (
                  <li
                    key={update.label}
                    className="grid gap-100 @lg:grid-cols-[minmax(150px,0.55fr)_minmax(0,1.45fr)]"
                  >
                    <span className="text-300 font-medium">{update.label}</span>
                    <span className="text-300 leading-300 text-muted-foreground">
                      {update.detail}
                      <span className="mt-100 block text-200 font-medium text-foreground/75">
                        {update.availability}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-accent/70 p-400">
              <h4 className="text-200 font-semibold uppercase tracking-widest text-muted-foreground">
                Why it may matter
              </h4>
              <p className="mt-200 text-300 leading-300">
                {announcement.whyItMatters}
              </p>
              <h4 className="mt-400 text-200 font-semibold uppercase tracking-widest text-muted-foreground">
                Who may care
              </h4>
              <div className="mt-200 flex flex-wrap gap-100">
                {announcement.audiences.map((audience) => (
                  <span
                    key={audience}
                    className="rounded-full border border-border/70 bg-background/70 px-200 py-100 text-200 text-muted-foreground"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <h4 className="text-200 font-semibold uppercase tracking-widest text-muted-foreground">
                Related announcements
              </h4>
              <div className="mt-200 flex flex-wrap gap-200">
                {related.map((entry) => (
                  <a
                    key={entry.id}
                    href={`#${entry.section}/${entry.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      onRelatedNavigate(entry.section, entry.id);
                    }}
                    className="inline-flex items-center gap-100 rounded-full border border-border px-300 py-100 text-200 font-medium transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    {entry.title}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-x-500 gap-y-200 border-t border-border pt-300">
            <ExternalSource href={BOOK_OF_NEWS_URL}>
              Microsoft Ignite Book of News
            </ExternalSource>
            {announcement.sourceUrl && (
              <ExternalSource href={announcement.sourceUrl}>
                Official further reading
              </ExternalSource>
            )}
          </div>
        </div>
      </details>
    </article>
  );
}

function AnnouncementList({
  announcements,
  selectedId,
  onRelatedNavigate,
}: {
  announcements: Announcement[];
  selectedId: string;
  onRelatedNavigate: (section: SectionId, announcementId: string) => void;
}) {
  if (announcements.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-border bg-card/60 px-500 py-800 text-center">
        <Search size={22} className="mx-auto text-muted-foreground" aria-hidden="true" />
        <p className="mt-300 text-400 font-semibold">No matching announcements</p>
        <p className="mt-100 text-300 text-muted-foreground">
          Try a product name, capability, availability status or audience.
        </p>
      </div>
    );
  }

  return (
    <div className="announcement-grid grid items-start gap-300">
      {announcements.map((announcement) => (
        <div key={announcement.id} className="min-w-0">
          <AnnouncementCard
            announcement={announcement}
            selected={selectedId === announcement.id}
            onRelatedNavigate={onRelatedNavigate}
          />
        </div>
      ))}
    </div>
  );
}

function FabricAppsFeature() {
  return (
    <section className="overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 p-500 md:p-600">
      <div className="grid gap-500 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-200 font-semibold uppercase tracking-widest text-primary">
            Independent perspective · Further reading
          </p>
          <h2 className="mt-200 font-heading text-600 leading-600 font-semibold">
            The allure of Fabric Apps
          </h2>
          <p className="mt-200 max-w-2xl text-300 leading-300 text-muted-foreground">
            A Chantified Lens blog post, shared as personal commentary and
            context—not as a Microsoft announcement or documentation.
          </p>
        </div>
        <ExternalSource
          href="https://chantifiedlens.com/2026/11/19/the-allure-of-fabric-apps/"
          className="w-fit rounded-full border border-primary/30 bg-card px-500 py-300 font-semibold no-underline hover:bg-primary hover:text-primary-foreground hover:no-underline"
        >
          Read the article
        </ExternalSource>
      </div>
    </section>
  );
}

function FabricAppsMap() {
  const buildingBlocks = [
    {
      label: 'Trusted Fabric data',
      description: 'Semantic models · Warehouses · Lakehouses',
      tone: 'bg-accent',
    },
    {
      label: 'Fabric app',
      description: 'An interactive experience built around business data',
      tone: 'bg-primary/10',
    },
    {
      label: 'Backend choice',
      description: 'Microsoft SQL database or Fabric HorizonDB',
      tone: 'bg-accent',
    },
    {
      label: 'Enterprise operations',
      description: 'Governance hub · Security controls · Observability',
      tone: 'bg-primary/10',
    },
  ];

  return (
    <section
      className="rounded-3xl border border-border bg-card p-500 md:p-600"
      aria-labelledby="fabric-apps-map-title"
    >
      <div className="flex flex-wrap items-end justify-between gap-300">
        <div>
          <p className="text-200 font-semibold uppercase tracking-widest text-primary">
            Announced building blocks
          </p>
          <h2
            id="fabric-apps-map-title"
            className="mt-100 font-heading text-500 font-semibold"
          >
            Fabric Apps in the Fabric landscape
          </h2>
        </div>
        <p className="max-w-xl text-200 leading-200 text-muted-foreground">
          A conceptual map of the choices named in the Book—not a prescribed
          deployment sequence.
        </p>
      </div>
      <div className="mt-500 grid gap-200 md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-stretch">
        {buildingBlocks.map((block, index) => (
          <div key={block.label} className="contents">
            <div
              className={`flex min-h-28 flex-col justify-center rounded-2xl border border-border/70 p-300 ${block.tone}`}
            >
              <span className="text-200 font-semibold">{block.label}</span>
              <span className="mt-100 text-200 leading-200 text-muted-foreground">
                {block.description}
              </span>
            </div>
            {index < buildingBlocks.length - 1 && (
              <span className="flex items-center justify-center text-primary">
                <ArrowRight
                  size={17}
                  className="hidden md:block"
                  aria-hidden="true"
                />
                <ArrowDownRight
                  size={17}
                  className="md:hidden"
                  aria-hidden="true"
                />
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function SectionView({
  sectionId,
  announcements,
  selectedId,
  isSearching,
  onRelatedNavigate,
}: {
  sectionId: SectionId;
  announcements: Announcement[];
  selectedId: string;
  isSearching: boolean;
  onRelatedNavigate: (section: SectionId, announcementId: string) => void;
}) {
  const section = SECTIONS.find((entry) => entry.id === sectionId)!;
  const Icon = SECTION_ICONS[sectionId];
  const count = ANNOUNCEMENTS.filter(
    (item) => item.section === sectionId
  ).length;
  return (
    <div className="space-y-500">
      <div className="rounded-3xl border border-border bg-card p-500 md:p-600">
        <div className="flex flex-wrap items-start justify-between gap-400">
          <div className="flex gap-300">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Icon size={22} aria-hidden="true" />
            </span>
            <div>
              <p className="text-200 font-semibold uppercase tracking-widest text-primary">
                Announcement section
              </p>
              <h1 className="mt-100 font-heading text-hero-700 leading-hero-700 font-semibold">
                {section.title}
              </h1>
              <p className="mt-200 max-w-3xl text-300 leading-300 text-muted-foreground">
                {section.description}
              </p>
            </div>
          </div>
          <CountBadge>
            {isSearching
              ? `${announcements.length} search matches`
              : `${count} mapped entries`}
          </CountBadge>
        </div>
        <div className="mt-400 flex flex-wrap items-center gap-x-500 gap-y-200 border-t border-border pt-300">
          <ExternalSource href={BOOK_OF_NEWS_URL}>
            Primary source: Microsoft Book of News
          </ExternalSource>
          {sectionId === 'fabric' && (
            <span className="text-200 text-muted-foreground">
              Fabric Apps has a dedicated announcement and further reading below.
            </span>
          )}
        </div>
      </div>

      {sectionId === 'fabric' && (
        <div className="grid gap-500 min-[110rem]:grid-cols-[minmax(0,0.8fr)_minmax(0,2fr)]">
          <FabricAppsFeature />
          <FabricAppsMap />
        </div>
      )}

      <AnnouncementList
        announcements={announcements}
        selectedId={selectedId}
        onRelatedNavigate={onRelatedNavigate}
      />
    </div>
  );
}

function SearchResults({
  announcements,
  selectedId,
  onRelatedNavigate,
}: {
  announcements: Announcement[];
  selectedId: string;
  onRelatedNavigate: (section: SectionId, announcementId: string) => void;
}) {
  return (
    <div className="space-y-500">
      <div className="flex flex-wrap items-end justify-between gap-300">
        <div>
          <p className="text-200 font-semibold uppercase tracking-widest text-primary">
            Search across all sections
          </p>
          <h1 className="mt-100 font-heading text-hero-700 leading-hero-700 font-semibold">
            Matching announcements
          </h1>
        </div>
        <CountBadge>{announcements.length} matches</CountBadge>
      </div>
      <AnnouncementList
        announcements={announcements}
        selectedId={selectedId}
        onRelatedNavigate={onRelatedNavigate}
      />
    </div>
  );
}

function App() {
  const [route, setRoute] = useState(routeFromHash);
  const [search, setSearch] = useState('');
  const matchingAnnouncements = useMemo(() => {
    const term = search.trim().toLocaleLowerCase();
    if (!term) {
      return ANNOUNCEMENTS.filter(
        (announcement) => announcement.section === route.section
      );
    }

    return ANNOUNCEMENTS.filter((announcement) => {
      const section = SECTIONS.find(
        (entry) => entry.id === announcement.section
      )!;
      const text = [
        announcement.title,
        announcement.summary,
        announcement.whyItMatters,
        announcement.availability,
        section.title,
        ...announcement.audiences,
        ...announcement.updates.flatMap((update) => [
          update.label,
          update.availability,
          update.detail,
        ]),
      ]
        .join(' ')
        .toLocaleLowerCase();
      return text.includes(term);
    });
  }, [route.section, search]);

  useEffect(() => {
    const onHashChange = () => {
      const nextRoute = routeFromHash();
      if (nextRoute.announcementId) setSearch('');
      setRoute(nextRoute);
    };
    window.addEventListener('hashchange', onHashChange);
    window.addEventListener('popstate', onHashChange);
    return () => {
      window.removeEventListener('hashchange', onHashChange);
      window.removeEventListener('popstate', onHashChange);
    };
  }, []);

  const activeSection = SECTIONS.find(
    (section) => section.id === route.section
  );
  const navTo = (section: string) => {
    window.history.pushState(null, '', `#${section}`);
    setRoute({ section, announcementId: '' });
    setSearch('');
  };
  const navToAnnouncement = (
    section: SectionId,
    announcementId: string
  ) => {
    window.history.pushState(null, '', `#${section}/${announcementId}`);
    setRoute({ section, announcementId });
    setSearch('');
  };
  const isSearching = search.trim().length > 0;

  return (
    <div className="min-h-full bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only z-50 rounded-full bg-primary px-400 py-200 text-primary-foreground focus:not-sr-only focus:fixed focus:left-400 focus:top-400"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-app px-300 pb-600 md:px-500">
        <header className="sticky top-0 z-30 -mx-300 border-b border-border/80 bg-background/90 px-300 backdrop-blur-xl md:-mx-500 md:px-500">
          <div className="flex min-h-16 items-center gap-300">
            <a
              href="#overview"
              onClick={() => {
                navTo('overview');
              }}
              className="flex shrink-0 items-center gap-200 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              aria-label="Ignite Field Notes overview"
            >
              <span className="flex size-9 items-center justify-center rounded-xl bg-foreground text-background">
                <BookOpen size={18} aria-hidden="true" />
              </span>
              <span className="hidden sm:block">
                <span className="block text-200 font-bold uppercase tracking-widest">
                  Ignite / 26
                </span>
                <span className="block text-200 text-muted-foreground">
                  FABRIC APP · FIELD NOTES
                </span>
              </span>
            </a>

            <label className="relative ml-auto flex min-w-0 flex-1 items-center sm:max-w-md">
              <Search
                size={16}
                className="pointer-events-none absolute left-300 text-muted-foreground"
                aria-hidden="true"
              />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.currentTarget.value)}
                placeholder="Search announcements…"
                aria-label="Search announcements across all sections"
                className="h-10 w-full rounded-full border border-border bg-card pl-800 pr-800 text-300 outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="absolute right-200 flex size-8 items-center justify-center rounded-full text-muted-foreground hover:bg-accent focus-visible:outline-2 focus-visible:outline-ring"
                >
                  <X size={15} aria-hidden="true" />
                </button>
              )}
            </label>
            <ThemeButton />
          </div>

          <nav
            aria-label="Announcement sections"
            className="-mx-300 flex gap-100 overflow-x-auto px-300 pb-200 [scrollbar-width:thin] md:-mx-500 md:px-500"
          >
            <a
              href="#overview"
              aria-current={route.section === 'overview' ? 'page' : undefined}
              className={`inline-flex shrink-0 items-center gap-100 rounded-full px-300 py-200 text-200 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${route.section === 'overview' ? 'bg-foreground text-background' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}
              onClick={(event) => {
                event.preventDefault();
                navTo('overview');
              }}
            >
              Overview
            </a>
            {SECTIONS.map((section) => {
              const Icon = SECTION_ICONS[section.id];
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={route.section === section.id ? 'page' : undefined}
                  className={`inline-flex shrink-0 items-center gap-100 rounded-full px-300 py-200 text-200 font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${route.section === section.id ? 'bg-foreground text-background' : 'text-muted-foreground hover:bg-accent hover:text-foreground'}`}
                  onClick={(event) => {
                    event.preventDefault();
                    navTo(section.id);
                  }}
                >
                  <Icon size={14} aria-hidden="true" />
                  {section.shortTitle}
                </a>
              );
            })}
          </nav>
        </header>

        <main id="main-content" className="py-500 md:py-700 short-screen:py-400">
          {isSearching ? (
            <SearchResults
              announcements={matchingAnnouncements}
              selectedId={route.announcementId}
              onRelatedNavigate={navToAnnouncement}
            />
          ) : route.section === 'overview' ? (
            <Overview onNavigate={navTo} onAnnouncementNavigate={navToAnnouncement} />
          ) : activeSection ? (
            <div className="space-y-500">
              {route.section === 'fabric' && (
                <div className="sr-only" aria-live="polite">
                  Fabric Apps announcement section
                </div>
              )}
              <SectionView
                sectionId={activeSection.id}
                announcements={matchingAnnouncements}
                selectedId={route.announcementId}
                isSearching={isSearching}
                onRelatedNavigate={navToAnnouncement}
              />
            </div>
          ) : (
            <Overview onNavigate={navTo} onAnnouncementNavigate={navToAnnouncement} />
          )}
        </main>

        <footer className="flex flex-col gap-300 border-t border-border py-500 text-200 text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            Independent reading guide · Microsoft’s Book of News is the source
            of record.
          </p>
          <ExternalSource href={BOOK_OF_NEWS_URL}>
            Open the official source
          </ExternalSource>
        </footer>
      </div>
    </div>
  );
}

export default App;
