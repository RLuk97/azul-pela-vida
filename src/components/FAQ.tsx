import SectionTitle from "@/components/SectionTitle";

type QA = {
  q: string;
  a: string;
};

const qas: QA[] = [
  {
    q: "Quando devo considerar exames como PSA e toque retal?",
    a: "A decisão é individualizada com um profissional de saúde, considerando idade, histórico familiar, comorbidades e preferências."
  },
  {
    q: "Quais sinais e sintomas devo observar?",
    a: "Alterações urinárias, dor pélvica ou óssea e sangue na urina podem ocorrer em diferentes condições. Procure avaliação médica ao notar mudanças persistentes."
  },
  {
    q: "PSA alto significa que tenho câncer?",
    a: "Não necessariamente. PSA pode se elevar por motivos benignos. O médico avalia necessidade de repetição, exames complementares e conduta."
  },
  {
    q: "O que posso fazer para cuidar melhor da minha saúde?",
    a: "Alimentação equilibrada, atividade física regular, não fumar, moderar álcool e manter consultas periódicas são medidas de grande impacto."
  },
  {
    q: "Onde encontro informações confiáveis?",
    a: "INCA (Ministério da Saúde) e IARC/WHO oferecem materiais baseados em evidências. Consulte sempre fontes oficiais e profissionais de saúde."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="w-full rounded-2xl bg-white p-6 ring-1 ring-blue-200">
      <SectionTitle title="Perguntas frequentes" subtitle="Respostas objetivas e referências confiáveis" />
      <div className="mt-4 divide-y divide-blue-200 rounded-xl bg-blue-50 ring-1 ring-blue-200">
        {qas.map((item, idx) => (
          <div key={idx} className="p-5">
            <p className="font-semibold text-blue-900">{item.q}</p>
            <p className="mt-2 text-blue-900">{item.a}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-blue-700">
        Este conteúdo tem caráter informativo e não substitui orientação profissional individualizada.
      </p>
    </section>
  );
}