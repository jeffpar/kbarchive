---
layout: page
title: "Q82418: 32-Bit Disk Access and Portable Computers"
permalink: /kb/082/Q82418/
---

## Q82418: 32-Bit Disk Access and Portable Computers

	Article: Q82418
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	32-Bit Disk Access should not be used on battery-operated portable computers
	that implement power-saving features. Enabling 32-Bit Disk Access on such
	machines can cause Microsoft Windows version 3.1 to stop responding (hang).
	
	MORE INFORMATION
	================
	
	Enabling 32-Bit Disk Access causes Windows to access the system's hard disk(s)
	using an Enhanced mode virtual device driver (VxD), which accesses the
	controller hardware directly. To function correctly, the disk controller must be
	completely compatible with the standard Western Digital hard disk controller
	architecture. In most cases, Setup and the VxD's own initialization code
	properly detects those controllers that are not 100% compatible with the Western
	Digital standard. The disk controllers used in portable computers are very
	similar to Western Digital controllers but have extensions used for power
	management, such as shutting down the disk drive when it hasn't been used for a
	while or when the machine is placed in suspend mode by the user (typically by
	pressing a button). Some machines, such as Tandon notebook computers, change the
	state of the disk controller when the power source is changed from line to
	battery. Basically, the power management support can change the state of the
	disk controller without notifying Windows.
	
	Since there is no standard for this hardware, the 32-Bit Disk driver cannot
	determine when power-management events have occurred or what to do about them.
	If the driver determines the controller is in a different state than it
	expected, it will produce an error message. If this message is encountered,
	32-Bit Disk Access should be turned off.
	
	If Windows cannot be started in Enhanced mode while 32-Bit Disk Access is
	enabled, Windows should be started with the command line,
	
	  WIN /D:F
	
	The switch temporarily disables 32-Bit Disk Access. 32-Bit Disk Access should
	then be turned off permanently by using Control Panel's Virtual Memory dialog
	box.
	
	Controllers that support drive spin-down, such as Compaq's 386N computers, should
	not use 32-Bit Disk Access for similar reasons.
	
	NOTE: To avoid problems with these machines, 32-Bit Disk Access is disabled by
	default. If the machine is not a portable and does not support spin-down, then
	32-Bit Disk Access can be enabled.
	
	Additional query words: 3.10 32 fast disk lte/25c docking station lte Compaq 486N 3.11 laptop lap top fastdisk
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
