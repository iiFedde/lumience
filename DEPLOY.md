# Online zetten via GitHub + Render

## 1. GitHub-repository aanmaken

1. Ga naar https://github.com/new
2. Repository name: bijv. `stanicdesign-clone`
3. **Public** of Private (beide werken op Render)
4. **Geen** README, .gitignore of license toevoegen (die staan al lokaal)
5. Klik **Create repository**

## 2. Code naar GitHub pushen

Vervang `JOUW-GITHUB-USERNAME` door je GitHub-gebruikersnaam:

```powershell
cd C:\Users\fedde\stanicdesign-clone
git add .
git commit -m "Initial commit: Stanicdesign clone voor Render"
git branch -M main
git remote add origin https://github.com/JOUW-GITHUB-USERNAME/stanicdesign-clone.git
git push -u origin main
```

## 3. Render Static Site koppelen

1. Ga naar https://dashboard.render.com/
2. **New +** → **Static Site**
3. **Connect GitHub** (eerste keer: Render toegang geven tot je repo)
4. Selecteer repository `stanicdesign-clone`
5. Instellingen (meestal automatisch via `render.yaml`):

| Veld | Waarde |
|------|--------|
| Branch | `main` |
| Build Command | `npm install && npm run build` |
| Publish Directory | `dist` |

6. **Create Static Site**
7. Wacht ~2–5 minuten; je krijgt een URL zoals `https://stanicdesign-clone.onrender.com`

## 4. Eigen domein (optioneel)

In Render → je site → **Settings** → **Custom Domains** → voeg je domein toe en volg de DNS-instructies.

## Automatische updates

Elke `git push` naar `main` triggert een nieuwe deploy op Render.

## Lokaal testen vóór deploy

```powershell
npm run build
npm run preview
```

Open http://localhost:4173
