---
layout: page
title: "Q156980: Performance Monitor: Disk Transfers Per Second Not Working"
permalink: kb/156/Q156980/
---

## Q156980: Performance Monitor: Disk Transfers Per Second Not Working

	Article: Q156980
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51; :3.5
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	- Microsoft Windows NT Advanced Server, version 3.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open a .pmc or .pmw file, the Disk Transfers per second (Disk
	Transfer/sec) counter may not show a value.
	
	CAUSE
	=====
	
	This problem occurs when you create a Performance Monitor log file on a computer
	running Windows NT 3.51 Service Pack (SP) 3, and then open that log file on a
	computer running Windows NT 3.51 SP 4. Then you add the object Physical Disk
	using the Disk Transfers/sec counter, and then save the chart or the workspace.
	
	RESOLUTION
	==========
	
	Update to Windows NT 3.51 Service Pack 4.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT version
	3.51 Service Pack 3. This problem was corrected in Microsoft Windows NT Service
	Pack 4.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTAdvSerSearch kbWinNTAdvServ350 kbWinNTS351search
	Version           : winnt:3.51; :3.5
	
	=============================================================================
	
