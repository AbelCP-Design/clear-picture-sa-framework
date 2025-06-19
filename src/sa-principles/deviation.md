<div style="text-align: center; margin-bottom: 30px;">
  <img src="../images/deviation_infographic.png" alt="Deviation Infographic" width="60%" />
  <div style="font-size: 0.9em; color: #888; text-align: center; margin-top: 10px; margin-bottom: 20px;">
    SA Level 2 — Comprehension
  </div>
</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Why It Matters

<span style="display:block; height:0.0px;"></span>

- Operators must constantly judge whether current values are acceptable.
- Deviations from expected values signal something might be wrong — but only if noticed.
- Subtle changes can go undetected if visualizations don’t highlight the deviation clearly.
- Knowing how far and how long a process has been off-target is essential for root cause analysis and proactive intervention.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Operational Impact Examples

<span style="display:block; height:0.0px;"></span>

- **Lab results outside of spec:**  
  Off-spec lab results (e.g., brightness, pH, or viscosity) may go unnoticed when buried in logs or spreadsheets. Highlighting the deviation from specification — along with time of sample and area affected — enables faster investigation and reduces the risk of recurring quality issues.

- **Process centerline deviation monitoring:**  
  In Pulp and Paper plants, parameters like RPM or chemical strength are tracked against centerline limits. The dashboard highlights how far and how long values have deviated, enabling early action to prevent quality issues, waste, or equipment stress.

- **Pump performance vs. design curve:**  
  Flow and pressure deviate from expected performance curve, signaling impeller wear or blockage.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Typical Design Techniques

<span style="display:block; height:0.0px;"></span>

- **Display actual vs. target values clearly:**  
  Include numerical deltas or directional arrows.

- **Highlight how far and for how long a value has been off target:**  
  Use trend lines, timers, or markers.

- **Use color, shape, or motion:**  
  Indicate deviation direction and severity at a glance.

- **Leverage bullet graphs:**  
  Show the degree of variance from plan, setpoint, or expected value.

- **Trend deviation over time:**  
  Not just current readings — visualize the trajectory.

- **Show operating limits visually:**  
  Use bands in trends, bar fills, or process objects like tanks.

- **Compare against design or performance curves:**  
  Such as expected pump or compressor behavior.

> Some of these techniques are also demonstrated in the platform testing section below and may serve as visual examples.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Real-World Analogy

<span style="display:block; height:0.0px;"></span>

> **Primary Flight Display Altitude Tape:**  
> In aviation, pilots rely on a visual showing both current altitude and the assigned target altitude. This comparison allows instant recognition of how far off the aircraft is from the intended level.  
>  
> Similarly, dashboards should make deviation just as visible — including how far off the process is and for how long.

<div style="text-align: center; margin-top: 20px;">
  <img src="../images/deviation_altitude_tape.png" alt="Altitude Tape Analogy" width="40%" />
</div>

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Use Case for Platform Testing

<span style="display:block; height:0.0px;"></span>

Consider a display for operators that helps visually identify when a process is out of bounds or non-compliant:

- Show actual vs. target values with deviation deltas.
- Visually emphasize how far and how long values have been off target.
- Use color or shape to make deviation direction and severity obvious.
- Use bar charts to clearly show variance from plan or expected value.
- Trend deviation over time, not just the raw value.
- Display applicable limits in trends, bars (e.g., tanks), or other objects.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Tested Platforms

<span style="display:block; height:0.0px;"></span>

> Testing is currently in progress to evaluate how different platforms support the expression of deviation-aware design techniques.

<ul>
  <li>AVEVA PI Vision</li>
  <li>Ignition Perspective</li>
  <li>FrameworX</li>
</ul>

</div>

<div style="margin-top: 40px; font-size: 0.9em; color: #666;">
See which platforms have been tested for each SA principle in the <a href="../platform-support/sa-vendor-listing" style="text-decoration: none;">SA Vendor Listing</a>.
</div>
