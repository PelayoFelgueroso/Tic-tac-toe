import { Square } from "./Square.jsx";

export function WinnerSection({ winner, resetGame }) {
  if (winner === null) return null;
  const winnerText = winner === false ? "Empate" : "Ganó:"

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        {
          winner != false &&
          <header className="win"><Square>{winner}</Square></header> 
        }
      

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
