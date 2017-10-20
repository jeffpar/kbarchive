---
layout: page
title: "Q109987: PROFS: Err Msg: IN_FORM ID Gets Out of Sequence Error"
permalink: /kb/109/Q109987/
---

## Q109987: PROFS: Err Msg: IN_FORM ID Gets Out of Sequence Error

{% raw %}

	Article: Q109987
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.4
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to IBM PROFS and OfficeVision, version 3.4 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 3.4 of the Microsoft Mail Gateway to IBM PROFS and OfficeVision Host
	Access, if two Free/Busy distributions from the same postoffice are in the
	Calendar Service Machine (MS-CSM) reader, the second distribution is usually
	rejected back to the LAN. The following error message is displayed:
	
	  OUT of Sequence Error
	
	CAUSE
	=====
	
	If Free/Busy updates are scheduled on the LAN in 15 minute intervals and there
	is heavy traffic, then two distributions may be queued for the host on any given
	upload. This may also happen if the gateway is halted for ANY reason. When the
	MS-CSM machine sends the distributions to the MS-CAL machine, MS-CAL cannot
	return confirmation of the first distribution before processing the second. The
	following error message is displayed:
	
	  OUT of Sequence Error
	
	and all LAN data is refreshed.
	
	RESOLUTION
	==========
	
	The resolutions are as follows:
	
	1. Schedule LAN distributions at intervals of 30 minutes or more.
	
	2. Direct the customer to a Microsoft Mail for PC Networks Gateway Support
	  Professional.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Mail Gateway to IBM
	PROFS and OfficeVision Host Access version 3.4.
	
	Additional query words: 3.40 ErrMsg
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateIBMPROFS340
	Version           : :3.4
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
