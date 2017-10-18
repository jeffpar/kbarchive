---
layout: page
title: "Q216491: ERROR: Event ID 43: Crash Dump Is Disabled"
permalink: kb/216/Q216491/
---

## Q216491: ERROR: Event ID 43: Crash Dump Is Disabled

	Article: Q216491
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you apply Service Pack 4 for Windows NT 4.0, you may notice the following
	in the system event log.
	
	  Event ID 43
	
	  Description: Crash dump is disabled! NT failed to initialize the boot
	  partition paging file for crash dump. This may be because the system has more
	  than 3.8 gigabytes of physical memory.
	
	CAUSE
	=====
	
	This event is recorded when the page file on the system partition is set to a
	size smaller than the physical RAM in the computer.
	
	RESOLUTION
	==========
	
	To keep the error message from appearing in the event log, ensure that the page
	file on the system partition is larger than the amount of physical RAM on the
	machine.
	
	To change the size of the page file, follow these steps:
	
	1. In Control Panel, double-click System.
	
	2. On the Performance tab, click Change, and then change the minimum size of the
	  page file on the system partition to a value at least the size of physical
	  RAM plus 1 MB.
	
	3. Restart the computer.
	
	MORE INFORMATION
	================
	
	When Windows NT ecounters an unhandled exception, and is configured in the
	Startup/Shutdown tab of the System Control Panel to write a memory dump, Windows
	NT will write a memory dump to disk when a STOP error is encountered. Windows NT
	will write the dump to the pagefile on the system partition when the STOP error
	is encountered, and copy the dump to a file when the system is restarted. For
	Windows NT to write the memory dump, the pagefile on the system partition must
	be at least as large as the physical memory in the computer.
	
	This event was added in Service Pack 4. Service Pack 4 does not cause this
	condition, but merely reports this condition. Prior to Service Pack 4, this
	condition was not reported in the System Event Log.
	
	For additional information about setting up Windows NT 4.0 to write a memory dump
	when a STOP error is encountered, please see the following article(s) in the
	Microsoft Knowledge Base:
	
	  Q130536 Windows NT Does Not Save Memory Dump File After a Crash
	
	Additional query words: blue screen memory.dmp crash
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400xsearch kbWinNTSsearch kbWinNTS400xsearch kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
