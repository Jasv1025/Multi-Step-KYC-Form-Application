// Import hooks and utilities
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Import validation schema and UI components
import { kycSchema } from '../utils/validation';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import StepOneForm from '../components/StepOne';
import StepTwoForm from '../components/StepTwo';
import StepThreeForm from '../components/StepThree';
import ReviewForm from '../components/Review';
import ProgressBar from '../components/ProgressBar';

// Define the step titles
const steps = ["Personal Info", "Contact Info", "Verification", "Review"];

export default function KYCForm() {
  // Track the current step in the form
  const [step, setStep] = useState(0);

  // Initialize react-hook-form with Zod validation and blur mode
  const methods = useForm({
    resolver: zodResolver(kycSchema),
    mode: 'onBlur',
  });

  // Move to the next step, but cap at the last step
  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length - 1));
  
  // Move to the previous step, but not before the first
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 0));

  // Handle form submission
  const onSubmit = async(data: any) => {
    try {
      // Simulate API call delay
      await new Promise((res) => setTimeout(res, 500));
      alert("Submitted!");
    } catch (err) {
      console.error("Submission failed:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      {/* Header with step info */}
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold">KYC Form</h2>
        <p className="text-sm text-gray-600">
          Step {step + 1} of {steps.length}: {steps[step]}
        </p>
      </div>

      {/* Progress bar indicating step completion */}
      <ProgressBar step={step} total={steps.length} />

      {/* Provide form context to child components */}
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Card>
            <CardContent className="p-4">
              {/* Render step-specific form component */}
              {step === 0 && <StepOneForm />}
              {step === 1 && <StepTwoForm />}
              {step === 2 && <StepThreeForm />}
              {step === 3 && <ReviewForm />}

              {/* Navigation buttons */}
              <div className="mt-4 flex justify-between">
                <Button type="button" onClick={prevStep} disabled={step === 0}>
                  Back
                </Button>
                {step < steps.length - 1 ? (
                  <Button type="button" onClick={nextStep}>
                    Next
                  </Button>
                ) : (
                  <Button type="submit">Submit</Button>
                )}
              </div>
            </CardContent>
          </Card>
        </form>
      </FormProvider>
    </div>
  );
}