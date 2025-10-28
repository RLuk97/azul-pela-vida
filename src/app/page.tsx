import Banner from "@/components/Banner";
import AboutDisease from "@/components/AboutDisease";
import RealData from "@/components/RealData";
import Importance from "@/components/Importance";
import SupportCounter from "@/components/SupportCounter";
import CommentForm from "@/components/CommentForm";
import { MythsFacts, FAQ, RealStories } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-blue-50">
      <main className="mx-auto max-w-5xl p-6 md:p-10 space-y-10">
        <Banner />

        <AboutDisease />
        <RealData />
        <Importance />

        <MythsFacts />
        <FAQ />
        <RealStories />

        <SupportCounter />

        <section id="apoio" className="w-full">
          <div className="mx-auto w-full md:max-w-2xl space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-blue-900 text-center">Deixe sua mensagem</h2>
            <CommentForm />
          </div>
        </section>
      </main>
    </div>
  );
}
