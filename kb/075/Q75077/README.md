---
layout: page
title: "Q75077: EGA.SYS from MS-DOS 5 Upgrade Corrupts Paintbrush"
permalink: /kb/075/Q75077/
---

## Q75077: EGA.SYS from MS-DOS 5 Upgrade Corrupts Paintbrush

	Article: Q75077
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:5.0; :1.0,2.0,4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system version 5.0 
	- Microsoft Paintbrush for MS-DOS, versions 1.0, 2.0, 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft MS-DOS 5 Upgrade installs an EGA.SYS device driver in your
	CONFIG.SYS file if you have an EGA video card in your system. This device driver
	affects all versions of Paintbrush, causing the mouse to leave droppings when
	you move the cursor on the screen.
	
	MORE INFORMATION
	================
	
	The MS-DOS 5 Upgrade installs the EGA device driver if your video card is an EGA
	card or if it supports EGA video mode. To solve this problem, remove the line
	from your CONFIG.SYS file that installs this device driver, then restart your
	machine.
	
	Note: You may have difficulty with screen swapping when using Task Swapper in
	MS-DOS Shell.
	
	Additional query words: 5.00 corrupt garbage paint brush 4.00 4.01 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbPaintbrushSearch kbZNotKeyword3 kbPaintBrush100DOS kbPaintBrush200DOS kbPaintBrush400DOS kbMSDOSSearch kbMSDOS500
	Version           : MS-DOS:5.0; :1.0,2.0,4.0
	
	=============================================================================
	
