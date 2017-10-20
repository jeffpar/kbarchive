---
layout: page
title: "Q145906: Non-paged Memory Leak in NWLNKRIP.SYS Causes Event ID 2019"
permalink: /kb/145/Q145906/
---

## Q145906: Non-paged Memory Leak in NWLNKRIP.SYS Causes Event ID 2019

{% raw %}

	Article: Q145906
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use the IPX/SPX compatible transport protocol (NWLink) and Remote
	Access Service (RAS) in Windows NT 3.51 Service Pack 2 or 3, the computer stops
	responding (hangs) and the following system event appears in the Event Viewer:
	
	  Event ID 2019
	
	  Description: The server was unable to allocate from the system nonpaged pool
	  because the pool was empty.
	
	
	CAUSE
	=====
	
	A 64-byte non-paged memory leak in NWLNKRIP.SYS occurs when it receives route
	down RIP packets from the network.
	
	
	RESOLUTION
	==========
	
	To correct this problem, apply the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. A fix
	to this problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	

{% endraw %}
