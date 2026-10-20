import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	devToolbar: {
    enabled: false,
  },
  site: 'https://docs.ticketforge.xyz',
  integrations: [
    starlight({
      title: 'TicketForge Docs',
      description: 'The ultimate Discord ticketing and application bot.',
      // Auto-open external links in a new tab safely
      head: [
        {
          tag: 'script',
          content: `
            document.documentElement.dataset.theme = 'dark';
            try { localStorage.setItem('starlight-theme', 'dark'); } catch (e) {}
          `,
        },
        {
          tag: 'script',
          content: `
            document.addEventListener('DOMContentLoaded', () => {
              const applyExternalTargets = () => {
                document.querySelectorAll('a').forEach((link) => {
                  if (link.hostname && link.hostname !== window.location.hostname) {
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                  }
                });
              };

              applyExternalTargets();
              // Re-run if page content updates dynamically
              const observer = new MutationObserver(applyExternalTargets);
              observer.observe(document.body, { childList: true, subtree: true });
            });
          `,
        },
      ],
      logo: {
        src: './src/assets/logo.png',
        replacesTitle: false,
      },
      favicon: './src/assets/logo.png',
      social: [
        {
          icon: 'discord',
          label: 'Discord Support',
          href: 'https://ticketforge.xyz/invite',
        },
        {
          icon: 'external',
          label: 'Dashboard',
          href: 'https://ticketforge.xyz',
        },
      ],
      customCss: [
        '@fontsource/inter/400.css',
        '@fontsource/inter/600.css',
        '@fontsource/inter/700.css',
        '@fontsource/jetbrains-mono/400.css',
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', link: '/' },
            { label: 'Installation', link: '/getting-started/installation/' },
            { label: 'Dashboard Overview', link: '/getting-started/dashboard/' },
            { label: 'Premium Plans', link: '/premium/' },
          ],
        },
        {
          label: 'Tickets',
          items: [
            { label: 'Creating Panels', link: '/panels/create/' },
            { label: 'The Panel Editor', link: '/panels/editor/' },
            { label: 'Messages & Embeds', link: '/panels/messages/' },
            { label: 'Interaction Styles', link: '/guides/button-styles/' },
            { label: 'Custom Forms', link: '/features/forms/' },
            { label: 'Ticket Settings', link: '/panels/management/' },
            { label: 'Escalation', link: '/features/escalation/' },
            { label: 'Claiming', link: '/features/claiming/' },
            { label: 'Threads', link: '/features/threads/' },
            { label: 'Limits & Schedules', link: '/features/limits/' },
            { label: 'Transcripts', link: '/features/transcripts/' },
            { label: 'Ratings (CSAT)', link: '/features/ratings/' },
          ],
        },
        {
          label: 'Applications',
          items: [
            { label: 'Creating Applications', link: '/applications/create/' },
            { label: 'The App Editor', link: '/applications/editor/' },
            { label: 'Delivery & Web Portals', link: '/applications/delivery/' },
            { label: 'Interaction Styles', link: '/applications/layouts/' },
            { label: 'Question Builder', link: '/applications/questions/' },
            { label: 'Messages & Embeds', link: '/applications/messages/' },
            { label: 'Processing Submissions', link: '/applications/submissions/' },
            { label: 'Role Automation', link: '/applications/automation/' },
            { label: 'Limits & Cooldowns', link: '/applications/limits/' },
            { label: 'Inactivity Notifier', link: '/applications/notifications/' },
            { label: 'Audit Logging', link: '/applications/logging/' },
          ],
        },
        {
          label: 'Templates',
          items: [
            { label: 'Using Templates', link: '/panels/templates/' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Variable Placeholders', link: '/guides/placeholders/' },
            { label: 'Command List', link: '/settings/commands/' },
            { label: 'Server Settings', link: '/settings/server-config/' },
            { label: 'Troubleshooting', link: '/guides/troubleshooting/' },
          ],
        },
      ],
    }),
  ],
});