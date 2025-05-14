import BoardingPass from "./components/BoardingPass";

export default function Home() {
  return (
    <div style={{ width: "100%", maxWidth: "var(--bp-width)" }}>
      <BoardingPass
        departure={{ code: "LOS", city: "Lagos", time: "06:00 AM" }}
        arrival={{ code: "ABV", city: "Abuja", time: "08:30 AM" }}
        date="27 July 2016"
        passenger="MR ESU G"
        flight="AR124"
        bookingRef="7ABC123"
        boarding="Boarding"
        gate="Gate 3"
        boardingTime="01:05 PM"
        seat="12B"
      />
    </div>
  );
}
