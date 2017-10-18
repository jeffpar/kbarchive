---
layout: page
title: "Q181794: Stop 0x00000050 Caused by Remotely Possible Software"
permalink: kb/181/Q181794/
---

## Q181794: Stop 0x00000050 Caused by Remotely Possible Software

	Article: Q181794
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A computer running Windows NT 4.0 may display the following blue screen STOP
	error message:
	
	  STOP 0x00000050 (f205f000 00000000 00000000 00000000)
	  PAGE_FAULT_IN_NONPAGED_AREA
	
	NOTE: The first parameter may change depending on the system configuration. The
	last three parameters are always zeros.
	
	CAUSE
	=====
	
	Remotely Possible software replaces Vga.dll and Msgina.dll with Rp32ntvx.dll
	(where x is a number between 1 to 6 depending, on the system configurations) and
	Logonrem.dll respectively.
	
	RESOLUTION
	==========
	
	
	To resolve this problem, copy Vga.dll and Msgina.dll over Rp32ntvx.dll and
	Logonrem.dll respectively.
	
	MORE INFORMATION
	================
	
	
	The products included here are manufactured by a vendor independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Hardware          : x86
	Issue type        : kbprb
	
	=============================================================================
	
