---
layout: page
title: "Q38865: Cannot Use /2 Switch for Dual-Monitor Debugging on PS/2"
permalink: /kb/038/Q38865/
---

## Q38865: Cannot Use /2 Switch for Dual-Monitor Debugging on PS/2

	Article: Q38865
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	Operating System(s): 
	Keyword(s): kb16bitonly kbCodeView kbDebug kbVC
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.0, 3.11, 3.14, 4.0, 4.01, 4.05, 4.1 
	- Microsoft CodeView for Windows, versions 3.0, 3.05, 3.06, 3.07, 4.0, 4.01, 4.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To use the /2 switch to enable dual-monitor debugging in CodeView, your computer
	must be equipped with a monochrome display (MDA) and a color display
	(CGA/EGA/VGA). Monochrome display adapters are not generally available for the
	IBM PS/2 computers because they come with built-in VGAs or MDAs, but not both.
	This means that dual-monitor debugging is usually not possible on a PS/2
	system.
	
	This is a hardware issue and not a CodeView limitation; therefore, when hardware
	vendors start selling MDAs that can be added to PS/2 systems with built-in VGAs,
	then CodeView dual-monitor debugging will be available on the PS/2.
	
	Additional query words: kbinf 2.20 3.00 3.50 4.00 4.10
	
	======================================================================
	Keywords          : kb16bitonly kbCodeView kbDebug kbVC 
	Technology        : kbAudDeveloper kbCodeView kbZNotKeyword3 kbCodeView220DOS kbCodeView300DOS kbCodeView311DOS kbCodeView314DOS kbCodeView400DOS kbCodeView401DOS kbCodeView405DOS kbCodeView410DOS kbCodeView300 kbCodeView305 kbCodeView306 kbCodeView307 kbCodeView400 kbCodeView401 kbCodeView410
	Version           : :2.2,3.0,3.05,3.06,3.07,3.11,3.14,4.0,4.01,4.05,4.1
	
	=============================================================================
	
