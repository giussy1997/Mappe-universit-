# Hub Applicativi — Guida all'installazione su GitHub Pages

## Struttura dei file

```
hub-pwa/
├── index.html        ← l'hub (non toccare)
├── manifest.json     ← configurazione PWA (non toccare)
├── sw.js             ← service worker offline (non toccare)
├── apps.json         ← ⭐ QUI aggiungi i tuoi file
├── icon-192.png      ← icona app (carica la tua, 192×192px)
├── icon-512.png      ← icona app (carica la tua, 512×512px)
└── apps/
    ├── esempio.html
    ├── cardiologia-schema.html
    └── ...            ← i tuoi file HTML qui
```

---

## Passo 1 — Crea il repository su GitHub

1. Vai su [github.com](https://github.com) e accedi (o crea un account gratuito)
2. Clicca **＋ New repository** in alto a destra
3. Nome: `hub-app` (o quello che vuoi)
4. Lascia **Public** ✅ (serve per GitHub Pages gratuito)
5. Clicca **Create repository**

---

## Passo 2 — Carica i file

1. Nella pagina del repository, clicca **uploading an existing file** (o il pulsante `Add file → Upload files`)
2. Trascina **tutti i file** di questa cartella (index.html, manifest.json, sw.js, apps.json, la cartella apps/)
3. Clicca **Commit changes**

> 💡 Per caricare la cartella `apps/` su GitHub dal browser: carica prima i file dentro di essa, poi GitHub crea automaticamente la cartella.

---

## Passo 3 — Attiva GitHub Pages

1. Nel repository, vai su **Settings** (in alto)
2. Nel menu a sinistra, clicca **Pages**
3. In *Source*, seleziona **Deploy from a branch**
4. Branch: **main**, cartella: **/ (root)**
5. Clicca **Save**
6. Dopo 1-2 minuti, comparirà il link tipo:
   **`https://tuonome.github.io/hub-app/`**

---

## Passo 4 — Installa come app

### Su Android (Chrome)
1. Apri il link del sito in Chrome
2. Comparirà un banner *"Aggiungi a schermata Home"* — toccalo
3. Oppure: menu ⋮ → **Aggiungi a schermata Home**

### Su iPhone/iPad (Safari)
1. Apri il link in Safari
2. Tocca il pulsante **Condividi** (□↑)
3. Scorri e scegli **Aggiungi a schermata Home**

### Su computer (Chrome/Edge)
1. Apri il link
2. Nella barra degli indirizzi comparirà un'icona **⊕ Installa**
3. Oppure: menu ⋮ → **Installa Hub Applicativi**

---

## Come aggiungere nuovi file HTML

### 1. Carica il file su GitHub
- Vai nel repository → cartella `apps/`
- Clicca **Add file → Upload files**
- Carica il tuo file HTML (es. `pneumologia-asma.html`)
- Clicca **Commit changes**

### 2. Aggiorna apps.json
- Apri `apps.json` nel repository
- Clicca l'icona ✏️ (modifica)
- Aggiungi il tuo file nella sezione `"apps"`:

```json
{
  "id": "pneumologia-asma",
  "label": "Schema Asma",
  "file": "apps/pneumologia-asma.html",
  "categoryId": "pneumologia"
}
```

- Clicca **Commit changes**

### 3. Aggiorna l'app
- Riapri l'hub nel browser
- Clicca il pulsante **↺** in alto a destra per aggiornare la lista

---

## Come aggiungere una nuova materia

In `apps.json`, aggiungi un oggetto nella sezione `"categories"`:

```json
{
  "id": "nefrologia",
  "name": "Nefrologia",
  "icon": "🫘",
  "color": "#4caf87"
}
```

Poi usa `"categoryId": "nefrologia"` nei file di quella materia.

**Colori suggeriti:**
- Rosso: `#e05b6b`
- Blu: `#5b8dee`
- Viola: `#7c6fe0`
- Verde: `#4caf87`
- Arancio: `#e07c5b`
- Giallo: `#e0c45b`
- Azzurro: `#5bcfe0`

---

## Icone dell'app (opzionale ma consigliato)

Per avere un'icona personalizzata invece di quella di default:

1. Crea (o scegli) due immagini PNG: **192×192** e **512×512** pixel
2. Salvale come `icon-192.png` e `icon-512.png`
3. Caricale nella radice del repository

Puoi usare un servizio gratuito come [favicon.io](https://favicon.io) per generarle.

---

## FAQ

**I file HTML si aggiornano automaticamente sull'app?**
Sì, ogni volta che modifichi un file su GitHub e riapri l'app (o clicchi ↺), la versione più recente viene scaricata e messa in cache.

**Funziona offline?**
Sì — dopo la prima apertura, tutti i file visitati vengono salvati nella cache del browser e sono disponibili senza connessione.

**Posso avere più di 100 file?**
Sì, il limite di GitHub Pages è 1 GB. Con file HTML di studio tipici (50–300 KB), puoi gestirne centinaia.

**I miei file sono privati?**
Con un repository pubblico su GitHub, i file sono tecnicamente accessibili a chiunque conosca l'URL. Se vuoi privacy, puoi passare a un repository privato usando [Cloudflare Pages](https://pages.cloudflare.com) (gratuito, supporta repo privati).
