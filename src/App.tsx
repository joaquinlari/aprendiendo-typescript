const interMiami: number = 11;
const bocaJuniors: number = 11;
const App: React.FC<{ interMiami: number; bocaJuniors: number }> = ({
  interMiami,
  bocaJuniors,
}) => {
  if (interMiami > bocaJuniors) return <h2>Gano boca</h2>;
  return <h1>Aprendiendo TypeScript</h1>;
};

export default App;
