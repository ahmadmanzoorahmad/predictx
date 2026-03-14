import { Link } from "react-router";
import { Home, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0b14] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-9xl font-bold bg-gradient-to-r from-[#ffd700] via-[#00d4ff] to-[#b026ff] bg-clip-text text-transparent">
            404
          </div>
          <h1 className="text-3xl font-bold mt-4 mb-2">Page Not Found</h1>
          <p className="text-[#a1a1b0] mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#ffd700] to-[#00d4ff] px-6 py-3 font-semibold text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all"
          >
            <Home className="h-5 w-5" />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#2a2b3d] bg-[#151621] px-6 py-3 font-semibold hover:bg-[#1f2130] transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}