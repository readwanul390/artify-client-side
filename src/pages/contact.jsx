import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c4ehxpb",   // EmailJS service ID
        "template_4ash6ok",  // EmailJS template ID
        e.target,
        "N0CkI0IM58gNxVs24"     // EmailJS public key
      )
      .then(
        () => {
          Swal.fire("Success", "Message sent successfully!", "success");
          e.target.reset();
        },
        () => {
          Swal.fire("Error", "Failed to send message", "error");
        }
      );
  };

  return (
    <div className="bg-base-200 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-4xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-gray-600 mb-6">
              Send a message and I will reply via email.
            </p>
            <p className="text-sm text-gray-500">
              Messages go directly to my Gmail inbox.
            </p>
          </div>

          <div className="bg-base-100 shadow-xl rounded-2xl p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="from_name" required placeholder="Your Name" className="input input-bordered w-full" />
              <input name="reply_to" type="email" required placeholder="Your Email" className="input input-bordered w-full" />
              <input name="subject" required placeholder="Subject" className="input input-bordered w-full" />
              <textarea name="message" rows="4" required placeholder="Message" className="textarea textarea-bordered w-full"></textarea>

              <button type="submit" className="btn btn-primary w-full flex gap-2">
                <FaPaperPlane /> Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
