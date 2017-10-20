---
layout: page
title: "Q260272: MapPoint 2001: Computer Hangs When You Link or Import More than"
permalink: /kb/260/Q260272/
---

## Q260272: MapPoint 2001: Computer Hangs When You Link or Import More than

{% raw %}

	Article: Q260272
	Product(s): Microsoft Automap
	Version(s): 
	Operating System(s): 
	Keyword(s): kbtool kbimu
	Last Modified: 14-SEP-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MapPoint 2001 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to link or import data from a data source that contains more
	than 2000 records to Microsoft MapPoint 2001, your computer may stop responding
	(hang).
	
	CAUSE
	=====
	
	This behavior can occur if both of the following conditions are true:
	
	- You attempt to link to or import more than 2000 records.
	
	- The records that you link or import include specific information such as
	  street addresses.
	
	Note: MapPoint 2002 has increased the allowable imported records to 10,000.
	
	RESOLUTION
	==========
	
	To work around this issue, use either of the following methods:
	
	- Make sure that the data source from which you link or import data contains a
	  maximum of 2000 records.
	
	- Do not include street addresses in the records that you link or import.
	
	MORE INFORMATION
	================
	
	You can map all of the records from a data source that contains over 2000
	records by using geographic information that is less specific than street
	addresses, such as postal codes.
	
	Additional query words: mp2001 many limit over exceeds ZIP hangs freeze lock
	
	======================================================================
	Keywords          : kbtool kbimu 
	Technology        : kbHomeProdSearch kbMapptSearch kbMapPoint2001
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
