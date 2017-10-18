---
layout: page
title: "Q131402: Windows NT Server Appears to Hang (NETBT.SYS is Looping)"
permalink: kb/131/Q131402/
---

## Q131402: Windows NT Server Appears to Hang (NETBT.SYS is Looping)

	Article: Q131402
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Under extreme stress, a server may appear to hang. The desktop fails to respond
	to user requests. Network requests (including ping) are not serviced. Sessions
	to the server may be dropped and new sessions may be rejected. The following
	errors may be displayed at workstations that attempt to access the server:
	
	  51: The remote computer is not available.
	  53: The network path was not found.
	
	CAUSE
	=====
	
	A resource deadlock occurred in NETBT.SYS under relatively high stress.
	
	RESOLUTION
	==========
	
	NETBT.SYS has been corrected to resolve this problem in low memory resource
	conditions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in Windows NT version 3.51.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
