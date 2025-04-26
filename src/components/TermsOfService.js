import React from 'react';
import '../styles/terms.css';

const TermsOfService = () => {
  return (
    <div className="terms-container">
      <h2 className="terms-title">Terms of Service</h2>
      <p className="terms-updated">Effective Date: April 2025</p>

      <section>
        <h3>1. Acceptance of Terms</h3>
        <p>
          By accessing or using our website and services, you agree to comply with and be bound by these Terms of Service.
        </p>
      </section>

      <section>
        <h3>2. Service Description</h3>
        <p>
          We provide milk and dairy product delivery to subscribed users through our online platform.
        </p>
      </section>

      <section>
        <h3>3. User Responsibilities</h3>
        <p>
          You agree to provide accurate information, keep your account secure, and not misuse our platform.
        </p>
      </section>

      <section>
        <h3>4. Payments & Refunds</h3>
        <p>
          All payments are to be made online. Refunds are provided only under valid circumstances as per our refund policy.
        </p>
      </section>

      <section>
        <h3>5. Modifications to Service</h3>
        <p>
          We reserve the right to modify or discontinue the service at any time without prior notice.
        </p>
      </section>

      <section>
        <h3>6. Termination</h3>
        <p>
          We may suspend or terminate your account if you violate these terms or misuse our services.
        </p>
      </section>

      <section>
        <h3>7. Limitation of Liability</h3>
        <p>
          We are not liable for any indirect or consequential damages arising from your use of our services.
        </p>
      </section>

      <section>
        <h3>8. Governing Law</h3>
        <p>
          These terms are governed by the laws of India. Any disputes shall be resolved in the jurisdiction of Uttar Pradesh.
        </p>
      </section>

      <section>
        <h3>9. Contact</h3>
        <p>
          For questions regarding these Terms, contact us at: support@milksite.com
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
