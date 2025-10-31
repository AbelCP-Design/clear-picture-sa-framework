<!-- Hero Infographic -->
<div style="text-align:center;margin-bottom:30px;">
<img src="../images/chunking_infographic.png" alt="Classification Infographic" width="70%">
<div style="font-size:.9em;color:#888;text-align:center;margin-top:10px;margin-bottom:20px;">Supports Comprehension</div>
</div>

<!-- Why It Matters -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
<div style="max-width:1200px;margin:0 auto;">
<h3>Why It Matters</h3>
<p style="max-width:none;"><strong>Classification</strong> (formerly “Chunking” in this framework) helps users make sense of many data points by grouping them into meaningful categories.</p>
<ul style="max-width:none;">
<li>Operators often face many signals in very little time.</li>
<li>Without clear categorization, working memory gets overwhelmed.</li>
<li>Classification improves cognitive efficiency by visually organizing data into recognizable groups.</li>
</ul>
</div>
</div>

<!-- Operational Impact Examples -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
<div style="max-width:1200px;margin:0 auto;">
<h3>Operational Impact Examples</h3>
<ul style="max-width:none;">
<li><strong>Reliability meeting dashboards:</strong> Categorizing out-of-compliance assets helps teams focus discussion and plan actions quickly.</li>
<li><strong>Pump monitoring during shift change:</strong> Instead of scanning each pump, operators can review categories like “Running Too Long” or “All Stopped” to grasp the situation instantly.</li>
<li><strong>Alarm review displays:</strong> Classifying alarms by source system (instrumentation, electrical) or likely root cause (flow blockage, power loss) speeds analysis and response.</li>
</ul>
<p style="max-width:none;"><em>Classification bridges perception and action — enabling users to see what matters without assembling the puzzle mentally.</em></p>
</div>
</div>

<!-- Cross-Domain Analogy -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
<div style="max-width:1200px;margin:0 auto;">
<h3>Cross-Domain Analogy</h3>
<p style="max-width:none;"><strong>Air Traffic Control:</strong> Experienced controllers don’t track 30 individual planes in isolation — they classify them into meaningful sets like “arrivals,” “departures,” or “holding pattern.” This makes complexity manageable and improves decisions.</p>
<div style="text-align:center;margin-top:20px;">
<img src="../images/chunking_realworldanalogy_inforgraphic.png" alt="Air traffic control grouping analogy" width="35%">
</div>
</div>
</div>

<!-- Typical Design Techniques -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
<div style="max-width:1200px;margin:0 auto;">
<h3>Typical Design Techniques</h3>
<ul style="max-width:none;">
<li><strong>Section headings and labels:</strong> Visually separate related items using titles, lines, or padding.</li>
<li><strong>Color-coded categories:</strong> Use consistent colors to bind items conceptually.</li>
<li><strong>Whitespace and alignment:</strong> Leverage layout to form natural group boundaries.</li>
<li><strong>Spatial repositioning:</strong> Move items between categories only when it aids comprehension.</li>
</ul>
<p style="max-width:none;">The demonstration in platform section below shows examples of these techniques in practice.</p>
</div>
</div>

<!-- Use Case for Demonstration in Platform -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
<div style="max-width:1200px;margin:0 auto;">
<h3>Use Case for Demonstration in Platform</h3>
<p style="max-width:none;">Consider a compliance tracking dashboard for pump groups:</p>
<ul style="max-width:none;">
<li>Visually organize pump groups into three distinct categories: <strong>In Compliance</strong>, <strong>Out of Compliance</strong>, and <strong>Excluded or Fully Stopped</strong>.</li>
<li>Use <strong>spatial layout</strong> (e.g., three columns) to create clear visual categories.</li>
<li>Apply consistent spacing and alignment within each category to reinforce classification.</li>
<li>Evaluate how easily users can <strong>identify which pump groups need attention</strong>, rather than mentally scanning all pumps at once — especially during early-morning reliability meetings when cognitive load is high.</li>
</ul>
</div>
</div>

<!-- Platforms Used for Demonstration -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px 20px 30px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
<div style="max-width:1200px;margin:0 auto;">
<h3>Platforms Used for Demonstration</h3>
<h4>✅ AVEVA PI Vision — Demonstration of Classification</h4>

<table style="max-width:none;">
<tr><th>Aspect</th><th>Notes</th></tr>
<tr><td><strong>Implementation Approach</strong></td><td>Visual categorization handled via analytics-driven tag logic and grouped containers.</td></tr>
<tr><td><strong>Display Build</strong></td><td>• Utilized Collections to categorize pump groups by compliance status<br>• Timers, timestamps and time accumulations enhance comprehension of compliance state</td></tr>
<tr><td><strong>Version Used</strong></td><td>PI Vision 2024. PI Server 2018 SP3</td></tr>
</table>

<div style="display:flex;flex-direction:column;align-items:center;margin-top:30px;">
<img src="../images/chunking_pivision_1.gif" width="850" style="margin:0;display:block;">
<p style="font-size:.85em;color:#777;margin:0;padding-top:4px;margin-bottom:30px;line-height:1.2;">To view the animation in a larger, more legible format, right-click on the GIF and select <em>"Open Image in New Tab"</em>.</p>
<img src="../images/chunking_pivision_2.PNG" width="70%" style="margin-bottom:30px;">
<img src="../images/chunking_pivision_3.PNG" width="60%" style="margin-bottom:30px;">
<img src="../images/chunking_pivision_4.PNG" width="55%" style="margin-bottom:30px;">
<img src="../images/chunking_pivision_5.PNG" width="100%" style="margin-bottom:30px;">
<img src="../images/chunking_pivision_6.PNG" width="55%" style="margin-bottom:30px;">
</div>

<h4>✅ Ignition Perspective — Demonstration of Classification</h4>
<table style="max-width:none;">
<tr><th>Aspect</th><th>Notes</th></tr>
<tr><td><strong>Implementation Approach</strong></td><td>Pump groups are modeled using UDTs and organized dynamically by compliance status. Categorization logic is handled via tag-driven rules and scripting within Flex Repeaters.</td></tr>
<tr><td><strong>Display Build</strong></td><td>• Three clearly separated columns show compliant, out-of-compliance, and stopped pump groups<br>• Each group contains dynamic runtime counters, timestamps, and compliance indicators<br>• Layout supports at-a-glance comparison and comprehension</td></tr>
<tr><td><strong>Version Used</strong></td><td>Ignition 8.1.x (Perspective)</td></tr>
</table>

<div style="display:flex;flex-direction:column;align-items:center;margin-top:30px;">
<img src="../images/chunking_ignition_1.gif" width="850" style="margin:0;display:block;">
<p style="font-size:.85em;color:#777;margin:0;padding-top:4px;margin-bottom:30px;line-height:1.2;">To view the animation in a larger, more legible format, right-click on the GIF and select <em>"Open Image in New Tab"</em>.</p>
<img src="../images/chunking_ignition_2.PNG" width="70%" style="margin-bottom:30px;">
<img src="../images/chunking_ignition_3.PNG" width="60%" style="margin-bottom:30px;">
<img src="../images/chunking_ignition_4.PNG" width="55%" style="margin-bottom:30px;">
<img src="../images/chunking_ignition_5.PNG" width="90%" style="margin-bottom:30px;">
<img src="../images/chunking_ignition_6.PNG" width="95%" style="margin-bottom:30px;">
<img src="../images/chunking_ignition_7.PNG" width="100%" style="margin-bottom:30px;">
</div>

</div>
</div>

<!-- Footer Link -->
<div style="margin-top:40px;font-size:.9em;color:#666;">
See which platforms have been used to demonstrate each SA concept in the <a href="../platform-support/sa-vendor-listing" style="text-decoration:none;">SA Vendor Listing</a>.
</div>
