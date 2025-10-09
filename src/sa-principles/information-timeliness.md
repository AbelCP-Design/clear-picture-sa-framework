<div style="text-align: center; margin-bottom: 30px;">
  <img src="../images/information_timeliness_infographic_2.png" alt="Information Timeliness Infographic" width="70%" />
  <div style="font-size: 0.9em; color: #888; text-align: center; margin-top: 10px; margin-bottom: 20px;">
    Supports Perception & Comprehension
  </div>
</div>

<div style="border-left: 3px solid #ccc; padding: 10px 20px; margin-bottom: 30px; background-color: #f9f9f9; border-radius: 6px; font-size: 0.9em; color: #555;">
  <em>Note: “Information Timeliness” represents one form of data uncertainty.  
  At a later stage, this concept will be merged into a new <strong>Uncertainty Representation</strong></a> SA Concept, to provide a more integrated description of information reliability.</em>
</div>


<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Why It Matters

<span style="display:block; height:0.0px;"></span>

- In dynamic industrial environments, older data becomes less trustworthy as time passes.
- Operators may not naturally notice missing updates if stale data looks the same as fresh data.
- Subtle time-based visual cues prevent silent degradation of the operator's Situation Awareness.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Operational Impact Examples

<span style="display:block; height:0.0px;"></span>

- **Missed update in compressor station status:**  
  If a compressor stops and the symbol appears normal, operators may fail to act before pressure rises to unsafe levels.

- **Sensor disconnection during a chemical batch process:**  
  Outdated temperature data could give a false impression that a reaction is on track, risking off-spec product or safety issues.

- **Outdated flowmeter reading in water treatment:**  
  Operators might assume flow is continuous when it’s not, delaying detection of a blockage or pump failure.

> Visualizing data aging directly contributes to timely human intervention — a core requirement in process safety and product quality.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Cross-Domain Analogy

<span style="display:block; height:0.0px;"></span>

> **Radar Displays:**  
> In air traffic control, aircraft symbols often dim gradually if no radar sweep refreshes the aircraft’s position, providing an immediate visual cue of data aging.

<div style="text-align: center; margin-top: 20px;">
  <img src="../images/information_timeliness_radar.PNG" alt="Radar Refresh Example" width="30%" />
</div>

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Typical Design Techniques

<span style="display:block; height:0.0px;"></span>

- **Fading Opacity:** Visual elements gradually fade as data ages.
- **Desaturation:** Colors shift toward grayscale with time since last update.
- **Countdown timers:** Textual or graphical age indicators.
- **Halo decay:** Glows or edge highlights diminish as time passes.
- **Last updated timestamp:** Display of data freshness (less effective for fast visual scan).

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Use Case for Platform Testing

<span style="display:block; height:0.0px;"></span>

Consider a pipeline network monitoring dashboard where equipment symbols fade if no update has been received in 5 minutes:

- A compressor station icon maintains full color if data is recent.
- If no update arrives after X amount of time, the icon fades toward 80% opacity.
- This immediately signals attention to possible stale or disconnected data.
- Upon receiving a new update, the full opacity is restored automatically.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Tested Platforms

<span style="display:block; height:0.0px;"></span>

#### ✅ FrameworX — Supports Information Timeliness
<span style="display:block; height:0.0px;"></span>  
| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Analytics scripting used for simulating data and calculating a linear fade applied to object opacity. |
| **Display Build** | • Canvas page type used.<br>• Icon opacity dynamically controlled via analytics tag. |
| **Version Tested** | 10.0.1.464 |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 30px;">
  <img src="../images/information_timeliness_frameworx.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/information_timeliness_frameworx_2.PNG" width="85%" />
</div>

<span style="display:block; height:1.0px;"></span>

#### ✅ Ignition Perspective — Supports Information Timeliness
<span style="display:block; height:0.0px;"></span>  
| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Analytics scripting used for simulating data and calculating a linear fade applied to object opacity. |
| **Display Build** | • Dashboard display component used.<br>• An "opacity" property was added, and an "Expression Binding" script configured to dynamically control opacity. |
| **Version Tested** | Ignition 8.1.x (Perspective) |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 30px;">
  <img src="../images/information_timeliness_ignition_perspective_1.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/information_timeliness_ignition_perspective_2.PNG" width="90%" />
</div>

<span style="display:block; height:1.0px;"></span>

#### ✅ AVEVA PI Vision — Supports Information Timeliness
<span style="display:block; height:0.0px;"></span>  
| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Analytics scripting used for simulating data and calculating the number of seconds since last update (function: "SecSinceChange()"). |
| **Display Build** | "Multistate" feature was used to set a color range that emulates opacity fading.|
| **Version Tested** | PI Vision 2024, PI Server 2018 SP3 |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 30px;">
  <img src="../images/information_timeliness_pivision_1.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/information_timeliness_pivision_2.PNG" width="60%" />
</div>

<span style="display:block; height:1.0px;"></span>

#### Upcoming Vendor Testing

- TBD
</div>

<div style="margin-top: 40px; font-size: 0.9em; color: #666;">
See which platforms have been tested for each SA concept in the <a href="../platform-support/sa-vendor-listing" style="text-decoration: none;">SA Vendor Listing</a>.
</div>
