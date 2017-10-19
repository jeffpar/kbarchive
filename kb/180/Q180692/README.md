---
layout: page
title: "Q180692: Start Button Not Disabled Using Snap-in Interface"
permalink: /kb/180/Q180692/
---

## Q180692: Start Button Not Disabled Using Snap-in Interface

	Article: Q180692
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following problem occurs when you use the SNA Server 4.0 snap-in
	administrative interface to the Microsoft Management Console (MMC). If the start
	button in SNA Server version 4.0 is used to start a service, the start button
	will remain disabled after the service has been started. If you use the mouse to
	click on another location and then back, the button will reflect the correct
	status.
	
	Starting an already started service leaves it pending indefinitely. The same
	situation applies when stopping a service and when using the Save Config button.
	This problem does not occur when you use the SNA Server 4.0 Manager interface.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 4.0. This
	problem was corrected in the latest SNA Server version 4.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400
	Version           : WINDOWS:4.0
	Hardware          : ALPHA x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
