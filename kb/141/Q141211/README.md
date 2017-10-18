---
layout: page
title: "Q141211: Memory Leak with Multithreaded Winsock Programs"
permalink: kb/141/Q141211/
---

## Q141211: Memory Leak with Multithreaded Winsock Programs

	Article: Q141211
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 
	Operating System(s): 
	Keyword(s): kbnetwork win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNetkbfixlist
	Last Modified: 25-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run a 32-bit Windows Sockets program that opens and closes multiple
	threads in Windows 95, memory is gradually consumed.
	
	Observable symptoms of this "memory leak" may include a swap file growing very
	large while the program is running, page faults as Windows 95 tries to keep up
	with the growing swap file, and an eventual system halt when all memory is
	consumed.
	
	RESOLUTION
	==========
	
	
	STATUS
	======
	
	This problem no longer occurs in Windows 98. To resolve this problem, install
	the current version of Windows. For information about the current version of
	Windows, visit http://www.microsoft.com/windows.
	
	Additional query words: crash
	
	======================================================================
	Keywords          : kbnetwork win95 kbAPI kbSDKPlatform kbWinsock kbGrpDSNet kbfixlist
	Technology        : kbWin95search kbZNotKeyword3
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
