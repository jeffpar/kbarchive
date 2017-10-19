---
layout: page
title: "Q82734: Meaning of SYSTEM.INI File's SVGAMODE= Setting"
permalink: /kb/082/Q82734/
---

## Q82734: Meaning of SYSTEM.INI File's SVGAMODE= Setting

	Article: Q82734
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses the Microsoft Windows operating system version 3.1
	SYSTEM.INI SVGAMODE= setting.
	
	The SVGAMODE= setting in the SYSTEM.INI file's [display] section is used by the
	Windows 3.1 Super VGA driver to remember the mode number needed to put the Super
	VGA adapter card into 800 x 600 16-color mode.
	
	Note: The Windows 3.1 Super VGA (800 x 600, 16 colors) driver is not guaranteed
	to work with all Super VGA video boards.
	
	MORE INFORMATION
	================
	
	When Windows is started with the SVGA display driver, it examines the SYSTEM.INI
	file's [display] section and looks for an SVGAMODE=<value> entry. If it
	finds it, the driver switches the card into the specified mode and then performs
	a hardware validity check to make sure the screen is in 800 x 600 16-color
	mode.
	
	If the validity check fails, the SVGA driver runs through a list of common mode
	numbers, applying each one to the hardware, until one of the mode numbers
	successfully puts the adapter into 800 x 600 16-color mode. Once a successful
	mode number is found, the driver sets the SVGAMODE= setting in the SYSTEM.INI
	file.
	
	Note: This value is in decimal (not hexadecimal). For example, if mode 29H is the
	800 x 600 mode number for a given video adapter, then SVGAMODE=41 would be
	stored in the SYSTEM.INI file.
	
	If the SVGA driver does not find SVGAMODE= in the SYSTEM.INI, then it performs
	the mode detection described above.
	
	Higher Refresh Rates for VESA Boards
	------------------------------------
	
	Generally, there is no reason to directly modify the SVGAMODE switch. When the
	SVGA driver is started, it will (in most cases) correctly identify the 800 x 600
	mode number for the installed video board and use this number thereafter.
	
	Some video boards, however, may have more than one 800 x 600 16-color mode -- for
	example, VESA-compatible video boards. VESA is an emerging standard for Super
	VGA video hardware. The standard mode number for 800 x 600 16-color mode for
	VESA-compatible video boards is 6AH (106 decimal). The mode-detection algorithm
	in the video driver, however, tests for this mode last. Because of this, Windows
	will not necessarily use mode 6AH for some VESA-compatible hardware. If a VESA
	video board is installed, it may be beneficial to edit the SYSTEM.INI file's
	[display] section and change SVGAMODE= to SVGAMODE=106.
	
	This change will force the driver to initially use mode 6AH. With some VESA video
	boards, mode 6AH selects a faster (noninterlaced) screen refresh rate that is
	much more pleasing to the eye.
	
	Additional query words: 3.10 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
