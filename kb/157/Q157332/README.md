---
layout: page
title: "Q157332: Windows NT Hangs with Adaptec 2940 Enable Disconnect Set to No"
permalink: /kb/157/Q157332/
---

## Q157332: Windows NT Hangs with Adaptec 2940 Enable Disconnect Set to No

	Article: Q157332
	Product(s): Microsoft Windows NT
	Version(s): 4.0
	Operating System(s): 
	Keyword(s): kbhw kbHardware
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows NT Workstation version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start your computer, Windows NT 4.0 may stop responding (hang) at the
	blue startup screen displaying the system processor and memory configuration.
	When this occurs, no dots appear on the screen, and you receive no error
	message. In addition, if you attempt to install Windows NT 4.0 from the 3 floppy
	diskettes your system may hang on disk 3 while displaying "loading SCSI floppy
	driver".
	
	CAUSE
	=====
	
	This behavior can occur if the Enable Disconnect setting is set to No in the
	SCSI configuration for the Adaptec 2940 SCSI controller in your computer.
	
	RESOLUTION
	==========
	
	Set the Adaptec SCSI controller back to the default settings. To do so, follow
	these steps:
	
	1. Restart your computer. When the BIOS message for the Adaptec SCSI controller
	  appears on the screen, press CTRL+A to enter the SCSI controller
	  configuration tool.
	
	2. Select SCSI Configuration from the menu.
	
	3. Press F6 to load the default settings.
	
	4. If the boot drive is not SCSI ID 0, go to the SCSI Boot Configuration menu
	  under Additional Options and set the ID to match the drive that is the boot
	  drive.
	
	5. Restart the computer.
	
	MORE INFORMATION
	================
	
	The Adaptec documentation recommends setting the Enable Disconnect setting to No
	if there is only one drive on the bus to improve performance. The Aic78xx.sys
	driver requires this setting to be set to Yes.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbhw kbHardware 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : 4.0
	
	=============================================================================
	
