"use client";
import { useRouter } from "next/navigation";

export default function LeadForm({ onSuccess }) {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/thank-you");
  };

  return (
    <form className="qe-form" onSubmit={handleSubmit}>

      {/* Row 1 — Name | Company Name */}
      <div className="qe-row">
        <div className="qe-field">
          <input type="text" placeholder="Name" required />
        </div>
        <div className="qe-field">
          <input type="text" placeholder="Company Name" required />
        </div>
      </div>

      {/* Row 2 — Mobile | Email */}
      <div className="qe-row">
        <div className="qe-field">
          <input type="tel" placeholder="Mobile Number" required />
        </div>
        <div className="qe-field">
          <input type="email" placeholder="Official Email" required />
        </div>
      </div>

      {/* Row 3 — Project Location */}
      <div className="qe-field qe-field--full">
        <input type="text" placeholder="Project Location" required />
      </div>

      {/* Row 4 — Project Area */}
      <div className="qe-field qe-field--full">
        <input type="text" placeholder="Approximate Project Area" />
      </div>

      {/* Row 5 — Brief Requirement */}
      <div className="qe-field qe-field--full">
        <textarea placeholder="Brief Project Requirement" rows={4} />
      </div>

      {/* Submit */}
      <button type="submit" className="qe-submit">
        DISCUSS MY PROJECT
      </button>

    </form>
  );
}
