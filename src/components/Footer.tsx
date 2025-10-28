export default function Footer() {
  return (
    <footer className="mt-10 border-t border-blue-100 bg-white">
      <div className="relative mx-auto max-w-5xl px-6 py-6 text-center text-sm text-blue-700">
        {/* Logo à esquerda, mantendo o texto centralizado */}
        <img
          src="/fametro.svg"
          alt="Grupo FAMETRO"
          className="hidden sm:block absolute left-6 top-1/2 -translate-y-1/2 h-8 w-auto"
        />
        Azul Pela Vida • Novembro Azul • Fontes: INCA, IARC/WHO
      </div>
    </footer>
  );
}