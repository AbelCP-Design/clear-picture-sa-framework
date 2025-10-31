<!-- Hero -->
<div style="text-align:center;margin-bottom:30px;">
  <img src="../images/information_timeliness_infographic_2.png" alt="Information Timeliness Infographic" width="70%">
  <div style="font-size:.9em;color:#888;text-align:center;margin-top:10px;margin-bottom:20px;">
    Supports Perception &amp; Comprehension
  </div>
</div>

<!-- Note -->
<div style="border-left:3px solid #ccc;padding:10px 20px;margin-bottom:30px;background:#f9f9f9;border-radius:6px;font-size:.9em;color:#555;">
  <em>Note: “Information Timeliness” represents one form of data uncertainty.
  At a later stage, this concept will be merged into a new <strong>Uncertainty Representation</strong> SA Concept, to provide a more integrated description of information reliability.</em>
</div>

<!-- Why It Matters -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3>Why It Matters</h3>
    <ul style="max-width:none;">
      <li>In dynamic industrial environments, older data becomes less trustworthy as time passes.</li>
      <li>Operators may not naturally notice missing updates if stale data looks the same as fresh data.</li>
      <li>Subtle time-based visual cues prevent silent degradation of the operator's Situation Awareness.</li>
    </ul>
  </div>
</div>

<!-- Operational Impact Examples -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3>Operational Impact Examples</h3>
    <ul style="max-width:none;">
      <li><strong>Missed update in compressor station status:</strong> If a compressor stops and the symbol appears normal, operators may fail to act before pressure rises to unsafe levels.</li>
      <li><strong>Sensor disconnection during a chemical batch process:</strong> Outdated temperature data could give a false impression that a reaction is on track, risking off-spec product or safety issues.</li>
      <li><strong>Outdated flowmeter reading in water treatment:</strong> Operators might assume flow is continuous when it’s not, delaying detection of a blockage or pump failure.</li>
    </ul>
    <p style="max-width:none;"><em>Visualizing data aging directly contributes to timely human intervention — a core requirement in process safety and product quality.</em></p>
  </div>
</div>

<!-- Cross-Domain Analogy -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3>Cross-Domain Analogy</h3>
    <p style="max-width:none;"><strong>Radar Displays:</strong> In air traffic control, aircraft symbols often dim gradually if no radar sweep refreshes the aircraft’s position, providing an immediate visual cue of data aging.</p>
    <div style="text-align:center;margin-top:20px;">
      <img src="../images/information_timeliness_radar.PNG" alt="Radar Refresh Example" width="30%">
    </div>
  </div>
</div>

<!-- Typical Design Techniques -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3>Typical Design Techniques</h3>
    <ul style="max-width:none;">
      <li><strong>Fading Opacity:</strong> Visual elements gradually fade as data ages.</li>
      <li><strong>Desaturation:</strong> Colors shift toward grayscale with time since last update.</li>
      <li><strong>Countdown timers:</strong> Textual or graphical age indicators.</li>
      <li><strong>Halo decay:</strong> Glows or edge highlights diminish as time passes.</li>
      <li><strong>Last updated timestamp:</strong> Display of data freshness (less effective for fast visual scan).</li>
    </ul>
  </div>
</div>

<!-- Use Case -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3>Use Case for Demonstration in Platform</h3>
    <p style="max-width:none;">Consider a pipeline network monitoring dashboard where equipment symbols fade if no update has been received in 5 minutes:</p>
    <ul style="max-width:none;">
      <li>A compressor station icon maintains full color if data is recent.</li>
      <li>If no update arrives after X amount of time, the icon fades toward 80% opacity.</li>
      <li>This immediately signals attention to possible stale or disconnected data.</li>
      <li>Upon receiving a new update, the full opacity is restored automatically.</li>
    </ul>
  </div>
</div>

<!-- Platforms Used for Demonstration -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
<div style="max-width:1200px;margin:0 auto;">
  <h3>Platforms Used for Demonstration</h3>

  <h4>✅ FrameworX — Demonstration of Information Timeliness</h4>
  <table style="max-width:none;">
    <tr><th>Aspect</th><th>Notes</th></tr>
    <tr><td><strong>Implementation Approach</strong></td><td>Analytics scripting used for simulating data and calculating a linear fade applied to object opacity.</td></tr>
    <tr><td><strong>Display Build</strong></td><td>• Canvas page type used.<br>• Icon opacity dynamically controlled via analytics tag.</td></tr>
    <tr><td><strong>Version Used</strong></td><td>10.0.1.464</td></tr>
  </table>

  <div style="display:flex;flex-direction:column;align-items:center;margin-top:30px;">
    <img src="../images/information_timeliness_frameworx.PNG" width="100%" style="margin-bottom:30px;">
    <img src="../images/information_timeliness_frameworx_2.PNG" width="85%">
  </div>

  <span style="display:block;height:1px;"></span>

  <h4>✅ Ignition Perspective — Demonstration of Information Timeliness</h4>
  <table style="max-width:none;">
    <tr><th>Aspect</th><th>Notes</th></tr>
    <tr><td><strong>Implementation Approach</strong></td><td>Analytics scripting used for simulating data and calculating a linear fade applied to object opacity.</td></tr>
    <tr><td><strong>Display Build</strong></td><td>• Dashboard display component used.<br>• An “opacity” property was added, and an “Expression Binding” script configured to dynamically control opacity.</td></tr>
    <tr><td><strong>Version Used</strong></td><td>Ignition 8.1.x (Perspective)</td></tr>
  </table>

  <div style="display:flex;flex-direction:column;align-items:center;margin-top:30px;">
    <img src="../images/information_timeliness_ignition_perspective_1.PNG" width="100%" style="margin-bottom:30px;">
    <img src="../images/information_timeliness_ignition_perspective_2.PNG" width="90%">
  </div>

  <span style="display:block;height:1px;"></span>

  <h4>✅ AVEVA PI Vision — Demonstration of Information Timeliness</h4>
  <table style="max-width:none;">
    <tr><th>Aspect</th><th>Notes</th></tr>
    <tr><td><strong>Implementation Approach</strong></td><td>Analytics scripting used for simulating data and calculating the number of seconds since last update (function: <code>SecSinceChange()</code>).</td></tr>
    <tr><td><strong>Display Build</strong></td><td>“Multistate” feature was used to set a color range that emulates opacity fading.</td></tr>
    <tr><td><strong>Version Used</strong></td><td>PI Vision 2024, PI Server 2018 SP3</td></tr>
  </table>

  <div style="display:flex;flex-direction:column;align-items:center;margin-top:30px;">
    <img src="../images/information_timeliness_pivision_1.PNG" width="100%" style="margin-bottom:30px;">
    <img src="../images/information_timeliness_pivision_2.PNG" width="60%">
  </div>

  <span style="display:block;height:1px;"></span>

</div>
</div>

<!-- Footer -->
<div style="margin-top:40px;font-size:.9em;color:#666;">
  See which platforms have been used to demonstrate each SA concept in the 
  <a href="../platform-support/sa-vendor-listing" style="text-decoration:none;">SA Vendor Listing</a>.
</div>
