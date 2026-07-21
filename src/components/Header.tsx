export default function Header({ title }: { title: string }) {
  return (
    <h1 className="text-4xl font-bold text-zinc-900 dark:text-white mb-4">
      {title}
    </h1>
  );
}
