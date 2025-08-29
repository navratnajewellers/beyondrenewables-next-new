"use client";

import { Breadcrumb } from "rsuite";
import ScrollPage from "../components/ScrollPage";
import WbHeader from "../components/WbHeader";
import WbFooter from "../components/WbFooter";
import { useEffect } from "react";
// import { useServerLink } from "../context/server.context";

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div>
        <ScrollPage />
      </div>
      <div className="absolute w-full z-10">
        <WbHeader />
      </div>

      <div className="breadcumb-container">
        <div className="bc-header">
          <h1>Privacy Policy</h1>
        </div>
        <Breadcrumb className="bc-content">
          <Breadcrumb.Item href="/" className="bc-non-active">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item active className="bc-active">
            Privacy Policy
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* Privacy Policy Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 leading-relaxed text-justify space-y-6">
        <p>
          <strong>BEYOND RENEWABLES & RECYCLING PRIVATE LIMITED</strong> having
          its registered office at Shop no. 04, Gayatri Aura, Gh-11, Sector-1,
          I.A. Surajpur, Gautam Buddha Nagar, Noida, Uttar Pradesh – 201306,
          India, its affiliates and subsidiaries (“our”, “we”, and “us”) respect
          the privacy of a natural person (“user”, “you”, “your”), and are
          committed to protecting it in accordance with the terms of this
          privacy policy (“Policy”) when you access, browse or use our website
          available at{" "}
          <a
            href="https://www.beyondrenewables.in/"
            className="text-orange-600 underline"
          >
            https://www.beyondrenewables.in/
          </a>{" "}
          (“Platform”) in relation to the features, products or services offered
          on the Platform (“Services”).
        </p>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">General</h2>
        <p>
          This Policy, together with the terms of use (available here:{" "}
          <a
            href="https://www.beyondrenewables.in/privacy-policy/"
            className="text-orange-600 underline"
          >
            https://www.beyondrenewables.in/privacy-policy/
          </a>
          ) govern your use of our Platform and/ or Services; describes the
          types of information we may collect from you or that you may provide
          to us when you use our Platform and/ or Services and our associated
          services, and lays down our practices and purposes for collecting,
          receiving, processing, storing, dealing, using, maintaining,
          transferring, and disclosing such information.
        </p>

        <p>This Policy applies to information we collect or receive:</p>
        <ul className="list-disc pl-8 space-y-2">
          <li>On our Platform;</li>
          <li>
            Via e-mail and other electronic communication between you and us; or
          </li>
          <li>When you use the Services.</li>
        </ul>

        <p>This Policy does not apply to information collected by:</p>
        <ul className="list-disc pl-8 space-y-2">
          <li>us in physical form and not in a computer resource; or</li>
          <li>
            any third party, including through any website, application or
            content (including advertising) that may link to or be accessible
            from our Platform.
          </li>
        </ul>

        <p>
          Please read this Policy carefully to understand our policies and
          practices regarding your information collected, stored and handled by
          us and how we will treat it. By accessing our Platform, and/or by
          using the Services, you agree to and accept the practices described in
          this Policy. If you do not agree with the terms of this Policy, please
          do not access the Platform and/or Services.
        </p>

        <p>
          You agree that the Information (defined below) provided to us by you
          has been received or collected by lawful means with your consent and
          does not constitute a violation of data protection laws of India. You
          agree and acknowledge that you shall be solely liable if you violate
          any provision or term of this Policy. We, our employees, agents,
          directors, partners and officers will not be liable for any loss or
          direct or indirect damage arising from your failure to comply with
          this Policy. You agree and understand that you may be held liable for
          any losses incurred to us or our business partners or our customers or
          any other individual due to your violation of this Policy or any
          unauthorized use of the Platform and/ or Services by you. We reserve
          the right to refuse access to the Platform and/ or Services, remove or
          edit content at any time without notice to you if you violate the
          terms of this Policy.
        </p>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          Access of Platform to Minors
        </h2>
        <p>
          The Platform and/or Services are not directed at or intended for
          minors and children under the age of 18 years. You affirm that you are
          18 years of age or above and are fully competent to understand this
          Policy and abide by the terms of this Policy. In case you are below 18
          years of age, you may access and use the Platform only if enabled by a
          parent or legal guardian.
        </p>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          Information We Collect and Store About You
        </h2>
        <p>
          We may collect or receive Personal Information (defined below) and
          sensitive personal data or information (“SPDI”) (Personal Information
          and SPDI are collectively referred as, “Information”) voluntarily
          given by you with your consent when you access the Platform and/or use
          Services. For the purposes of this Policy, “Personal Information”
          means the information (whether individually or in combination with
          other information available or likely to be available with us) that
          identifies, relates to, describes, is reasonably capable of being
          associated with, or could reasonably be linked, directly or
          indirectly, to a natural person. We may combine non-personal
          information with Personal Information, and in those circumstances, we
          will treat the combined information as Personal Information. We may
          collect or receive several types of Personal Information from and
          about you when you use our Platform or Services including the
          following information:
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>First and last name,</li>
          <li>Postal address,</li>
          <li>Email address,</li>
          <li>Phone number,</li>
          <li>Gender,</li>
          <li>Nationality,</li>
          <li>
            Internet/network information, such as device name, device ID,
            browsing history, browser type, interaction with Platform, or
          </li>
          <li>
            Inquiry information, such as your questions/feedback to us or survey
            responses.
          </li>
        </ul>

        <p>
          We may also collect, receive, process or store certain SPDI consisting
          of, but not limited to:
        </p>

        <ul className="list-disc pl-8 space-y-2">
          <li>Password,</li>
          <li>
            Financial information such as bank account or credit card or debit
            card or other payment instrument details,
          </li>
          <li>Biometric information,</li>
          <li>Sexual orientation,</li>
          <li>Physical, physiological and mental health condition, or</li>
          <li>Medical records and history.</li>
        </ul>

        {/* 4. How We Collect Your Information */}
        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          How We Collect Your Information
        </h2>
        <p>
          We collect your Information from various sources that may include, for
          example, the following:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>
            <strong>You.</strong> Information you provide directly when you use
            or otherwise interact with the Platform and/or Services.
          </li>
          <li>
            <strong>Your Browser or Device.</strong> Information collected
            automatically as a result of your interaction with the Platform and
            your use of Services. The information that we automatically collect,
            include your IP address, geolocation information (which may include
            specific longitude and latitude), time zone, usage times and volume,
            and information about the device you are using (for example, device
            type, device ID, characteristics and status, browser type, operating
            system and application version and information about how our
            Platform is used), language preference, URL click stream, or
            information that we collect through our marketing activities. We
            also use cookies including browser cookies. A cookie is a small file
            placed on the hard drive of your computer. You may refuse to accept
            browser cookies by activating the appropriate setting on your
            browser. However, if you select this setting you may be unable to
            access certain parts of our Platform. Unless, you have adjusted your
            browser setting so that it will refuse cookies, our system will
            issue cookies when you direct your browser to our Platform.
          </li>
          <li>
            <strong>Third Parties.</strong> Information we collect about you
            from third parties or from our service providers and partners.
          </li>
        </ul>

        {/* 5. How We Use Your Information */}
        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          How We Use Your Information
        </h2>
        <p>
          We use the Information that we collect about you or that you provide
          to us in the following manner:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>To provide you with access to Services and our Platform.</li>
          <li>
            To provide you with information, products or services that you
            request from us from time to time.
          </li>
          <li>
            To notify you about changes to our Platform, or Services, or any
            additional services that we offer or provide though it.
          </li>
          <li>To improve your experience.</li>
          <li>
            For internal recordkeeping and analytical purposes including data
            analysis, auditing and research.
          </li>
          <li>
            To detect, monitor, investigate, deter, and protect against
            fraudulent, unauthorized or illegal activity.
          </li>
          <li>
            To inform you about promotions, events, updates, offers and news
            related to the Platform or Services.
          </li>
          <li>
            To fulfil any other purpose for which you provide your Information.
          </li>
          <li>
            To comply with any legal or regulatory requirement or comply with a
            request from any governmental or judicial authority.
          </li>
          <li>
            To provide customer support service or resolve any request, dispute,
            grievance or complaint raised by you in relation to your use of the
            Platform or Services
          </li>
        </ul>

        {/* 6. Disclosure of Your Information */}
        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          Disclosure of Your Information
        </h2>
        <p>
          We may from time to time, disclose Information about you in anonymous
          form, non-personal information or information that does not identify
          you or any individual with any third party, service providers, our
          affiliates for, inter alia, commercial, research, statistical analysis
          and business intelligence purposes. You agree and understand that such
          anonymous data is owned by us and we may, in our sole and absolute
          discretion, sell or otherwise transfer such research, statistical or
          intelligence data in an anonymous or non-personally identifiable form
          to third parties and affiliates which may include our advertisers,
          sponsors, investors, strategic partners, in order to help grow our
          business.
        </p>
        <p>
          By using, accessing or browsing our Platform and/or Services, you
          consent to the disclosure of your Information by us, in accordance
          with the terms of this Policy. We may disclose Information that we
          collect, receive or you provide as described in this Policy in the
          following manner:
        </p>
        <ul className="list-disc pl-8 space-y-2">
          <li>To our employees on a need-to-know basis.</li>
          <li>To our subsidiaries and affiliates on a need-to-know basis.</li>
          <li>
            To our contractors, service providers and other third parties, such
            as our payment processing partners who we use to support our
            Platform and/or Services. We ensure that such third parties and
            service providers bound by contractual obligations to keep your
            Information confidential and use it only for the purposes for which
            we disclose it to them.
          </li>
          <li>
            To a buyer or successor in the event of a merger, divestiture,
            restructuring, reorganization, dissolution or other sale or transfer
            of some or all of our assets, whether as a going concern or as part
            of bankruptcy, liquidation or similar proceeding, in which
            information held by us about the Platform and/or Services, including
            Information of our customers and authorized users are among the
            assets transferred.
          </li>
          <li>
            For any other purpose disclosed by us when you provide the
            Information.
          </li>
          <li>
            To comply with any court order, law or legal process, including
            responding to any government or regulatory request or authorized
            agency.
          </li>
          <li>
            To enforce or apply other agreements, including for billing and
            collection purposes.
          </li>
          <li>
            If we believe disclosure is necessary or appropriate to protect our
            rights, property, or safety, or the rights, property, or safety of
            our customers or any third party.
          </li>
        </ul>

        {/* 7. Choices About How We Use and Disclose Your Information */}
        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          Choices About How We Use and Disclose Your Information
        </h2>
        <p>
          We strive to provide you with choices regarding the Information you
          provide to us. We have created mechanisms to provide you with the
          following control over your Information:
        </p>
        <p>
          <strong>Review of Information:</strong> You may at any time request
          our grievance officer in terms of Clause 12 below to review the
          Information that you have provided to us, and we will ensure that such
          Information, if found to be inaccurate or deficient, shall be
          corrected or amended, as feasible. However, we will not be responsible
          for the authenticity of the Information provided by you to us.
        </p>
        <p>
          <strong>Withdrawing Consent:</strong> You may at any-time withdraw
          your consent for collection and use of your Information. However,
          please note that if you withdraw your consent, we may no longer be
          able to provide you with the corresponding service for which you have
          withdrawn your consent. It is hereby clarified that your decision to
          withdraw your consent will not affect the processing of the
          Information based on your previous consent prior to the withdrawal and
          a separate request for removal will be required in such cases. If you
          wish to withdraw your consent under this Policy or remove your
          Information possessed or stored by us, you can contact our grievance
          officer in terms of Clause 12 below. We reserve the right to limit
          access to our Platform and/or Services based on such request. You will
          be notified by us prior to any actions taken in this regard.
        </p>
        <p>
          <strong>Transfer of Your Information to Third-Party:</strong> We do
          not sell, trade, or otherwise transfer your Information unless we seek
          your prior consent. However, this does not include Platform hosting
          partners, service providers and other third parties who assist us in
          operating our Platform, conducting our business, or providing us
          services in relation to Services, whether located within India or
          abroad, subject to such entities agreeing to keep your Information
          confidential and ensuring the same level of data protection that is
          adhered to by us under this Policy and as per applicable law. By using
          our Platform and/or Services, you consent to such transfer of
          Information to inter alia Platform hosting partners, service providers
          and other third parties. You agree and understand that we do not
          control third parties’ collection or use of your Information to serve
          interest-based advertising. You shall not hold us liable for any
          collection or use of your Information by such third parties to serve
          internet-based advertisements or for other purposes.
        </p>

        {/* 8. Third Party Links on Our Platform */}
        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          Third Party Links on Our Platform
        </h2>
        <p>
          The Platform and/or Services may contain links to other third-party
          websites for your convenience. You agree and understand that we do not
          exercise control over third party websites displayed as search results
          or links on the Platform and/or Services. These other sites may place
          their own cookies or other files on your computer, collect data or
          solicit Information from you, on which we have no control and shall
          not be held responsible or liable. We do not make any representations
          concerning the privacy practices or policies of such third parties or
          terms of use of such websites, nor do we guarantee the accuracy,
          integrity, or quality of the information, data, text, software, sound,
          photographs, graphics, videos, messages or other materials available
          on such websites.
        </p>
        <p>
          You agree and understand the inclusion or exclusion of such
          third-party links does not imply any endorsement by us of such
          websites, the websites’ provider, or the information on the website.
          Once you leave the Platform and/or Services or are redirected to a
          third-party website, application, or other online service, we
          encourage you to read the privacy policy applicable to that third
          party.
        </p>

        {/* 9. Data Processing and Security */}
        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          Data Processing and Security
        </h2>
        <p>
          Security of your Information is of utmost importance for us. We have
          adopted security measures that are in line with the industry standards
          and applicable law to protect the Information that you provide to us,
          and to prevent unauthorized access, public disclosure, use,
          modification, damage or loss such Information. We take all reasonable
          and practical steps to protect your Information and actively pass
          relevant security and privacy protection certifications.
        </p>
        <p>
          The safety and security of your Information also depends on you. In
          the event we are made aware of any unauthorised or illegal use of the
          Platform and/or Services or breach of this Policy, you shall fully
          cooperate with us to investigate and remedy such use or breach, as
          applicable.
        </p>
        <p>
          Although we make best possible efforts to transmit and store all the
          Information provided by you by encrypting data in transit or in a
          secure operating environment that is not open to public, you
          understand and acknowledge that there is no such thing as complete
          security and we do not guarantee that there will be no unintended
          disclosures of any information and potential security breaches. You
          agree not to hold us responsible for any breach of security or for any
          action of any third parties that receive your Information or events
          that are beyond our reasonable control including, acts of government,
          computer hacking, unauthorized access to computer data and storage
          device, computer crashes, breach of security and encryption, etc. Any
          transmission of Information is at your own risk. We are not
          responsible for circumvention of any privacy settings or security
          measures contained on our Platform or Services.
        </p>

        {/* 10. Changes to Our Privacy Policy */}
        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          Changes to Our Privacy Policy
        </h2>
        <p>
          We may need to modify the terms of this Policy from time to time and
          we encourage you to review this Policy regularly. Any changes or
          modifications will be effective immediately upon posting the revisions
          on the Platform and you will be bound by such revised/ modified terms
          of the Policy. We will also indicate at the top of this page when this
          Policy was last updated. Your continued use of the Platform or
          Services means that you accept all modified terms of the Policy and
          consent to the use of your Information in accordance with such updated
          Policy.
        </p>

        {/* 11.	Retention of Information */}
        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          Retention of Information
        </h2>
        <p>
          We will retain your Information and any data for the period necessary
          to fulfil the purposes outlined in this Policy unless a longer
          retention period is required or permitted under the applicable law.
        </p>

        <h2 className="!text-xl font-semibold !mt-8 !mb-2">
          Grievance Redressal
        </h2>
        <p>
          In case, you have any questions, grievance or complaints about this
          Policy, or the Platform, you may contact our grievance officer on the
          below mentioned details:
        </p>
        <p>
          <strong>Name:</strong> Vedant Taneja <br />
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
          We will try to resolve your complaint/ request expeditiously and get
          back to you within 1 (One) month. However, this is also subject to us
          receiving all pertinent information/ documents from you in a timely
          manner.
        </p>

        <p>
          <strong>Last Updated: 28th August 2025</strong>
        </p>
      </div>

      <div>
        <WbFooter />
      </div>
    </div>
  );
}
