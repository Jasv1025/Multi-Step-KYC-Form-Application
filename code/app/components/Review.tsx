// Import useFormContext to access form state from react-hook-form
import { useFormContext } from 'react-hook-form';

export default function Review() {
  // Get the form context, specifically the getValues function
  const { getValues } = useFormContext();

  // Retrieve all current form values as an object
  const values = getValues();

  return (
    // Display a vertical list of key-value pairs with spacing and smaller text
    <div className="space-y-2 text-sm">
      {/* Iterate over each key-value pair in the form values */}
      {Object.entries(values).map(([key, value]) => (
        <div key={key}>
          {/* Display the key name in bold, and the value beside it */}
          {/* If the key is 'idFile' and has a value, show the file name instead of an object */}
          <strong>{key}</strong>: {key === 'idFile' && value ? value.name : String(value)}
        </div>
      ))}
    </div>
  );
}