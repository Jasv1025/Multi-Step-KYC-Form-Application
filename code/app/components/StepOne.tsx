// Import useFormContext to access form fields and validation from react-hook-form
import { useFormContext } from 'react-hook-form';

export default function StepOne() {
  // Destructure register (to bind inputs) and errors (for validation messages) from form context
  const { register, formState: { errors } } = useFormContext();

  return (
    // Wrap all inputs and error messages in a vertically spaced container
    <div className="space-y-4">
      
      {/* Full Name Input */}
      <input
        {...register("fullName")} // Register the input under the name "fullName"
        placeholder="Full Name"
        className="w-full border"
      />
      {/* Display validation error message for fullName, if any */}
      <p className="text-red-500 text-sm">{errors.fullName?.message?.toString()}</p>

      {/* Date of Birth Input */}
      <input
        type="date"
        {...register("dob")} // Register the input under the name "dob"
        className="w-full border"
      />
      {/* Display validation error message for dob, if any */}
      <p className="text-red-500 text-sm">{errors.dob?.message?.toString()}</p>

      {/* Country Selection Dropdown */}
      <select
        {...register("country")} // Register the input under the name "country"
        className="w-full border"
      >
        <option value="">Select Country</option>
        <option value="USA">USA</option>
      </select>
      {/* Display validation error message for country, if any */}
      <p className="text-red-500 text-sm">{errors.country?.message?.toString()}</p>
    </div>
  );
}