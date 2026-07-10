export default function ChatPanel() {
  return (
    <div
      style={{
        background: "white",
        padding: 20,
        borderRadius: 10,
        height: 500,
      }}
    >
      <h3>🤖 AI Security Assistant</h3>

      <div
        style={{
          height: 350,
          overflowY: "auto",
          border: "1px solid #ddd",
          padding: 15,
          marginTop: 15,
          borderRadius: 8,
        }}
      >
        <p><b>You:</b> Analyze this suspicious IP.</p>

        <p>
          <b>AI:</b> The IP has been reported multiple times for brute-force
          attempts. Recommended action: block at the firewall and investigate
          affected systems.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 15,
        }}
      >
        <input
          placeholder="Ask security question..."
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 8,
          }}
        />

        <button
          style={{
            marginLeft: 10,
            padding: "10px 20px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}