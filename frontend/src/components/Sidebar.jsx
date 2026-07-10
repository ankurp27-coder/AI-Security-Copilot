const menus = [
  "Dashboard",
  "AI Chat",
  "Threat Intelligence",
  "IOC Lookup",
  "Log Analysis",
  "Malware",
  "Incidents",
  "Reports",
  "Settings",
];

export default function Sidebar() {
  return (
    <div
      style={{
        width: 250,
        background: "#0f172a",
        color: "white",
        padding: 20,
      }}
    >
      <h2>🛡 AI Security</h2>

      <hr />

      {menus.map((item) => (
        <div
          key={item}
          style={{
            padding: 15,
            cursor: "pointer",
            borderRadius: 8,
            marginTop: 5,
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}