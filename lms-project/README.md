# LMS Project

A full-stack Learning Management System built using Next.js (App Router), MongoDB (Mongoose), and Tailwind CSS. This project uses JavaScript only.

## Features
- Authentication: simple placeholder login (no NextAuth)
- Student and Admin dashboards
- Course creation, enrollment, and progress tracking
- Responsive and modular UI

## Tech Stack
- Framework: Next.js (App Router)
- Database: MongoDB via Mongoose
- Authentication: simple placeholder login (no NextAuth)
- Styling: Tailwind CSS
- Language: JavaScript

## Project Structure
- `app/` - Next.js App Router pages and layout
- `components/` - Reusable UI components (Navbar, CourseCard)
- `lib/` - Reusable libraries (db connection, auth)
- `models/` - Mongoose models
- `public/` - Static assets
- `styles/` - Global CSS and Tailwind imports

## Setup Instructions
1. Clone the repo

```bash
git clone https://github.com/yourusername/lms-project.git
cd lms-project
```

2. Install dependencies

```bash
npm install
```

3. Create `.env.local` based on `.env.local.example` and provide your MongoDB connection string.

4. Run the development server

```bash
npm run dev
```

## Screenshots to submit
- Open `README.md` in your IDE and take a screenshot.
- Open the file explorer in your IDE showing the project folder structure and take a screenshot.

## Notes
- This repository is scaffolded for JavaScript (no TypeScript). Adjust package versions if needed.
-- Configure authentication as needed. The project includes a placeholder login page at `/login`.
