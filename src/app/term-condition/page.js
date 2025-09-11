"use client";

import { Breadcrumb } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import WbFooter from "../components/WbFooter";
// import { useServerLink } from "../context/server.context";
import { useEffect } from "react";

export default function TermConditionPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []); // Runs only once when the component mounts

  return (
    <div>
      <div>
        <ScrollPage />
      </div>
      <div className=" absolute w-full z-10 ">
        <WbHeader />
      </div>
      <div className="breadcumb-container ">
        <div className=" bc-header ">
          <h1>Term & Condition</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href="/" className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Term & Condition
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* Terms & Conditions Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 leading-relaxed text-justify space-y-6">
        <p>
          These <strong>Terms of Use</strong> (“Terms”) govern your access to
          and use of{" "}
          <a
            href="https://www.beyondrenewables.in/"
            className="text-orange-600 underline"
          >
            www.beyondrenewables.in
          </a>
          , together with any associated apps, products, or services (“Platform”
          and “Services”) operated by{" "}
          <strong>BEYOND RENEWABLES & RECYCLING PRIVATE LIMITED</strong>{" "}
          (“Beyond Renewables”, “we”, “us”, or “our”). By accessing the
          Platform, you agree to these Terms. Please read them carefully.
        </p>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">1. Who We Are</h2>
        <p>
          Beyond Renewables & Recycling Pvt. Ltd. is an Indian company dedicated
          to advancing sustainability in renewables and recycling. Contact
          details and grievance officer information are found at the end of
          these Terms.
        </p>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          2. Account Creation and Access
        </h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            <strong>Minimum Age:</strong> You must be at least 18 years old, or
            the applicable age of majority, to use the Platform. Minors under 18
            may use the Platform only with involvement of a parent or legal
            guardian.
          </li>
          <li>
            <strong>Account Security:</strong> If the Services require account
            creation, you agree to provide accurate information, maintain
            security of your credentials, and inform us immediately of any
            unauthorized access.
          </li>
          <li>
            <strong>Business Domain Use:</strong> If accessing services for an
            organization, that entity may control your account and related
            content. You authorize such linkage as per organizational policies.
          </li>
        </ul>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          3. Use of Our Services
        </h2>
        <p>
          You may only use the Platform in compliance with these Terms, our
          Privacy Policy, and applicable law.
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            Do not use the Platform unlawfully, fraudulently, or for malicious
            purposes.
          </li>
          <li>
            Do not attempt to gain unauthorized access or introduce malware.
          </li>
          <li>
            Do not scrape, reverse engineer, or use automated means to access
            the Platform unless permitted.
          </li>
          <li>
            Do not infringe intellectual property, privacy, or other rights.
          </li>
          <li>
            Do not interfere with the experience, security, or safety of other
            users or our systems.
          </li>
        </ul>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          4. User Inputs and Content
        </h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>You are responsible for content submitted to the Platform.</li>
          <li>
            You warrant that you have rights to any information provided and
            that it does not violate law or third-party rights.
          </li>
          <li>
            By submitting feedback, inquiries, or content, you grant us a
            license to use it in connection with operation and improvement of
            Services.
          </li>
          <li>
            We may moderate, remove, or restrict content that violates these
            Terms or applicable law.
          </li>
        </ul>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">5. Privacy</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            By accessing the Platform, you consent to our collection,
            processing, and use of information as detailed in our Privacy
            Policy.
          </li>
          <li>
            Read our{" "}
            <a
              href="https://www.beyondrenewables.in/privacy-policy/"
              className="text-orange-600 underline"
            >
              Privacy Policy
            </a>{" "}
            for details regarding information handling, retention, and user
            rights.
          </li>
          <li>
            If you wish to review, amend, or delete personal data, contact our
            Grievance Officer.
          </li>
        </ul>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          6. Fees and Payment
        </h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            Some Services may require payment. All applicable fees and charges
            are described in the relevant purchase or subscription details.
          </li>
          <li>
            Payments are non-refundable except where required by law or
            described in supplemental terms.
          </li>
        </ul>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          7. Third-Party Services and Links
        </h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            The Platform may integrate with or refer to third-party sites or
            services. We do not control or endorse third-party content and
            disclaim liability for any loss that may result.
          </li>
          <li>
            Users are responsible for reviewing policies and terms applicable to
            third-party resources.
          </li>
        </ul>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          8. Intellectual Property
        </h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            All rights, title, and interest in the Platform, including content,
            trademarks, and underlying technology, belong to Beyond Renewables
            or our licensors and partners.
          </li>
          <li>
            No part of the Platform may be copied, reproduced, or used
            commercially without permission.
          </li>
        </ul>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          9. Disclaimer of Warranties & Limitation of Liability
        </h2>
        <p className=" uppercase ">
          YOUR USE OF THE PLATFORM AND SERVICES IS AT YOUR SOLE RISK. The
          Platform, Services, and content are provided “AS IS” and “AS
          AVAILABLE.” To the fullest extent permitted by law, we disclaim all
          warranties, express or implied, including merchantability, fitness for
          a particular purpose, and non-infringement.
        </p>
        <p className=" uppercase ">
          Beyond Renewables is not responsible for any indirect, incidental,
          special, consequential, or exemplary damages arising from your use of
          the Platform, even if advised of the possibility thereof.
        </p>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">10. Indemnity</h2>
        <p>
          You agree to indemnify and hold harmless Beyond Renewables, its
          affiliates, directors, employees, and agents from any claims, damages,
          liabilities, or expenses arising out of your breach of these Terms,
          your use of the Platform, or infringement of any rights.
        </p>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          11. Changes & Updates
        </h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            We may update these Terms at any time. Changes take effect upon
            posting to the Platform.
          </li>
          <li>
            Continued use of the Platform constitutes acceptance of updated
            Terms.
          </li>
        </ul>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">12. Termination</h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            Beyond Renewables reserves the right to suspend or terminate access
            to the Platform for breach of these Terms or as required by law.
          </li>
          <li>
            Upon termination, rights granted to you under these Terms will
            cease, and we may delete or retain your data as required by law or
            our Privacy Policy.
          </li>
        </ul>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          13. Governing Law & Dispute Resolution
        </h2>
        <ul className="list-disc pl-8 space-y-2">
          <li>These Terms are governed by the laws of India.</li>
          <li>
            Courts located at Gautam Buddha Nagar, Uttar Pradesh, India shall
            have exclusive jurisdiction over disputes.
          </li>
        </ul>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          14. Grievance Redressal
        </h2>
        <p>
          If you have questions, complaints, or wish to exercise rights under
          these Terms, contact:
        </p>
        <p>
          <strong>Grievance Officer:</strong> Vedant Taneja <br />
          <strong>Email Address:</strong>{" "}
          <a
            href="mailto:vedant@beyondrenewables.in"
            className="text-orange-600 underline"
          >
            vedant@beyondrenewables.in
          </a>{" "}
          <br />
          <strong>Contact Address:</strong> A-9, Rudraksh Green App Lalpur,
          Opposite Hotel Arya, Ranchi, Jharkhand – 834001, India
        </p>

        <p>
          <strong>Last Updated: 11th September 2025</strong>
        </p>
      </div>

      <div>
        <WbFooter />
      </div>
    </div>
  );
}
