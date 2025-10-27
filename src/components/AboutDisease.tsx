export default function AboutDisease() {
  return (
    <section id="sobre" className="w-full rounded-2xl bg-white p-6 ring-1 ring-blue-200">
      <h2 className="text-xl font-bold text-blue-900">Sobre o câncer de próstata</h2>
      <p className="mt-3 text-blue-900">
        O câncer de próstata é o tipo mais frequente entre homens no Brasil
        (excluindo os tumores de pele não melanoma). A maioria dos casos ocorre
        após os 50 anos, e o risco aumenta com a idade.
      </p>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-xl bg-blue-50 p-4 ring-1 ring-blue-200">
          <h3 className="font-semibold text-blue-900">Fatores de risco</h3>
          <ul className="mt-2 list-disc pl-5 text-blue-900 space-y-1">
            <li>Idade avançada</li>
            <li>Histórico familiar (pai/irmão)</li>
            <li>Raça negra</li>
          </ul>
        </div>
        <div className="rounded-xl bg-blue-50 p-4 ring-1 ring-blue-200">
          <h3 className="font-semibold text-blue-900">Sinais e sintomas</h3>
          <ul className="mt-2 list-disc pl-5 text-blue-900 space-y-1">
            <li>Dificuldade para urinar</li>
            <li>Jato de urina fraco</li>
            <li>Necessidade de urinar mais vezes à noite</li>
            <li>Presença de sangue na urina ou no sêmen</li>
          </ul>
        </div>
        <div className="rounded-xl bg-blue-50 p-4 ring-1 ring-blue-200">
          <h3 className="font-semibold text-blue-900">Prevenção e cuidado</h3>
          <ul className="mt-2 list-disc pl-5 text-blue-900 space-y-1">
            <li>Estilo de vida saudável</li>
            <li>Consulta médica regular</li>
            <li>Discussão individualizada sobre exames (PSA/toque retal)</li>
          </ul>
        </div>
      </div>
      <p className="mt-4 text-sm text-blue-700">
        Fonte: INCA — Instituto Nacional de Câncer (Ministério da Saúde).
        <a
          href="https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/prostata"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 underline"
        >
          Saiba mais
        </a>
      </p>
    </section>
  );
}