---
layout: page
title: "Q231529: MapPoint 2000: Unable to Link or Import More than 1000 Records"
permalink: /kb/231/Q231529/
---

## Q231529: MapPoint 2000: Unable to Link or Import More than 1000 Records

{% raw %}

	Article: Q231529
	Product(s): Microsoft Automap
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kberrmsg kbinterop kbtool kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to link or import data from a Microsoft Excel workbook to
	Microsoft MapPoint 2000, you may receive the following error message:
	
	  Only 1000 records may be placed at one time using Street Address.
	
	When you click OK, the remaining records in the workbook are not mapped.
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- The Excel workbook from which you link or import data contains more than 1000
	  records.
	
	- The records you link or import include street addresses.
	
	RESOLUTION
	==========
	
	To work around this issue, use either of the following methods:
	
	- Make sure the workbook from which you link or import data contains a maximum
	  of 1000 records.
	
	- Do not include street addresses in the records you link or import.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	You can map all records in a workbook that contains over 1000 records by using
	geographic information that is less specific than street addresses, such as ZIP
	codes.
	
	Additional query words: mp2000 many over exceeds limit
	
	======================================================================
	Keywords          : kberrmsg kbinterop kbtool kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2000
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
