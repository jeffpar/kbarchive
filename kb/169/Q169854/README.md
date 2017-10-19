---
layout: page
title: "Q169854: Print Session Hangs in Spooling Status and Printing for Session"
permalink: /kb/169/Q169854/
---

## Q169854: Print Session Hangs in Spooling Status and Printing for Session

	Article: Q169854
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:3.0,3.0 SP1
	Operating System(s): 
	Keyword(s): kbnetworkkbbuglist
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 3.0, 3.0 SP1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An SNA Server 3270 Print Session gets stuck in Spooling status forever and all
	printing for that print session stops. You have to stop the SNA Print Service
	and restart in order to recover.
	
	CAUSE
	=====
	
	The problem happens when print sessions are stopped while print jobs are still
	being spooled and other print sessions are still running. The Spooling status
	bit is never unset (because of a bug in the code that was supposed to do this),
	and SNA Manager will display this status in preference to any other status bit
	which may be set (closing, inactive and so on). Therefore, the status bar sits
	at Spooling and never gets updated with the real status.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server 3.0 and 3.0 sp1. This
	problem was corrected in the latest SNA Server version 3.0 U.S. Service Pack.
	For information on obtaining this Service Pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	With the fix applied, printing status is set to idle whenever SNA Print Service
	ends the current print job.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbnetwork kbbuglist
	Technology        : kbAudDeveloper kbSNAServSearch kbSNAServ300 kbSNAServ300SP1
	Version           : WINDOWS:3.0,3.0 SP1
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
