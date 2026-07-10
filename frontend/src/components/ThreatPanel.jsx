export default function ThreatPanel() {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
      }}
    >
      <h3>Threat Intelligence</h3>

      <hr />

      <p>🟢 Clean IPs: 1452</p>

      <p>🔴 Malicious IPs: 32</p>

      <p>⚠ High Risk Domains: 18</p>

      <p>🟠 New CVEs: 11</p>
    </div>
  );
}