---
layout: page
title: "Q83904: Emerson 286 or 386sx Hangs During Windows Startup"
permalink: kb/083/Q83904/
---

## Q83904: Emerson 286 or 386sx Hangs During Windows Startup

	Article: Q83904
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Windows operating system version 3.1 may hang during startup on
	Emerson 286 and 386sx computers with Quadtel HT113 286 or 386sx BIOS version
	3.05.08, ROM version 1.04, dated prior to December 1990.
	
	To correct the problem, contact Emerson for a BIOS upgrade.
	
	MORE INFORMATION
	================
	
	This problem occurs because the BIOS startup code places a non-zero value that
	does not point to an interrupt service routine in the INT 5Ch vector. As a
	result, when standard mode starts up and calls INT 5Ch to try to detect the
	presence of NetBIOS, the machine hangs. If a NetBIOS network in installed on the
	system, the problem does not occur.
	
	The products included here are manufactured by vendors independent of Microsoft;
	we make no warranty, implied or otherwise, regarding these products' performance
	or reliability.
	
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
