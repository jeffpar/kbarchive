---
layout: page
title: "Q65176: Mouse Problems on Packard Bell Legend and Victory Computers"
permalink: /kb/065/Q65176/
---

## Q65176: Mouse Problems on Packard Bell Legend and Victory Computers

	Article: Q65176
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 24-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You have a Packard Bell Legend or Victory series computer, and your mouse stops
	responding (hangs) when you run Microsoft Windows version 3.0 in standard or 386
	enhanced mode.
	
	CAUSE
	=====
	
	This problem occurs due to an upper memory conflict. The Microsoft mouse driver
	loads itself into the upper memory area (UMA) automatically and conflicts with a
	Packard Bell device loaded in the same area.
	
	WORKAROUND
	==========
	
	To work around this problem:
	
	- Add x=c600-c7ff to the EMM386.EXE command in your CONFIG.SYS file.
	
	  -or-
	
	- Add /E to the MOUSE.EXE command in your AUTOEXEC.BAT file to force the mouse
	  driver to load in conventional memory instead of the UMA.
	
	MORE INFORMATION
	================
	
	The Packard Bell Legend and Victory series computers offer both a PS/2 mouse
	port and a serial port. When a Microsoft Mouse is connected to the PS/2 mouse
	port, it reacts more quickly than if it were connected to the standard serial
	port. According to Packard Bell, this is part of the system design.
	
	For more information, query on the following words:
	
	  PS/2 Mouse Port and Western Digital Motherboards
	
	The products included here are manufactured by Packard Bell, a vendor independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty keyboard controller
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
