import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  Attendees,
  AddAttendeesToPresentations,
  Home,
  Presentations,
} from "./page";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/Attendees">Attendees</Link>
                </li>
                <li>
                  <Link to="/Presentation">presentation</Link>
                </li>

                <li>
                  <Link to="/AddAttendeesToPresentations">
                    Add Attendees to a presentations
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Attendees" element={<Attendees />} />
            <Route path="/Presentation" element={<Presentations />} />
            <Route
              path="/AddAttendeesToPresentations"
              element={<AddAttendeesToPresentations />}
            />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
