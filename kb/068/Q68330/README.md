---
layout: page
title: "Q68330: Decreasing Time to Log Onto Network with DOS/OS2 LM"
permalink: /kb/068/Q68330/
---

## Q68330: Decreasing Time to Log Onto Network with DOS/OS2 LM

	Article: Q68330
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	Here is how to reduce the time it takes to log onto a network:
	
	With an MS-DOS LAN Manager Workstation
	--------------------------------------
	
	- Have a domain controller running NETLOGON to validate the logon. This avoids
	  the (default) 45-second timeout.
	
	With an OS/2 LAN Manager Workstation
	------------------------------------
	
	There are two options:
	
	- Have a domain controller running NETLOGON to validate the logon. This avoids
	  the (default) 15-second timeout.
	
	- Change the wrkheuristics 33 bit in the LANMAN.INI file as described in
	  Appendix B of the Microsoft Operating System/2 LAN Manager "Administrator's
	  Reference." This causes the OS/2 workstation to log onto the network
	  STANDALONE after the timeout value specified has been exceeded (if you
	  haven't used option 1).
	
	Additional query words: 2.00 2.0
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
