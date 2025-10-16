<div style="text-align: center; margin-bottom: 30px;">
  <img src="../images/data_confidence_infographic.png" alt="Data Confidence Infographic" width="55%" />
  <div style="font-size: 0.9em; color: #888; text-align: center; margin-top: 10px; margin-bottom: 20px;">
    Supports Perception & Comprehension
  </div>
</div>

<div style="border-left: 3px solid #ccc; padding: 10px 20px; margin-bottom: 30px; background-color: #f9f9f9; border-radius: 6px; font-size: 0.9em; color: #555;">
  <em>Note: “Data Confidence” represents one form of data uncertainty.  
  At a later stage, this concept will be merged into a new <strong>Uncertainty Representation</strong></a> SA Concept, to provide a more integrated description of information reliability.</em>
</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Why It Matters

<span style="display:block; height:0.0px;"></span>

> **Data Confidence** helps operators assess how much trust to place in the displayed information — especially when that information is **calculated or computed** from multiple inputs.

- Calculated values often depend on several sensor readings or data sources.  
- If one input is stale, missing, or unreliable, the calculated result may no longer represent reality.  
- Providing a clear sense of confidence allows users to **balance trust and verification**, rather than assuming all data is equally reliable.  
- When confidence is visible, users can act with awareness — not assumption.

<div style="text-align: center; margin-top: 10px;">
  <p style="font-size: 0.85em; color: #777; margin: 0;">
    <em>Related to Endsley’s Principle 13: “Support Assessment of Confidence in Composite Data.”</em>
  </p>
</div>

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Operational Impact Examples

<span style="display:block; height:0.0px;"></span>

- **Calculated totals:**  
  Confidence in computed values (like *total tank volume* or *total downtime*) helps users gauge whether inputs were **valid, synchronized, and complete**.  

- **Model-based estimates:**  
  When displayed data blends measured and predicted inputs, a confidence score clarifies **how much reflects actual readings versus modeled assumptions**.  

- **Averaged readings:**  
  When several sensors feed an average, confidence should decrease if one goes stale or off-scale, signaling potential **distortion of the calculated result**.  

> Confidence displays don’t just show what the system *knows* —  
> they reveal *how sure* it is about what it knows.

</div>


<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Cross-Domain Analogy

<span style="display:block; height:0.0px;"></span>

> **Weather Forecasting:**  
> Meteorologists don’t just predict that rain *will* or *won’t* occur — they communicate a probability (“70 % chance of rain”).  
> Likewise, operators benefit when calculated data conveys its **degree of certainty**, not a binary “true/false” impression.

<div style="text-align: center; margin-top: 20px;">
  <img src="../images/uncertainty_analogy.png" alt="Weather forecast analogy showing confidence as probability" width="37%" />
</div>

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Typical Design Techniques

<span style="display:block; height:0.0px;"></span>

- **Confidence bars or shading:** Visually represent reliability beneath or beside a calculated value.  
- **Numerical confidence score (%):** Provide a direct readout of certainty for computed results.  
- **Symbolic cues:** Use icons (✓ / ⚠ / ?) or color states (green → amber → red) to express trust level.  
- **Contextual links:** Allow drill-down to see *which input sources* are lowering confidence.

These techniques help users quickly judge the **trustworthiness of calculated data**, not merely observe its magnitude.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Use Case for Platform Testing

<span style="display:block; height:0.0px;"></span>

Consider a dashboard that calculates **Total Volume** from four tanks:

- Each tank reports its level and timestamp.  
- When a tank’s data becomes stale or invalid, its weight in the total confidence decreases.  
- A **confidence bar** below the total shows the aggregate reliability (0–100 %), allowing quick visual judgment of the overall data quality.

Evaluate how well the platform helps users *see reliability at a glance* — can they immediately sense when a calculated value might not represent reality?

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Tested Platforms

<span style="display:block; height:0.0px;"></span>

#### ✅ Ignition Perspective — Supports Confidence Representation

| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Four simulated tanks produce random volume values with adjustable staleness. Each tank’s update age feeds into a decaying confidence model that determines the reliability of the total. |
| **Display Build** | • Confidence bar below total dynamically adjusts from 100 → 0 % as inputs age <br>• Hold switches allow simulated stale conditions for testing |
| **Version Tested** | Ignition 8.1.x (Perspective) |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 30px;">
  <img src="../images/uncertainty_ignition_1.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/uncertainty_ignition_2.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/uncertainty_ignition_3.PNG" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/uncertainty_ignition_4.PNG" width="70%" style="margin-bottom: 30px;" />
  <img src="../images/uncertainty_ignition_5.PNG" width="70%" style="margin-bottom: 30px;" />
</div>

#### ✅ Tatsoft FrameworX — Supports Confidence Representation

| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Four simulated tanks generate random level values within a configurable range. Each tank includes a *Hold Updates* toggle that pauses data changes, allowing its **Age (min)** to increase. A decaying confidence function reduces reliability as the age approaches a configurable threshold (`Conf_StaleAfterMin`). |
| **Display Build** | • Real-time simulation script built in a **Periodic Task** updates tank levels and confidence values.<br>• Each tank includes an individual confidence percentage and a *Hold* switch to simulate stale data.<br>• A **Total Confidence Bar** dynamically adjusts from 100 → 0 % based on the average of all active tanks.<br>• Once a tank exceeds its staleness threshold, its `Tank#Stale` flag activates and the total confidence drops proportionally. |
| **Version Tested** | 10.0.1.464 |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 30px;">
  <img src="../images/uncertainty_frameworx_1.png" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/uncertainty_frameworx_2.png" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/uncertainty_frameworx_3.png" width="100%" style="margin-bottom: 30px;" />
  <img src="../images/uncertainty_frameworx_4.png" width="70%" style="margin-bottom: 30px;" />
  <img src="../images/uncertainty_frameworx_5.png" width="70%" style="margin-bottom: 30px;" />
</div>

#### Upcoming Vendor Testing

- TBD 

</div>

<div style="margin-top: 40px; font-size: 0.9em; color: #666;">
Explore how other platforms handle uncertainty and freshness in the <a href="../platform-support/sa-vendor-listing" style="text-decoration: none;">SA Vendor Listing</a>.
</div>
