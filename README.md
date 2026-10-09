<div align="center">

# Train Tracker

A Vue application exploring PNR input, Firebase integration and a map-based interface.

![Vue 3](https://img.shields.io/badge/Vue%203-111827?style=flat-square) ![Vuetify](https://img.shields.io/badge/Vuetify-111827?style=flat-square) ![Firebase](https://img.shields.io/badge/Firebase-111827?style=flat-square) ![Leaflet](https://img.shields.io/badge/Leaflet-111827?style=flat-square)

</div>

---

[Setup](#run-locally) · [Source](train-tracker/src) · [Project status](#project-status)

## Project status

**Demo application:** the dashboard currently writes a fixed simulated location to Firebase. It does not connect to a live railway or PNR API. Ten-digit validation checks input format; it does not verify a booking.

## Highlights

- PNR input with ten-digit validation.
- Vuetify interface with a loading overlay.
- Firebase Realtime Database integration.
- Map component and login/register views.

## Run locally

Install Node.js and npm, then run:

```bash
git clone https://github.com/Vaibhavpandey-web/Train_tracker.git
cd Train_tracker/train-tracker
npm ci
npm run serve
```

Use the local address printed by Vue CLI. Configure your own Firebase project in `src/firebase/config.js`, enable the services used by the app and set appropriate database access rules before testing writes. Use synthetic PNR values for the demo.

## Commands

Run these from the `train-tracker` directory:

| Command | Purpose |
| --- | --- |
| `npm run serve` | Development server |
| `npm run build` | Production build into `dist/` |
| `npm run lint` | Source linting |

<details>
<summary><strong>Source guide</strong></summary>

- `src/views/TrainDashboard.vue` — PNR form and simulated location write.
- `src/components/TrainMap.vue` — map interface.
- `src/views/UserLogin.vue` and `UserRegister.vue` — account views.
- `src/firebase/config.js` — Firebase configuration.
- `src/router/index.js` — application routes.

</details>

## Next steps

- Integrate an authorized railway data provider through a backend.
- Replace fixed coordinates with validated provider responses.
- Add explicit error, empty and unavailable-data states.

---

Built by [Vaibhav Pandey](https://github.com/Vaibhavpandey-web) · [Portfolio](https://vaibhav-pandey-portfolio-henna.vercel.app/)
