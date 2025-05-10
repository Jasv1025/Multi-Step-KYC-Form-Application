// Define the props type for ProgressBar: current step and total number of steps
type Props = {
  step: number;
  total: number;
};

// ProgressBar component: visually indicates the user's progress through multiple steps
export default function ProgressBar({ step, total }: Props) {
  // Calculate the progress percentage (step is 0-indexed, so add 1)
  const percent = ((step + 1) / total) * 100;

  return (
    // Outer bar with fixed height, gray background, and rounded corners
    <div className="w-full bg-gray-200 h-2 rounded mb-4">
      {/* Inner bar reflects progress; width is calculated dynamically */}
      <div
        className="h-2 bg-blue-500 rounded transition-all"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}