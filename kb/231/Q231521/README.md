---
layout: page
title: "Q231521: MapPoint 2000: Unexpected Data Is Exported to Excel"
permalink: /kb/231/Q231521/
---

## Q231521: MapPoint 2000: Unexpected Data Is Exported to Excel

	Article: Q231521
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
	
	When you use Microsoft MapPoint 2000 to display demographic data, the Microsoft
	Excel workbook you create if you export the map to Excel may contain more data
	than is displayed on the map.
	
	CAUSE
	=====
	
	This behavior can occur if either of the following conditions are true:
	
	- You use the Data Mapping wizard to filter the data you want to display on the
	  map.
	
	- You skip one or more columns of data when you import the data you want to
	  display on the map.
	
	RESOLUTION
	==========
	
	To work around this issue, delete any column of data from the workbook that does
	not contain demographic data portrayed on the map. To do this:
	
	1. Select the column you want to delete.
	
	2. On the Edit menu, click Delete. Repeat this step for each column you want to
	  delete.
	
	STATUS
	======
	
	This behavior is by design.
	
	Additional query words: mp2000 columns excessive many more
	
	======================================================================
	Keywords          : kbinterop kbtool kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	
