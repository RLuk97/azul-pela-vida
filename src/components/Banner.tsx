export default function Banner() {
  return (
    <section
      id="topo"
      className="relative w-full overflow-hidden rounded-2xl bg-linear-to-r from-blue-600 to-blue-700 text-white p-8 md:p-10 shadow"
    >
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Novembro Azul — Azul Pela Vida
      </h1>
      <p className="mt-3 max-w-2xl text-blue-100">
        Conscientização sobre o câncer de próstata. Informação de qualidade, incentivo ao cuidado
        e apoio da comunidade.
      </p>
      <div className="mt-6">
        <a
          href="#apoio"
          className="inline-flex items-center rounded-full bg-white text-blue-800 px-5 py-2 font-medium shadow hover:bg-blue-50"
        >
          Deixe sua mensagem de apoio
        </a>
      </div>
    </section>
  );
}