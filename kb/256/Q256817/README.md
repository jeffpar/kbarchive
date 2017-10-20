---
layout: page
title: "Q256817: MapPoint 2001: Linked Data Is Not Mapped Properly"
permalink: /kb/256/Q256817/
---

## Q256817: MapPoint 2001: Linked Data Is Not Mapped Properly

{% raw %}

	Article: Q256817
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdisplay kbinterop kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2002 
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you link data from a Microsoft Excel workbook to a map that you created in
	Microsoft MapPoint 2001, you may encounter one or both of the following
	symptoms:
	
	- The linked data may not be displayed properly on the map.
	
	- The map legend may not be updated properly.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- You update the data in the Excel workbook and then save the workbook as a new
	  file.
	
	- You change the data source in MapPoint 2001 to the new file.
	
	RESOLUTION
	==========
	
	To resolve this issue, create a new map in MapPoint 2001, and then link data
	from the new Excel file to the newly created map.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in Microsoft MapPoint 2001.
	
	MORE INFORMATION
	================
	
	To prevent this issue from occurring, update the data in the Excel workbook
	before you link the data to a MapPoint 2001 map.
	
	Additional query words: mp2001 map point location incorrect refresh
	
	======================================================================
	Keywords          : kbdisplay kbinterop kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2001 kbMapPoint2002
	Version           : :
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	

{% endraw %}
