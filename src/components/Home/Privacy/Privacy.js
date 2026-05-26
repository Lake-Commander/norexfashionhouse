import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="bg-base-200">
      <div className="bg-base-300 p-10">
        <h1 className="text-3xl text-center font-sans"> Privacy policy</h1>
        <p className="text-center mt-5 font-sans ">
          <span className="hover:text-primary"><Link to='/'>Home</Link></span>/ Privacy policy
        </p>
      </div>
      <div className="container mt-5">
        <h1 className="text-4xl font-sans"> Privacy policy</h1>
        <p className="mt-5">
          This Privacy Policy describes how shoping-mall-in-usa.myshopify.com
          (the “Site” or “we”) collects, uses, and discloses your Personal
          Information when you visit or make a purchase from the Site.
        </p>
        <h1 className="text-4xl font-sans mt-10">
          Collecting Personal Information
        </h1>
        <p>
          When you visit the Site, we collect certain information about your
          device, your interaction with the Site, and information necessary to
          process your purchases. We may also collect additional information if
          you contact us for customer support. In this Privacy Policy, we refer
          to any information that can uniquely identify an individual (including
          the information below) as “Personal Information”. See the list below
          for more information about what Personal Information we collect and
          why.
        </p>
        <h1 className="mt-10 text-1xl font-bold">Device information</h1>
        <li>
          Examples of Personal Information collected: version of web browser, IP
          address, time zone, cookie information, what sites or products you
          view, search terms, and how you interact with the Site.
        </li>
        <li>
          Purpose of collection: to load the Site accurately for you, and to
          perform analytics on Site usage to optimize our Site.
        </li>
        <li>
          Source of collection: Collected automatically when you access our Site
          using cookies, log files, web beacons, tags, or pixels [ADD OR
          SUBTRACT ANY OTHER TRACKING TECHNOLOGIES USED].
        </li>
        <li>
          Disclosure for a business purpose: shared with our processor Shopify
          [ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION].
        </li>
        <h1 className="mt-10 text-1xl font-bold">Order information</h1>
        <li>
          Examples of Personal Information collected: name, billing address,
          shipping address, payment information (including credit card numbers
          [INSERT ANY OTHER PAYMENT TYPES ACCEPTED]), email address, and phone
          number.
        </li>
        <li>
          Purpose of collection: to provide products or services to you to
          fulfill our contract, to process your payment information, arrange for
          shipping, and provide you with invoices and/or order confirmations,
          communicate with you, screen our orders for potential risk or fraud,
          and when in line with the preferences you have shared with us, provide
          you with information or advertising relating to our products or
          services.
        </li>
        <li>Source of collection: collected from you.</li>
        <li>
          Disclosure for a business purpose: shared with our processor Shopify
          [ADD ANY OTHER VENDORS WITH WHOM YOU SHARE THIS INFORMATION. FOR
          EXAMPLE, SALES CHANNELS, PAYMENT GATEWAYS, SHIPPING AND FULFILLMENT
          APPS].
        </li>
        <h1 className="mt-10 text-1xl font-bold">
          Customer support information
        </h1>
        <li>
          Examples of Personal Information collected: [MODIFICATIONS TO THE
          INFORMATION LISTED ABOVE OR ADDITIONAL INFORMATION AS NEEDED]
        </li>
        <li>Purpose of collection: to provide customer support.</li>
        <li>Source of collection: collected from you.</li>
        <li>
          Disclosure for a business purpose: [ADD ANY VENDORS USED TO PROVIDE
          CUSTOMER SUPPORT]
        </li>
        <p>
          [INSERT ANY OTHER INFORMATION YOU COLLECT: OFFLINE DATA, PURCHASED
          MARKETING DATA/LISTS]
        </p>
        <p className="mt-10">
          [INSERT FOLLOWING SECTION IF AGE RESTRICTION IS REQUIRED]
        </p>
        <h1 className="text-4xl font-sans mt-10">Minors</h1>
        <p>
          The Site is not intended for individuals under the age of [INSERT
          AGE]. We do not intentionally collect Personal Information from
          children. If you are the parent or guardian and believe your child has
          provided us with Personal Information, please contact us at the
          address below to request deletion.
        </p>
        <h1 className="text-4xl font-sans mt-10">
          Sharing Personal Information
        </h1>{" "}
        <br />
        <p>
          We share your Personal Information with service providers to help us
          provide our services and fulfill our contracts with you, as described
          above. For example:
        </p>
        <li>
          We use Shopify to power our online store. You can read more about how
          Shopify uses your Personal Information here:{" "}
          <b>https://www.shopify.com/legal/privacy</b>.
        </li>
        <li>
          We may share your Personal Information to comply with applicable laws
          and regulations, to respond to a subpoena, search warrant or other
          lawful request for information we receive, or to otherwise protect our
          rights.
        </li>
        <li>[INSERT INFORMATION ABOUT OTHER SERVICE PROVIDERS]</li>
        <p>
          [INCLUDE FOLLOWING SECTION IF USING REMARKETING OR TARGETED
          ADVERTISING]
        </p>
        <h1 className="text-4xl font-sans mt-10">Behavioural Advertising</h1>{" "}
        <br />
        <p>
          As described above, we use your Personal Information to provide you
          with targeted advertisements or marketing communications we believe
          may be of interest to you. For example:
        </p>
        <li>
          [INSERT IF APPLICABLE] We use Google Analytics to help us understand
          how our customers use the Site. You can read more about how Google
          uses your Personal Information here:
          https://policies.google.com/privacy?hl=en.You can also opt-out of
          Google Analytics here: https://tools.google.com/dlpage/gaoptout.
        </li>
        <li>
          [INSERT IF YOU USE A THIRD PARTY MARKETING APP THAT COLLECTS
          INFORMATION ABOUT BUYER ACTIVITY ON YOUR SITE] We share information
          about your use of the Site, your purchases, and your interaction with
          our ads on other websites with our advertising partners. We collect
          and share some of this information directly with our advertising
          partners, and in some cases through the use of cookies or other
          similar technologies (which you may consent to, depending on your
          location).
        </li>
        <li>[INSERT OTHER ADVERTISING SERVICES USED]</li>
        <p className="mt-5">
          For more information about how targeted advertising works, you can
          visit the Network Advertising Initiative’s (“NAI”) educational page at{" "}
          <span className="hover:text-primary">
            http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
          </span>
          .
        </p>
        <p className="mt-5">You can opt out of targeted advertising by:</p>
        <p className="mt-5">
          [INCLUDE OPT-OUT LINKS FROM WHICHEVER SERVICES BEING USED. COMMON
          LINKS INCLUDE:
        </p>{" "}
        <br />
        <li>
          FACEBOOK -{" "}
          <span className="hover:text-primary">
            https://www.facebook.com/settings/?tab=ads
          </span>
        </li>
        <li>
          GOOGLE -{" "}
          <span className="hover:text-primary">
            https://www.google.com/settings/ads/anonymous
          </span>
        </li>
        <li>
          BING -{" "}
          <span className="hover:text-primary">
            https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads]
          </span>
        </li>{" "}
        <br />
        <p>
          Additionally, you can opt out of some of these services by visiting
          the Digital Advertising Alliance’s opt-out portal at:{" "}
          <span className="hover:text-primary">
            http://optout.aboutads.info/
          </span>
          .
        </p>
        <h1 className="text-4xl font-sans mt-10">Using Personal Information</h1>{" "}
        <br />
        <p>
          We use your personal Information to provide our services to you, which
          includes: offering products for sale, processing payments, shipping
          and fulfillment of your order, and keeping you up to date on new
          products, services, and offers.
        </p>{" "}
        <br />
        <em>
          [INCLUDE THE FOLLOWING SECTION IF YOUR STORE IS LOCATED IN OR IF YOU
          HAVE CUSTOMERS IN EUROPE]
        </em>
        <h1 className="text-4xl font-sans mt-10">Lawful basis</h1> <br />
        <p>
          Pursuant to the General Data Protection Regulation (“GDPR”), if you
          are a resident of the European Economic Area (“EEA”), we process your
          personal information under the following lawful bases:
        </p>{" "}
        <br />
        <em>[INCLUDE ALL THAT APPLY TO YOUR BUSINESS]</em> <br />
        <li>Your consent;</li>
        <li>The performance of the contract between you and the Site;</li>
        <li>Compliance with our legal obligations;</li>
        <li>To protect your vital interests;</li>
        <li>To perform a task carried out in the public interest;</li>
        <li>
          For our legitimate interests, which do not override your fundamental
          rights and freedoms.
        </li>
        <h1 className="text-4xl font-sans mt-10">Retention</h1> <br />
        <p>
          When you place an order through the Site, we will retain your Personal
          Information for our records unless and until you ask us to erase this
          information. For more information on your right of erasure, please see
          the ‘Your rights’ section below.
        </p>
        <h1 className="text-4xl font-sans mt-10">Automatic decision-making</h1>{" "}
        <br />
        <p>
          If you are a resident of the EEA, you have the right to object to
          processing based solely on automated decision-making (which includes
          profiling), when that decision-making has a legal effect on you or
          otherwise significantly affects you.
        </p>
        <p className="mt-5">
          We [DO/DO NOT] engage in fully automated decision-making that has a
          legal or otherwise significant effect using customer data. <br />{" "}
          <br />
          Our processor Shopify uses limited automated decision-making to
          prevent fraud that does not have a legal or otherwise significant
          effect on you. <br /> <br /> Services that include elements of
          automated decision-making include:
        </p>
        <li>
          Temporary denylist of IP addresses associated with repeated failed
          transactions. This denylist persists for a small number of hours.
        </li>
        <li>
          Temporary denylist of credit cards associated with denylisted IP
          addresses. This denylist persists for a small number of days.
        </li>{" "}
        <br />
        <em>
          [INCLUDE THE FOLLOWING SECTION ONLY IF YOU SELL PERSONAL INFORMATION,
          AS DEFINED BY THE CALIFORNIA CONSUMER PRIVACY ACT]
        </em>
        <h1 className="text-4xl font-sans mt-10">
          Selling Personal Information
        </h1>{" "}
        <br />
        <p>
          Our Site sells Personal Information, as defined by the California
          Consumer Privacy Act of 2018 (“CCPA”).
        </p>{" "}
        <br />
        <em>[INSERT:</em>
        <li>CATEGORIES OF INFORMATION SOLD;</li>
        <li>INSTRUCTIONS ON HOW TO OPT-OUT OF SALE;</li>
        <li>
          WHETHER YOUR BUSINESS SELLS INFORMATION OF MINORS (UNDER 16) AND
          WHETHER YOU OBTAIN AFFIRMATIVE AUTHORIZATION;
        </li>
        <li>
          IF YOU PROVIDE A FINANCIAL INCENTIVE TO NOT SELL INFORMATION, PROVIDE
          INFORMATION ABOUT WHAT THAT INCENTIVE IS.]
        </li>
        <h1 className="text-4xl font-sans mt-10">Your rights</h1> <br />
        <em>
          [INCLUDE FOLLOWING SECTION IF YOUR STORE IS LOCATED IN OR IF YOU HAVE
          CUSTOMERS IN EUROPE]
        </em>
        <h1 className="text-4xl font-sans mt-10">GDPR</h1> <br />
        <p>
          If you are a resident of the EEA, you have the right to access the
          Personal Information we hold about you, to port it to a new service,
          and to ask that your Personal Information be corrected, updated, or
          erased. If you would like to exercise these rights, please contact us
          through the contact information below [OR INSERT ALTERNATIVE
          INSTRUCTIONS FOR SENDING ACCESS, ERASURE, CORRECTION, AND PORTABILITY
          REQUESTS].
        </p>{" "}
        <br /> <br />
        <p>
          Your Personal Information will be initially processed in Ireland and
          then will be transferred outside of Europe for storage and further
          processing, including to Canada and the United States. For more
          information on how data transfers comply with the GDPR, see Shopify’s
          GDPR Whitepaper:{" "}
          <span className="hover:text-primary">
            {" "}
            https://help.shopify.com/en/manual/your-account/privacy/GDPR
          </span>{" "}
          .
        </p>{" "}
        <br />
        <em>
          [INCLUDE FOLLOWING SECTION IF YOUR BUSINESS IS SUBJECT TO THE
          CALIFORNIA CONSUMER PRIVACY ACT]
        </em>
        <h1 className="text-4xl font-sans mt-10">CCPA</h1> <br />
        <p>
          If you are a resident of California, you have the right to access the
          Personal Information we hold about you (also known as the ‘Right to
          Know’), to port it to a new service, and to ask that your Personal
          Information be corrected, updated, or erased. If you would like to
          exercise these rights, please contact us through the contact
          information below [OR INSERT ALTERNATIVE
        </p>
        <em>
          INSTRUCTIONS FOR SENDING ACCESS, ERASURE, CORRECTION, AND PORTABILITY
          REQUESTS].
        </em>{" "}
        <br /> <br />
        <p>
          If you would like to designate an authorized agent to submit these
          requests on your behalf, please contact us at the address below.
        </p>
        <h1 className="text-4xl font-sans mt-10">Cookies</h1> <br />
        <p>
          A cookie is a small amount of information that’s downloaded to your
          computer or device when you visit our Site. We use a number of
          different cookies, including functional, performance, advertising, and
          social media or content cookies. Cookies make your browsing experience
          better by allowing the website to remember your actions and
          preferences (such as login and region selection). This means you don’t
          have to re-enter this information each time you return to the site or
          browse from one page to another. Cookies also provide information on
          how people use the website, for instance whether it’s their first time
          visiting or if they are a frequent visitor. <br /> <br /> We use the
          following cookies to optimize your experience on our Site and to
          provide our services.
        </p>
        <h1 className="text-4xl font-sans mt-10">
          Cookies Necessary for the Functioning of the Store
        </h1>{" "}
        <br />
        <div class=" ml-52 ">
          <table class="table w-full ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ab</td>
                <td>Used in connection with access to admin.</td>
              </tr>

              <tr>
                <td>_secure_session_id</td>
                <td>Used in connection with navigation through a storefront.</td>
              </tr>

              <tr>
                <td>cart</td>
                <td>Used in connection with shopping cart.</td>
              </tr>
              <tr>
                <td>cart_sig</td>
                <td>Used in connection with checkout.</td>
              </tr>
              <tr>
                <td>cart_ts</td>
                <td>Used in connection with checkout.</td>
              </tr>
              <tr>
                <td>checkout_token</td>
                <td>Used in connection with checkout.</td>
              </tr>
              <tr>
                <td>secret</td>
                <td>Used in connection with checkout.</td>
              </tr>
              <tr>
                <td>secure_customer_sig</td>
                <td>Used in connection with customer login.</td>
              </tr>
              <tr>
                <td>storefront_digest</td>
                <td>Used in connection with customer login.</td>
              </tr>
              <tr>
                <td>_shopify_u</td>
                <td>Used to facilitate updating customer account information.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <h1 className="text-4xl font-sans mt-10">Reporting and Analytics</h1>{" "}
        <br />
        <div class=" ml-52 ">
          <table class="table w-full ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Function</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>_ab</td>
                <td>Used in connection with access to admin.</td>
              </tr>

              <tr>
                <td>_secure_session_id</td>
                <td>Used in connection with navigation through a storefront.</td>
              </tr>

              <tr>
                <td>cart</td>
                <td>Used in connection with shopping cart.</td>
              </tr>
              <tr>
                <td>cart_sig</td>
                <td>Used in connection with checkout.</td>
              </tr>
              <tr>
                <td>cart_ts</td>
                <td>Used in connection with checkout.</td>
              </tr>
              <tr>
                <td>checkout_token</td>
                <td>Used in connection with checkout.</td>
              </tr>
              <tr>
                <td>secret</td>
                <td>Used in connection with checkout.</td>
              </tr>
              <tr>
                <td>secure_customer_sig</td>
                <td>Used in connection with customer login.</td>
              </tr>
              <tr>
                <td>storefront_digest</td>
                <td>Used in connection with customer login.</td>
              </tr>
              <tr>
                <td>_shopify_u</td>
                <td>Used to facilitate updating customer account information.</td>
              </tr>
            </tbody>
          </table>
          </div> <br /> <br />
          <em>[INSERT OTHER COOKIES OR TRACKING TECHNOLOGIES THAT YOU USE]</em> <br />
          <p>The length of time that a cookie remains on your computer or mobile device depends on whether it is a “persistent” or “session” cookie. Session cookies last until you stop browsing and persistent cookies last until they expire or are deleted. Most of the cookies we use are persistent and will expire between 30 minutes and two years from the date they are downloaded to your device. <br /> <br /> You can control and manage cookies in various ways. Please keep in mind that removing or blocking cookies can negatively impact your user experience and parts of our website may no longer be fully accessible. <br /> <br />
          Most browsers automatically accept cookies, but you can choose whether or not to accept cookies through your browser controls, often found in your browser’s “Tools” or “Preferences” menu. For more information on how to modify your browser settings or how to block, manage or filter cookies can be found in your browser’s help file or through such sites as <b  className="hover:text-primary cursor-pointer">www.allaboutcookies.org</b> . <br /> <br />Additionally, please note that blocking cookies may not completely prevent how we share information with third parties such as our advertising partners. To exercise your rights or opt-out of certain uses of your information by these parties, please follow the instructions in the “Behavioural Advertising” section above.</p>
        
        <h1 className="text-4xl font-sans mt-10">Do Not Track</h1> <br />
        <p>
          Please note that because there is no consistent industry understanding
          of how to respond to “Do Not Track” signals, we do not alter our data
          collection and usage practices when we detect such a signal from your
          browser.
        </p>
        <h1 className="text-4xl font-sans mt-10">Changes</h1> <br />
        <p>
          We may update this Privacy Policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal, or regulatory reasons.
        </p>
        <h1 className="text-4xl font-sans mt-10">Contact</h1> <br />
        <p>
          For more information about our privacy practices, if you have
          questions, or if you would like to make a complaint, please contact us
          by e-mail at [email address] or by mail using the details provided
          below: <br /> <br />
          Shoping Mall In USA, Ashulia, Savar, Dhaka, Dhaka 1344, Bangladesh
        </p>{" "}
        <br /> <br />
        <em>Last updated: [DATE]</em>
        <p className="pb-20">
          If you are not satisfied with our response to your complaint, you have
          the right to lodge your complaint with the relevant data protection
          authority. You can contact your local data protection authority, or
          our supervisory authority here: [ADD CONTACT INFORMATION OR WEBSITE
          FOR THE DATA PROTECTION AUTHORITY IN YOUR JURISDICTION. FOR EXAMPLE:{" "}
          <span className="hover:text-primary">
            https://ico.org.uk/make-a-complaint/
          </span>{" "}
          ]
        </p>
      </div>
    </div>
  );
};

export default Privacy;
