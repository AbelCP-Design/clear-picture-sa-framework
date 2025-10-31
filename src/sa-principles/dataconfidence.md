<!-- Hero -->
<div style="text-align:center;margin-bottom:30px;">
  <img src="../images/data_confidence_infographic.png" alt="Data Confidence Infographic" width="55%">
  <div style="font-size:.9em;color:#888;text-align:center;margin-top:10px;margin-bottom:20px;">
    Supports Perception &amp; Comprehension
  </div>
</div>

<!-- Note -->
<div style="border-left:3px solid #ccc;padding:10px 20px;margin-bottom:30px;background:#f9f9f9;border-radius:6px;font-size:.9em;color:#555;">
  <em>Note: “Data Confidence” represents one form of data uncertainty. At a later stage, this concept will be merged into a new <strong>Uncertainty Representation</strong> SA Concept, to provide a more integrated description of information reliability.</em>
</div>

<!-- Why It Matters -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3>Why It Matters</h3>
    <p style="max-width:none;"><strong>Data Confidence</strong> helps operators assess how much trust to place in the displayed information — especially when that information is <strong>calculated or computed</strong> from multiple inputs.</p>
    <ul style="max-width:none;">
      <li>Calculated values often depend on several sensor readings or data sources.</li>
      <li>If one input is stale, missing, or unreliable, the calculated result may no longer represent reality.</li>
      <li>Providing a clear sense of confidence allows users to <strong>balance trust and verification</strong>, rather than assuming all data is equally reliable.</li>
      <li>When confidence is visible, users can act with awareness — not assumption.</li>
    </ul>
    <div style="text-align:center;margin-top:10px;">
      <p style="font-size:.85em;color:#777;margin:0;"><em>Related to Endsley’s Principle 13: “Support Assessment of Confidence in Composite Data.”</em></p>
    </div>
  </div>
</div>

<!-- Operational Impact Examples -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3>Operational Impact Examples</h3>
    <ul style="max-width:none;">
      <li><strong>Calculated totals:</strong> Confidence in computed values (like <em>total tank volume</em> or <em>total downtime</em>) helps users gauge whether inputs were <strong>valid, synchronized, and complete</strong>.</li>
      <li><strong>Model-based estimates:</strong> When displayed data blends measured and predicted inputs, a confidence score clarifies <strong>how much reflects actual readings versus modeled assumptions</strong>.</li>
      <li><strong>Averaged readings:</strong> When several sensors feed an average, confidence should decrease if one goes stale or off-scale, signaling potential <strong>distortion of the calculated result</strong>.</li>
    </ul>
    <p style="max-width:none;"><em>Confidence displays don’t just show what the system <strong>knows</strong> — they reveal <strong>how sure</strong> it is about what it knows.</em></p>
  </div>
</div>

<!-- Cross-Domain Analogy -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3>Cross-Domain Analogy</h3>
    <p style="max-width:none;"><strong>Weather Forecasting:</strong> Meteorologists don’t just predict that rain <em>will</em> or <em>won’t</em> occur — they communicate a probability (“70% chance of rain”). Likewise, operators benefit when calculated data conveys its <strong>degree of certainty</strong>, not a binary “true/false” impression.</p>
    <div style="text-align:center;margin-top:20px;">
      <img src="../images/uncertainty_analogy.png" alt="Weather forecast analogy showing confidence as probability" width="37%">
    </div>
  </div>
</div>

<!-- Typical Design Techniques -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3>Typical Design Techniques</h3>
    <ul style="max-width:none;">
      <li><strong>Confidence bars or shading:</strong> Visually represent reliability beneath or beside a calculated value.</li>
      <li><strong>Numerical confidence score (%):</strong> Provide a direct readout of certainty for computed results.</li>
      <li><strong>Symbolic cues:</strong> Use icons (✓ / ⚠ / ?) or color states (green → amber → red) to express trust level.</li>
      <li><strong>Contextual links:</strong> Allow drill-down to see <em>which input sources</em> are lowering confidence.</li>
    </ul>
    <p style="max-width:none;">These techniques help users quickly judge the <strong>trustworthiness of calculated data</strong>, not merely observe its magnitude.</p>
  </div>
</div>

<!-- Use Case -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3>Use Case for Demonstration in Platform</h3>
    <p style="max-width:none;">Consider a dashboard that calculates <strong>Total Volume</strong> from four tanks:</p>
    <ul style="max-width:none;">
      <li>Each tank reports its level and timestamp.</li>
      <li>When a tank’s data becomes stale or invalid, its weight in the total confidence decreases.</li>
      <li>A <strong>confidence bar</strong> below the total shows the aggregate reliability (0–100%), allowing quick visual judgment of the overall data quality.</li>
    </ul>
    <p style="max-width:none;">Evaluate how well the platform helps users <em>see reliability at a glance</em> — can they immediately sense when a calculated value might not represent reality?</p>
  </div>
</div>

<!-- Platforms Used for Demonstration -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
<div style="max-width:1200px;margin:0 auto;">
  <h3>Platforms Used for Demonstration</h3>

  <h4>✅ Ignition Perspective — Demonstration of Confidence Representation</h4>
  <table style="max-width:none;">
    <tr><th>Aspect</th><th>Notes</th></tr>
    <tr>
      <td><strong>Implementation Approach</strong></td>
      <td>Four simulated tanks produce random volume values with adjustable staleness. Each tank’s update age feeds into a decaying confidence model that determines the reliability of the total.</td>
    </tr>
    <tr>
      <td><strong>Display Build</strong></td>
      <td>• Confidence bar below total dynamically adjusts from 100 → 0% as inputs age<br>• Hold switches allow simulated stale conditions for demonstration</td>
    </tr>
    <tr><td><strong>Version Used</strong></td><td>Ignition 8.1.x (Perspective)</td></tr>
  </table>

  <div style="display:flex;flex-direction:column;align-items:center;margin-top:30px;">
    <img src="../images/uncertainty_ignition_1.PNG" width="100%" style="margin-bottom:30px;">
    <img src="../images/uncertainty_ignition_2.PNG" width="100%" style="margin-bottom:30px;">
    <img src="../images/uncertainty_ignition_3.PNG" width="100%" style="margin-bottom:30px;">
    <img src="../images/uncertainty_ignition_4.PNG" width="70%" style="margin-bottom:30px;">
    <img src="../images/uncertainty_ignition_5.PNG" width="70%" style="margin-bottom:30px;">
  </div>

  <h4>✅ Tatsoft FrameworX — Demonstration of Confidence Representation</h4>
  <table style="max-width:none;">
    <tr><th>Aspect</th><th>Notes</th></tr>
    <tr>
      <td><strong>Implementation Approach</strong></td>
      <td>Four simulated tanks generate random level values within a configurable range. Each tank includes a <em>Hold Updates</em> toggle that pauses data changes, allowing its <strong>Age (min)</strong> to increase. A decaying confidence function reduces reliability as the age approaches a configurable threshold (<code>Conf_StaleAfterMin</code>).</td>
    </tr>
    <tr>
      <td><strong>Display Build</strong></td>
      <td>• Real-time simulation script built in a <strong>Periodic Task</strong> updates tank levels and confidence values.<br>• Each tank includes an individual confidence percentage and a <em>Hold</em> switch to simulate stale data.<br>• A <strong>Total Confidence Bar</strong> dynamically adjusts from 100 → 0% based on the average of all active tanks.<br>• Once a tank exceeds its staleness threshold, its <code>Tank#Stale</code> flag activates and the total confidence drops proportionally.</td>
    </tr>
    <tr><td><strong>Version Used</strong></td><td>10.0.1.464</td></tr>
  </table>

</div>
</div>

<!-- Footer -->
<div style="margin-top:40px;font-size:.9em;color:#666;">
  See which platforms have been used to demonstrate each SA concept in the 
  <a href="../platform-support/sa-vendor-listing" style="text-decoration:none;">SA Vendor Listing</a>.
</div>
