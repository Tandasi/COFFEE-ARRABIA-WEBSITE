# Coffee Arabica

Full-stack app: Express API + React (Vite) client + Drizzle ORM.

## Project Structure
```
client/          # React + Vite frontend (root configured to client/)
server/          # Express server, vite middleware in dev, static in prod
shared/          # Shared schemas / types
.dist/           # (ignored until build) production bundle output
```

## Scripts
| Script | Purpose |
| ------ | ------- |
| `npm run dev` | Start Express with Vite middleware (development, single port) |
| `npm run build` | Build client (Vite) to `dist/public` and server (esbuild) to `dist/index.js` |
| `npm start` | Run production server on `PORT` (default 5000) serving built assets |
| `npm run start:port` | Run production server on PORT=5173 (example alternate) |

## Development
```bash
npm install
npm run dev
# Visit http://localhost:5000
```

## Production Build & Run
```bash
npm run build
npm start
# http://localhost:5000
```
Set a custom port:
```bash
PORT=8080 npm start
```
(Windows PowerShell: `$env:PORT=8080; npm start` OR use a new script.)

## API Examples
- `GET /api/menu`
- `GET /api/categories`

## GitHub Pages Deployment (Client Only)
This repo includes a GitHub Actions workflow at `.github/workflows/pages.yml` that:
1. Installs dependencies
2. Runs `npm run build`
3. Uploads `dist/public` contents to GitHub Pages

After the first successful run:
- Go to Repository Settings → Pages → Source: GitHub Actions
- Your static site will be available at: `https://<username>.github.io/COFFEE-ARRABIA-WEBSITE/`

Because GitHub Pages is static, API routes (`/api/*`) will NOT work there. Options:
- Deploy server separately (Render, Railway, Fly.io, Heroku, etc.)
- Point frontend to that server via an environment variable (e.g. `VITE_API_BASE_URL`)

## Separating Frontend + Backend
To allow client to call a hosted API:
1. Choose a host (Render / Railway)
2. Deploy only the server portion (`dist/index.js` built via `npm run build`)
3. Set an environment variable in client build:
   - Create `.env` with: `VITE_API_BASE_URL=https://your-api.example.com`
   - In fetch calls, use `import.meta.env.VITE_API_BASE_URL`

## Environment Variables
| Variable | Description | Default |
| -------- | ----------- | ------- |
| `PORT` | Server listen port | 5000 |
| `NODE_ENV` | Mode (`development`/`production`) | development |
| `VITE_API_BASE_URL` | Frontend base URL for API (when decoupled) | `/` |

## Troubleshooting
| Issue | Fix |
| ----- | ---- |
| 404 on `/` in dev | Ensure `NODE_ENV=development` and restart `npm run dev` |
| Port in use | Kill old node: `taskkill /F /IM node.exe` (Windows) |
| Pages missing CSS/JS | Cache: Hard refresh / ensure workflow succeeded |
| API 404 on Pages | Expected (Pages is static); deploy backend separately |

## Future Improvements
- Add auth/session handling
- Add tests (Jest / Vitest)
- Add logging abstraction (pino / winston)
- Add Dockerfile for container deployment

---
Generated with automated assistant support.
