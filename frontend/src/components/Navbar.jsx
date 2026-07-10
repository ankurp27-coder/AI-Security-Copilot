export default function Navbar() {
  return (
    <div
      style={{
        height: 70,
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        boxShadow: "0 2px 5px rgba(0,0,0,.1)",
      }}
    >
      <h2>AI Security Copilot</h2>

      <input
        placeholder="Search..."
        style={{
          width: 300,
          padding: 10,
          borderRadius: 8,
          border: "1px solid gray",
        }}
      />
    </div>
  );
}