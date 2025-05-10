// Import useFormContext from react-hook-form to access form methods
import { useFormContext } from 'react-hook-form';

export default function StepThree() {
  // Extract register (to bind inputs) and errors (for displaying validation messages)
  const { register, formState: { errors } } = useFormContext();

  return (
    // Container with vertical spacing between fields
    <div className="space-y-4">

      {/* Social Security Number Input */}
      <input
        {...register("ssn")} // Register the input field under "ssn"
        placeholder="Social Security Number"
        className="w-full p-2 border"
      />
      {/* Show error if SSN validation fails */}
      <p className="text-red-500 text-sm">{errors.ssn?.message?.toString()}</p>

      {/* ID File Upload */}
      <input
        type="file"
        {...register("idFile")} // Register file input under "idFile"
        className="w-full p-2 border"
      />
      {/* Show error if file validation fails */}
      <p className="text-red-500 text-sm">{errors.idFile?.message?.toString()}</p>

      {/* Employment Status Dropdown */}
      <select
        {...register("employmentStatus")} // Register dropdown under "employmentStatus"
        className="w-full p-2 border"
      >
        <option value="">Employment Status</option>
        <option value="Employed">Employed</option>
        <option value="Unemployed">Unemployed</option>
      </select>
      {/* Show error if employmentStatus validation fails */}
      <p className="text-red-500 text-sm">{errors.employmentStatus?.message?.toString()}</p>
    </div>
  );
}