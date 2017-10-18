---
layout: page
title: "Q177365: Vinca Drivers May Cause Stop 0x24"
permalink: kb/177/Q177365/
---

## Q177365: Vinca Drivers May Cause Stop 0x24

	Article: Q177365
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Computers running Windows NT Server and the server-mirroring product Vinca
	Standby Server version 1.21C may encounter the following blue screen stop
	message:
	
	  STOP 0x00000024 (001901f9 f743b5f8 f743b434 8013b59e)
	  NTFS_FILE_SYSTEM
	
	NOTE: The stop code will be the same, but the parameters may be different.
	
	CAUSE
	=====
	
	A Vinca kernel mode driver intercepts an IRP that was created for a mirrored
	device. This will eventually lead to passing a bad destination memory buffer
	pointer to the memmove routine.
	
	The link dates for the drivers are:
	
	  801eb000  VncComIP.sys   Fri Jul 18 11:44:41 1997
	  80252000   VncDisk.sys   Tue Sep 03 15:57:11 1996
	
	RESOLUTION
	==========
	
	This problem is resolved by the Vinca Standby Server version 1.21D release
	available for no charge from Vinca.
	
	MORE INFORMATION
	================
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	
	Additional query words: ftdisk fault tolerance
	======================================================================
	Keywords          : kb3rdparty 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
