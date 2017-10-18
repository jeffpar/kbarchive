---
layout: page
title: "Q82789: Using SYSTEM.INI's COMMDRV30 Switch"
permalink: kb/082/Q82789/
---

## Q82789: Using SYSTEM.INI's COMMDRV30 Switch

	Article: Q82789
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): win31
	Last Modified: 04-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This new switch for the Microsoft Windows operating system version 3.1 indicates
	to the Virtual COM Device Driver (VCD) that it needs to configure itself to
	handle hardware interrupts for COMM.DRV in the same manner as in Windows 3.0.
	This switch is needed only if you are using enhanced mode and have a third-party
	COM driver, but don't have a replacement VCD.
	
	
	MORE INFORMATION
	================
	
	In Windows 3.0's enhanced mode, the VCD is responsible for handling the COM port
	hardware interrupts for COMM.DRV, and thus Windows applications. In Windows 3.1,
	COMM.DRV handles its interrupts directly; therefore, the VCD can be smaller
	because it doesn't have to duplicate the interrupt handling code.
	
	A problem arises when a third-party COM driver is being used. A number of
	third-party COM drivers are replacements for Microsoft's COMM.DRV, but they may
	not have replaced Microsoft's VCD. For these third-party COM drivers, it is
	still necessary for Microsoft's VCD to handle the interrupts. To provide this
	compatibility and still shrink the VCD code for a default installation,
	Microsoft made the VCD configurable.
	
	If "COMMDRV30=TRUE" is added to the [386Enh] section of the SYSTEM.INI file, then
	the VCD will allocate memory and include the code to handle interrupts for the
	Windows 3.0-compatible COM driver.
	
	This switch applies only to enhanced mode Windows. It does not affect MS-DOS
	applications or the performance of the Windows 3.1 COMM.DRV.
	
	
	KBCategory: kbenv
	KBSubcategory: win31 wincomm windrvr
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          : win31 
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
