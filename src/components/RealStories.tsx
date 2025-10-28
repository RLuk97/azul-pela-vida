import SectionTitle from "@/components/SectionTitle";

type Story = {
  title: string;
  summary: string;
  content: string;
};

const stories: Story[] = [
  {
    title: "Relato — decisão informada",
    summary: "Conversa com profissional e escolha compartilhada",
    content:
      "Relato exemplificativo: após entender riscos e benefícios dos exames, a decisão foi tomada em conjunto com o médico, considerando histórico familiar e preferências pessoais."
  },
  {
    title: "Relato — apoio da família",
    summary: "A importância de falar sobre o assunto",
    content:
      "Relato exemplificativo: o diálogo em casa ajudou a superar receios e buscar orientação de saúde. Informação de qualidade fez diferença na atitude."
  }
];

export default function RealStories() {
  return (
    <section id="historias" className="w-full rounded-2xl bg-white p-6 ring-1 ring-blue-200">
      <SectionTitle title="Histórias reais" subtitle="Depoimentos e experiências (curadoria)" />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {stories.map((s, idx) => (
          <article key={idx} className="rounded-xl bg-blue-50 p-5 ring-1 ring-blue-200">
            <h3 className="font-semibold text-blue-900">{s.title}</h3>
            <p className="mt-1 text-sm text-blue-700">{s.summary}</p>
            <p className="mt-3 text-blue-900">{s.content}</p>
          </article>
        ))}
      </div>
      <p className="mt-4 text-sm text-blue-700">
        Quer compartilhar sua história? Use o formulário em \"Deixe sua mensagem\" ou entre em contato para curadoria.
      </p>
      <p className="mt-1 text-xs text-blue-600">
        Observação: estes relatos são exemplificativos e não substituem orientação médica. Quando disponível, incluiremos histórias reais com consentimento e anonimização.
      </p>
    </section>
  );
}