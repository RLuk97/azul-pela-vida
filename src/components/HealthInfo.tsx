export default function HealthInfo() {
  return (
    <section className="w-full rounded-2xl bg-white p-6 ring-1 ring-blue-200">
      <h2 className="text-xl font-bold text-blue-900">Informações de saúde</h2>
      <ul className="mt-3 list-disc pl-5 text-blue-900 space-y-1">
        <li>Converse com seu médico sobre o exame de próstata.</li>
        <li>Mantenha alimentação equilibrada e pratique atividades físicas.</li>
        <li>Não fume e modere o consumo de álcool.</li>
        <li>Faça check-ups regulares, especialmente após os 50 anos.</li>
      </ul>
      <div className="mt-4 space-x-3">
        <a
          href="https://www.gov.br/inca/pt-br/assuntos/cancer/tipos/prostata"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700"
        >
          INCA
        </a>
        <a
          href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/c/cancer-de-prostata"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-full bg-blue-50 text-blue-900 ring-1 ring-blue-300 px-4 py-2 text-sm font-medium hover:bg-blue-100"
        >
          Ministério da Saúde
        </a>
      </div>
    </section>
  );
}