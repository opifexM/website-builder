[![Node CI](https://github.com/opifexM/website-builder/actions/workflows/nodejs.yml/badge.svg)](https://github.com/opifexM/website-builder/actions/workflows/nodejs.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=opifexM_website-builder&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=opifexM_website-builder)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=opifexM_website-builder&metric=bugs)](https://sonarcloud.io/summary/new_code?id=opifexM_website-builder)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=opifexM_website-builder&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=opifexM_website-builder)

# Website Builder

Website Builder is a browser-based one-page site constructor with templates and editable content blocks, built on a component-based architecture.

## Description

Website Builder is a client-side web application that allows non-technical users to compose static site pages visually. The app supports dynamic layout switching and drag-free content placement within three main sections: header, content, and footer.

Each layout template defines the structure of these sections. Users can add text or image elements via contextual controls. Elements are inserted into the DOM dynamically, with full support for inline editing and image embedding via external links.

The system is built using React, bundled with Vite, and powered by modern TypeScript tooling. UI interactivity leverages native DOM APIs for low-level control, while routing and state management are handled by the TanStack suite.

## Requirements

- **Node.js ≥ 24.x**
- **npm ≥ 9.x**

## Features

- Predefined page layout templates (e.g., landing page)
- Section-based block editing: header, content, footer
- Element addition via contextual "+” buttons
- Support for headings, paragraphs, and image blocks
- Inline text editing with Enter/blur confirmation
- Dynamic image upload via external URL (popup form)
- Realtime preview without persistence (no backend)
- Template reset on layout switch
- Removable blocks with confirmation-less deletion

## Technologies Used
### Core
- **React 19** — Component-based UI library
- **Vite 7** — High-performance build tool and dev server
- **TypeScript** — Static typing for scalable development

### State & Routing
- **@tanstack/react-store** — Store-based reactive state
- **@tanstack/react-router** — File-based routing architecture
- **@tanstack/router-plugin** — Enhanced route handling

## License

Website Builder is licensed under the ISC license.
