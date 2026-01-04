const Privacy = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-10 text-center max-w-3xl mx-auto">
          At <span className="font-semibold">Artify</span>, we respect your
          privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard
          your data.
        </p>

        <div className="space-y-8 bg-base-100 shadow rounded-xl p-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 text-sm">
              We collect basic information required for authentication and
              profile management, including your name, email address, and
              profile image. Artwork information is collected when you
              upload content to the platform.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>To authenticate users securely</li>
              <li>To display artist profiles and dashboards</li>
              <li>To manage artworks, likes, and favorites</li>
              <li>To improve user experience and platform features</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              3. Artwork Ownership
            </h2>
            <p className="text-gray-600 text-sm">
              All artworks uploaded to Artify remain the intellectual
              property of the respective artist. Artify does not claim
              ownership of any user-generated content.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Data Protection & Security
            </h2>
            <p className="text-gray-600 text-sm">
              We use secure authentication methods and industry-standard
              practices to protect your data. However, no online system
              can be completely secure, and users share information at
              their own risk.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Third-Party Services
            </h2>
            <p className="text-gray-600 text-sm">
              Artify may use third-party services such as authentication
              providers and hosting platforms. These services have their
              own privacy policies, and we encourage users to review them.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              6. User Responsibility
            </h2>
            <p className="text-gray-600 text-sm">
              Users are responsible for maintaining the confidentiality of
              their accounts and for all activities that occur under their
              accounts.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-xl font-semibold mb-2">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-600 text-sm">
              We may update this Privacy Policy from time to time. Any
              changes will be reflected on this page with an updated
              revision date.
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

export default Privacy;
