<div style="text-align: center; margin-bottom: 30px;">
  <img src="../images/deviation_infographic_2.png" alt="Deviation Infographic" width="50%" />
  <div style="font-size: 0.9em; color: #888; text-align: center; margin-top: 10px; margin-bottom: 20px;">
    Supports Comprehension
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

### Real-World Analogy

<span style="display:block; height:0.0px;"></span>

> **Primary Flight Display Altitude Tape:**  
> In aviation, pilots rely on a visual showing both current altitude and the assigned target altitude. This comparison allows instant recognition of how far off the aircraft is from the intended level.  
>  
> Similarly, dashboards should make deviation just as visible — including how far off the process is and for how long.

<div style="text-align: center; margin-top: 20px;">
  <img src="../images/deviation_altitude_tape_PFD.png" alt="Altitude Tape Analogy" width="35%" />
</div>

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Typical Design Techniques

<span style="display:block; height:0.0px;"></span>

- **Graphically display actual vs. target values:**  
  When bars or shapes are used to show how close a measurement is to its target, more can be conveyed in less space — and understood faster — than text alone.

- **Include numerical deltas or directional arrows:**  
  Help users quickly spot the size and direction of deviation from the expected value.

- **Highlight how far and for how long a value has been off target:**  
  Use trend lines, timers, or markers to show persistence of deviation.

- **Use color or shape to signal deviation severity:**  
  Color fills, flags, or angular indicators work well for drawing attention to large gaps.

- **Trend deviation over time:**  
  Don’t just show the variable’s absolute value — chart how far it has strayed from target across time.

- **Show operating limits visually:**  
  Use bands in trends, bar fills, or process objects like tanks.

- **Compare against design or performance curves:**  
  Such as expected pump or compressor behavior.

> The platform testing section below shows examples of some of these techniques in practice.

</div>

<div style="border: 1px solid #ddd; border-bottom: 4px solid #ccc; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Use Case for Platform Testing — #1

<span style="display:block; height:0.0px;"></span>

This use case explores how well a platform can support deviation-aware design for high-level KPIs in a pulp and paper plant.

Inspired by Stephen Few’s principle, it focuses on displaying actual vs. target values as horizontal bars to improve clarity and space efficiency. These displays help management quickly assess performance, spot off-target conditions, and prioritize action.

- Use percent-of-target bars for pulp production, fiber loss, soda loss, and extrusion rate.
- Show actual and target values for context.
- Use color or shape to flag KPIs outside the desired range.
- Clearly highlight variance from limits or expected performance.

</div>


<div style="border: 1px solid #ddd; border-top: 4px solid #ccc; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 10px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Tested Platforms — Use Case #1

<span style="display:block; height:0.0px;"></span>

#### ✅ FrameworX — Supports Deviation (Actual vs. Target)
<span style="display:block; height:0.0px;"></span>  
| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Calculate measurement "Percent of Target" for each KPI and display it visually using bargraphs. |
| **Display Build** | • Canvas page type used.<br>• Bargraph fill controlled via analytics tag.<br>• Alert circle visibility triggered by deviation threshold logic. |
| **Version Tested** | 10.0.1.464 |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 40px;">
  <img src="../images/deviation_actualvstarget_bars_frameworx.png" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/deviation_actualvstarget_bars_frameworx_2.png" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/deviation_actualvstarget_bars_frameworx_3.png" width="100%" />
</div>

<span style="display:block; height:1.0px;"></span>

#### ✅ Ignition Perspective — Supports Deviation (Actual vs. Target)
<span style="display:block; height:0.0px;"></span>  
| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | “Percent of Target” is calculated in a gateway timer script, simulating process values and computing percent deviation. |
| **Display Build** | • Progress Bars used for percent-of-target bars in Perspective.<br>• Values and % shown via bound labels.<br>• Color and position set via tag bindings and property transforms. |
| **Version Tested** | Ignition 8.1.x (Perspective) |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 40px;">
  <img src="../images/deviation_actualvstarget_bars_ignition_perspective.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/deviation_actualvstarget_bars_ignition_perspective_2.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/deviation_actualvstarget_bars_ignition_perspective_3.PNG" width="100%" />
</div>


#### Upcoming Vendor Testing

- TBD

</div>

<div style="border: 1px solid #ddd; border-bottom: 4px solid #ccc; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Use Case for Platform Testing — #2

This use case explores how well a platform can support deviation-aware design by tracking when a process variable moves outside of acceptable limits — and for how long.

Unlike Use Case #1, which focuses on magnitude of deviation from a target, this one focuses on time-based deviation detection and display. The design shows how far the process has drifted and for how long it's been out of bounds. This aids operators in comprehension of the situation — especially in identifying persistent issues — and can help prioritize responses.

- Show how long the value has been out of limits, not just that it *is*.
- Use visual markers or annotations to display the moment deviation began.
- Include dynamic duration counters to support timely operator action.
- (Optional) Use warning markers for immediate visual indication.

</div>

<div style="border: 1px solid #ddd; border-top: 4px solid #ccc; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 10px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Tested Platforms — Use Case #2

<span style="display:block; height:0.0px;"></span>

#### ✅ FrameworX — Supports Deviation (Duration + Limits)

<span style="display:block; height:0.0px;"></span>  
| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Runtime script tracks compliance against Hi/Lo limits and sets a timestamp when values go out of range. A duration timer then tracks how long the value remains out of spec. |
| **Display Build** | • Canvas display. <br>• Warning markers appear automatically when values exceed limits.<br>• Duration and out-of-limit timestamp shown in real time. |
| **Version Tested** | 10.0.1.464 |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 40px;">
  <img src="../images/deviation_duration_frameworx_1.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/deviation_duration_frameworx_2.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/deviation_duration_frameworx_3.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/deviation_duration_frameworx_4.PNG" width="100%" />
</div>

<span style="display:block; height:0.0px;"></span>

#### ✅ Ignition Perspective — Supports Deviation (Duration + Limits)

<span style="display:block; height:0.0px;"></span>  
| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Gateway timer script monitors compliance bit and triggers logic to calculate and display deviation duration and timestamp. |
| **Display Build** | • Time Series Chart shows value, high/low limits, and visible deviation bands.<br>• Timer and timestamp appear when limit exceeded.<br>• Transform and bindings used to format display. |
| **Version Tested** | Ignition 8.1.x (Perspective) |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 40px;">
  <img src="../images/deviation_duration_perspective_1.PNG" width="90%" style="margin-bottom: 30px;" />
  <img src="../images/deviation_duration_perspective_2.PNG" width="90%" style="margin-bottom: 30px;" />
  <img src="../images/deviation_duration_perspective_3.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/deviation_duration_perspective_4.PNG" width="100%" />
</div>

<span style="display:block; height:0.0px;"></span>

#### Upcoming Vendor Testing

- AVEVA PI Vision

</div>


<div style="margin-top: 40px; font-size: 0.9em; color: #666;">
See which platforms have been tested for each SA concept in the <a href="../platform-support/sa-vendor-listing" style="text-decoration: none;">SA Vendor Listing</a>.
</div>
