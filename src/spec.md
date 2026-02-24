# Specification

## Summary
**Goal:** Add a member-only profile page for registered users that displays their registration information.

**Planned changes:**
- Create backend functions to store and retrieve user profile data (principal and registration timestamp)
- Automatically register users when they first authenticate with Internet Identity
- Create a ProfilePage component at /profile that displays the authenticated user's principal and registration date
- Add a Profile navigation link visible only to authenticated members
- Restrict profile page access to authenticated users only

**User-visible outcome:** Registered members can navigate to a Profile page that shows their Internet Identity principal and when they registered on the website. The Profile link appears in the navigation menu only when logged in.
