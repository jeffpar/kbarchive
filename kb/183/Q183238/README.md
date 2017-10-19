---
layout: page
title: "Q183238: SNARAS Logs Events 101, 102, and 201 When Dialing Out"
permalink: /kb/183/Q183238/
---

## Q183238: SNARAS Logs Events 101, 102, and 201 When Dialing Out

	Article: Q183238
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 02-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1, 3.0 SP2, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An SNA Server using SNARAS may log the following errors in the Windows NT
	Application event log when dialing out to establish an SNARAS connection:
	
	  
	
	  Event ID: 101
	  Description: SNARAS - Bad in use count in correlator. Got 0x200000
	  expected 0x0.
	
	  Event ID: 102
	  Description: SNARAS - No Line CB attached to Anchor entry 0.
	
	  Event ID: 201
	  Description: SNARAS - Internal  error: File
	  c:\src30\snaras\win32\srline.c at line 184
	
	The event 201 occurs after an event 101 or 102 has been logged. After the event
	201 has been logged, SNARAS will not function until the Windows NT server is
	restarted.
	
	CAUSE
	=====
	
	The event 201 is caused by a race condition that occurs when restarting an
	SNARAS connection before the initial connection was properly closed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server versions 3.0, 3.0
	SP1, 3.0 SP2, and 4.0.
	
	This problem was corrected in the latest SNA Server versions 3.0 and 4.0 U.S.
	Service Packs. For information on obtaining these Service Packs, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ400 kbSNAServ300SP1 kbSNAServ300SP2
	Version           : WINDOWS:3.0,3.0 SP1,3.0 SP2,4.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
