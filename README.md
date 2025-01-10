# Stackline Challenge

## Submission Creator: Jacob Hoffman, 10/09/2025

### Instructions:

We are looking for:
- A solution that resembles the provided mockup closely and implements AT LEAST ONE of either the graph or table as seen in the mockup
- A working solution that takes the provided JSON file as output from a mock API call
- A solution that implements React and Redux best practices and patterns
- Clean, easy to follow code

Nice to haves:
- Typescript
- Functional components
- Additional functionality in the graph or table, e.g. sorting, overlays

Assets to be returned via email within the provided time frame:
- A public git repository to view the final code
- A public URL to view the web page --- can be hosted on GitHub Pages, AWS, Vercel, etc.

### Submission Notes:

- `Vite` was used to create a React template project.
- `gh-pages` was used to deploy the static app to GitHub Pages.
- `react-query` was used to cache the "API results", which were mocked using The provided JSON data file with `fetch` API. The query is accessible using a React Hook called `useGetItem`.
- `react-router-dom` was used to create a simple page router in the app.
- `react-redux` was used to create a simple store that includes an `itemSlice`, which allows the stored `item` record to be set, accessed, and deleted.
- `@mui` (Material UI component library) and `@emotion` (styling) were used in this app:
   - Created an `ItemDetail` component using general `@mui/material` components.
   - Created an `ItemsSalesTable` component using `Table` components available in `@mui/material`. The `TableSortLabel` component was used to configure ascending/descending order by sort functionality for each table column (hover over the column header and click).
   - Created an `ItemSalesGraph` component using the `LineChart` component available in `@mui/x-charts`.

### [Project URL (GitHub Pages)](https://jacob-hoff-man.github.io/stackline-challenge/)


