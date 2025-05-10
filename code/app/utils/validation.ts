import { z } from 'zod';

export const kycSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  dob: z.string().min(1, "Date of birth is required"),
  country: z.string().min(1, "Country is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(5, "Phone is too short"),
  address: z.string().min(1, "Address is required"),
  ssn: z.string().min(4, "SSN is required"),
  idFile: z.any(),
  employmentStatus: z.string().min(1, "Employment status required"),
});