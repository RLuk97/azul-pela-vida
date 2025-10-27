import SectionTitle from "@/components/SectionTitle";
import StatCard from "@/components/StatCard";

export default function RealData() {
  return (
    <section id="dados" className="w-full rounded-2xl bg-white p-6 ring-1 ring-blue-200">
      <SectionTitle title="Dados reais" subtitle="Estimativas e fontes oficiais" />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <StatCard
          title="Brasil"
          stat="> 70 mil/ano"
          description="Estimativa de casos novos de câncer de próstata (2023–2025)."
          sourceLabel="INCA — Estimativa 2023"
          sourceUrl="https://www.gov.br/inca/pt-br/assuntos/gestao-do-conhecimento/estimativa/2023"
        />
        <StatCard
          title="Mundo (2020)"
          stat="~ 1,4 milhão / 375 mil"
          description="Casos novos e mortes por câncer de próstata."
          sourceLabel="IARC/WHO — GLOBOCAN 2020"
          sourceUrl="https://gco.iarc.fr/today/home"
        />
      </div>
      <p className="mt-4 text-sm text-blue-700">
        Observação: números são estimativas e podem variar por ano e metodologia.
      </p>
    </section>
  );
}