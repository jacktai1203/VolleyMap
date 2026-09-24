# VolleyMap

VolleyMap is a browser-based MVP for discovering volleyball matches in Hong
Kong. It combines a city-focused Leaflet map with search, date filters, match
details, and a small "add a match" flow.

## Run locally

No build step is required. Open [`index.html`](./index.html) in a browser.

For a local HTTP server (recommended when developing):

```powershell
python -m http.server 8080
```

Then visit <http://localhost:8080>.

## Current MVP scope

- Sample Hong Kong match data for indoor, beach, and grass volleyball
- OpenStreetMap map tiles through Leaflet
- Search by event, city, or level
- Official-organizer-only mode with source links for VBAHK, HKSSF-NT, and ISF
- 47 VBAHK 2026 Championship women’s preliminary-round matches imported from
  the supplied 14 September 2026 schedule PDF
- All dates, today, and this weekend filters
- Marker/list selection and browser geolocation
- Add-match modal with in-memory browser state

The imported match data is currently held in [`app.js`](./app.js). The official
source link is intentionally stored on each record so users can verify the
organizer. A production version should replace this static import with a
server-side importer/API, because official sites should not be scraped directly
from the browser, and should add geocoding plus moderation before publishing
community submissions.
