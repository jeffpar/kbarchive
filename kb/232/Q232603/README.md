---
layout: page
title: "Q232603: Stop 0x1e Error Message Using Network Undelete"
permalink: kb/232/Q232603/
---

## Q232603: Stop 0x1e Error Message Using Network Undelete

	Article: Q232603
	Product(s): Microsoft Windows NT
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server, Enterprise Edition version 4.0 
	- Microsoft Windows NT Server version 4.0, Terminal Server Edition 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Executive Software Network Undelete version 1.1.039 or earlier to
	try to open a file in Windows NT, you may receive the following error message:
	
	  STOP 0x0000001E(0xC0000005, 0x006300F, 0x000000,0x006300F)
	
	CAUSE
	=====
	
	This issue can occur if the file you are trying to open has a path larger than
	230 characters.
	
	RESOLUTION
	==========
	
	To resolve this issue, contact Executive Software to obtain and install the
	latest version of the Executive Software Undelete driver, the Uddrv.sys file.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTSEntSearch kbWinNTSEnt400 kbWinNTS400search kbWinNTS400 kbNTTermServ400 kbNTTermServSearch
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
