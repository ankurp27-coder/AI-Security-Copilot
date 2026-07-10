const alerts = [
  "PowerShell execution detected",
  "New admin account created",
  "Suspicious outbound traffic",
  "Multiple failed logins",
];

export default function AlertsPanel() {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 10,
      }}
    >
      <h3>Recent Alerts</h3>

      <hr />

      {alerts.map((alert) => (
        <div
          key={alert}
          style={{
            padding: 10,
            borderBottom: "1px solid #ddd",
          }}
        >
          {alert}
        </div>
      ))}
    </div>
  );
}