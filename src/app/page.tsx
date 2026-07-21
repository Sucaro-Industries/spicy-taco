import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-3xl flex-col items-center justify-center pt-24 px-16 bg-white dark:bg-black sm:items-start">
      <Header title="Controla tus gastos de forma inteligente" />
    </main>
  );
}
