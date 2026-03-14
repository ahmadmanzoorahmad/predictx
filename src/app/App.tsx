import { RouterProvider } from "react-router";
import { router } from "./routes";

// Main App Component
export default function App() {
  return <RouterProvider router={router} />;
}