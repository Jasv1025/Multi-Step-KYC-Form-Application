// Import Zod for schema validation
import { z } from 'zod';

// Define a Zod schema for the KYC form validation
export const kycSchema = z.object({
  // Full name must be a non-empty string
  fullName: z.string().min(1, "Full name is required"),

  // Date of birth must be a non-empty string
  dob: z.string().min(1, "Date of birth is required"),

  // Country must be selected (non-empty string)
  country: z.string().min(1, "Country is required"),

  // Email must be a valid email format
  email: z.string().email("Invalid email"),

  // Phone must be at least 5 characters long
  phone: z.string().min(5, "Phone is too short"),

  // Address must be a non-empty string
  address: z.string().min(1, "Address is required"),

  // SSN must be at least 4 characters long
  ssn: z.string().min(4, "SSN is required"),

  // ID file can be of any type (basic validation here)
  idFile: z.any(),

  // Employment status must be selected (non-empty string)
  employmentStatus: z.string().min(1, "Employment status required"),
});