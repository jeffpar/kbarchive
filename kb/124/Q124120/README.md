---
layout: page
title: "Q124120: Event Log Service Fails to Start Due to Event Log Corruption"
permalink: /kb/124/Q124120/
---

## Q124120: Event Log Service Fails to Start Due to Event Log Corruption

	Article: Q124120
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation version 3.5 
	- Microsoft Windows NT Server version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A dialog box describing an error with INETMIB.DLL appears. Running NET START
	returns error 1722, "RPC server is unavailable." Running NET VIEW returns the
	same error. SERVICES.EXE causes an access violation error when accessing the one
	of the event logs (SYSEVENT.EVT, SECEVENT.EVT, or APPEVENT.EVT) at startup. A
	DRWATSON.LOG is created as a result.
	
	
	CAUSE
	=====
	
	One of the event logs is corrupted, but the Event Log service hangs before the
	dirty bit is set. As a result, the Event Log service does not clean itself up on
	reboot and will not start.
	
	WORKAROUND
	==========
	
	1. Boot MS-DOS.
	
	2. Change directory to %SYSTEMROOT%\SYSTEM32\CONFIG
	
	3. Delete the files SYSEVENT.EVT, SECEVENT.EVT, and APPEVENT.EVT.
	
	4. Boot Windows NT and allow the server to recreate clean event logs.
	
	RESOLUTION
	==========
	
	EVENTLOG.DLL was rewritten to set the dirty bit even if the service fails.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT and Windows NT
	Advanced Server version 3.1 and Windows NT Workstation and Windows NT Server
	version 3.5. This problem was corrected in the latest U.S. Service Pack for
	Windows NT version 3.5. For information on obtaining the Service Pack, query on
	the following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW310 kbWinNTSsearch kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	
	=============================================================================
	
