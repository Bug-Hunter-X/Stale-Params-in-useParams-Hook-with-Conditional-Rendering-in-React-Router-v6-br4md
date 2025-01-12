In React Router Dom v6,  using the `useParams` hook inside a component that's rendered conditionally (e.g., based on authentication status) can lead to unexpected behavior.  If the component rendering the `useParams` hook isn't mounted when the route changes, the hook will not update with the new params. This results in stale parameter data being displayed even after navigation.  For example:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulate authentication check
    setTimeout(() => setIsAuthenticated(true), 1000);
  }, []);

  if (!isAuthenticated) {
    return <div>Authenticating...</div>;
  }

  return (
    <div>
      <h1>Details for ID: {id}</h1>
    </div>
  );
}
```

If the user navigates to `/details/123` before the authentication timeout completes, `id` will remain undefined even after authentication.