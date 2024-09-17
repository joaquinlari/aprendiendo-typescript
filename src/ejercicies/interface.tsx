interface Programador {
  nombre: string;
  tecnologias: string[];
  tomaMate: boolean | null;
}

const dev1: Programador = {
  nombre: "Jose Perez",
  tecnologias: ["Java", "Springboot", "MySQL"],
  tomaMate: true,
};

const dev2: Programador = {
  nombre: "Hernán Rodriguez",
  tecnologias: ["CSS", "HTML", "JavaScript"],
  tomaMate: null,
};

function enviarCurriculum(programador: Programador) {
  console.log(`El curriculum pertenece a ${programador.nombre} `);
}

enviarCurriculum(dev1);
enviarCurriculum(dev2);
