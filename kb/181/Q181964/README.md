---
layout: page
title: "Q181964: XCLN: Unable to Forward Meeting Requests in MS Mail 3.x"
permalink: /kb/181/Q181964/
---

## Q181964: XCLN: Unable to Forward Meeting Requests in MS Mail 3.x

{% raw %}

	Article: Q181964
	Product(s): Microsoft Exchange
	Version(s): 8.0,8.01,8.02,8.03; WINDOWS:1.0,3.2,3.2a,3.5,7.0,7.5; winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 01-APR-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Schedule+, versions 1.0, 7.0, 7.5 
	- Microsoft Mail for PC Networks, versions 3.2, 3.2a, 3.5 
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In Microsoft Mail 3.x, when you try to forward a meeting request, you may
	receive the following error message:
	
	  The message could not be forwarded.
	
	CAUSE
	=====
	
	The meeting request originated from a Microsoft Outlook or Microsoft Schedule+
	7.x user. Meeting requests sent from these message clients contain additional
	properties that are not handled properly by Microsoft Mail.
	
	WORKAROUND
	==========
	
	Although not recommended, you can work around this behavior by removing or
	commenting out the following line in the [Custom Messages] section in the
	Msmail.ini file:
	
	    [Custom Messages]
	    IPM.Microsoft Schedule.MtgReq=3.0  ;;;;SchedMsg.DLL;;1111100000000000;;;;
	
	This allows Microsoft Mail to display the meeting request as a standard message
	(IPM.Note), which can be forwarded. However, this will also cause the Accept,
	Decline, Tentative, and View Schedule buttons to no longer appear at the top of
	meeting requests in Microsoft Mail. In this case, you need to use Microsoft
	Schedule+ to accept or decline meeting requests.
	
	MORE INFORMATION
	================
	
	When a user installs Microsoft Schedule+ version 1.0, the following section is
	added to the Msmail.ini file:
	
	    [Custom Messages]
	    IPM.Microsoft Schedule.MtgReq=3.0  ;;;;SchedMsg.DLL;;1111100000000000;;;;
	    IPM.Microsoft Schedule.MtgRespP=3.0;;;;SchedMsg.DLL;;1100100000000000;;;;
	    IPM.Microsoft Schedule.MtgRespN=3.0;;;;SchedMsg.DLL;;1100100000000000;;;;
	    IPM.Microsoft Schedule.MtgRespA=3.0;;;;SchedMsg.DLL;;1100100000000000;;;;
	    IPM.Microsoft Schedule.MtgCncl=3.0 ;;;;SchedMsg.DLL;;1100100000000000;;;;
	
	This section indicates how Microsoft Mail handles messages with specific message
	classes.
	
	For additional information about the above Msmail.ini file settings, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q121797 PC WSPlus: Standard Response Buttons Unavailable
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbOutlook97 kbZNotKeyword2 kbMailSearch kbScheduleSearch kbSchedule700 kbOutlook97Search kbZNotKeyword3 kbOutlook801 kbOutlook802 kbOutlook803 kbSchedule100 kbSchedule750 kbMailPCN320 kbMailPCN320a kbMailPCN350
	Version           : :8.0,8.01,8.02,8.03; WINDOWS:1.0,3.2,3.2a,3.5,7.0,7.5; winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
