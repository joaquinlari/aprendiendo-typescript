const interMiami: number = 11;
const bocaJuniors: number = 11;
function App(interMiami: number, bocaJuniors: number): string {
  if (interMiami > bocaJuniors) return <h2>Gano boca</h2>;
  return <h1>Aprendiendo TypeScript</h1>;
}

export default App;
