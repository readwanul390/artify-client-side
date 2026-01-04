import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const message = e.target.message.value;

    const mailtoLink = `mailto:abusaidhridoy5@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-base-200 min-h-screen flex items-center">
      <div className="max-w-5xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT INFO */}
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Get in <span className="text-primary">Touch</span>
            </h1>

            <p className="text-gray-600 mb-6">
              Have a question, feedback, or collaboration idea?
              Send me a message directly through this mailbox.
            </p>

            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-primary text-xl" />
              <span className="font-medium">
                abusaidhridoy5@gmail.com
              </span>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              I usually respond within 24 hours.
            </p>
          </div>

          {/* MAILBOX CARD */}
          <div className="bg-base-100 shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                type="text"
                required
                placeholder="Your Name"
                className="input input-bordered w-full"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Your Email"
                className="input input-bordered w-full"
              />

              <input
                name="subject"
                type="text"
                required
                placeholder="Subject"
                className="input input-bordered w-full"
              />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Write your message..."
                className="textarea textarea-bordered w-full"
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary w-full flex items-center gap-2"
              >
                <FaPaperPlane />
                Send Email
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
