import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import { router } from "../routes/router";

function App() {
  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
