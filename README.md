# Nexa Consumer Intelligence Dashboard — v1.1

React/Vite implementation of the supplied Nexa/KPMG dashboard reference with supplied visual assets integrated.

## Run

```bash
npm install
npm run dev
```

Open the Vite localhost URL. Do not open `index.html` directly.

## Asset integration

The `public/assets` folder contains the supplied KPI icons, navigation icons, India growth map, metric icons and reference-derived artwork/product crop. The UI references those assets directly rather than recreating the icons with generic SVGs.

## Glass architecture

Every major dashboard card uses a two-layer construction:

```text
Outer glass frame (2px padding + glass stroke)
└── Inner glass surface
```

The sidebar uses the same two-layer construction. This keeps the visual system scalable and lets a future design-system primitive control borders, padding, blur and shadows centrally.

## Backend readiness

API access remains isolated in `src/api`. Set `VITE_API_BASE_URL` when the backend is available and replace the mock data calls without changing presentational components.

## Motion

- AI Insight background gradient animation
- AI Insight perimeter stroke animation
- AI headline shimmer
- rotating AI star
- AI assistant perimeter stroke
- bottom-center pointer reveal for the AI assistant
- reduced-motion fallback

## Future asset uploads

Additional supplied icons can be dropped into `public/assets` and mapped in the relevant component without restructuring the dashboard.


## Current precision pass

The Opportunity card now follows the supplied 2x reference: 712x285 CSS geometry, 162x207 product image, four metric columns with separators, supplied metric artwork, and the 2px outer glass frame.


## Opportunity metric geometry (v1.4)
The metric icon container is fixed at 47 × 47px. The supplied metric artwork is rendered at 28.2 × 23.47px inside that container, matching the measured reference specification.
