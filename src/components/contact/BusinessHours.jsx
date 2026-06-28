import { useCompanyData } from '../../hooks/useCompanyData';
import Card from '../common/Card';

export default function BusinessHours() {
  const { contacts } = useCompanyData();

  return (
    <Card hover={false}>
      <h3 className="text-lg font-bold">Business Hours</h3>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm">
          <caption className="sr-only">Office business hours</caption>
          <tbody>
            {Object.entries(contacts.workingHours).map(([day, hours]) => (
              <tr key={day} className="border-b border-slate-100 last:border-0">
                <td className="py-3 pr-4 font-medium text-slate-800">{day}</td>
                <td className="py-3 text-right text-slate-600">{hours}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
