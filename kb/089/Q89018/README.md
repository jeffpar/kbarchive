---
layout: page
title: "Q89018: Using Windows with the NEC LC-890 Printer"
permalink: /kb/089/Q89018/
---

## Q89018: Using Windows with the NEC LC-890 Printer

	Article: Q89018
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When using the NEC LC-890 printer with Microsoft Windows, set the printer to use
	batch mode, set the wait state to infinite, and make sure the printer is using
	ROM version 47.0, revision 2.0.
	
	MORE INFORMATION
	================
	
	ROM Version
	-----------
	
	The NEC LC-890 should have ROM version 47.0, revision 2.0 or later for proper
	operation with Windows. The ROM revision number is printed on the page when the
	LC-890 does a self-test. Using an earlier ROM version may cause clipped text
	when printing from Notepad or Calendar.
	
	Batch Mode
	----------
	
	The NEC LC-890 PostScript printer may print black boxes in areas instead of
	graphics when set to interactive mode. The LC-890 must be set to batch mode to
	print graphics in Windows. According to NEC, interactive mode should only be
	used by programmers. Programmers can send codes to the printer and receive
	messages back from the printer when in interactive mode. NEC recommends the
	batch mode setting for normal use.
	
	Wait State
	----------
	
	There are four control-panel buttons on the front of the NEC LC-890 to change
	settings: ONLINE, MENU, NEXT, and SELECT. There is also an LCD menu display.
	
	To change the wait state (time-out) to infinite, do the following:
	
	1. Press the ONLINE button to toggle the printer off line.
	
	2. Press the MENU button. The LCD reads "Setup Test Setup."
	
	3. Press the SELECT button, then press the NEXT button twice. The LCD reads
	  "Setup Miscellaneous."
	
	4. Press the SELECT button, then press the NEXT button. The LCD reads "Set Wait
	  Time."
	
	5. Press the SELECT button; the Wait Time-Outs is displayed. The available
	  options are 5 seconds, 15 seconds, 30 seconds, and Infinite.
	
	6. Press the NEXT button until "Infinite" is displayed.
	
	7. Press the ONLINE button.
	
	The NEC product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	
	Additional query words: 3.10 win31 neclc890 lc890
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
