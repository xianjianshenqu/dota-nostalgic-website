import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import Home from "@/pages/Home";
import Timeline from "@/pages/Timeline";
import HeroBook from "@/pages/HeroBook";
import PubStory from "@/pages/PubStory";
import ReplayHub from "@/pages/ReplayHub";
import OldGuardFM from "@/pages/OldGuardFM";
import Layout from "@/components/Layout";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Layout><Timeline /></Layout>} />
          <Route path="/herobook" element={<Layout><HeroBook /></Layout>} />
          <Route path="/pubstory" element={<Layout><PubStory /></Layout>} />
          <Route path="/replayhub" element={<Layout><ReplayHub /></Layout>} />
          <Route path="/oldguard-fm" element={<Layout><OldGuardFM /></Layout>} />
        </Routes>
        <Toaster 
          position="top-right" 
          theme="dark" 
          toastOptions={{
            style: {
              background: '#1f2937',
              border: '1px solid #374151',
              color: '#f9fafb',
            },
          }}
        />
      </Router>
    </AuthProvider>
  );
}