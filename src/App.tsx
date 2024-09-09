const interMiami: number = 11;
const bocaJuniors: number = 11;
const lionelMessi: boolean = true;

const App: React.FC<{
  interMiami: number;
  bocaJuniors: number;
  lionelMessi: boolean;
}> = ({ interMiami, bocaJuniors, lionelMessi }) => {
  if (lionelMessi ? (interMiami += 1) : interMiami)
    return (
      <>
        <h1>Aprendiendo TypeScript</h1>
        <div>
          {interMiami > bocaJuniors ? (
            <h2>Ganó Inter de Miami</h2>
          ) : interMiami === bocaJuniors ? (
            <h2>Empate</h2>
          ) : (
            <h2>Ganó Boca Juniors</h2>
          )}
        </div>
      </>
    );
};

export default App;
