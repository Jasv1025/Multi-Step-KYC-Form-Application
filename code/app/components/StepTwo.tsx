// Import useFormContext from react-hook-form to access shared form methods
import { useFormContext } from 'react-hook-form';

export default function StepTwo() {
  // Extract register to bind input fields and errors for validation messages
  const { register, formState: { errors } } = useFormContext();

  return (
    // Container with vertical spacing between inputs
    <div className="space-y-4">

      {/* Email Input Field */}
      <input
        {...register("email")} // Register input under the "email" key
        placeholder="Email"
        className="w-full p-2 border"
      />
      {/* Display validation error for email if present */}
      <p className="text-red-500 text-sm">{errors.email?.message?.toString()}</p>

      {/* Phone Input Field */}
      <input
        {...register("phone")} // Register input under the "phone" key
        placeholder="Phone"
        className="w-full p-2 border"
      />
      {/* Display validation error for phone if present */}
      <p className="text-red-500 text-sm">{errors.phone?.message?.toString()}</p>

      {/* Address Textarea Field */}
      <textarea
        {...register("address")} // Register textarea under the "address" key
        placeholder="Address"
        className="w-full p-2 border"
      />
      {/* Display validation error for address if present */}
      <p className="text-red-500 text-sm">{errors.address?.message?.toString()}</p>
    </div>
  );
}