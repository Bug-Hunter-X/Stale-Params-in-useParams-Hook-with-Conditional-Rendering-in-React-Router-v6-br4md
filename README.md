# Stale Params in useParams Hook with Conditional Rendering in React Router v6

This repository demonstrates a bug in React Router v6 where the `useParams` hook doesn't update correctly when used within a conditionally rendered component.  If the component is unmounted when the route changes, the hook retains stale parameter data.

## Bug Description
The `useParams` hook fails to reflect the current route parameters if the component using it is not mounted at the time of route change. This leads to the display of outdated data, even after navigating to a new route.

## Reproduction
1. Clone this repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm start`
4. Navigate to a route with parameters (e.g., `/details/123`).
5. Observe that the initial display shows the correct parameter. 
6. Refresh the page or try the navigation again. The behavior should be erratic.