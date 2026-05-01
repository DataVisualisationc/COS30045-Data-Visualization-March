# Exercise 3 – Data Story: TV Energy Consumption

## Data Story

### Audience
**Australian Consumers**
This audience include individuals in the local market looking to purchase a new television with a focus on long-term sustainability and value. They are environmentally conscious buyers seeking the most energy-efficient technology types available, as well as household budgeters who are specifically interested in how TV characteristic, such as screen size, directly impact their electricity bills.

### Story Overview
This visualisation explores the "hidden costs" of television ownership. Unlike a standard technical report, this story uses a **6-step storyboard structure** (Issue, Demonstrate Issue, Idea, Description, Show Before/After, and Recommendation) to guide the viewer through four key discoveries:

- Which screen technologies are the most common and mainstream for local shoppers.
- The direct relationship between increasing screen size and higher power consumption.
- Which specific technologies, such as standard LCD, offer the lowest average energy consumption.
- How different brands vary in energy efficiency, impacting electricity bills.

---

## About the Data

### Data Source
The dataset is sourced from the Australian Government's Energy Rating site, specifically the registry for household television appliances. It contains standardized energy performance data, screen specifications, and manufacturer details for the Australian market.

Link of dataset: https://data.gov.au/data/dataset/energy-rating-for-household-appliances/resource/93a615e5-935e-4713-a4b0-379e3f6dedc9

### Data Processing
The dataset was processed using **KNIME** to transform raw data into the insights presented in the storyboard. The following steps were taken for each research question:
**Question 1:**
- CSV Reader node: Imported the raw Australian Government TV Energy Consumption dataset. 
- Column & Row Filter node: Used to filter out unnecessary data attributes and focus only on relevant variables like screen technology, size, and power usage.  
- String Manipulation node: Configured to filter for TVs sold specifically in the Australian market.
- Math Formula node: Used to convert screen size from centimeters to inches and round those values to the nearest whole number for consistent comparison.
- Duplicate Row Filter node: Applied to remove duplicate TV models and ensure each unique model is only counted once.  
- Rule Engine: Used to categorize and clean specific data points before visualization.

**Question 2:**
- GroupBy node: Used to group the data by screen size (in inches) and calculate the average mode power for each size.

**Question 3:** 
- GroupBy node: Aggregated the data by technology type to find the mean power consumption for each.
- Math Formula: Used to round the resulting average consumption numbers to 2 decimal places for better readability.

**Question 4:** 
- GroupBy node: Configured to group the data by Brand and calculate the average mode power per Brand.
- Math Formula: Used to round the resulting average consumption numbers to 2 decimal places for better readability.

**Conclusion**
- Cleaning: Using Column/Row filters to remove unnecessary data and String Manipulation to focus on Australian market models.
- Normalization: Converting measurements from cm to inches via Math Formula nodes and removing duplicates.
- Rounding: Using Math Formula nodes to round final consumption averages to 2 decimal places for clarity.

### Privacy
The dataset used in this project does not contain any personal or sensitive information. It consists solely of technical product specifications; no data relating to individual consumers or PII (Personally Identifiable Information) was used.

- Included Technical Product Specifications: The data focuses on objective hardware details such as brand, Screen Technology (e.g.LED, OLED), TV screen size in inches, and average mode power.
- Excluded Sensitive Information: The dataset strictly excludes any identifying details such as consumer names, home addresses, purchase histories, or payment information, ensuring that no individual’s identity or location is revealed by the analysis.

### Accuracy and Limitations
While the dataset provides verified information, certain limitations apply:
- It reflects current manufacturing standards, future advances in screen technology may change efficiency trends.
- It includes models registered with the Australian government and may exclude some international products.
- Technical specifications may vary as manufacturers update their product lines.

### Ethics
This project follows ethical data visualisation practices by:
- Clearly linking every finding back to the official government dataset.
- Presenting brand and technology comparisons without commercial bias to support the consumer's "Right to be Informed".
- Using a structured storyboard to ensure findings are not taken out of context.

---

## AI Declaration
ChatGPT was used to assist with this assignment by:
- Fixing grammar
- Structuring the code to properly align images and text (the storyboard) on the left and right respectively

All AI-generated content was reviewed, modified to match specific data results, and integrated responsibly into the project.
