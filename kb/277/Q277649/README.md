---
layout: page
title: "Q277649: DirectX: Screen Flickers When You Start a Program"
permalink: /kb/277/Q277649/
---

## Q277649: DirectX: Screen Flickers When You Start a Program

	Article: Q277649
	Product(s): Microsoft Home Games
	Version(s): 2000,95
	Operating System(s): 
	Keyword(s): kbdisplay kbimu
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- the operating system: Microsoft Windows 95 
	- the operating system: Microsoft Windows 98 
	- the operating system: Microsoft Windows 98 Second Edition 
	- the operating system: Microsoft Windows Millennium Edition 
	- the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start a program that uses Microsoft DirectX 8.0, you may experience the
	following symptoms:
	
	- Your screen may flicker.
	
	- Programs that are running on your computer may briefly stop responding.
	
	CAUSE
	=====
	
	This behavior occurs because DirectDraw tests the capabilities of your video
	adapter the first time that you start a program that uses DirectX 8.0 on your
	computer.
	
	The symptoms occur while DirectDraw tests different display modes.
	
	MORE INFORMATION
	================
	
	DirectX 8.0 cycles through several display modes to test the capabilities of
	your video adapter. The results of the video tests are written to the following
	file:
	
	  D3d8caps.dat
	
	If you delete the D3d8caps.dat file or change the configuration of your video
	adapter, the same symptoms occur the next time that you start a program that
	uses DirectX 8.0.
	
	NOTE: These symptoms also occur if you test DirectDraw by using the DirectX
	Diagnostic Tool (Dxdiag.exe).
	
	Additional query words: msgame direct-x dx8 dxdiag flash blink winme
	
	======================================================================
	Keywords          : kbdisplay kbimu 
	Technology        : kbOSWin2000 kbOSWin98 kbOSWin95 kbOSWinME kbOSWin98SE kbOSWinSearch
	Version           : :2000,95
	Issue type        : kbprb
	
	=============================================================================
	
