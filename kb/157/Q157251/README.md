---
layout: page
title: "Q157251: Changing Video Card Produces Error Message"
permalink: kb/157/Q157251/
---

## Q157251: Changing Video Card Produces Error Message

	Article: Q157251
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbdisplay kbhw kbHardware
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you replace the video card in your computer with a different one, you may
	receive the following error message:
	
	  At least one service or driver failed during system startup. Use Event Viewer
	  to examine the event log for details.
	
	When you click OK to clear the message, you receive the following message:
	
	  A new graphics driver has been installed. The default display
	  resolution from the driver has been temporarily used by the system.
	  Please use the Display option in the Windows NT Control Panel to select
	  your preferred display resolution.
	
	CAUSE
	=====
	
	You receive these messages if you installed a new video card before you
	installed the proper driver for the card, or if you installed an incorrect
	driver for the video card.
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. In Control Panel, double-click Display.
	
	2. On the Settings tab, click Display Type.
	
	3. Click Detect, and then click Yes when you are prompted to proceed.
	
	4. When you are prompted to restart the computer, do so.
	
	5. When Windows NT restarts, it reports which video card was detected. Click OK.
	
	6. In Control Panel, double-click Display.
	
	7. On the Settings tab, click the Desktop Area (resolution) and Color Palette
	  settings you want to use.
	
	8. Click OK.
	
	9. If you are prompted to restart the computer, do so.
	
	MORE INFORMATION
	================
	
	The following steps outline the recommended procedure for replacing a video
	card:
	
	1. Install the driver for the new card while the original card is still in the
	  computer.
	
	2. Click the Start button, click Shut Down, click Shut Down The Computer, click
	  Yes, and then turn the computer off.
	
	3. Replace the video card.
	
	4. Turn on the computer.
	
	Additional query words: prodnt display adapter
	
	======================================================================
	Keywords          : kbdisplay kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
