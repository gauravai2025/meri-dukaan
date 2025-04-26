import React from 'react';
import '../styles/privacy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h2 className="privacy-title">Privacy Policy</h2>
      <p className="privacy-updated">Last updated: April 2025</p>

      <section>
        <h3>1. Information We Collect</h3>
        <p>
          We collect personal information such as your name, address, phone number, email, and payment details when you register or subscribe to our services.
        </p>
      </section>

      <section>
        <h3>2. How We Use Your Information</h3>
        <p>
          Your data is used to process orders, manage subscriptions, provide customer service, and improve our platform.
        </p>
      </section>

      <section>
        <h3>3. Cookies and Tracking</h3>
        <p>
          We use cookies to enhance your experience, remember preferences, and analyze traffic. You can disable cookies via your browser settings.
        </p>
      </section>

      <section>
        <h3>4. Data Sharing</h3>
        <p>
          We do not sell your data. We may share it with trusted third parties only to fulfill orders or provide essential services (e.g., payment gateways).
        </p>
      </section>

      <section>
        <h3>5. Your Rights</h3>
        <p>
          You can request to view, update, or delete your data by contacting us at support@milksite.com.
        </p>
      </section>

      <section>
        <h3>6. Changes to This Policy</h3>
        <p>
          We may update our privacy policy periodically. All updates will be posted on this page with the revision date.
        </p>
      </section>

      <section>
        <h3>7. Contact Us</h3>
        <p>
          If you have questions or concerns, please reach out to us at: privacy@milksite.com
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
