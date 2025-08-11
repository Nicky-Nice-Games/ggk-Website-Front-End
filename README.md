# Gizmo Go-Kartz

This is the repository of the public-facing website for Gizmo Go-Kartz, hosted at <a href="nickynicegames.com/ggk" target="_blank">nickynicegames.com/ggk</a>.

# Frameworks & Libraries

- **Vite** - The building tool by which the project was initially created.
- **React + TypeScript** - The main language all the source code is written in. React provides the essential functionality while TypeScript is primarily used for better code legibility.
- **TailwindCSS** - A styling framework that provides easier and more convenient styling than using many separated CSS files.
- **Shadcn** - A component library that uses React and TailwindCSS, and is the basis for most of the components used in this website.

# File Structure

- `.github/ISSUE_TEMPLATE` - For github-related metadata, such as codeowners and issue templates.
- `public/ggk` - Contains all public assets, including images, fonts, and other data.
  - `data` - Files with written information. (CSV, JSON, and PDFs)
  - `images` - All images, including backgrounds, icons and other displays.
  - `font` - All custom fonts used in the website.
- `src` - The main folder where React code is stored.
  - `components` - Includes shadcn-native and custom-built React components.
  - `data` - Files with globally used lists and TypeScript object templates.
  - `pages` - All components for entire pages or sub-pages.

# Installation & Usage

To use this website, start by cloning the repository or downloading the code as a .ZIP file and extracting it. When extracted, open a terminal in the project's root folder. Then, type this command to install all the modules:

```
npm install
```

After the modules are installed, type this command to run the website locally:

```
npm run dev
```

This will run the website on a local host that the user can access through any browser as long as the host is active. To deactivate it, open the terminal where the host is running and press `Ctrl+C`.

# Building

After downloading the repository and installing the modules, the project is then built into a single HTML/CSS/JS with the same functionality. To build the website, type this into the command line:

```
npm run build
```

This generates a new folder called `dist/` in which the build is generated. This build can be opened like a normal .HTML file, whether locally or on a server.
**IMPORTANT**: remove the first '/' from both the `<script>` and second `<link>` tags (which link to the JS and CSS, respectively.) The files will not be properly referenced and the website will fail to work.
