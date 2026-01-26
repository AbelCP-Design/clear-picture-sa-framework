<!-- Header Card -->
<div style="border:1px solid #ddd;border-radius:10px;padding:30px 20px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);text-align:center;">
  <div style="max-width:700px;margin:0 auto;">
    <h1 style="margin-bottom:20px;">High-Level Overview & Drill-Down</h1>
    <p style="max-width:none;">
      Based on Endsley & Jones’ <em>Designing for Situation Awareness: An Approach to User-Centered Design</em>,
      this pattern emphasizes keeping a <strong>high-level picture always visible</strong>, while enabling operators
      to drill down into details only when needed.
    </p>
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
      This design pattern balances <strong>overview and detail</strong>. Operators maintain global SA from a central display,
      but can open contextual panes or detail views when more information is required. This prevents clutter while keeping
      high-level status always in sight.
    </p>
    <ul style="max-width:none;">
      <li>The <strong>overview map/dashboard</strong> shows system-wide state at a glance.</li>
      <li>Clicking or selecting elements opens <strong>detail panes</strong> (e.g., trends, task info, video feeds) only when needed.</li>
      <li>Operators can <strong>prioritize attention</strong> by filtering or drilling down without losing context of the big picture.</li>
    </ul>
  </div>
</div>

<!-- Benefits -->
<div style="border:1px solid #ddd;border-radius:10px;padding:30px 20px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);">
  <div style="max-width:1200px;margin:0 auto;">
    <h3 style="margin-bottom:20px;">Benefits</h3>
    <ul style="max-width:none;">
      <li><strong>Supports global SA</strong> — operators always keep sight of the system overview.</li>
      <li><strong>Minimizes clutter</strong> — details only appear when requested, reducing visual overload.</li>
      <li><strong>Enhances comprehension</strong> — details are linked directly to overview elements, supporting Level 2 SA (understanding).</li>
      <li><strong>Improves response</strong> — operators can dive deeper without breaking context, reducing time to act.</li>
    </ul>
  </div>
</div>

<!-- Pattern Demonstration -->
<div style="border:1px solid #ddd;border-radius:10px;padding:25px 20px;margin:30px 0;background:#fafafa;box-shadow:0 1px 3px rgba(0,0,0,.05);">
<div style="max-width:1200px;margin:0 auto;">
<h3 style="margin-bottom:20px;">Pattern Demonstration</h3>
<p style="max-width:none;">
The following demonstration illustrates this pattern applied to a <strong>pipeline network monitoring dashboard</strong>.
Operators view a high-level map of the system, while detail panes (trends, alarms, tasks, video feeds) appear only when needed — keeping global SA intact.
</p>

<h4>🎥 Demonstration Video</h4>
<video controls style="max-width:100%;height:auto;">
  <source src="../videos/ds2_demo_video.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

<p style="font-size:0.75em; color:#777; margin:0; padding-top:4px; margin-bottom:1px; line-height:1.2; text-align:right;">
  <em>Silent demo — visuals only</em>
</p>

<h4 style="margin-top:25px;">📷 Dashboard Views</h4>
<ul style="list-style:none;padding-left:0;max-width:none;">
  <li><strong>Overview:</strong> System-wide state always visible. This supports global Situation Awareness.<br>
    <img src="../images/ds2_pic1.PNG" alt="Pipeline network monitoring overview"
         style="margin-top:8px;border:1px solid #ccc;border-radius:8px;max-width:100%;height:auto;">
  </li>

  <li style="margin-top:25px;"><strong>Event-Linked Pane:</strong> Event viewer opens alongside the overview. In this example, the operator reviews high-level information about a maintenance event highlighted on the map.<br>
    <img src="../images/ds2_pic2.PNG" alt="Alarm viewer drill-down example"
         style="margin-top:8px;border:1px solid #ccc;border-radius:8px;max-width:100%;height:auto;">
  </li>

  <li style="margin-top:25px;"><strong>Rich Detail View:</strong> Drill-down adds trends, work orders, video, and maps. The operator can expand awareness of the maintenance event when deeper context is needed.<br>
    <img src="../images/ds2_pic3.PNG" alt="Rich detail view with trends and work orders"
         style="margin-top:8px;border:1px solid #ccc;border-radius:8px;max-width:100%;height:auto;">
  </li>

  <li style="margin-top:25px;"><strong>Configured Full Drill-Down:</strong> All panes expanded. The operator can view overview, high-level, and detailed information simultaneously to support decision-making.<br>
    <img src="../images/ds2_pic4.PNG" alt="Full drill-down view with detailed panes"
         style="margin-top:8px;border:1px solid #ccc;border-radius:8px;max-width:100%;height:auto;">
  </li>

  <li style="margin-top:25px;"><strong>Key Panes Configuration:</strong> The dashboard is composed of multiple building blocks. The overview drawing was created in a <em>Canvas</em> display, while separate <em>Dashboard</em> displays hold the Events Table and the Details Pane. A third dashboard integrates them into a single view.<br>
    <img src="../images/ds2_pic5_dashboard_choice.PNG" alt="Dashboard choice configuration"
         style="margin-top:16px;border:1px solid #ccc;border-radius:8px;max-width:100%;height:auto;display:block;margin-left:auto;margin-right:auto;">
    <img src="../images/ds2_pic6_schema2_dashboard.PNG" alt="Schema 2 dashboard configuration"
         style="margin-top:16px;border:1px solid #ccc;border-radius:8px;max-width:100%;height:auto;display:block;margin-left:auto;margin-right:auto;">
  </li>
</ul>
</div>
</div>

<!-- Implementation Notes -->
<div style="border:1px solid #ddd;border-radius:10px;padding:25px 20px;margin:30px 0;background:#fafafa;box-shadow:0 1px 3px rgba(0,0,0,.05);font-size:.9em;color:#555;">
  <div style="max-width:1200px;margin:0 auto;">
    <h3 style="margin-bottom:15px;">Implementation Notes</h3>
    <ul style="max-width:none;">
      <li>The demonstration dashboard did not include functionality to click on the maintenance icon and automatically sync content across all other panes (Event Viewer, Details). Implementing this would require additional development, as seen in the Tatsoft Demo project. For Design Pattern illustration purposes, this functionality was not deemed necessary.</li>
      <li>In the <em>Details</em> pane, the "Video Feed" is represented by a static image. Completing this would require further configuration, but was not necessary to demonstrate the concept of this Design Pattern.</li>
    </ul>
  </div>
</div>

<!-- Reference -->
<div style="border:1px solid #ddd;border-radius:10px;padding:20px;margin:30px 0;background:#fafafa;box-shadow:0 2px 4px rgba(0,0,0,.05);font-size:.9em;color:#555;">
  <div style="max-width:1200px;margin:0 auto;">
    <p style="max-width:none;">
      <em>Reference:</em> Mica R. Endsley & Debra G. Jones, <strong>Designing for Situation Awareness: An Approach to User-Centered Design</strong>.
      Pattern adapted for demonstration in Clear Picture SA.
    </p>
  </div>
</div>
