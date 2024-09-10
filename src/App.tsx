import { useEffect, useState } from "react";

const App: React.FC<{
  interMiami: number;
  bocaJuniors: number;
  lionelMessi: boolean;
}> = ({ interMiami, bocaJuniors, lionelMessi }) => {
  const [miamiScore, SetMiamiScore] = useState(interMiami);

  useEffect(() => {
    if (lionelMessi) {
      SetMiamiScore((prevScore) => prevScore + 1);
    }
  }, [lionelMessi]);
  return (
    <>
      <h1>Aprendiendo TypeScript</h1>
      <div>
        {miamiScore > bocaJuniors ? (
          <h2>Ganó Inter de Miami</h2>
        ) : miamiScore === bocaJuniors ? (
          <h2>Empate</h2>
        ) : (
          <h2>Ganó Boca Juniors</h2>
        )}
      </div>
    </>
  );
};

export default App;
