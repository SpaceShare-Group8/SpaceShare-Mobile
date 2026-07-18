# SpaceShare — Mobile

The mobile app for **SpaceShare**, built with React Native (Expo), sharing the same backend API as the web frontend.

Full product context lives in the PRD (see `spaceshare-docs` repo). This README covers setup only.

---

## Tech Stack

- **React Native** via **Expo**
- Same API client contract as `spaceshare-frontend` (see PRD Section 15)

---

## Prerequisites

- Node.js v20+
- npm
- Git
- **Expo Go** app installed on your phone (for instant device testing — no build/app-store submission needed)

---

## Getting Started

```bash
git clone https://github.com/spaceshare-group8/spaceshare-mobile.git
cd spaceshare-mobile
npm install
cp .env.example .env
```

Fill in `.env`:

```
EXPO_PUBLIC_API_BASE_URL=http://localhost:4000
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=
EXPO_PUBLIC_PAYSTACK_PUBLIC_KEY=
```

Run locally:

```bash
npx expo start
```

Scan the QR code with **Expo Go** on your phone to test on a real device instantly.

---

## Project Structure

```
app/
  screens/         # Search, Listing Detail, Booking, Host Dashboard...
  components/      # shared UI
  api/             # API client functions — mirrors spaceshare-frontend's api/ module
  navigation/       # screen routing
```

---

## Branching & PRs

- `main` is always deployable.
- Create a feature branch per Jira ticket: `feature/MOB-1-search-screen`
- Open a PR into `main`, get at least 1 review, then merge.
- Do not push directly to `main`.

---

## Notes

- Start against the **already-stable API contract** from Backend/Frontend (Week 2 onward) rather than building from zero on Day 1 — this avoids rework if the contract shifts early on.
- Location features (used for "Find Me Power Now" and nearby search) use Expo's `Location` module — request permissions gracefully and always provide a manual-search fallback if permission is denied.
