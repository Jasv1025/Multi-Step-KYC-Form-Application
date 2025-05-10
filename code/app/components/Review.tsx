import { useFormContext } from 'react-hook-form';

export default function Review(){
    const { getValues } = useFormContext();
    const values = getValues();

    return(
      <div className="space-y-2 text-sm">
        {Object.entries(values).map(([key, value]) => (
          <div key={key}>
            <strong>{key}</strong>: {key === 'idFile' && value ? value.name : String(value)}
          </div>
        ))}
      </div>
    );
}