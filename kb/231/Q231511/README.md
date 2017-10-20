---
layout: page
title: "Q231511: MapPoint 2000: Currency Data Is Not Sorted Properly"
permalink: /kb/231/Q231511/
---

## Q231511: MapPoint 2000: Currency Data Is Not Sorted Properly

{% raw %}

	Article: Q231511
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbinterop kbtool kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you link or import currency data from a Microsoft Excel workbook to
	Microsoft MapPoint 2000, the currency data may be sorted improperly in the Data
	Mapping wizard.
	
	In addition, data tips (shaded areas or circles) that represent currency data may
	be improperly shaded on the map and improperly sorted in the map legend.
	
	CAUSE
	=====
	
	This behavior can occur if one or more cells in a column of currency data in the
	workbook are not formatted as currency.
	
	RESOLUTION
	==========
	
	To resolve this issue, format the entire column of currency data in the workbook
	as currency before you import or link the data to MapPoint 2000. To do this:
	
	1. Start Excel.
	
	2. Open the workbook from which you want to link or import data to MapPoint
	  2000.
	
	3. Click the worksheet that contains the data you want to link or import.
	
	4. Select the column that contains the currency data.
	
	5. On the Format menu, click Cells.
	
	6. On the Number tab, click Currency in the Category box.
	
	7. Click OK.
	
	Additional query words: mp2000 money dollars unsorted order
	
	======================================================================
	Keywords          : kbinterop kbtool kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
