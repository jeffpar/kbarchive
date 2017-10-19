---
layout: page
title: "Q131469: Windows NT Err Msg The RPC Server is Unavailable"
permalink: /kb/131/Q131469/
---

## Q131469: Windows NT Err Msg The RPC Server is Unavailable

	Article: Q131469
	Product(s): Microsoft Windows NT
	Version(s): 3.1; winnt:3.5,4.0
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Server versions 3.5, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you have insufficient resources on your Windows NT Server system, one or both
	of the following errors may appear on clients computers that are trying to
	connect to the server:
	
	  Error 1723: The RPC server is too busy to complete this operation.
	
	  -or-
	
	  Error 1722: The RPC server is unavailable.
	
	NOTE: These errors may appear in a windowed dialog box, or as a numbered event
	error message in the system log on the client computer. The service or utility
	running on the server at the time of the error determines how the error appears
	on the client.
	
	CAUSE
	=====
	
	If your server has more than 48 megabytes of RAM, the problem may occur because
	PagedPoolSize is set too small. The static value for PagedPoolSize is
	established when you install Windows NT.
	
	RESOLUTION
	==========
	
	This has been corrected in Windows NT 3.51. When you upgrade your computer from
	a previous version, if Windows NT Setup finds the value 0x03000000 (48 MB), it
	is reset to 0, which is the 3.51 default at installation time.
	
	WORKAROUND
	==========
	
	You may be able to work around this problem by increasing the PagedPoolSize
	value in the registry.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	To correct this problem:
	
	1. Shutdown Windows NT.
	
	2. Turn the server off and then turn it back on.
	
	3. Start Windows NT.
	
	4. Run Registry Editor (REGEDT32.EXE).
	
	5. From the HKEY_LOCAL_MACHINE subtree, go to the following key:
	
	  SYSTEM\CurrentControlSet\Control\Session Manager\Memory Management
	
	You will find that the value for PagedPoolSize is 0x03000000 (48MB).
	
	6. Set PagedPoolSize to zero.
	
	7. Shutdown and restart Windows NT.
	
	When PagedPoolSize is set to zero, Windows NT automatically calculates a new
	value based on the amount of physical memory installed.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Advanced Server
	version 3.1 and Windows NT Server version 3.5. This problem has been resolved in
	Windows NT version 3.51.
	
	MORE INFORMATION
	================
	
	The small PagedPoolSize is only one of several potential triggers, or first
	causes, that affect the operation of SERVICES.EXE. The "RPC server is too
	busy..." and "RPC server unavailable..." messages indicate that SERVICES.EXE or
	one of its threads may have hung. A thread may remain in a blocking state and
	appear to be hung if a resource is not available.
	
	SERVICES.EXE is a process that functions as the service control manager. It also
	runs a variety of Windows NT user mode functions as threads including server,
	browsing, event log, and RPC services. The symptoms are typically returned by
	workstations performing commands (including net view, event log, and other
	related RPC requests). Client RPC requests to the pipe \SRVSVC, result in Server
	Message Block (SMB) errors returned with STATUS_PIPE_NOT_AVAILABLE by the
	server.
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q130069 SERVICES.EXE Fails With Access Violation and Returns RPC Busy...
	
	  Q126401 Err Msg: "Not Enough Server Storage is Available to Process..."
	
	Additional query words: 3.10 prodnt cpr sufficient pagedpool page pool size ntfaqmax
	
	======================================================================
	Keywords          : kberrmsg kbnetwork 
	Technology        : kbWinNTsearch kbWinNT350search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS350 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS350search kbWinNT310Search
	Version           : :3.1; winnt:3.5,4.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
