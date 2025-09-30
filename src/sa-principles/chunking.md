<div style="text-align: center; margin-bottom: 30px;">
  <img src="../images/chunking_infographic.png" alt="Classification Infographic" width="70%" />
  <div style="font-size: 0.9em; color: #888; text-align: center; margin-top: 10px; margin-bottom: 20px; padding-left: 0%;">
    Supports Comprehension
  </div>
</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Why It Matters

<span style="display:block; height:0.0px;"></span>

> **Classification** (formerly “Chunking” in this framework) helps users make sense of many data points by grouping them into meaningful categories.

- Operators often face many signals in very little time.
- Without clear categorization, working memory gets overwhelmed.
- Classification improves cognitive efficiency by visually organizing data into recognizable groups.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Operational Impact Examples

<span style="display:block; height:0.0px;"></span>

- **Reliability meeting dashboards:**  
  Categorizing out-of-compliance assets helps teams focus discussion and plan actions quickly.

- **Pump monitoring during shift change:**  
  Instead of scanning each pump, operators can review categories like “Running Too Long” or “All Stopped” to grasp the situation instantly.

- **Alarm review displays:**  
  Classifying alarms by source system (instrumentation, electrical) or likely root cause (flow blockage, power loss) speeds analysis and response.

> Classification bridges perception and action — enabling users to see what matters without assembling the puzzle mentally.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Cross-Domain Analogy

<span style="display:block; height:0.0px;"></span>

> **Air Traffic Control:**  
> Experienced controllers don’t track 30 individual planes in isolation — they classify them into meaningful sets like “arrivals,” “departures,” or “holding pattern.” This makes complexity manageable and improves decisions.

<div style="text-align: center; margin-top: 20px;">
  <img src="../images/chunking_realworldanalogy_inforgraphic.png" alt="Air traffic control grouping analogy" width="35%" />
</div>

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Typical Design Techniques

<span style="display:block; height:0.0px;"></span>

- **Section headings and labels:** Visually separate related items using titles, lines, or padding.
- **Color-coded categories:** Use consistent colors to bind items conceptually.
- **Whitespace and alignment:** Leverage layout to form natural group boundaries.
- **Spatial repositioning:** Move items between categories only when it aids comprehension.

The platform testing section below shows examples of these techniques in practice.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Use Case for Platform Testing

<span style="display:block; height:0.0px;"></span>

Consider a compliance tracking dashboard for pump groups:

  - Visually organize pump groups into three distinct categories:
    **In Compliance**, **Out of Compliance**, and **Excluded or Fully Stopped**.
  - Use **spatial layout** (e.g., three columns) to create clear visual categories.
  - Apply consistent spacing and alignment within each category to reinforce classification.
  - Evaluate how easily users can **identify which pump groups need attention**, rather than mentally scanning all pumps at once — especially during early-morning reliability meetings when cognitive load is high.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Tested Platforms

<span style="display:block; height:0.0px;"></span>

#### ✅ AVEVA PI Vision — Supports Classification

| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Visual categorization handled via analytics-driven tag logic and grouped containers. |
| **Display Build** | • Utilized Collections to categorize pump groups by compliance status<br>• Timers, timestamps and time accumulations enhance comprehension of compliance state |
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

#### ✅ Ignition Perspective — Supports Classification

| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Pump groups are modeled using UDTs and organized dynamically by compliance status. Categorization logic is handled via tag-driven rules and scripting within Flex Repeaters. |
| **Display Build** | • Three clearly separated columns show compliant, out-of-compliance, and stopped pump groups<br>• Each group contains dynamic runtime counters, timestamps, and compliance indicators<br>• Layout supports at-a-glance comparison and comprehension |
| **Version Tested** | Ignition 8.1.x (Perspective) |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 30px;">
  <img src="../images/chunking_ignition_1.gif" width="850px" style="margin: 0; display: block;" />
  <p style="font-size: 0.85em; color: #777; margin: 0; padding-top: 4px; margin-bottom: 30px; line-height: 1.2;">
    To view the animation in a larger, more legible format, right-click on the GIF and select <em>"Open Image in New Tab"</em>.
  </p>
  <img src="../images/chunking_ignition_2.PNG" width="70%" style="margin-bottom: 30px;" />
  <img src="../images/chunking_ignition_3.PNG" width="60%" style="margin-bottom: 30px;" />
  <img src="../images/chunking_ignition_4.PNG" width="55%" style="margin-bottom: 30px;" />
  <img src="../images/chunking_ignition_5.PNG" width="90%" style="margin-bottom: 30px;" />
  <img src="../images/chunking_ignition_6.PNG" width="95%" style="margin-bottom: 30px;" />
  <img src="../images/chunking_ignition_7.PNG" width="100%" style="margin-bottom: 30px;" />
</div>

#### Upcoming Vendor Testing

- Tatsoft FrameworX

</div>

<div style="margin-top: 40px; font-size: 0.9em; color: #666;">
See which platforms have been tested for each SA concept in the <a href="../platform-support/sa-vendor-listing" style="text-decoration: none;">SA Vendor Listing</a>.
</div>
