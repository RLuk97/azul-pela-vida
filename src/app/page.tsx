import Banner from "@/components/Banner";
import AboutDisease from "@/components/AboutDisease";
import RealData from "@/components/RealData";
import Importance from "@/components/Importance";
import SupportCounter from "@/components/SupportCounter";
import CommentForm from "@/components/CommentForm";
import CommentList from "@/components/CommentList";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-blue-50">
      <main className="mx-auto max-w-5xl p-6 md:p-10 space-y-10">
        <Banner />

        <AboutDisease />
        <RealData />
        <Importance />

        <SupportCounter />

        <section id="apoio" className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-blue-900">Deixe sua mensagem</h2>
            <CommentForm />
          </div>
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-blue-900">Mensagens da comunidade</h2>
            <CommentList />
          </div>
        </section>
      </main>
    </div>
  );
}
