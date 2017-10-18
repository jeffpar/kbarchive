---
layout: page
title: "Q164906: Host Security Page in SNA Manager Is Unresponsive After Error"
permalink: kb/164/Q164906/
---

## Q164906: Host Security Page in SNA Manager Is Unresponsive After Error

	Article: Q164906
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, version 3.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When running SNA Server Manager, if any popup error occurs while the host
	security property page is displayed, the data entry fields in the property page
	no longer gain focus after canceling the popup error.
	
	The only way to solve this is to click <Cancel> on the property page.
	
	CAUSE
	=====
	
	The property page fields were not being enabled after an error was encountered.
	
	RESOLUTION
	==========
	
	An update to SNA Server 3.0 is available to correct this problem. The updated
	module is:
	
	  <Snaroot>\System\Hostsec.dll
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server version 3.0. This
	problem was corrected in the latest Microsoft SNA Server 3.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:3.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
