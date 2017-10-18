---
layout: page
title: "Q203052: Poor Program and Service Performance During Crash Dump Transfer"
permalink: kb/203/Q203052/
---

## Q203052: Poor Program and Service Performance During Crash Dump Transfer

	Article: Q203052
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbenv
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0, on platform(s):
	   - the hardware: Intel x86 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If a server stops responding (hangs) with a blue screen, the Savedump.exe
	process transfers the crash dump from the paging file to the Memory.dmp file
	during the next system startup. Other programs and services that are started
	during this process may perform poorly. If the server is providing services to
	users, those services may not provide timely responses to client requests.
	
	CAUSE
	=====
	
	This behavior can occur when the system is approaching an I/O-bound state while
	it is accessing disk resources. Paging file resources in particular may be
	exhausted because the paging file is used to transfer the crash dump to the
	Memory.dmp file.
	
	RESOLUTION
	==========
	
	To work around this behavior, configure a larger paging file to make sure that
	there is adequate space for the transfer to take place efficiently. Or, you may
	want to add additional drive and controller resources for the paging file to
	transfer the crash dump to the Memory.dmp file.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	If you run Perfmon during this process, you may observe that the "%DiskTime" and
	"%Pagefile" values approach 100 percent while the Savedump process is running.
	The "Disk Queue length" and "Disk Transfers/sec" values also rise significantly.
	When the Savedump process finishes, the following event is logged in the System
	event log:
	
	  Savedump, 1001: The computer has rebooted from a bugcheck...
	
	Also, Savedump.exe is listed on the Processes tab in Task Manager during the
	transfer.
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q192463 Gathering Blue Screen Information After Memory Dump
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbenv 
	Technology        : kbWinNTsearch kbWinNTSsearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
