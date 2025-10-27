type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div>
      <h2 className="text-2xl font-semibold tracking-tight text-blue-900">{title}</h2>
      {subtitle && <p className="mt-1 text-blue-700">{subtitle}</p>}
    </div>
  );
}