export default function Header({ title }: { title: string }) {
  return (
    <header className="bg-zinc-50 dark:bg-black">
      <h1 className="text-3xl font-semibold text-zinc-900 dark:text-white">{title}</h1>
    </header>
  );
}
