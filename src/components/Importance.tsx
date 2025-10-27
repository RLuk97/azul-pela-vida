export default function Importance() {
  return (
    <section id="importancia" className="w-full rounded-2xl bg-white p-6 ring-1 ring-blue-200">
      <h2 className="text-xl font-bold text-blue-900">Por que é importante?</h2>
      <p className="mt-3 text-blue-900">
        Detectar precocemente aumenta as chances de tratamento eficaz e preserva qualidade de vida.
        Conversar com um profissional de saúde ajuda a decidir, de forma individualizada, quando
        realizar exames como PSA e toque retal, considerando benefícios e possíveis riscos.
      </p>
      <ul className="mt-4 list-disc pl-5 text-blue-900 space-y-1">
        <li>Diagnóstico oportuno reduz complicações e mortalidade.</li>
        <li>Estilo de vida saudável contribui para prevenção geral.</li>
        <li>Apoio da família e amigos incentiva o cuidado contínuo.</li>
      </ul>
      <p className="mt-4 text-sm text-blue-700">
        Fontes: INCA; Ministério da Saúde; diretrizes internacionais (IARC/WHO).
      </p>
    </section>
  );
}