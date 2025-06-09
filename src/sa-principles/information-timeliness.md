<div style="text-align: center; margin-bottom: 30px;">
  <img src="../images/information_timeliness_infographic.PNG" alt="Information Timeliness Infographic" width="80%" />
</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Why It Matters

<span style="display:block; height:0.0px;"></span>

- In dynamic industrial environments, older data becomes less trustworthy as time passes.
- Operators may not naturally notice missing updates if stale data looks the same as fresh data.
- Subtle time-based visual cues prevent silent degradation of the operator's Situation Awareness.

> As Endsley notes in *Designing for SA*:  
> “Without representation of timeliness, people may fail at the early stages of SA, never progressing to comprehension or projection.”

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Operational Impact Examples

<span style="display:block; height:0.0px;"></span>

Missed signs of stale data can have real-world consequences:

- A **compressor station** stops reporting data, but appears "normal" on screen. Pressures continue rising downstream unnoticed, risking equipment stress or failure.
- An **alarm system** fails to update, and operators believe an issue has been resolved — when in fact no update has arrived in 10 minutes.
- A **batch process** shows frozen sensor values — leading to delayed intervention, lost product, or safety events.

When operators trust data that is silently outdated, awareness breaks down — and small issues can escalate into serious problems.

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

### Real-World Analogy

<span style="display:block; height:0.0px;"></span>

> **Radar Displays:**  
> In air traffic control, aircraft symbols often dim gradually if no radar sweep refreshes the aircraft’s position — providing an immediate visual cue of data aging.

<div style="text-align: center; margin-top: 20px;">
  <img src="../images/information_timeliness_radar.PNG" alt="Radar Refresh Example" width="20%" />
</div>

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Use Case for Platform Testing

<span style="display:block; height:0.0px;"></span>

Consider a pipeline network dashboard where equipment symbols fade if no update has been received in 5 minutes:

- A compressor station icon maintains full color if data is recent.
- If no update arrives after X minutes, the icon fades toward 80% opacity.
- This immediately signals possible stale or disconnected data.
- When a new update arrives, full opacity is restored automatically.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Tested Platforms

<span style="display:block; height:0.0px;"></span>

#### ✅ FrameworX — Supports Information Timeliness

| Aspect | Notes |
| ------ | ----- |
| **Test Status** | Completed |
| **Implementation Approach** | <br>• Analytics scripting used for calculating time since last update.<br>• Linear fade calculation applied to object opacity.<br>• Vendor documentation and demo projects consulted for scripting functions. |
| **Display Build** | Canvas page type used. Icon opacity controlled via Analytics tag. |
| **Resulting Visualization** | See screenshots below. |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 30px;">
  <img src="../images/information_timeliness_frameworx.PNG" width="80%" style="margin-bottom: 30px;" />
  <img src="../images/information_timeliness_frameworx_2.PNG" width="60%" />
</div>

#### Upcoming Vendor Testing

- AVEVA PI Vision

<span style="font-size: 0.85em;">Full capability matrix available: [SA Principles Support](../platform-support/sa-principles-support)</span>

</div>
