export default function Process() {
  return (
    <section className="process" id="process">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">FROM CONCEPT TO COMPLETION.</p>
          <h2 className="section-title">Our Process</h2>
        </div>
      </div>
      <div className="process-steps" style={{ gridTemplateColumns: "repeat(5, 1fr)" }}>
        <div className="pstep">
          <div className="step-no">01</div>
          <h4>Understand</h4>
          <p>Project Brief &amp; Site Assessment</p>
        </div>
        <div className="pstep">
          <div className="step-no">02</div>
          <h4>Design</h4>
          <p>Design Development &amp; Cost Planning</p>
        </div>
        <div className="pstep">
          <div className="step-no">03</div>
          <h4>Engineer</h4>
          <p>Detailed Engineering &amp; Procurement</p>
        </div>
        <div className="pstep">
          <div className="step-no">04</div>
          <h4>Execute</h4>
          <p>Project Execution &amp; Management</p>
        </div>
        <div className="pstep">
          <div className="step-no">05</div>
          <h4>Deliver</h4>
          <p>Testing, Snag Closure &amp; Handover</p>
        </div>
      </div>
    </section>
  );
}
