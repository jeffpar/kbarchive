---
layout: page
title: "Q101887: Unable to Close MSD Button Option Using Keyboard"
permalink: kb/101/Q101887/
---

## Q101887: Unable to Close MSD Button Option Using Keyboard

	Article: Q101887
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You cannot close a main "button" option in the Microsoft Diagnostic Utility
	(MSD.EXE) after you choose a command from the File, Utilities, or Help menus if
	the option's window is displayed on the screen.
	
	If you press ENTER to close the window or press F3 to exit MSD, there is no
	response (although the keyboard may appear to stop responding [hang]).
	
	WORKAROUND
	==========
	
	Exit the window by choosing OK with the mouse, or exit MSD by using the ALT+F+X
	(ALT+File+Exit) key combination. You cannot close the button option by pressing
	ENTER, and you cannot exit MSD.EXE by pressing F3; these keyboard commands do
	not work.
	
	MORE INFORMATION
	================
	
	The MSD button options include Computer, Memory, Video, Network, OS Version,
	Mouse, Other Adapters, Disk Drives, LPT Ports, COM Ports, IRQ Status, TSR
	Programs, and Device Drivers.
	
	NOTE: You may experience this problem in any button option windows.
	
	STATUS
	======
	
	This article applies to MSD.EXE version 2.0 (which ships with Microsoft Windows
	3.1 and 3.11), version 2.0a (which ships with Microsoft Windows for Workgroups
	version 3.1), 2.01 (which ships with MS-DOS versions 6.0, 6.2, and 6.21), and
	2.10 (which ships with Windows for Workgroups version 3.11).
	
	Additional query words: 6.22 6.00 6.20 lock locks hang hangs stops responding 2.00 2.00a 2.10 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22; WINDOWS:3.1,3.11
	
	=============================================================================
	
