export default function Navbar() {
  return (
    <header className="bg-white border-b border-blue-100">
      <div className="mx-auto max-w-5xl px-6 py-3 flex items-center justify-between">
        <a href="#topo" className="flex items-center gap-2 text-blue-900 font-semibold">
          <span className="text-xl">💙</span>
          <span>Azul Pela Vida</span>
        </a>
        <nav className="hidden md:flex items-center gap-5 text-blue-900">
          <a href="#sobre" className="hover:text-blue-700">Sobre</a>
          <a href="#dados" className="hover:text-blue-700">Dados</a>
          <a href="#importancia" className="hover:text-blue-700">Importância</a>
          <a href="#apoio" className="hover:text-blue-700">Apoio</a>
        </nav>
      </div>
    </header>
  );
}