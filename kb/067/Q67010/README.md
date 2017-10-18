---
layout: page
title: "Q67010: XTs Does Not Install for EGA or VGA Color with Windows 3.0"
permalink: kb/067/Q67010/
---

## Q67010: XTs Does Not Install for EGA or VGA Color with Windows 3.0

	Article: Q67010
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use an XT (8088, 8086 or NEC V20 processor) with Microsoft Windows
	version 3.0, it is not possible to install for EGA high-resolution color display
	or VGA drivers even if your computer is equipped with one of these displays.
	This situation occurs because these drivers contain AT (80286) specific
	instructions.
	
	MORE INFORMATION
	================
	
	If you try to install for one of these drivers, the Setup program crashes after
	it copies the logo file (EGALOGO.LGO or VGALOGO.LGO) and attempts to enter the
	Windows-based portion of SETUP.EXE.
	
	It should be possible to install for EGA black and white, EGA monochrome, or CGA
	choices if you have an EGA adapter. You should be able to install for VGA with
	monochrome display if you have a VGA display. Windows does not display in color
	on XT computers.
	
	Do not be concerned that the EGA black and white and EGA monochrome choices say
	"(286 only)" after them. This only indicates that they won't work in the 386
	enhanced mode because they cannot be virtualized. They work in the standard
	(286) mode or real mode.
	
	Additional query words: 3.00 3.0 3.0a 3.00a KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
