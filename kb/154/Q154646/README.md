---
layout: page
title: "Q154646: Setup Stops with Blank Screen During Final Boot"
permalink: /kb/154/Q154646/
---

## Q154646: Setup Stops with Blank Screen During Final Boot

	Article: Q154646
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbsetup kbHardware
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Setup may halt after the GUI-based portion of Setup is finished and you are
	prompted to restart the computer. During the restart, the screen may go blank
	with the cursor in the upper left corner of the screen. When this occurs,
	pressing CTRL+ALT+DELETE may not work to restart the computer. You may have to
	turn the computer off and on to restart it.
	
	CAUSE
	=====
	
	This behavior can occur if the computer has an older or outdated BIOS.
	
	RESOLUTION
	==========
	
	Upgrade the computer's BIOS to the latest version.
	
	MORE INFORMATION
	================
	
	The computer's BIOS (Basic Input Output System) controls the basic hard- ware
	devices on the computer. This includes, but is not limited to, memory (RAM),
	floppy disk drives, IDE hard disk drives, internal and external caches, and
	other miscellaneous functions. Because Windows NT interacts closely with the
	hardware on the computer, it is important to have the latest version of the BIOS
	for your computer.
	
	In many cases, the BIOS can be upgraded with a program that initializes the BIOS
	EPROM and replaces the firmware with the latest version. This is called a "Flash
	BIOS" upgrade. Flash BIOS upgrades can be downloaded from the computer or
	motherboard manufacturer's Web site or BBS in many cases. However, some computer
	manufacturers may require that the motherboard be replaced entirely to upgrade
	the BIOS.
	
	Please refer to the manufacturer of your computer or motherboard for information
	about the latest BIOS version and upgrade options.
	
	Contact information for system manufacturers can be found in the following
	articles in the Microsoft Knowledge Base:
	
	Q65416Hardware and Software Third-Party Vendor Contact List, A-K
	
	Q60781Hardware and Software Third-Party Vendor Contact List, L-P
	
	Q60782Hardware and Software Third-Party Vendor Contact List, Q-Z
	
	======================================================================
	Keywords          : kbhw kbsetup kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
