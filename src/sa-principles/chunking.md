<div style="text-align: center; margin-bottom: 30px;">
  <img src="../images/chunking_infographic.png" alt="Chunking Infographic" width="70%" />
  <div style="font-size: 0.9em; color: #888; text-align: center; margin-top: 10px; margin-bottom: 20px; padding-left: 0%;">
    Supports Comprehension
  </div>
</div>


<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Why It Matters

<span style="display:block; height:0.0px;"></span>

- Operators need to process many data points in a short amount of time.
- Without clear grouping or classification, working memory gets overwhelmed.
- Chunking improves cognitive efficiency by visually organizing data into meaningful units.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Operational Impact Examples

<span style="display:block; height:0.0px;"></span>

- **Reliability meeting dashboards:**  
  Grouping out-of-compliance assets helps teams focus discussion and plan actions quickly.

- **Pump monitoring during shift change:**  
  Instead of reviewing each pump individually, operators can scan categories like “Running Too Long” or “All Stopped” to grasp the situation instantly.

- **Alarm review displays:**  
  Grouping alarms by source system (e.g., instrumentation, electrical) or likely root cause (e.g., flow blockage, power loss) makes it faster to analyze what's happening and respond appropriately.

> Chunking bridges perception and action — enabling users to see what matters without assembling the puzzle mentally.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Real-World Analogy

<span style="display:block; height:0.0px;"></span>

> **Air Traffic Control Grouping:**  
> Experienced air traffic controllers don’t track 30 individual planes — they organize them into meaningful chunks like “arrivals,” “departures,” or “holding pattern.” This makes complexity manageable and improves control decisions.

<div style="text-align: center; margin-top: 20px;">
  <img src="../images/chunking_realworldanalogy_inforgraphic.png" alt="Radar Refresh Example" width="35%" />
</div>

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Typical Design Techniques

<span style="display:block; height:0.0px;"></span>

- **Section headings and labels:** Visually separate related items using titles, lines, or padding.
- **Color-coded groupings:** Use consistent colors to bind items conceptually.
- **Whitespace and alignment:** Leverage layout to form natural group boundaries.
- **Spatial repositioning:** Animate movement of items between groups only when it aids user comprehension.

The platform testing section below shows examples of some of these techniques in practice.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Use Case for Platform Testing

<span style="display:block; height:0.0px;"></span>

Consider a compliance tracking dashboard for pump groups:

  - Visually organize pump groups into three distinct categories:
    **In Compliance**, **Out of Compliance**, and **Excluded or Fully Stopped**

  - Use **spatial repositioning** (e.g. column layout) to create clear visual "chunks" of pump groups based on their compliance status

  - Apply consistent spacing and alignment within each group to reinforce classification

  - Evaluate how easily users can **track the pump groups that need attention**, rather than mentally scanning all pumps at once — especially during early morning reliability meetings when cognitive load is high

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Tested Platforms

<span style="display:block; height:0.0px;"></span>

#### ✅ AVEVA PI Vision — Supports Chunking

| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Visual grouping handled via analytics-driven tag logic and grouped containers. |
| **Display Build** | • Utilized Collections to categorize pump groups based on compliance status<br>• Timers, timestamps and time accumulations built to enhance comprehension of compliance situation |
| **Version Tested** | PI Vision 2024. PI Server 2018 SP3 |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 30px;">
  <img src="../images/chunking_pivision_1.gif" width="850px" style="margin: 0; display: block;" />
<p style="font-size: 0.85em; color: #777; margin: 0; padding-top: 4px; margin-bottom: 30px; line-height: 1.2;">
  To view the animation in a larger, more legible format, right-click on the GIF and select <em>"Open Image in New Tab"</em>.
</p>
  <img src="../images/chunking_pivision_2.PNG" width="70%" style="margin-bottom: 30px;" />
  <img src="../images/chunking_pivision_3.PNG" width="60%" style="margin-bottom: 30px;" />
  <img src="../images/chunking_pivision_4.PNG" width="55%" style="margin-bottom: 30px;" />
  <img src="../images/chunking_pivision_5.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/chunking_pivision_6.PNG" width="55%" style="margin-bottom: 30px;" />
</div>


</div>

<span style="display:block; height:0.0px;"></span>

#### Upcoming Vendor Testing

- Inductive Automation Perspective
- Tatsoft FrameworX

</div>

<div style="margin-top: 40px; font-size: 0.9em; color: #666;">
See which platforms have been tested for each SA concept in the <a href="../platform-support/sa-vendor-listing" style="text-decoration: none;">SA Vendor Listing</a>.
</div>