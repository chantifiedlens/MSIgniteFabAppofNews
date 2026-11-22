# Ignite Field Notes

Ignite Field Notes is an independent Microsoft Fabric App for exploring the
[Microsoft Ignite 2026 Book of News](https://news.microsoft.com/events/ignite/2026/book-of-news/).
It turns a long set of announcements into an interactive guide, so people
following Microsoft technologies can browse by topic, understand what changed,
and find related updates.

After deployment, people with access to your Fabric app can sign in and explore
the announcements in a browser or from Fabric. This project is independently
created; it is not an official Microsoft Ignite product. Microsoft Fabric,
Rayfin, React, and Vite provide the platform and tools used to run it.

## What you can explore

- Start with an overview, featured stories, and links to the original Book of News.
- Browse six areas: Azure and data, Fabric and Power BI, AI and Copilot,
  security, developer tools, and Windows.
- Search across announcements, open details, and follow related stories and
  source links. Details include summaries, why an update matters, audiences,
  and availability where supplied.
- Read independent commentary linked from the Fabric section, distinct from
  Microsoft's announcements.
- Switch between light and dark themes and use the app on different screen sizes.

The announcement collection is included in the project; it is **not a live
news feed** and does not update automatically. Check the original sources for
the latest details and availability.

## What you need

To deploy your own copy:

- [Node.js](https://nodejs.org/en/download) **22.13.0 or later**, including npm.
- A Microsoft account with access to [Microsoft Fabric](https://app.fabric.microsoft.com).
- A Fabric workspace with contributor or admin access and an assigned Fabric
  capacity. A tenant administrator must enable Fabric Apps for your account or
  group. Capacity use may incur charges.
- A terminal and a working internet connection to install packages, sign in,
  and deploy. The installed Rayfin command-line tool uses your system's
  credential storage for sign-in.

To customise the app, you will also need a code editor such as Visual Studio
Code and some familiarity with TypeScript and React. Git is optional if you
download the project as a ZIP rather than cloning it. Docker is not needed for
the Fabric workflow described here.

## Deploy your own copy

The application content and appearance can be deployed without customising
them. Rayfin registers your hosting origin in
[`rayfin/rayfin.yml`](rayfin/rayfin.yml) during deployment. These steps follow
the installed CLI guidance; a fresh deployment of this copy has not been tested.

1. **Get the project.** Clone the repository using its GitHub URL, or download
   and extract its ZIP from GitHub. Open a terminal in the extracted or cloned
   project folder, the folder containing `package.json`.
2. **Install dependencies.** Run:

   ```sh
   npm ci
   ```

   This installs the versions recorded in the lockfile, including the Rayfin CLI.
3. **Sign in to Fabric.** Run:

   ```sh
   npx rayfin login
   ```

   Complete the Microsoft sign-in prompt with an account that can deploy to
   your chosen workspace.
4. **Preview the target.** Replace `<workspace-id>` with the ID of your own
   Fabric workspace:

   ```sh
   npx rayfin up --dry-run --workspace-id <workspace-id>
   ```

   Review the workspace and planned operations. This is a read-only preview; it
   does not build or deploy the app. You can find the workspace ID in its Fabric
   portal URL.
5. **Deploy.** Use the same workspace ID:

   ```sh
   npx rayfin up --workspace-id <workspace-id>
   ```

   Follow the prompts and review any capacity or item-reuse decisions. Rayfin
   builds the app and creates or updates the Fabric app and hosting services.
   The command prints a hosting URL and a Fabric portal link when successful.
6. **Open and check the app.** Open the hosting URL or the app in the Fabric
   portal, sign in, and explore the overview and topic sections. To check the
   deployment state, run:

   ```sh
   npx rayfin up status
   ```

   Other users need permission to run and interact with the Fabric app. See
   [Fabric workspace roles](https://learn.microsoft.com/en-us/fabric/fundamentals/roles-workspaces).

Hosted assets are protected and the app requires authentication; this is not an
anonymous public website. Rayfin creates local environment and deployment
records for your copy; these are ignored by Git and should not be published.
Deployment can also add your hosting origin to the tracked configuration:
review that change before committing or sharing it. Do not publish credentials.

## Customise before deploying

Get and install a copy as described above, then open the project folder in your
editor. These are the main places to make changes:

| What to change | Where to look |
| --- | --- |
| Announcement text, topics, source URLs, availability, and related-story links | [`packages/frontend/src/ignite-news.ts`](packages/frontend/src/ignite-news.ts) |
| Page content, navigation, search, and announcement display | [`packages/frontend/src/App.tsx`](packages/frontend/src/App.tsx) |
| Colours, typography, and shared layout styles | [`packages/frontend/src/global.css`](packages/frontend/src/global.css) |
| Browser title, metadata, and font links | [`packages/frontend/index.html`](packages/frontend/index.html) |
| Fabric services, authentication, and hosting | [`rayfin/rayfin.yml`](rayfin/rayfin.yml) |

Review the existing data structure and source links before changing
announcements. The content is bundled with the app, so publish another
deployment after editing it. Keep protected hosting and the existing sign-in
gate unless you understand the security implications.

For a local development session, first sign in with `npx rayfin login`, then
run `npm run dev` from the project root and open the local address it prints.
This uses a Fabric-backed development service: it may create or update resources
and ask you to select a workspace or approve capacity. Stop it with Ctrl+C.
Before deploying your changes, run:

```sh
npm run typecheck
npm run build
npm run lint
npm test
```

Then preview and deploy using the steps above. The build alone does not replace
the separate type check. Test the deployed app with the permissions and sign-in
method your users will have.

## Project layout

- [`packages/frontend/`](packages/frontend/) contains the React interface and
  bundled news content.
- [`packages/data/`](packages/data/) and [`packages/shared/`](packages/shared/)
  contain the workspace's data and shared-code foundations; the news collection
  itself does not require a database or a Power BI connection.
- [`rayfin/`](rayfin/) contains the Fabric service configuration.
- [`scripts/`](scripts/) contains the workspace's template and capability tooling.

## Troubleshooting

- **Installation fails:** Check your Node.js version and internet or npm
  registry access. Run installation from the project root.
- **Sign-in or deployment fails:** Check your account, workspace permissions,
  assigned capacity, and tenant's Fabric Apps setting. Use `npx rayfin login`
  again if you need to choose a different account.
- **The app cannot be opened:** Confirm the deployment succeeded and that the
  user has permission to run the Fabric app. Check the browser or CLI error
  message rather than changing authentication settings blindly.
- **Local development cannot start:** Check Fabric sign-in and the workspace
  and capacity prompts. The local server relies on a Fabric-backed service,
  not just the static frontend.

For the CLI documentation matching the installed version, see
`node_modules/@microsoft/rayfin-guide/assets/docs/cli/index.md` after installation.
The [Fabric documentation](https://learn.microsoft.com/en-us/fabric/) provides
more background on Fabric.

## Community Use & Attribution

This application is freely available for the Microsoft Fabric community to use, explore, learn from, modify, and build upon. You are welcome to deploy it as-is or adapt it to suit your own needs.

I simply ask that you respect the effort that has gone into creating it:

- **Please give credit:** If you share, showcase, or present this application or work derived from it, please acknowledge the original project and its author.
- **Please don't claim it as your own original work:** I kindly ask that you don't present this application, or substantially unchanged versions of it, as something you created yourself.
- **Please don't use it in competitions:** I kindly ask that you don't enter this application, or substantially unchanged versions of it, into Microsoft Fabric, Power BI, or other competitions as your own entry.
- **Feel free to make it your own:** Experiment, learn, customise it, extend it, and use it as inspiration for your own projects.

This is intended to be a resource for the community, and I'm happy for people to get value from it. My request is simply that the original work is acknowledged and that it isn't misrepresented as somebody else's creation.

Thank you for respecting the time and effort that goes into creating and sharing community resources.

## License

See [`LICENSE`](LICENSE) for the license included with this project.
