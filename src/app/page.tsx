import Image from "next/image";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <main className="flex-1 w-full max-w-3xl flex-col items-center justify-center pt-24 px-16 bg-white dark:bg-black sm:items-start">
        <div className="text-center sm:text-left mb-8">
          <Header title="Controla tus gastos de forma inteligente" />
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Gestiona, organiza y optimiza tus gastos personales y empresariales con nuestra aplicación.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-zinc-900 text-white px-5 transition-colors hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200 md:w-[158px]"
            href="#"
          >
            Empezar ahora
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-zinc-300 dark:border-zinc-700 px-5 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 md:w-[158px]"
            href="#"
          >
            Aprender más
          </a>
        </div>
      </main>
    </div>
  );
}
