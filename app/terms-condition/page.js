import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout headerStyle={4} footerStyle={1} breadcrumbTitle="TERMS & CONDITIONS">
        <div>
          <section className="terms-condition section-padding bg-pattern bg-black text-white">
            <div className="container">
              {/* <div className="section-title text-center">
                <div className="section-title__tagline-box">
                  <span className="section-title__tagline">Our Policies</span>
                </div>
                <h2 className="section-title__title">Terms & Conditions</h2>
              </div> */}
              <div className="row justify-content-center mt-5">
                <div className="col-xl-10">
                  <div className="terms-content p-5 rounded-xl shadow-xl bg-zinc-900 border border-neutral-700">
                    <p className="lead text-gray-300">
                      These Terms and Conditions ("Terms") govern your use of Vibe Event Management's website and services. By accessing or using our website, you agree to comply with and be bound by these Terms.
                    </p>

                    <div className="terms-block">
                      <h3 className="mt-6 text-white">1. Use of Services</h3>
                      <p className="text-gray-400">
                        You agree to use our services only for lawful purposes and in accordance with these Terms. You may not use our services to violate any applicable laws or regulations.
                      </p>
                    </div>

                    <div className="terms-block">
                      <h3 className="mt-6 text-white">2. Booking and Payments</h3>
                      <p className="text-gray-400">
                        All bookings are subject to availability and confirmation. A non-refundable deposit may be required to secure services. Full payment must be made before the event date unless otherwise agreed.
                      </p>
                    </div>

                    <div className="terms-block">
                      <h3 className="mt-6 text-white">3. Cancellation Policy</h3>
                      <p className="text-gray-400">
                        Cancellations must be submitted in writing. Depending on the timing, cancellation fees may apply. We reserve the right to cancel services due to unforeseen circumstances.
                      </p>
                    </div>

                    <div className="terms-block">
                      <h3 className="mt-6 text-white">4. Intellectual Property</h3>
                      <p className="text-gray-400">
                        All content on our website, including text, images, and logos, is the property of Vibe Event Management and may not be reproduced without prior written consent.
                      </p>
                    </div>

                    <div className="terms-block">
                      <h3 className="mt-6 text-white">5. Limitation of Liability</h3>
                      <p className="text-gray-400">
                        We are not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability is limited to the amount paid for the services rendered.
                      </p>
                    </div>

                    <div className="terms-block">
                      <h3 className="mt-6 text-white">6. Modifications</h3>
                      <p className="text-gray-400">
                        We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the website after any changes indicates acceptance of the new Terms.
                      </p>
                    </div>

                    <div className="terms-block">
                      <h3 className="mt-6 text-white">7. Contact Information</h3>
                      <p className="text-gray-400">
                        If you have any questions about these Terms, please contact us at <a href="mailto:info@vibeeventmanagement.com" className="text-primary underline">info@vibeeventmanagement.com</a>.
                      </p>
                    </div>

                    <div className="terms-back-link mt-10 text-center">
                      <Link href="/" className="thm-btn">
                        Back to Home <span className="icon-arrow-right"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
