# UI Plan for LMS Project

## Goals
- Create a clear, reusable component structure for the LMS.
- Provide a responsive skeleton using Tailwind CSS.
- Keep components small, focused and easily testable.

## Component categories

1. Layout Components
   - `DashboardLayout` - grid-based layout that contains a sidebar (optional), header, and main content area.
   - `PublicLayout` - for unauthenticated pages (Header + Footer)

2. Reusable UI primitives
   - `Button` - primary/secondary variants, disabled state, size options
   - `Input` - text input with label and error message
   - `Card` - generic container for course lists and items

3. Page-level components
   - `Navbar` - top navigation with links to Home, Dashboard and Auth
   - `Footer` - site footer with copyright and links
   - `CourseCard` - course preview used on Dashboard and Course listing

## Folder structure

- `app/` - Next.js App Router pages and layouts
- `components/` - reusable components
  - `components/ui/` - primitives (Button, Input, Card)
  - `components/layout/` - Navbar, Footer, DashboardLayout
- `styles/` - global styles and Tailwind imports

## Responsive behavior
- Use Tailwind breakpoint utilities (sm, md, lg) to ensure layout reflows.
- Dashboard grid collapses to single column on small screens.

## Implementation notes
- Keep styling via Tailwind classes; avoid extra CSS where possible.
- No real data fetching in components — they render based on props.
- Add minimal accessibility attributes (aria-labels) for interactive elements.

## Files to add
- `components/ui/Button.js`
- `components/ui/Input.js`
- `components/layout/Footer.js`
- `app/dashboard/layout.js` (DashboardLayout skeleton)
