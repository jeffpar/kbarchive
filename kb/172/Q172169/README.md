---
layout: page
title: "Q172169: SMP Server Fails with Stop 0xA During Browser Shutdown"
permalink: /kb/172/Q172169/
---

## Q172169: SMP Server Fails with Stop 0xA During Browser Shutdown

	Article: Q172169
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Your system may fail and the following STOP message in Rdr.sys appears:
	
	  **** STOP 0x0000000A
	
	CAUSE
	=====
	
	If the browser service is shut down during an election, a failure may occur. A
	scheduled process performed a net use * /d command while logged on as the local
	system account. This disconnected the IPC$ null session. This removes RPC
	communication that the browser service relies on for communication with other
	servers. The same effect can be observed while shutting down the browser. In
	order for the failure to occur, an election must take place at this point and
	the server must be a multiprocessor system.
	
	RESOLUTION
	==========
	
	Configure the system so that the batch processes run by the scheduling services
	will not be performed under the context of the system account. The net use /d
	command specifying * or \\server\ipc$ are the commands that must not be carried
	out. By preventing the carrying out of such commands, the browser will not
	experience these problems.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0.
	
	A supported fix is now available, but has not been fully regression tested and
	should be applied only to systems experiencing this specific problem. Unless you
	are severely impacted by this specific problem, Microsoft recommends that you
	wait for the next Service Pack that contains this fix. Contact Microsoft Product
	Support Services for more information.
	
	
	
	Additional query words: check codes
	
	======================================================================
	Keywords          : kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Hardware          : x86
	
	=============================================================================
	
