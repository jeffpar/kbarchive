---
layout: page
title: "Q173816: Desktop Pattern Corruption When Increasing Color Palette"
permalink: kb/173/Q173816/
---

## Q173816: Desktop Pattern Corruption When Increasing Color Palette

	Article: Q173816
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbdisplay
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you increase the color palette to more than 256 colors, the desktop pattern
	may turn black and may not be updated when icons are moved.
	
	CAUSE
	=====
	
	The bitmap is not updated properly when the mode changes.
	
	RESOLUTION
	==========
	
	Perform one of the following to work around this problem:
	
	- Perform the following steps to reapply the background pattern:
	
	  1. Click the Start button, point to Settings, click Control Panel, and then
	     double-click Display.
	
	  2. Click the Background tab, click the appropriate Pattern and Wallpaper,
	     click Apply, and then click OK.
	
	  -or-
	
	- Shut down and restart your computer.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 4.0 with
	Service Pack 3. We are researching this problem and will post new information
	here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: 4.00 sp3 video corruption Compaq Deskpro 6000 matrox refresh redraw
	
	======================================================================
	Keywords          : kbdisplay 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbbug
	
	=============================================================================
	
