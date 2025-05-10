import { useFormContext } from 'react-hook-form';

export default function StepTwo(){
    const{register, formState:{errors}} = useFormContext();

    return(
        <div className="space-y-4">
        <input {...register("email")} placeholder="Email" className="w-full p-2 border" />
        <p className="text-red-500 text-sm">{errors.email?.message?.toString()}</p>

        <input {...register("phone")} placeholder="Phone" className="w-full p-2 border" />
        <p className="text-red-500 text-sm">{errors.phone?.message?.toString()}</p>

        <textarea {...register("address")} placeholder="Address" className="w-full p-2 border" />
        <p className="text-red-500 text-sm">{errors.address?.message?.toString()}</p>
        </div>
    );
}