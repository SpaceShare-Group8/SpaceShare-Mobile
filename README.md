# SpaceShare — Mobile

The mobile app for **SpaceShare**, built with React Native (Expo), sharing the same backend API as the web frontend. Covers the Seeker journey (search, book, pay, check in) and core Host screens (listing management, bookings, earnings).

Track lead: **Angel** (angeldaniels553@gmail.com)

Full product context lives in the PRD (see `spaceshare-docs` repo). This README covers setup only.

---

## Tech Stack

- **React Native**, via **Expo**
- Same API contract as `spaceshare-frontend` (see PRD Section 16 — API Overview)
- Built by a developer with a Java/Android background — that Android platform knowledge is a real asset for debugging device behavior, though the app itself is written in JavaScript/TypeScript through React Native, not Java

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
  screens/
    auth/              # SignupScreen, LoginScreen, RoleSelectScreen
    seeker/
      SearchScreen.js          # search results, list + map view
      FiltersScreen.js         # price, amenities, capacity, type, reliability
      ListingDetailScreen.js   # photos, amenities, reviews, reliability badge
      FindPowerNowScreen.js    # one-tap location-based instant search
      FavoritesScreen.js       # saved listings
      BookingCalendarScreen.js # slot selection
      CheckoutScreen.js        # payment
      BookingConfirmationScreen.js  # shows the 6-digit check-in code
      CheckInScreen.js         # seeker view of their check-in code
      BookingHistoryScreen.js  # past bookings, rebook, review
      ReviewScreen.js          # post-booking review incl. reliability questions
    host/
      HostDashboardScreen.js   # today's bookings, upcoming, calendar
      ListingCreateScreen.js   # multi-step listing creation
      ListingManageScreen.js   # edit existing listings
      BookingRequestScreen.js  # accept/decline incoming requests
      CheckInVerifyScreen.js   # host enters seeker's 6-digit code
      EarningsScreen.js        # wallet balance, withdrawal
    shared/
      NotificationsScreen.js
      ProfileScreen.js
      HelpCenterScreen.js       # FAQ, support ticket submission

  components/
    ListingCard.js
    ReliabilityBadge.js         # the trust-tier badge shown across search/detail
    FilterChip.js
    BookingSlotPicker.js
    RatingStars.js
    LoadingSpinner.js
    EmptyState.js

  api/
    auth.js              # register, login, refresh, me
    workspaces.js         # search, listing CRUD (read-only for mobile Host MVP), find-me-power-now
    favorites.js
    bookings.js           # availability, create, accept/decline, cancel, checkin, history
    payments.js           # initiate, wallet, withdraw
    reviews.js            # submit review, reliability score
    support.js            # tickets

  navigation/
    AppNavigator.js        # top-level stack/tab structure
    SeekerTabs.js
    HostTabs.js

  hooks/
    useLocation.js         # wraps Expo's Location module, includes permission-denied fallback
    useAuth.js

  context/
    AuthContext.js          # current user, role, tokens

  assets/
    icons/, images/
```

---

## Branching & PRs

- `main` is always deployable.
- Create a feature branch per Jira ticket: `feature/MOB-1-search-screen`
- Open a PR into `main`, get at least 1 review, then merge.
- Do not push directly to `main`.

---

## Build Order (matches the PRD's Day-by-Day Calendar, Section 22)

1. `screens/auth/` — Signup, Login, Role Select
2. `screens/seeker/SearchScreen`, `ListingDetailScreen`, `FavoritesScreen`, `FindPowerNowScreen`
3. `screens/seeker/BookingCalendarScreen`, `CheckoutScreen`, `BookingConfirmationScreen`, `CheckInScreen`
4. `screens/seeker/BookingHistoryScreen`, `ReviewScreen`
5. `screens/host/` screens, if time allows within the mobile track's scope

Start each screen once the matching API contract is stable — check with Backend/Frontend before building against an endpoint that's still changing shape.

---

## Notes

- Location features (used for "Find Me Power Now" and nearby search) use Expo's `Location` module via the `useLocation` hook — always request permissions gracefully and fall back to manual search if permission is denied, per PRD Section 11.3.
- Reuse the `ReliabilityBadge` component everywhere a listing is shown (search cards, detail page, comparison) — it's SpaceShare's core differentiator, so it should look and behave identically across every screen.
- Test on at least two physical devices via Expo Go before considering a screen done — emulator behavior (especially for location permissions and camera/photo access) doesn't always match real devices.
