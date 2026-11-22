//-----------------------------------------------------------------------
// <copyright company="Microsoft Corporation">
//        Copyright (c) Microsoft Corporation.  All rights reserved.
//        Licensed under the MIT license. See LICENSE file in the project root for full license information.
// </copyright>
//-----------------------------------------------------------------------

import { fireEvent, render, screen, within } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

import App from '@/App';
import {
  ANNOUNCEMENTS,
  ANNOUNCEMENT_BY_ID,
  BOOK_OF_NEWS_URL,
  SECTIONS,
} from '@/ignite-news';

describe('App', () => {
  beforeEach(() => {
    window.history.replaceState(null, '', '/');
  });

  it('highlights the original Book of News on the overview', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', {
        name: 'Explore the Microsoft Ignite 2026 Book of News.',
      })
    ).toBeVisible();
    expect(screen.getByText('Microsoft Fabric App')).toBeVisible();
    expect(screen.getByText(/not an official Microsoft Ignite product/)).toBeVisible();
    expect(
      screen.getByRole('link', { name: /Open the Book of News/ })
    ).toHaveAttribute(
      'href',
      'https://news.microsoft.com/events/ignite/2026/book-of-news/'
    );
    expect(
      screen.queryByRole('link', { name: /The allure of Fabric Apps/ })
    ).toBeNull();
  });

  it('navigates to Fabric Apps and presents the personal article as commentary', () => {
    render(<App />);
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Announcement sections' }))
        .getByRole('link', { name: /Fabric & apps/ })
    );

    expect(
      screen.getByRole('heading', { name: 'Fabric, Power BI & apps' })
    ).toBeVisible();
    expect(
      screen.getByRole('heading', { name: 'The allure of Fabric Apps' })
    ).toBeVisible();
    expect(
      screen.getByText(/personal commentary and context—not as a Microsoft announcement/)
    ).toBeVisible();
    expect(
      screen.getByRole('link', { name: /Read the article/ })
    ).toHaveAttribute(
      'href',
      'https://chantifiedlens.com/2026/11/19/the-allure-of-fabric-apps/'
    );
  });

  it('returns to the overview from a section and restores its content', () => {
    render(<App />);
    const navigation = screen.getByRole('navigation', {
      name: 'Announcement sections',
    });
    fireEvent.click(within(navigation).getByRole('link', { name: /Fabric & apps/ }));
    expect(
      screen.getByRole('heading', { name: 'Fabric, Power BI & apps' })
    ).toBeVisible();

    fireEvent.click(within(navigation).getByRole('link', { name: 'Overview' }));
    expect(
      screen.getByRole('heading', {
        name: 'Explore the Microsoft Ignite 2026 Book of News.',
      })
    ).toBeVisible();
    expect(
      screen.getByRole('heading', { name: 'Choose a path through Ignite' })
    ).toBeVisible();
    expect(window.location.hash).toBe('#overview');
  });

  it('moves focus to the news sections without changing the route', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { name: 'Choose a path through Ignite' });
    heading.scrollIntoView = vi.fn();
    fireEvent.click(screen.getByRole('button', { name: 'Explore the news' }));
    expect(heading.scrollIntoView).toHaveBeenCalled();
    expect(heading).toHaveFocus();
    expect(window.location.hash).toBe('');
  });

  it.each([
    ['Rayfin and Fabric apps reach general availability', '#fabric/fabric-apps'],
    ['Microsoft IQ', '#ai/microsoft-iq'],
    ['Microsoft Entra identity and access for agents', '#security/entra-agentic-access'],
  ])('opens featured announcement %s with its details expanded', (title, hash) => {
    render(<App />);
    const featured = screen.getByRole('region', { name: 'Start with a story' });
    fireEvent.click(
      within(featured).getByRole('link', { name: new RegExp(title) })
    );

    expect(window.location.hash).toBe(hash);
    const article = screen.getByRole('heading', { name: title }).closest('article');
    expect(article).not.toBeNull();
    expect(within(article!).getByText('What Microsoft announced')).toBeVisible();
  });

  it('searches announcement titles and details across sections', () => {
    render(<App />);
    fireEvent.change(
      screen.getByRole('searchbox', {
        name: 'Search announcements across all sections',
      }),
      { target: { value: 'confidential computing' } }
    );

    expect(
      screen.getByRole('heading', { name: 'Matching announcements' })
    ).toBeVisible();
    expect(
      screen.getByRole('heading', {
        name: 'Expanded confidential computing',
      })
    ).toBeVisible();
    expect(
      screen.queryByRole('heading', {
        name: 'Azure & data platforms',
      })
    ).toBeNull();
  });

  it('keeps the announcement inventory and its internal links well formed', () => {
    const ids = ANNOUNCEMENTS.map((announcement) => announcement.id);
    expect(new Set(ids).size).toBe(ANNOUNCEMENTS.length);
    expect(BOOK_OF_NEWS_URL).toMatch(/^https:\/\//);
    expect(
      SECTIONS.every((section) =>
        ANNOUNCEMENTS.some(
          (announcement) => announcement.section === section.id
        )
      )
    ).toBe(true);
    expect(
      ANNOUNCEMENTS.every(
        (announcement) =>
          announcement.updates.length > 0 &&
          (!announcement.sourceUrl ||
            announcement.sourceUrl.startsWith('https://')) &&
          (announcement.relatedIds ?? []).every((id) =>
            ANNOUNCEMENT_BY_ID.has(id)
          )
      )
    ).toBe(true);
  });

  it('follows a related-announcement link to the target section and opens it', () => {
    render(<App />);
    fireEvent.click(
      within(screen.getByRole('navigation', { name: 'Announcement sections' }))
        .getByRole('link', { name: /Fabric & apps/ })
    );

    const appsArticle = screen
      .getByRole('heading', {
        name: 'Rayfin and Fabric apps reach general availability',
      })
      .closest('article');
    expect(appsArticle).not.toBeNull();
    fireEvent.click(
      within(appsArticle!).getByText('Explore this announcement')
    );
    fireEvent.click(
      within(appsArticle!).getByRole('link', {
        name: /Custom data app creation in Power BI/,
      })
    );

    expect(
      screen.getByRole('heading', {
        name: 'Custom data app creation in Power BI',
      })
    ).toBeVisible();
    expect(window.location.hash).toBe('#fabric/powerbi-data-apps');
  });
});
