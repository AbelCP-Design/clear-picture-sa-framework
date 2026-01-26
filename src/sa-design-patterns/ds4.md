<!-- Header Card -->
<div style="border:1px solid #ddd;border-radius:10px;padding:30px 20px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);text-align:center;">
  <div style="max-width:700px;margin:0 auto;">
    <h1 style="margin-bottom:20px;">Embed Information in Context</h1>
    <p style="max-width:none;">
      Based on Endsley &amp; Jones’ <em>Designing for Situation Awareness: An Approach to User-Centered Design</em>,
      this pattern emphasizes <strong>embedding supporting information directly within the primary display</strong>,
      so critical relationships can be perceived immediately without mental reconstruction.
    </p>
    <p style="font-size: 0.85em; color: #777; margin: 0; padding-top: 30px; margin-bottom: 0px; line-height: 1.2;">
      Note:
    </p>
    <p style="font-size: 0.85em; color: #777; margin: 0; padding-top: 4px; margin-bottom: 1px; line-height: 1.2;">
      To view dashboard images in a larger format, right-click on the picture and select <em>"Open Image in New Tab."</em>
    </p>
  </div>
</div>

<!-- What This Pattern Is -->
<div style="border:1px solid #ddd;border-radius:10px;padding:25px 20px;margin:30px 0;background:#fafafa;box-shadow:0 1px 3px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3 style="margin-bottom:20px;">What This Pattern Is</h3>
    <p style="max-width:none;">
      This design pattern focuses on <strong>making context visible at the point of use</strong>.
      Instead of separating process data, events, and diagnostics into different views,
      supporting information is embedded directly into the primary visualization where decisions are made.
    </p>
    <ul style="max-width:none;">
      <li>Process states, events, or phases are shown <strong>in-line</strong> with time-series data.</li>
      <li>Diagnostic meaning (limits, violations, annotations) is displayed <strong>where the data occurs</strong>.</li>
      <li>Operators can immediately understand <strong>what happened, when it happened, and why it matters</strong>.</li>
    </ul>
  </div>
</div>

<!-- Benefits -->
<div style="border:1px solid #ddd;border-radius:10px;padding:30px 20px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3 style="margin-bottom:20px;">Benefits</h3>
    <ul style="max-width:none;">
      <li><strong>Reduces cognitive effort</strong> — operators no longer need to mentally align trends, events, and limits.</li>
      <li><strong>Improves comprehension</strong> — relationships between process behavior and system state are immediately visible.</li>
      <li><strong>Supports projection</strong> — embedded context helps users anticipate consequences and outcomes.</li>
      <li><strong>Accelerates diagnosis</strong> — abnormal conditions are recognized faster because meaning is shown in place.</li>
    </ul>
  </div>
</div>

<!-- Pattern Demonstration -->
<div style="border:1px solid #ddd;border-radius:10px;padding:25px 20px;margin:30px 0;background:#fafafa;box-shadow:0 1px 3px rgba(0,0,0,.05);">
<div style="max-width:1200px;margin:0 auto;">
<h3 style="margin-bottom:20px;">Pattern Demonstration</h3>
<p style="max-width:none;">
The following demonstration applies this pattern to <strong>Clean-In-Place (CIP) analysis</strong>.
Traditional trends show process variables in isolation.
This design embeds <strong>CIP step transitions</strong> and <strong>diagnostic annotations</strong> directly into the trend,
providing immediate operational context.
</p>

<h4>🎥 Demonstration Video</h4>
<video controls style="max-width:100%;height:auto;">
  <source src="../videos/ds4_demo_video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<p style="font-size:0.75em; color:#777; margin:0; padding-top:4px; margin-bottom:1px; line-height:1.2; text-align:right;">
  <em>Silent demo — visuals only</em>
</p>

<h4 style="margin-top:25px;">📷 Dashboard Views</h4>
<ul style="list-style:none;padding-left:0;max-width:none;">
  <li><strong>CIP Phase Transitions:</strong> Step changes (Fill, Circulation, Drain, Purge, Pause) are rendered directly on the trend timeline, allowing operators to see exact transition points without referencing tables or reports.<br>
    <img src="../images/ds4_pic1.PNG" alt="CIP trend with phase transitions embedded"
         style="margin-top:8px;border:1px solid #ccc;border-radius:8px;max-width:100%;height:auto;">
  </li>

  <li style="margin-top:25px;"><strong>Embedded Diagnostic Annotations:</strong> High-temperature conditions at the start of Circulation and Drain are annotated directly on the trend, eliminating the need to infer violations from raw values or search alarm lists.<br>
    <img src="../images/ds4_pic2.PNG" alt="High temperature annotations embedded in trend"
         style="margin-top:8px;border:1px solid #ccc;border-radius:8px;max-width:100%;height:auto;">
  </li>

  <li style="margin-top:25px;"><strong>Meaning at the Moment of Occurrence:</strong> Selecting an annotation reveals why the condition matters (e.g., start temperature exceeded limit), tightly coupling data, event, and interpretation in a single view.<br>
    <img src="../images/ds4_pic3.PNG" alt="Annotation details embedded in trend context"
         style="margin-top:8px;border:1px solid #ccc;border-radius:8px;max-width:100%;height:auto;">
  </li>
</ul>
</div>
</div>

<!-- Implementation Notes -->
<div style="border:1px solid #ddd;border-radius:10px;padding:25px 20px;margin:30px 0;background:#fafafa;box-shadow:0 1px 3px rgba(0,0,0,.05);font-size:.9em;color:#555;">
  <div style="max-width:1200px;margin:0 auto;">
    <h3 style="margin-bottom:15px;">Implementation Notes</h3>
    <ul style="max-width:none;">
      <li>CIP phase transitions were generated as range annotation events and rendered directly in the trend to eliminate time-alignment effort.</li>
      <li>High-temperature conditions were embedded as annotations instead of relying solely on alarms or external reports.</li>
      <li>The design prioritizes <em>perceptual clarity</em> over interaction complexity — no drill-down is required to understand what occurred.</li>
    </ul>
  </div>
</div>

<!-- Reference -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);font-size:.9em;color:#555;">
  <div style="max-width:1200px;margin:0 auto;">
    <p style="max-width:none;">
      <em>Reference:</em> Mica R. Endsley &amp; Debra G. Jones, <strong>Designing for Situation Awareness: An Approach to User-Centered Design</strong>.
      Design Schema 7 — Embed Supporting Information in Context.
    </p>
  </div>
</div>
