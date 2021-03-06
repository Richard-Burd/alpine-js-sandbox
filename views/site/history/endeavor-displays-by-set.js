// import the JSON database

let json_data = [
  {
    "Endeavor": "Manure Digester Bags, Vietnam (10 Year Model)",
    "Set": "Ecology & Environment",
    "Cost": "424.0 (US Dollars)",
    "Cost Explanation": "The cost to setup a single digester bag for a subsistance family farm in a developing nation",
    "Benefit": "1.95 (thousands USD)",
    "Benefit Explanation": "The total benefit over the 10 year period of the bag's lifetime",
    "References": "Bentzen et al.  <a href='http://203.159.5.126/index.php/reric/article/view/1825'>[9]</a>"
  },
  {
    "Endeavor": "Landfill Recycling, China (3 Year Model)",
    "Set": "Ecology & Environment",
    "Cost": "7.0 (millions USD)",
    "Cost Explanation": "Spending for 3 years of excavation and hauling at Yingchun landfill in China",
    "Benefit": "9.32 (millions USD)",
    "Benefit Explanation": "Land reclamation, material recycling. and electricity generation by incineration",
    "References": "Zhou et al. [china_landfill]"
  },
  {
    "Endeavor": "Lear's Macaw Species Preservation, Brazil (1992-2017)",
    "Set": "Ecology & Environment",
    "Cost": "3.85 (millions USD)",
    "Cost Explanation": "Cost of on site habitat preservation and protection of species",
    "Benefit": "368.43 (thousands USD)",
    "Benefit Explanation": "These benefits are limited to economic benefits only, and not the ecological or social benefits of not losing another species on the planet",
    "References": "Barbosa et al. [lears_macaw]"
  },
  {
    "Endeavor": "Coastal Flooding Management, U.K. (2007-2017)",
    "Set": "Ecology & Environment",
    "Cost": "154.0 (millions USD)",
    "Cost Explanation": "Surrendering farmland (lesser acrage) by moving dikes to regenerate wetlands in the Humber estuary located in Northwest England",
    "Benefit": "244.0 (millions USD)",
    "Benefit Explanation": "Long term flooding & destruction of farmland (greater acrage) avoided",
    "References": "Burgess et al. [coastal_managed]"
  },
  {
    "Endeavor": "Wastewater Treatment, Serbia (2015-2044)",
    "Set": "Ecology & Environment",
    "Cost": "15.12 (millions USD)",
    "Cost Explanation": "Capital and maintenance from 2015 to 2044",
    "Benefit": "24.72 (millions USD)",
    "Benefit Explanation": "Reduced pollution and increased health",
    "References": "Djukic et al. [wastewater]"
  },
  {
    "Endeavor": "Recycling Pig Manure, Taiwan (Cost per Ton)",
    "Set": "Ecology & Environment",
    "Cost": "150.81 (US Dollars)",
    "Cost Explanation": "Cost to produce one ton of material",
    "Benefit": "162.16 (US Dollars)",
    "Benefit Explanation": "Economic benefit provided by one ton of material",
    "References": "Hsu [taiwan_waste]"
  },
  {
    "Endeavor": "Recycling Hen & Cattle Dung, Taiwan (Cost per Ton)",
    "Set": "Ecology & Environment",
    "Cost": "162.16 (US Dollars)",
    "Cost Explanation": "Cost to produce one ton of material",
    "Benefit": "437.83 (US Dollars)",
    "Benefit Explanation": "Economic benefit provided by one ton of material",
    "References": "Hsu [taiwan_waste]"
  },
  {
    "Endeavor": "Flood Risk Reduction w/Afforestation, U.K. (75 Year Model)",
    "Set": "Ecology & Environment",
    "Cost": "1.67 (millions USD)",
    "Cost Explanation": "Cost of planting & maintaining new vegetation",
    "Benefit": "4.0 (millions USD)",
    "Benefit Explanation": "Social benefits from afforestation project",
    "References": "Dittrich et al. [flood_management]"
  },
  {
    "Endeavor": "Irrigation Modernization, Spain (25 Year Model)",
    "Set": "Ecology & Environment",
    "Cost": "1.43 (billions USD)",
    "Cost Explanation": "Construction and maintenance to modernize 25% of Spain's irrigated land",
    "Benefit": "5.84 (billions USD)",
    "Benefit Explanation": "Reduced water & fertilizer use over a 25 year period",
    "References": "M.Borrego & Berbel [irrigation_modernization]"
  },
  {
    "Endeavor": "River Restoration, Switzerland (35 Year Model)",
    "Set": "Ecology & Environment",
    "Cost": "63.46 (millions USD)",
    "Cost Explanation": "Moving sediment with bulldozer to encourage growth of flora and its habitation of fauna",
    "Benefit": "862.53 (millions USD)",
    "Benefit Explanation": "Benefits of nature preservation and revitalization over a 35 year period",
    "References": "Logar et al. [river_restoration]"
  },
  {
    "Endeavor": "Shale and Gas Exploration, Romania (2017-2047)",
    "Set": "Ecology & Environment",
    "Cost": "147.5 (billions USD)",
    "Cost Explanation": "Cost of drilling and environmental impacts to Romanian society",
    "Benefit": "83.55 (billions USD)",
    "Benefit Explanation": "Societial benefits to Romania over a 30 year period from 2017 to 2047",
    "References": "Grecu et al. [romania_oil]"
  },
  {
    "Endeavor": "Three Gorges Dam, China (1993-2100)",
    "Set": "Energy Production & Efficiency",
    "Cost": "124.39 (billions USD)",
    "Cost Explanation": "Three Gorges Dam: estimated construction costs, archeological losses, resettlement costs, and other costs",
    "Benefit": "192.22 (billions USD)",
    "Benefit Explanation": "Economic growth, clean energy generation, flood control, navigation",
    "References": "Morimoto and Hope [three_gorges]"
  },
  {
    "Endeavor": "Industrial Energy Efficiency, U.S. (Annual)",
    "Set": "Energy Production & Efficiency",
    "Cost": "90.0 (millions USD)",
    "Cost Explanation": "Total cost of a set of industrial energy efficiency projects in the US",
    "Benefit": "510.0 (millions USD)",
    "Benefit Explanation": "Energy savings and productivity gains, assuming a 7% discount rate and a 20 year lifetime.",
    "References": "Worrell et al. [worrell2001]"
  },
  {
    "Endeavor": "Energy Efficiency Regulation, USDOE (Annual)",
    "Set": "Energy Production & Efficiency",
    "Cost": "10.07 (billions USD)",
    "Cost Explanation": "Annual monetized costs of regulations by the Department of Energy implemented 2006-15. Estimate is taken as sum of midpoints of costs for all rules.",
    "Benefit": "29.31 (billions USD)",
    "Benefit Explanation": "Monetized benefits of regulations",
    "References": "OMB [omb2017]"
  },
  {
    "Endeavor": "Efficient Water Heater Requirement for New Homes, U.S. (10 Year Model)",
    "Set": "Energy Production & Efficiency",
    "Cost": "29.24 (millions USD)",
    "Cost Explanation": "Cost of purchasing materials for all new homes built in the state of North Carolina",
    "Benefit": "107.76 (millions USD)",
    "Benefit Explanation": "Social benefits from increased energy efficiency and reduced carbon emmissions over a 10 year period",
    "References": "Carroll & Couzo [nc_water_heater]"
  },
  {
    "Endeavor": "Grid-Scale Electrical Energy Storage, G.B. (2017-2020)",
    "Set": "Energy Production & Efficiency",
    "Cost": "17.84 (millions USD)",
    "Cost Explanation": " Lithium battery placed at the Leighton Buzzard Primary substation",
    "Benefit": "21.52 (millions USD)",
    "Benefit Explanation": "Cost savings from 2017 to 2020 during peak demand periods",
    "References": "Sidhu et al. [gb_storage]"
  },
  {
    "Endeavor": "Energy Crops in Urban Parks, Poland (20 Year Model)",
    "Set": "Energy Production & Efficiency",
    "Cost": "3.93 (millions USD)",
    "Cost Explanation": "Benefit is a net present value since the cost is offset from grass mantainance ",
    "Benefit": "4.84 (millions USD)",
    "Benefit Explanation": "Unsightly grass is removed from parks and replaced with plants that can be harvested for biofules in winter",
    "References": "Sikorska et al. [sikorska]"
  },
  {
    "Endeavor": "Acid Rain Program, U.S. (2010)",
    "Set": "Pollution Regulations",
    "Cost": "4.58 (billions USD)",
    "Cost Explanation": "Per year, 2010. Industry compliance costs with SO<sub>2</sub> and NO<sub>x</sub> controls.",
    "Benefit": "186.45 (billions USD)",
    "Benefit Explanation": "Per year, 2010. Mostly monetized health benefits, some scenic and ecosystem benefits.",
    "References": "Chestnut and Mills [acidrain]"
  },
  {
    "Endeavor": "Phaseout of Gasoline Lead, U.S. (1983 - 1986)",
    "Set": "Pollution Regulations",
    "Cost": "4.73 (billions USD)",
    "Cost Explanation": "Compliance cost of refiners, 1983-86",
    "Benefit": "64.58 (billions USD)",
    "Benefit Explanation": "Monetized health benefits, improved fuel economy, lower maintenance costs, 1983-86",
    "References": "Newell and Rogers [newell]"
  },
  {
    "Endeavor": "Renewable Portfolio Standards, U.S. (2015-2050)",
    "Set": "Pollution Regulations",
    "Cost": "33.76 (billions USD)",
    "Cost Explanation": "Existing RPS in the US. Net increase or decrease in electricity cost. Estimated at $(+34 to -34), so the given ROI is a lower bound based on the study.",
    "Benefit": "280.93 (billions USD)",
    "Benefit Explanation": "Reduced pollution and greenhouse gas emissions",
    "References": "Mai et al. [rps_cb]"
  },
  {
    "Endeavor": "Montreal Protocol on Ozone, World (1987-2060)",
    "Set": "Pollution Regulations",
    "Cost": "381.04 (billions USD)",
    "Cost Explanation": "World cost of replacing ozone depleting substances, 1987-2060",
    "Benefit": "2.54 (trillions USD)",
    "Benefit Explanation": "Health benefits, reduced damage to fisheries, agriculture, and materials.",
    "References": "Benefits from Markandya and Dale [montreal], costs from G\\u00e5verud [montreal2]"
  },
  {
    "Endeavor": "Vehicle Exhaust Catalyst Mandate, U.K. (1993-2005)",
    "Set": "Pollution Regulations",
    "Cost": "3.65 (billions USD)",
    "Cost Explanation": "Cost of converters, 1993-2005",
    "Benefit": "6.32 (billions USD)",
    "Benefit Explanation": "Monetized health benefits, 1993-2005",
    "References": "Hutchinson and Pearson [vec_uk]"
  },
  {
    "Endeavor": "Bottle Deposit Program, Israel (Annual)",
    "Set": "Pollution Regulations",
    "Cost": "36.3 (millions USD)",
    "Cost Explanation": "Cost of a bottle deposit program in Israel",
    "Benefit": "50.0 (millions USD)",
    "Benefit Explanation": "Financial and environmental benefits",
    "References": "Lavee [lavee]"
  },
  {
    "Endeavor": "Air Pollution Control, China (2013-2017)",
    "Set": "Pollution Regulations",
    "Cost": "240.0 (billions USD)",
    "Cost Explanation": "Burden imposed on air polluters",
    "Benefit": "342.0 (billions USD)",
    "Benefit Explanation": "Costs to public health that were conserved through cleaner air",
    "References": "Zhang et al. [china_air]"
  },
  {
    "Endeavor": "Mercury Reduction, Australia (All future benefits/costs after ratification.)",
    "Set": "Pollution Regulations",
    "Cost": "145.29 (millions USD)",
    "Cost Explanation": "Australian industry cost of complying with Minamata Convention (Net Present Value)",
    "Benefit": "441.0 (millions USD)",
    "Benefit Explanation": "Health benefit to Australia, net present value",
    "References": "Department of the Environment and Energy [mercury2]"
  },
  {
    "Endeavor": "Antibiotics Conservation, Canada (2005)",
    "Set": "Public Health Campaigns",
    "Cost": "4.7 (millions USD)",
    "Cost Explanation": "Cost of implementing an antibiotic conservation program in Alberta in 2005. (Actual value is about $4.7 million but got rounded away.)",
    "Benefit": "360.0 (millions USD)",
    "Benefit Explanation": "Cost of antibiotics that were conserved",
    "References": "Manun et al. [manun]"
  },
  {
    "Endeavor": "Sunscreen Campaign, Australia (2006-2013)",
    "Set": "Public Health Campaigns",
    "Cost": "16.7 (millions USD)",
    "Cost Explanation": "Mass media public education campaign to wear sunscreen in New South Wales, Australia",
    "Benefit": "60.0 (millions USD)",
    "Benefit Explanation": "Avoided skin cancer and death",
    "References": "Doran et al. [sunscreen]"
  },
  {
    "Endeavor": "Smoking Cessation, U.S. (Annual)",
    "Set": "Public Health Campaigns",
    "Cost": "190.0 (millions USD)",
    "Cost Explanation": "Estimated cost based on analysis of providing smoking cessation under Affordable Care Act plans.",
    "Benefit": "660.0 (millions USD)",
    "Benefit Explanation": "Estimated savings of commercial, Medicare, and Medicaid claims.",
    "References": "Baker et al. [smoking_cessation]"
  },
  {
    "Endeavor": "Fruit & Vegetable Subsidy, Netherlands (2020-2050)",
    "Set": "Public Health Campaigns",
    "Cost": "120.0 (millions USD)",
    "Cost Explanation": "Costs for administering the policy from 2020 to 2050",
    "Benefit": "2.27 (billions USD)",
    "Benefit Explanation": "Redction in health and environmental costs associated with more meat consumption",
    "References": "Broeks et al. [broeks]"
  },
  {
    "Endeavor": "15% Meat Tax, Netherlands (2020-2050)",
    "Set": "Public Health Campaigns",
    "Cost": "25.64 (billions USD)",
    "Cost Explanation": "No costs for administering policy and benefit is a net present value",
    "Benefit": "29.34 (billions USD)",
    "Benefit Explanation": "Redction in health and environmental costs associated with more meat consumption",
    "References": "Broeks et al. [broeks]"
  },
  {
    "Endeavor": "30% Meat Tax, Netherlands (2020-2050)",
    "Set": "Public Health Campaigns",
    "Cost": "49.26 (billions USD)",
    "Cost Explanation": "No costs for administering policy and benefit is a net present value",
    "Benefit": "54.15 (billions USD)",
    "Benefit Explanation": "Redction in health and environmental costs associated with more meat consumption",
    "References": "Broeks et al. [broeks]"
  },
  {
    "Endeavor": "Anti-Bullying Campaign, Netherlands (2012-2014)",
    "Set": "Public Health Campaigns",
    "Cost": "241.0 (US Dollars)",
    "Cost Explanation": "Government spending on KiVa anti-bullying program for secondary students",
    "Benefit": "970.0 (US Dollars)",
    "Benefit Explanation": "Cumulative benefits in terms of life quality per student",
    "References": "Beckman and Svensson [anti_bullying]"
  },
  {
    "Endeavor": "truth\u00ae Anti-smoking Campaign, U.S. (2000-2002)",
    "Set": "Public Health Campaigns",
    "Cost": ">391.0 (millions USD)",
    "Cost Explanation": "Expenditures to develop, deliver, evaluate, and litigate the truth\u00ae campaign",
    "Benefit": "<2.29 (billions USD)",
    "Benefit Explanation": "Benefits for society in health & medicine ",
    "References": "Holtgrave et al. [anti_smoking]"
  },
  {
    "Endeavor": "Smallpox Eradication, World (1959-1977)",
    "Set": "Public Health Projects",
    "Cost": "1.48 (billions USD)",
    "Cost Explanation": "World expenditures on eradication program",
    "Benefit": "234.37 (billions USD)",
    "Benefit Explanation": "Avoided vaccination costs and avoided deaths, 3% discount rate",
    "References": "Barrett [smallpox]"
  },
  {
    "Endeavor": "Earthquake Risk Mitigation for Schools, World (50 Year Model)",
    "Set": "Public Health Projects",
    "Cost": "238.62 (billions USD)",
    "Cost Explanation": "Retrofitting schools in countries with high earthquake risk",
    "Benefit": "876.48 (billions USD)",
    "Benefit Explanation": "Benefit, primarily based on stastical value of life",
    "References": "Kunreuther and Michel-Kerjan [disaster_risk]"
  },
  {
    "Endeavor": "COVID-19 Lockdown, U.K. (June 2020 to August 2020)",
    "Set": "Public Health Projects",
    "Cost": "116.0 (billions USD)",
    "Cost Explanation": "Total social cost to United Kingdom (economic & health)",
    "Benefit": "9.6 (billions USD)",
    "Benefit Explanation": "Total social benefit to United Kingdom in terms of health",
    "References": "Miles et al. [uk_covid]"
  },
  {
    "Endeavor": "MDMA Therapy for PTSD, U.S. (2021-2051)",
    "Set": "Public Health Projects",
    "Cost": "7.0 (millions USD)",
    "Cost Explanation": "Costs associated with Psychotherapy sessions and MDMA tablets",
    "Benefit": "111.0 (millions USD)",
    "Benefit Explanation": "Increased income and other measures of life quality",
    "References": "Kahn et al. [mdma]"
  },
  {
    "Endeavor": "Violence Against Women Act, U.S. (1994-1999)",
    "Set": "Public Health Projects",
    "Cost": "2.86 (billions USD)",
    "Cost Explanation": "Government spending on programs including violence prevention, crisis centers, legal aid, & eviction protections",
    "Benefit": "29.3 (billions USD)",
    "Benefit Explanation": "Cost savings in medical & mental health care, police response, victim services, lost productivity, as well as reduced quality of life and death.",
    "References": "Andersen et al. [vawa]"
  },
  {
    "Endeavor": "Polio Vaccination Campaign, U.S. (1955-2005)",
    "Set": "Public Health Projects",
    "Cost": "8.1 (billions USD)",
    "Cost Explanation": "Total costs of all polio vaccine stratagies from 1935 to 2005",
    "Benefit": "1.8 (trillions USD)",
    "Benefit Explanation": "Costs of medical care that were averted without incorporating costs of suffering and death",
    "References": "Tompson and Tebbens [polio]"
  },
  {
    "Endeavor": "Supervised Injection Facility, U.S. (Annual)",
    "Set": "Public Health Projects",
    "Cost": "2.78 (millions USD)",
    "Cost Explanation": "Yearly cost to staff and operate facility",
    "Benefit": "5.13 (millions USD)",
    "Benefit Explanation": "Potential savings from averted medical costs and overdose deaths",
    "References": "Irwin et al. [sf_injection]"
  },
  {
    "Endeavor": "Treatment of Juvenile Males, U.S. (Annual)",
    "Set": "Public Health Projects",
    "Cost": "325.87 (thousands USD)",
    "Cost Explanation": "Cost for 53 months of program durration",
    "Benefit": "391.19 (thousands USD)",
    "Benefit Explanation": "Reduction in spending on criminal justice and prison expenses",
    "References": "Caldwell et al. [delinquent]"
  },
  {
    "Endeavor": "Government Compensation for Kidney Donors, U.S. (Annual)",
    "Set": "Public Health Projects",
    "Cost": "18.3 (billions USD)",
    "Cost Explanation": "Annual medical costs for kidney donors in the United States",
    "Benefit": "74.0 (billions USD)",
    "Benefit Explanation": "Welfare gain and savings from stopping dailysis treatment",
    "References": "McCormick et al. [kidney_donors]"
  },
  {
    "Endeavor": "COVID-19 Lockdown, U.S. (March 2020 to July 2020)",
    "Set": "Public Health Projects",
    "Cost": "331.5 (billions USD)",
    "Cost Explanation": "Total social cost in terms of lives lost and economic activity (from early March to August 1st of 2020)",
    "Benefit": "605.9 (billions USD)",
    "Benefit Explanation": "Total social benefit in terms of lives lost and economic activity (from early March to August 1st of 2020)",
    "References": "Broughel & Kotrous [us_covid]"
  },
  {
    "Endeavor": "Anti-Malaria Campaign, China (2005-2019)",
    "Set": "Public Health Projects",
    "Cost": "12.39 (millions USD)",
    "Cost Explanation": "Professional training, salaries, blood collection, & examinations",
    "Benefit": "2.37 (billions USD)",
    "Benefit Explanation": "Social benefits from avioding sickness & death due to malaria",
    "References": "Huang et al. [fujian_malaria]"
  },
  {
    "Endeavor": "Bovine Viral Diarrhoea Eradication, Austria (1998-2004)",
    "Set": "Public Health Projects",
    "Cost": "1.83 (millions USD)",
    "Cost Explanation": "Economic costs of vaccination and monitoring",
    "Benefit": "2.16 (millions USD)",
    "Benefit Explanation": "Economic benefits of avoiding sick and dead cattle",
    "References": "Marschik et al. [bovine]"
  },
  {
    "Endeavor": "Distribution of Water Filters & Efficient Stoves, Rwanda (2013-2018)",
    "Set": "Public Health Projects",
    "Cost": "12.23 (millions USD)",
    "Cost Explanation": "Cost to manufacture & distribute water filters and cookstoves",
    "Benefit": "68.46 (millions USD)",
    "Benefit Explanation": "Social benefits in avoiding sickness, death and paying more in cooking fuel costs",
    "References": "Barstow et al. [rwanda_cookstove]"
  },
  {
    "Endeavor": "Human Genome Project, World (1990-2010)",
    "Set": "Research and Development",
    "Cost": "6.67 (billions USD)",
    "Cost Explanation": "Government spending over the project lifetime, 1990-2003",
    "Benefit": "947.66 (billions USD)",
    "Benefit Explanation": "Cumulative induced economic activity through 2010",
    "References": "Tripp and Grueber [human_genome_project]"
  },
  {
    "Endeavor": "Combustion Engine R&D, USDOE (1986-2007)",
    "Set": "Research and Development",
    "Cost": "530.0 (millions USD)",
    "Cost Explanation": "Department of Energy spending on combustion engine R&D, 1986-2007",
    "Benefit": "28.23 (billions USD)",
    "Benefit Explanation": "Discounted monetized economic and health benefits",
    "References": "Link [combustion_rd]"
  },
  {
    "Endeavor": "Building Technology R&D, U.S. (1976-2015)",
    "Set": "Research and Development",
    "Cost": "360.0 (millions USD)",
    "Cost Explanation": "Building Technologies Office investment in R&D, 1976-2015",
    "Benefit": "15.31 (billions USD)",
    "Benefit Explanation": "Monetized energy and resource savings attributable to investment",
    "References": "Gallaher et al., 2017 [bto_review]"
  },
  {
    "Endeavor": "Building Energy Efficiency, Qatar (Annual)",
    "Set": "Research and Development",
    "Cost": "2.05 (billions USD)",
    "Cost Explanation": "Cost of retrotting buildings in Qatar",
    "Benefit": "13.4 (billions USD)",
    "Benefit Explanation": "Energy savings, assuming 7% discount rate and 20 year lifetime.",
    "References": "Krarti et al. [krarti]"
  },
  {
    "Endeavor": "NASA Life Sciences R&D, select projects (1959-2002)",
    "Set": "Research and Development",
    "Cost": "420.0 (millions USD)",
    "Cost Explanation": "R&D spending by NASA and induced private sector spending, select projects",
    "Benefit": "2.39 (billions USD)",
    "Benefit Explanation": "Value added from products attributable to R&D spending",
    "References": "Hertzfeld [nasa_spinoff]"
  },
  {
    "Endeavor": "Wind Energy R&D, USDOE (1976-2008)",
    "Set": "Research and Development",
    "Cost": "1.72 (billions USD)",
    "Cost Explanation": "Department of Energy spending on wind technologies, 1976-2008",
    "Benefit": "8.72 (billions USD)",
    "Benefit Explanation": "Health and economic benefits attributable to R&D spending",
    "References": "Pelsoci [pelsoci]"
  },
  {
    "Endeavor": "Geothermal R&D, USDOE, (1980-2008)",
    "Set": "Research and Development",
    "Cost": "2.03 (billions USD)",
    "Cost Explanation": "Department of Eergy R&D spending on geothermal technologies, 1980-2008",
    "Benefit": "9.87 (billions USD)",
    "Benefit Explanation": "Discounted monetized economic, environmental, and energy security benefits attributable to investment",
    "References": "Gallaher et al., 2010 [geothermal_research]"
  },
  {
    "Endeavor": "Hybrid + Electric Vehicle R&D, USDOE (1992-2012)",
    "Set": "Research and Development",
    "Cost": "1.11 (billions USD)",
    "Cost Explanation": "Department of Energy R&D spending on hybrid and electric vehicles, 1992-2012",
    "Benefit": "4.01 (billions USD)",
    "Benefit Explanation": "Discounted monetized energy and CO<sub>2</sub> emissions savings",
    "References": "Link et al. [hybrid_electric_review]"
  },
  {
    "Endeavor": "Solar Photovoltaic R&D, USDOE (1975-2008)",
    "Set": "Research and Development",
    "Cost": "4.53 (billions USD)",
    "Cost Explanation": "Department of Energy R&D spending on solar photovoltaics, 1975-2008",
    "Benefit": "8.3 (billions USD)",
    "Benefit Explanation": "Discounted monetized energy and pollution savings attributable to investment",
    "References": "O'Connor et al. [solar_research]"
  },
  {
    "Endeavor": "National Institutes of Health, U.S. (2020)",
    "Set": "Research and Development",
    "Cost": "41.7 (billions USD)",
    "Cost Explanation": "FY2020 budget appropriation for the NIH",
    "Benefit": "61.3 (billions USD)",
    "Benefit Explanation": "Estimated market value of drugs that result from patents",
    "References": "Azoulay et al. [nih], NIH [nih_budget]"
  },
  {
    "Endeavor": "Large Haldron Collider, World (1998-2025)",
    "Set": "Research and Development",
    "Cost": "19.37 (billions USD)",
    "Cost Explanation": "Past and future capital and operational expenditures for  building, upgrading,and operating the machine and conducting experiments,",
    "Benefit": "23.53 (billions USD)",
    "Benefit Explanation": "Social benefits in terms of scientific discovery and economic activity",
    "References": "Florio et al. [hadron]"
  },
  {
    "Endeavor": "Interstate Highway System, U.S. (1950-1989)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "549.69 (billions USD)",
    "Cost Explanation": "Construction cost through 1995",
    "Benefit": "3.3 (trillions USD)",
    "Benefit Explanation": "Reduced costs to industry. Rate of return estimated for all US highway spending from 1950 to 1989.",
    "References": "Cox and Love [cox_highway], FHWA [fhwa]"
  },
  {
    "Endeavor": "Congestion Pricing, Sweeden (Annual)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "910.0 (millions USD)",
    "Cost Explanation": "Stockholm system, investment cost and annual maintenance cost, 5% discount rate",
    "Benefit": "2.33 (billions USD)",
    "Benefit Explanation": "Monetized benefit of reduced travel time, net revenue change to city, environmental, and safety benefit",
    "References": "Eliasson [eliasson]"
  },
  {
    "Endeavor": "Transportation Safety Regulations, U.S. (2006-2015)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "11.86 (billions USD)",
    "Cost Explanation": "Annual monetized cost of 24 transportation safety regulations adopted in the United States from 2006-2015",
    "Benefit": "29.02 (billions USD)",
    "Benefit Explanation": "Monetized benefit of regulations",
    "References": "OMB [omb2017]"
  },
  {
    "Endeavor": "Airport Expansion, New Zealand (2016-2059)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "990.0 (millions USD)",
    "Cost Explanation": "Estimated cost of an airport expansion in Wellington, New Zealand (median option)",
    "Benefit": "1.61 (billions USD)",
    "Benefit Explanation": "Estimated economic benefit",
    "References": "Murray et al. [nz_airport]"
  },
  {
    "Endeavor": "Repairing Existing Road Newtork, Albania (25 Year Model)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "64.39 (millions USD)",
    "Cost Explanation": "Repairing existing road infrastructure throughout Albania as currently laid out (25 years into the future, modeled)",
    "Benefit": "19.8 (millions USD)",
    "Benefit Explanation": "Total social benefit from the current road layout being repaired without rerouting roads",
    "References": "Xiong et al. [albania]"
  },
  {
    "Endeavor": "Airport Runway Extension, U.K. (2014-2050)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "41.6 (billions USD)",
    "Cost Explanation": "Total social cost to UK for 36 years from 2014 to 2050",
    "Benefit": "73.66 (billions USD)",
    "Benefit Explanation": "Total social benefit to UK for 36 years from 2014 to 2050",
    "References": "Airports Commission, UK [uk_airport]"
  },
  {
    "Endeavor": "Airport Runway Extension, Malaysia (2019-2030)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "5.8 (millions USD)",
    "Cost Explanation": "Total social cost to Malaysia for 11 years from 2019 to 2030",
    "Benefit": "19.64 (millions USD)",
    "Benefit Explanation": "Total social benefit to Malaysia for 11 years from 2019 to 2030",
    "References": "Yang & Gao [malaysia_airport]"
  },
  {
    "Endeavor": "Interstate Corridor Extension, Southwest U.S. (2024-2054)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "7.51 (billions USD)",
    "Cost Explanation": "Total construction cost starting in 2024 and finishing around 2034",
    "Benefit": "9.39 (billions USD)",
    "Benefit Explanation": "Total economic benefit (without environmental considerations) from 2024 to 2054 ",
    "References": "CH2MHILL et al. [i11]"
  },
  {
    "Endeavor": "Interstate Corridor Extension, Central U.S. (20 Year Model)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "2.18 (billions USD)",
    "Cost Explanation": "Total construction cost",
    "Benefit": "14.76 (billions USD)",
    "Benefit Explanation": "Total economic benefit (without environmental considerations) for 20 year future period",
    "References": "Dunham & Associates [i70]"
  },
  {
    "Endeavor": "Intelligent Connected Vehicles (ICV), China (2015-2050)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "2.27 (trillions USD)",
    "Cost Explanation": "Systems on board vehicles and stationary systems monitoring vehicle traffic ",
    "Benefit": "4.21 (trillions USD)",
    "Benefit Explanation": "Social benefits from reduced accidents",
    "References": "Kuang et al. [icv_china]"
  },
  {
    "Endeavor": "New Western Sydney Airport, Australia (2015-2075)",
    "Set": "Transportation Infrastructure - Road and Air",
    "Cost": "4.96 (billions USD)",
    "Cost Explanation": "Total social cost to Australia for 60 years from 2015 to 2075",
    "Benefit": "9.48 (billions USD)",
    "Benefit Explanation": "Total social benefits for Australia over 60 years from 2015 to 2075",
    "References": "Commonwealth of Australia [aus_airport]"
  },
  {
    "Endeavor": "Panama Canal, Global Commerce (1903-1937)",
    "Set": "Transportation Infrastructure - Other",
    "Cost": "11.56 (billions USD)",
    "Cost Explanation": "Construction cost, 1903-1914",
    "Benefit": "22.76 (billions USD)",
    "Benefit Explanation": "Reduced shipping costs, 1921-1937",
    "References": "Maurer and Yu [panama_canal]"
  },
  {
    "Endeavor": "High Speed Rail, Hong Kong to China (2010 to indefinite future)",
    "Set": "Transportation Infrastructure - Other",
    "Cost": "22.95 (billions USD)",
    "Cost Explanation": "Construction, operating, and external costs of HSR line from Hong Kong to mainland China",
    "Benefit": "25.38 (billions USD)",
    "Benefit Explanation": "Revenue, time savings, pollution reduction, travel reliability, safety improvements",
    "References": "Tao et al. [taoliu]"
  },
  {
    "Endeavor": "Driverless Metro, Italy (35 Year Model)",
    "Set": "Transportation Infrastructure - Other",
    "Cost": "1.0 (billions USD)",
    "Cost Explanation": "Government spending on construction, maintenance, and operation of the line over a 35 year period",
    "Benefit": "2.7 (billions USD)",
    "Benefit Explanation": "social benefits of reduced emissions, accidents, and fuel as well as ease of commute to and from work",
    "References": "Henke et al. [italy_driverless]"
  },
  {
    "Endeavor": "Path Network (Cycle & Walk), Norway (25 Year Model)",
    "Set": "Transportation Infrastructure - Other",
    "Cost": "157.0 (millions USD)",
    "Cost Explanation": "Cost of walking & cycling networks in three Norwegian cities: Hokksund, Hama, and Trondheim ",
    "Benefit": "756.0 (millions USD)",
    "Benefit Explanation": "Benefits of reduced insecurity & lower health costs from improved fitness ",
    "References": "S\u00e6lensminde [norway_cycling]"
  },
  {
    "Endeavor": "Erie Canal, U.S. (1817-1880)",
    "Set": "Transportation Infrastructure - Other",
    "Cost": "1.78 (billions USD)",
    "Cost Explanation": "Cost of initial construction and maintenance from 1817 to 1880",
    "Benefit": "5.5 (billions USD)",
    "Benefit Explanation": "Total economic benefits from 1817 to 1880",
    "References": "Vitaliano [vitaliano]"
  },
  {
    "Endeavor": "Bicycle Commuting Route, Spain (2006-2032)",
    "Set": "Transportation Infrastructure - Other",
    "Cost": "55.83 (millions USD)",
    "Cost Explanation": "Construction of a bicycle lane network in the city of Seville, Spain",
    "Benefit": "128.72 (millions USD)",
    "Benefit Explanation": "Social benefits of improved fittness and fewer car accidents from 2006 to 2032",
    "References": "Brey et al. [cycling_policy]"
  },
  {
    "Endeavor": "Weather Forecasting, U.S. (Annual)",
    "Set": "Miscellaneous",
    "Cost": "6.23 (billions USD)",
    "Cost Explanation": "Annual budget of the U. S. National Weather Service as of 2009",
    "Benefit": "67.7 (billions USD)",
    "Benefit Explanation": "Benefit estimated by a willingness-to-pay study",
    "References": "Lazo et al. [nws]"
  },
  {
    "Endeavor": "Universal Preschool, Spain (Annual)",
    "Set": "Miscellaneous",
    "Cost": "13.56 (billions USD)",
    "Cost Explanation": "Expanding universal preschool subsidy eligibility from age 4 to 3 in Spain.",
    "Benefit": "58.42 (billions USD)",
    "Benefit Explanation": "Earnings potential for mothers and future potential for children.",
    "References": "van Huizen et al. [preschool]"
  },
  {
    "Endeavor": "Summer Reading Program, U.S. (Annual)",
    "Set": "Miscellaneous",
    "Cost": "18.2 (millions USD)",
    "Cost Explanation": "Cost of administering a modeled summer reading program",
    "Benefit": "70.0 (millions USD)",
    "Benefit Explanation": "Saved future education costs",
    "References": "Reed et al. [summer_reading]"
  },
  {
    "Endeavor": "National Parks, U.S. (Annual)",
    "Set": "Miscellaneous",
    "Cost": "3.62 (billions USD)",
    "Cost Explanation": "Annual expenditure by U. S. National Park System",
    "Benefit": "14.07 (billions USD)",
    "Benefit Explanation": "Annual monetized benefit of national parks: recreation, ecosystem services, public valuation of preservation, others",
    "References": "Hardner and McKenney [national_parks]"
  },
  {
    "Endeavor": "London Olympics, U.K. (2012)",
    "Set": "Miscellaneous",
    "Cost": "12.58 (billions USD)",
    "Cost Explanation": "Spending on the 2012 London Games",
    "Benefit": "7.36 (billions USD)",
    "Benefit Explanation": "Revenue and intangible benefits",
    "References": "Baade and Matheson [olympics]"
  },
  {
    "Endeavor": "Rural Broadband Service, U.S. (2018-2038)",
    "Set": "Miscellaneous",
    "Cost": "194.22 (millions USD)",
    "Cost Explanation": "Total capital and operating costs from 2018 to 2038)",
    "Benefit": "768.72 (millions USD)",
    "Benefit Explanation": "Social benefits of telemedicine, education, & income increase",
    "References": "Grant and Tyner [rural_broadband]"
  },
  {
    "Endeavor": "U.S. Invasion & Occupation of Iraq (2003-2011)",
    "Set": "Miscellaneous",
    "Cost": "6.4 (trillions USD)",
    "Cost Explanation": "U.S. Government spending on military and diplomatic programs ",
    "Benefit": "72.9 (billions USD)",
    "Benefit Explanation": "Total losses in economic value and human life",
    "References": "Hausken [iraq_war]"
  }
]


// this is a list of all "Sets"
let list_of_sets = [];

// this is a counter to keep track of where the images are stored
let sets_counter_for_image_directories = 0;

// this is the image directory; we don't include the './public' folder in the
// path because in the server ('./app.js') we specify the server to use:
// app.use(express.static("public"));
// ...which means resources in the "./public" folder don't include '/public'
// in the pathway
const IMAGE_DIRECTORY = "../../../../images/endeavor-set-images/";

// create an individual accordion
function createAccordion(title) {
  let accordionBuilder0 = document.createElement("div")
  accordionBuilder0.setAttribute("class", "my-8");

  let accordionBuilder1 = document.createElement("button");
  accordionBuilder1.setAttribute("class", "set-accordion elliptical-geometry text-xl");
  accordionBuilder1.setAttribute("set", "will-be-dynamic-set-name");
  accordionBuilder1.innerText = title;

  let accordionBuilder2 = document.createElement("div");
  accordionBuilder2.setAttribute("class", "panel");

  let accordionBuilder3 = document.createElement("table");
  accordionBuilder3.setAttribute("id", title);
  // accordionBuilder3.innerText = "a dynamic table will get displayed here";

  // this is the first of the three images
  let accordionBuilder4 = document.createElement("img");
  accordionBuilder4.setAttribute("class", "endeavor-image");
  accordionBuilder4.setAttribute(
    "src",
    `${IMAGE_DIRECTORY}${sets_counter_for_image_directories}/1.jpg`
  );
  accordionBuilder4.setAttribute("title", "endeavor-image");

  // this is the second of the three images
  let accordionBuilder5 = document.createElement("img");
  accordionBuilder5.setAttribute("class", "endeavor-image");
  accordionBuilder5.setAttribute(
    "src",
    `${IMAGE_DIRECTORY}${sets_counter_for_image_directories}/2.jpg`
  );
  accordionBuilder5.setAttribute("title", "endeavor-image");

  // this is the third of the three images
  let accordionBuilder6 = document.createElement("img");
  accordionBuilder6.setAttribute("class", "endeavor-image");
  accordionBuilder6.setAttribute(
    "src",
    `${IMAGE_DIRECTORY}${sets_counter_for_image_directories}/3.jpg`
  );
  accordionBuilder6.setAttribute("title", "endeavor-image");

  // this is the first of the six text areas
  let accordionBuilder7 = document.createElement("div");
  accordionBuilder7.setAttribute("class", "description-above");
  accordionBuilder7.innerText =
    "Cost and efficiency for several social endeavors. See reference information below.";

  // this is the second of the six text areas
  let accordionBuilder8 = document.createElement("div");
  accordionBuilder8.setAttribute("class", "description-below");
  accordionBuilder8.innerText =
    "The same endeavors, arranged by cost/benefit ratio, are as follows.";

  // this is the third of the six text areas
  let accordionBuilder9 = document.createElement("div");
  accordionBuilder9.setAttribute("class", "description-above");
  accordionBuilder9.innerText =
    "Efficiency, as measured by benefit over cost, of various social endeavors.";

  // this is the fourth of the six text areas
  let accordionBuilder10 = document.createElement("div");
  accordionBuilder10.setAttribute("class", "description-below");
  accordionBuilder10.innerText =
    "The net benefits of the endeavors are as follows.";

  // this is the fifth of the six text areas
  let accordionBuilder11 = document.createElement("div");
  accordionBuilder11.setAttribute("class", "description-above");
  accordionBuilder11.innerText =
    "Net benefit, defined as total benefit minus cost, of various social endeavors.";

  // this is the fifth of the six text areas
  let accordionBuilder12 = document.createElement("div");
  accordionBuilder12.setAttribute("class", "description-below");
  accordionBuilder12.innerText =
    "Abbreviated details of the endeavors are as follows:";

  // this is where the elements above are merged together
  accordionBuilder2.appendChild(accordionBuilder4);
  accordionBuilder2.appendChild(accordionBuilder7);
  accordionBuilder2.appendChild(accordionBuilder8);
  accordionBuilder2.appendChild(accordionBuilder5);
  accordionBuilder2.appendChild(accordionBuilder9);
  accordionBuilder2.appendChild(accordionBuilder10);
  accordionBuilder2.appendChild(accordionBuilder6);
  accordionBuilder2.appendChild(accordionBuilder11);
  accordionBuilder2.appendChild(accordionBuilder12);
  accordionBuilder2.appendChild(accordionBuilder3);

  // here they are inserted into the DOM
  let insertPoint = document.querySelector(".sets-accordion-group");
  insertPoint.appendChild(accordionBuilder0);
  insertPoint.appendChild(accordionBuilder1);
  insertPoint.appendChild(accordionBuilder2);

  // this updates the counter that is keeping track of the images
  // and referencing the correct image directories
  sets_counter_for_image_directories++;
}

// generate a table for a given set
function generateSetSpecificTable(set, data) {
  let table = document.getElementById(set);

  for (let element of data) {
    let row = table.insertRow();
    row.setAttribute("class", "table-rows text-xs sm:text-base");
    for (let key in element) {
      if (set === element["Set"]) {
        if (key !== "Set") {
          let cell = row.insertCell();
          cell.setAttribute("class", "table-cells p-1 sm:p-4");
          //let text = document.createTextNode(element[key]);
          //cell.appendChild(text);
          // this enables embedded HTML to be displayed in the tables
          // such as where we have "SO<sub>2</sub> and NO<sub>x</sub>"
          cell.innerHTML = element[key];
        }
      }
    }
  }
}

// generate a table "head" that displays the title of each column in the database
function generateTableHead(set, data) {
  let table = document.getElementById(set);
  let thead = table.createTHead();
  let row = thead.insertRow();
  let row_titles = data[0];

  // although the "set" is included in the JSON data, there is no need to
  // display it in the table as the tables are already divided into
  // accordions for each set
  for (const row_title in row_titles) {
    let th = document.createElement("th");
    th.setAttribute("class", "table-titles text-xs sm:text-base");
    let text = document.createTextNode(row_title);
    if (row_title !== "Set") {
      th.appendChild(text);
      row.appendChild(th);
    }
  }
}

// create all accordions, one for each 'set' in the JSON database
function createAllAccordionsForEachSet(data) {
  // iterate over the JSON database and find each "Set"
  for (let elem of data) {
    if (!list_of_sets.includes(elem["Set"])) {
      list_of_sets.push(elem["Set"]);
    }
  }

  // now we're itrerating over all sets
  // and creating an accordion for each one
  for (let set of list_of_sets) {
    createAccordion(set);
    generateSetSpecificTable(set, data);
    generateTableHead(set, json_data);
  }
}

// this final call is the starting point and will execute  everything above
// for some reason, this workspace will not execute this if it is made into
// a self-calling function.
createAllAccordionsForEachSet(json_data);





// this animates the dropdown properties:
// https://www.w3schools.com/howto/howto_js_accordion.asp
// https://github.com/Richard-Burd/alpine-js-sandbox/blob/main/public/scripts/scripts.js
let acc = document.getElementsByClassName("set-accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
