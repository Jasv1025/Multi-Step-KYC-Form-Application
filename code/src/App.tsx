// Import the KYCForm component from the specified relative path
import KYCForm from '../app/pages/KYCForm';

// Define the main App component as the default export
export default function App() {
  return (
    // Render the main layout with some Tailwind CSS utility classes for full height and padding
    <main className="min-h-screen bg-gray-100 p-6">
      {/* Center the KYCForm in a container with a maximum width */}
      <div className="max-w-3xl mx-auto">
        {/* Render the KYC form */}
        <KYCForm />
      </div>
    </main>
  );
}