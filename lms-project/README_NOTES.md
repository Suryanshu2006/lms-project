NextAuth configuration notes:

1. Create a GitHub OAuth App at https://github.com/settings/developers with the callback URL: http://localhost:3000/api/auth/callback/github
2. Set `GITHUB_ID` and `GITHUB_SECRET` in `.env.local`.
3. Generate a strong `NEXTAUTH_SECRET` using `openssl rand -hex 32` or an online generator and add it to `.env.local`.

Database:
- Provide `MONGODB_URI` in `.env.local` pointing to your MongoDB Atlas or local MongoDB instance.

Start:
- npm install
- npm run dev
