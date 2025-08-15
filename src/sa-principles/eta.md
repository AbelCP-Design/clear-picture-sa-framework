<div style="text-align: center; margin-bottom: 30px;">
  <img src="../images/eta_infographic.PNG" alt="Estimated Time to Full/Empty (ETA) Infographic" width="70%" />
  <div style="font-size: 0.9em; color: #888; text-align: center; margin-top: 10px; margin-bottom: 20px;">
    Supports Projection
  </div>
</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Why It Matters

<span style="display:block; height:0.0px;"></span>

- Operators make better decisions when they know **how long until** a critical state occurs—not just the current value.
- A clear **ETA to full/empty** shifts thinking from reaction to **planning** (e.g., schedule a swap, stage an operator, throttle a valve).
- Expressing the projection directly reduces mental math and avoids the **requisite memory trap** of remembering past levels and doing rate math on the fly.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Operational Impact Examples

<span style="display:block; height:0.0px;"></span>

- **Transfer line to surge tank:**  
  “ETA Full: 17 min” prompts a controlled setpoint reduction vs. a last-minute scramble.
- **Truck unloading bay:**  
  “ETA Empty: 9 min” lets logistics call the next truck and avoid idle time.
- **Batch step with feed ramp:**  
  An increasing ETA flags a drift in actual feed rate before limits are breached.

> Presenting ETA directly improves coordination and timing—two levers that often cost nothing but save hours.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Cross-Domain Analogy

<span style="display:block; height:0.0px;"></span>

> **GPS Arrival Time:**  
> Navigation apps don’t just show distance—they show **ETA** and keep it updated as your speed changes.  
> Operators benefit from the same pattern: surface **how long until** a state change at the current rate.

<div style="text-align: center; margin-top: 20px;">
  <img src="../images/eta_gps_analogy_.png" alt="GPS ETA Analogy" width="40%" />
</div>

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Typical Design Techniques

<span style="display:block; height:0.0px;"></span>

- **Direct ETA readout:** “ETA Full: 39 min” / “ETA Empty: 12 min.”
- **Smoothing of rate:** Light EMA or rolling slope to avoid flicker; suppress ETA when `|rate|` is below a threshold.
- **Context-aware units:** Rate of change expressed as percent or other process engineering units (%/min, gal/min, L/min, in/min).
- **Boundary handling:** When near min/max, show “—” or “At Full/Empty” instead of unstable ETAs.

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Use Case for Platform Testing

<span style="display:block; height:0.0px;"></span>

**Goal:** Display **Filling/Draining**, **Rate**, and **ETA** for a tank level using only runtime tags and a lightweight script.

**Inputs & outputs:**
The calculation uses the current tank level, configurable smoothing, and a minimum rate threshold to determine whether the tank is filling, draining, or stable. It outputs the rate of change, estimated time to full or empty, and a direction indicator, along with clear UI labels showing status, rate, and ETA.

**Output Labels Examples:**  
- ▲ **Filling** at `0.5 %/min` from 29.8% → **ETA Full:** 2h 16m  
- ▼ **Draining** at `0.7 %/min` from 65% → **ETA Empty:** 1h 33m  
- **Stable** when `|rate| < MinRate` → ETA shows “—”   

</div>

<div style="border: 1px solid #ddd; border-radius: 10px; padding: 20px 20px 30px 20px; margin: 30px 0 30px 0; background-color: #fafafa; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">

### Tested Platforms

<span style="display:block; height:0.0px;"></span>

#### ✅ FrameworX — Supports ETA (Time to Full/Empty)
<span style="display:block; height:0.0px;"></span>  
| Aspect | Notes |
| ------ | ----- |
| **Implementation Approach** | Server script with `@Tag` reads level, computes smoothed **rate (EMA)** and **ETA**; suppresses ETA when below threshold. |
| **Display Build** | Three labels bound separately: **Filling/Draining** (arrow Up/Down), **Rate**, **ETA**. Linear simulator drives fills/drains for testing. |
| **Version Tested** | 10.0.1.464 |

<div style="display: flex; flex-direction: column; align-items: center; margin-top: 30px;">
  <img src="../images/eta_frameworx_1.PNG" width="75%" style="margin-bottom: 30px;" />
  <img src="../images/eta_frameworx_2.PNG" width="55%" />
</div>

<span style="display:block; height:1.0px;"></span>

#### Upcoming Vendor Testing

- Ignition Perspective
- AVEVA PI Vision

</div>

<div style="margin-top: 40px; font-size: 0.9em; color: #666;">
Explore the <a href="../platform-support/sa-vendor-listing" style="text-decoration: none;">Clear Picture SA Vendor Matrix</a> to see how different platforms support ETA-aware design techniques.
</div>
