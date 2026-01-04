const Terms = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          Welcome to <span className="font-semibold">Artify</span>. By
          accessing or using this platform, you agree to comply with and
          be bound by the following terms and conditions. Please read
          them carefully.
        </p>

        <div className="space-y-8 bg-base-100 shadow rounded-xl p-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 text-sm">
              By creating an account or using Artify, you confirm that
              you accept these Terms & Conditions and agree to follow
              all applicable laws and regulations.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. User Accounts
            </h2>
            <p className="text-gray-600 text-sm">
              Users are responsible for maintaining the confidentiality
              of their account credentials. Any activity performed under
              your account is your responsibility.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. Artwork Content
            </h2>
            <p className="text-gray-600 text-sm">
              Users retain full ownership of their uploaded artworks.
              However, users must ensure that they have the legal right
              to upload and display the content on Artify.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Prohibited Activities
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Uploading copyrighted or illegal content</li>
              <li>Misusing the platform for fraudulent purposes</li>
              <li>Attempting to access other users’ accounts</li>
              <li>Disrupting or damaging the platform’s functionality</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Platform Availability
            </h2>
            <p className="text-gray-600 text-sm">
              Artify is provided on an “as-is” basis. We do not guarantee
              uninterrupted or error-free operation of the platform at
              all times.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 text-sm">
              Artify shall not be held liable for any direct, indirect,
              or incidental damages resulting from the use or inability
              to use the platform.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Changes to Terms
            </h2>
            <p className="text-gray-600 text-sm">
              We reserve the right to modify these Terms & Conditions at
              any time. Changes will be effective immediately upon
              posting on this page.
            </p>
          </div>

          {/* Footer Note */}
          <div className="pt-4 border-t text-sm text-gray-500">
            Last updated: {new Date().toLocaleDateString()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
