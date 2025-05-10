import { useFormContext } from 'react-hook-form';

export default function StepOne(){
    const{register, formState: {errors}} = useFormContext();
  
    return(
      <div className="space-y-4">
        <input {...register("fullName")} placeholder="Full Name" className="w-full border" />
        <p className="text-red-500 text-sm">{errors.fullName?.message?.toString()}</p>
  
        <input type="date" {...register("dob")} className="w-full border" />
        <p className="text-red-500 text-sm">{errors.dob?.message?.toString()}</p>
  
        <select {...register("country")} className="w-full border">
          <option value="">Select Country</option>
          <option value="USA">USA</option>
        </select>
        <p className="text-red-500 text-sm">{errors.country?.message?.toString()}</p>
      </div>
    );
}