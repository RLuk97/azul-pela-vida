import SectionTitle from "@/components/SectionTitle";

type Item = {
  myth: string;
  fact: string;
};

const items: Item[] = [
  {
    myth: "Todos os homens devem fazer PSA todo ano",
    fact:
      "A decisão é individualizada com um profissional de saúde, considerando idade, riscos e benefícios."
  },
  {
    myth: "Toque retal sempre dói",
    fact:
      "É um exame rápido e, em geral, bem tolerado. Pode ser indicado junto ao PSA em contextos específicos."
  },
  {
    myth: "Sem sintomas, não há com o que se preocupar",
    fact:
      "O câncer de próstata pode ser silencioso. Informação, acompanhamento e estilo de vida saudável são importantes."
  },
  {
    myth: "PSA alto significa câncer",
    fact:
      "PSA elevado pode ter várias causas. A avaliação médica orienta exames complementares e conduta."
  },
  {
    myth: "Atividade física não ajuda",
    fact:
      "Há benefícios gerais para a saúde com exercícios, alimentação equilibrada e não fumar."
  }
];

export default function MythsFacts() {
  return (
    <section id="mitos" className="w-full rounded-2xl bg-white p-6 ring-1 ring-blue-200">
      <SectionTitle title="Mitos e verdades" subtitle="Informação clara para decisões melhores" />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((it, idx) => (
          <div key={idx} className="rounded-xl bg-blue-50 p-5 ring-1 ring-blue-200">
            <p className="text-blue-900"><span className="font-semibold">Mito:</span> {it.myth}</p>
            <p className="mt-2 text-blue-900"><span className="font-semibold">Verdade:</span> {it.fact}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-blue-700">
        Referências: INCA; Ministério da Saúde; diretrizes internacionais (IARC/WHO). Consulte seu profissional de saúde.
      </p>
    </section>
  );
}