---
layout: page
title: "Q140227: BUG: MS-DOS Applications May Fail Printing to NetWare Printer"
permalink: kb/140/Q140227/
---

## Q140227: BUG: MS-DOS Applications May Fail Printing to NetWare Printer

	Article: Q140227
	Product(s): Microsoft Windows NT
	Version(s): 3.51
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When an MS-DOS application running under Windows NT tries to print directly to a
	NetWare queue using the NetWare API, the job might not get printed. The job is
	created with 0 bytes of data, but a file named "NETQ" will be created instead in
	the current directory containing the data.
	
	CAUSE
	=====
	
	MS-DOS applications can use Int 21h function 3c00h (create file) or 3d00h (open
	file) to open the special spool file on the NetWare queue.
	
	The 16-bit side of the Windows NT Client and Gateway Services for NetWare only
	check for "NETQ" in function 3d00h. Calls to 3c00 are handed off to the Windows
	NT IO system.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : 3.51
	
	=============================================================================
	
