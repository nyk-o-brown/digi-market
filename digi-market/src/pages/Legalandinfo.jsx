import React from 'react';

const LegalAndInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Legal Information</h1>
        
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Copyright Notice</h2>
          <p className="text-gray-600 mb-4">
            This project, Digi-Market, is a demonstration project created for educational purposes.
            All rights reserved © 2024. This project and its contents may not be used for financial
            gain or distributed without explicit permission from the author.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Disclaimer</h2>
          <p className="text-gray-600 mb-4">
            This is a demo project and should not be used for actual commercial transactions.
            The products, prices, and services shown are fictional and for demonstration purposes only.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Contact Information</h2>
          <p className="text-gray-600">
            For inquiries about this project, please contact:<br />
            Email: <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">
              your.email@example.com
            </a>
          </p>
        </section>

        <footer className="mt-12 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            Last updated: April 2024
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LegalAndInfo;