---
layout: page
title: "Q127730: PROFS: SoftSwitch Gateway Hangs on Large Attachments"
permalink: /kb/127/Q127730/
---

## Q127730: PROFS: SoftSwitch Gateway Hangs on Large Attachments

{% raw %}

	Article: Q127730
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The SoftSwitch gateway may stop working when it receives attachments larger than
	32K.
	
	CAUSE
	=====
	
	The Microsoft Mail Gateway to IBM PROFS and OfficeVision sends attachments
	larger than 32K. However, SoftSwitch cannot process 64K attachments.
	
	RESOLUTION
	==========
	
	To limit the size of the attachments sent to SoftSwitch, change all of the LRECL
	values in the LAN_HOST DATA file on MS-GATE 193 from 65535 (64K - 1) to 32767
	(32K - 1).
	
	MORE INFORMATION
	================
	
	The IBM PROFS and OfficeVision specification defines 32K attachments. The
	Microsoft Mail Gateway to IBM PROFS and OfficeVision supports 64K attachments.
	
	The Microsoft Mail Gateway to PROFS Host Access component was written to work the
	way the PROFS and OfficeVision code works, and supports 64K attachments.
	
	Because SoftSwitch was written to support the PROFS and OfficeVision
	specification, SoftSwitch cannot process 64K attachments.
	
	Therefore, the size of the attachments sent from PROFS and OfficeVision to
	SoftSwitch needs to be limited to 32K.
	
	
	Additional query words: 3.40a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340a
	Version           : :3.4a
	
	=============================================================================
	

{% endraw %}
