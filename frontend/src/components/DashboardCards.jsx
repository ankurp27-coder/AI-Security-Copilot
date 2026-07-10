const cards = [
  ["Critical Alerts", "12"],
  ["Open Incidents", "8"],
  ["Threat Score", "82%"],
  ["Active Users", "145"],
];

export default function DashboardCards() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4,1fr)",
        gap: 20,
      }}
    >
      {cards.map((card) => (
        <div
          key={card[0]}
          style={{
            background: "white",
            padding: 20,
            borderRadius: 10,
            boxShadow: "0 0 8px rgba(0,0,0,.1)",
          }}
        >
          <h4>{card[0]}</h4>

          <h1>{card[1]}</h1>
        </div>
      ))}
    </div>
  );
}