import { Check, Code, Network, Shield } from 'lucide-react';
import Card from '../common/Card';

const iconMap = {
  code: Code,
  network: Network,
  shield: Shield,
};

export default function ServiceCard({ service }) {
  const Icon = iconMap[service.icon] || Code;

  return (
    <Card>
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold">{service.name}</h3>
      <p className="mt-2 text-slate-600">{service.description}</p>
      <ul className="mt-6 space-y-3">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
            <Check className="h-4 w-4 shrink-0 text-brand" />
            {feature}
          </li>
        ))}
      </ul>
    </Card>
  );
}
