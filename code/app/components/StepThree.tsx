import { useFormContext } from 'react-hook-form';

export default function StepThree(){
    const{register, formState: {errors}} = useFormContext();

    return(
      <div className="space-y-4">
        <input {...register("ssn")} placeholder="Social Security Number" className="w-full p-2 border" />
        <p className="text-red-500 text-sm">{errors.ssn?.message?.toString()}</p>
  
        <input type="file" {...register("idFile")} className="w-full p-2 border" />
        <p className="text-red-500 text-sm">{errors.idFile?.message?.toString()}</p>
  
        <select {...register("employmentStatus")} className="w-full p-2 border">
          <option value="">Employment Status</option>
          <option value="Employed">Employed</option>
          <option value="Unemployed">Unemployed</option>
        </select>
        <p className="text-red-500 text-sm">{errors.employmentStatus?.message?.toString()}</p>
      </div>
    );
}