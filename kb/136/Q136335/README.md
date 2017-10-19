---
layout: page
title: "Q136335: Active Event Logging Server Becomes Slow, Exhausts Paged Pool"
permalink: /kb/136/Q136335/
---

## Q136335: Active Event Logging Server Becomes Slow, Exhausts Paged Pool

	Article: Q136335
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
	
	Your Windows NT computer that is doing a large amount of event logging begins to
	run slowly left on long time. PerfMon shows that SERVICES.EXE has a large amount
	of private bytes associated with it and paged pool memory resources become
	exhausted. Debugging shows there is a problem with the SERVICES.EXE process and
	exhaustion of virtual memory.
	
	CAUSE
	=====
	
	OpenEventLog, RegisterEventSource, and DeregisterEventSource functions do not
	deallocate memory correctly.
	
	
	RESOLUTION
	==========
	
	EVENTLOG.DLL has been modified to the memory deallocation problems in both API
	functions.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.5. This
	problem was corrected in the Windows NT version 3.51. A version 3.5 fix to this
	problem is in development, but has not been regression-tested and may be
	destabilizing in production environments. Microsoft does not recommend
	implementing this fix at this time. Contact Microsoft Product Support Services
	for more information on the availability of this fix.
	
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTSsearch kbWinNTS350 kbWinNTS350search
	Version           : winnt:3.5
	
	=============================================================================
	
