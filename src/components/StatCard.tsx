type Props = {
  title: string;
  stat: string;
  description: string;
  sourceLabel: string;
  sourceUrl: string;
};

export default function StatCard({ title, stat, description, sourceLabel, sourceUrl }: Props) {
  return (
    <div className="rounded-xl bg-blue-50 p-5 ring-1 ring-blue-200">
      <h3 className="font-semibold text-blue-900">{title}</h3>
      <p className="mt-2 text-2xl font-bold text-blue-900">{stat}</p>
      <p className="mt-2 text-blue-900">{description}</p>
      <p className="mt-3 text-sm text-blue-700">
        Fonte: <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="underline">{sourceLabel}</a>
      </p>
    </div>
  );
}