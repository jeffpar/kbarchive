---
layout: page
title: "Q157512: NeoMagic 256-Color Test Screen Incorrect When Windowed"
permalink: kb/157/Q157512/
---

## Q157512: NeoMagic 256-Color Test Screen Incorrect When Windowed

	Article: Q157512
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	On an Intel-based computer with a NeoMagic display adapter, the adapter does not
	display the 256-color test in the DISPTEST tool correctly. The DISPTEST tool is
	included with the Windows NT 4.0 Hardware Compatibility Test Kit.
	
	The test screen is displayed correctly in all modes in full-screen mode, but is
	displayed incorrectly in windowed mode.
	
	
	CAUSE
	=====
	
	This behavior occurs because of an incompatibility between the DISPTEST tool and
	the NeoMagic video adapter's BIOS.
	
	RESOLUTION
	==========
	
	Contact the adapter's manufacturer for information regarding a possible updated
	driver.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
