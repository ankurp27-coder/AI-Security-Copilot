import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCards from "../components/DashboardCards";
import ChatPanel from "../components/ChatPanel";
import ThreatPanel from "../components/ThreatPanel";
import AlertsPanel from "../components/AlertsPanel";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", height: "100vh", background: "#f5f7fa" }}>
      <Sidebar />

      <div style={{ flex: 1 }}>
        <Navbar />

        <div style={{ padding: 20 }}>
          <DashboardCards />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: 20,
              marginTop: 20,
            }}
          >
            <ChatPanel />

            <div>
              <ThreatPanel />
              <AlertsPanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}