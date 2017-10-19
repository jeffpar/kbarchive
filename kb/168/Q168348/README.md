---
layout: page
title: "Q168348: RasDial( ) Leaks Resources on WinNT 4.0"
permalink: /kb/168/Q168348/
---

## Q168348: RasDial( ) Leaks Resources on WinNT 4.0

	Article: Q168348
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kbbuglist
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an application repeatedly calls the RasDial( ) and RasHangup( ) APIs,
	memory and handle leaks may be observed. One consequence of these leaks is that
	Remote Access Service (RAS) can no longer dial out after a certain number of
	iterations.
	
	You may experience this problem as your Windows NT RAS client makes repeated
	connections without rebooting the computer.
	
	CAUSE
	=====
	
	The Win32 API RAS APIs that are used for connection management do not
	de-allocate all of the memory they use. Any process that repeatedly establishes
	and tears down connections will cause an increased use of memory and resources.
	An increase in the number of system handles used by the process may also be
	observed.
	
	RESOLUTION
	==========
	
	Update to the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0. This
	problem was corrected in the latest Microsoft Windows NT 4.0 U.S. Service Pack.
	For information on obtaining the service pack, query on the following word in
	the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	MORE INFORMATION
	================
	
	To identify this as the cause of the problem, perform the following steps:
	
	1. Open Task Manager (right click the Taskbar and select Task Manager).
	
	2. Click Processes.
	
	3. Click View, select Select Columns.
	
	4. Check Handle Count.
	
	5. Click OK.
	
	6. Watch the Handle Count for applications that use RAS to establish
	  connections. If one process (usually Rasman.exe) appears to show its Handle
	  Count increasing over time, and not decreasing, you are probably experiencing
	  this problem.
	
	This issue may also be caused (or contributed to) by another similar RAS API
	issue.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q165483 RasEnumEntries() API leaks memory
	
	Additional query words:
	
	======================================================================
	Keywords          :  kbbuglist
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : winnt:4.0
	Issue type        : kbbug
	
	=============================================================================
	
