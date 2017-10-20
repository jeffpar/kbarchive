---
layout: page
title: "Q195116: SNA Server Logs Event 3 (1106) Node Configuration Error"
permalink: /kb/195/Q195116/
---

## Q195116: SNA Server Logs Event 3 (1106) Node Configuration Error

{% raw %}

	Article: Q195116
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:4.0,4.0 SP1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	SNA Server unexpectedly logs the following event in the Windows NT application
	event log:
	
	  Event ID: 3
	  Source: SNA Server
	  Description: (1106) Node Configuration Error
	  Subcode Information
	  X'1106' Configuration file is corrupted.
	
	When this occurs, the SNA Server service will end, and an Event ID 624 is logged,
	indicating that an SNADump.log has been created.
	
	CAUSE
	=====
	
	This problem can occur if an Advanced Program-to-Program Communications (APPC)
	or Common Programming Interface for Communications (CPIC) application attempts
	to allocate a conversation (by calling [MC_]ALLOCATE or CMALLC), and specifies
	an APPC mode name which is not configured in SNA Server.
	
	RESOLUTION
	==========
	
	Microsoft has confirmed this to be a problem in SNA Server versions 4.0 and 4.0
	Service Pack 1. This problem was corrected in the latest SNA Server version 4.0
	U.S. Service Pack. For information on obtaining this Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ400 kbSNAServ400SP1
	Version           : WINDOWS:4.0,4.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
