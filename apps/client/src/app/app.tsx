import { RouterProvider } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { Provider } from 'react-redux';

import { router } from '../routes/router';
import { store } from '../api/store';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
