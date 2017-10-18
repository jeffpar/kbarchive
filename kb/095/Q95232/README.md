---
layout: page
title: "Q95232: PRB: Video Card Causes GP Faults or Display Problems"
permalink: kb/095/Q95232/
---

## Q95232: PRB: Video Card Causes GP Faults or Display Problems

	Article: Q95232
	Product(s): Microsoft FoxPro
	Version(s): 2.5,2.5a,2.5b,2.6,2.6a,3.0,5.0,6.0,7.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbvfp300 kbvfp500 kbvfp600
	Last Modified: 04-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 5.0, 6.0, 7.0 
	- Microsoft FoxPro for Windows, versions 2.5, 2.5a, 2.5b, 2.6, 2.6a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A number of video cards do not work properly with FoxPro for Windows. They may
	cause general protection (GP) faults or display problems.
	
	CAUSE
	=====
	
	FoxPro for Windows makes intensive use of screen input/output (I/O), which does
	not work well with some video cards. The following video cards have been
	identified as conflicting with FoxPro for Windows:
	
	- AST Power Premium 486 with VGA motherboard
	
	- ATI Ultra Graphics Pro (local bus)
	
	- COMPAQ QVision
	
	- Dell 486/20 with VGA on motherboard
	
	- Diamond Stealth64 video driver
	
	- Genoa 7900 MM card
	
	- Hercules Dynamite Power VESA with ET 4000 chipset
	
	- MACH32
	
	- MATROX MGA video driver using 1024 x 768 resolution
	
	- NEC 2A
	
	- Oak VGA card with 640 x 480 x 256 colors for 286 or higher processor
	
	- Orchid Fahrenheit 1280 card using Microsoft Windows version 3.1
	
	- Speed Star 24x
	
	- TIGA 1024 x 768 x 256 small fonts
	
	- Trident 8900C
	
	- Number 9 Reality 332 video card with Hawkeye driver
	
	NOTE: The video cards discussed here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	RESOLUTION
	==========
	
	To test the compatibility of the video card being used and FoxPro for Windows,
	use one of the standard Windows drivers that ships with Windows, for example,
	the VGA or Super VGA driver. If the problem no longer occurs when you are using
	the standard Windows video driver, contact the vendor for an updated version of
	the video driver or obtain the proper driver from the Windows Driver Library
	(WDL). (See the MORE INFORMATION section for information on obtaining a WDL
	driver.)
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The WDL drivers are available at no charge from the Microsoft Software Library
	and the Internet. However, note that standard connect-time fees and
	long-distance telephone charges, if any, still apply during downloading. When
	you connect to any of these services, please read the WDL.TXT file for
	downloading instructions and a complete list of devices supported in the WDL.
	
	If you do not have a modem, you can obtain an individual WDL driver on disk by
	calling Microsoft Product Support at (425) 637-7098.
	
	Other Bulletin Board Service (BBS) Numbers
	------------------------------------------
	
	The BBS number for Trident is (415) 691-1016.
	
	
	Additional query words: VFoxWin FoxWin 2.50 2.50a 2.50b 2.60 2.60a XGA GPF incompatible kbdse
	
	======================================================================
	Keywords          : kb3rdparty kbvfp300 kbvfp500 kbvfp600 
	Technology        : kbVFPsearch kbAudDeveloper kbFoxproSearch kbFoxPro260 kbFoxPro250 kbFoxPro250a kbFoxPro250b kbFoxPro260a kbVFP300 kbVFP500 kbVFP600 kbVFP700
	Version           : :2.5,2.5a,2.5b,2.6,2.6a,3.0,5.0,6.0,7.0
	Issue type        : kbprb
	
	=============================================================================
	
