---
layout: page
title: "Q177652: Stop 0x7B During Setup with More Than 1.792 GB of Memory"
permalink: /kb/177/Q177652/
---

## Q177652: Stop 0x7B During Setup with More Than 1.792 GB of Memory

	Article: Q177652
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you perform a system setup from a floppy disk on a Pentium Pro System with
	more than 1.792 Gigabytes (GB) of RAM, you may get the following blue screen
	error message:
	
	  STOP 0x0000007B (parameter, parameter, parameter, parameter)
	  Inaccessible_Boot_Device
	
	Also, if you installed Windows NT 4.0 through other methods (compact disc,
	upgrade, and so on), the floppy disk does not work.
	
	CAUSE
	=====
	
	A new Pentium Pro Stepping (SB1) requires a modification to the Windows NT
	kernel.
	
	RESOLUTION
	==========
	
	The problem has been fixed in Service Pack 3 for Windows NT 4.0. If you have
	already installed Windows NT 4.0, apply the latest Service Pack. If you have to
	install from floppy disk, reduce the amount of memory below 1.792 GB until you
	applied the Service Pack.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Windows NT Workstation
	version 4.0 and Microsoft Windows NT Server version 4.0. This problem was
	corrected in the latest Windows NT 4.0 U.S. Service Pack. For information on
	obtaining the Service Pack, query on the following word in the Microsoft
	Knowledge Base:
	
	SERVPACK
	
	Additional query words: 2GB floppy
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
