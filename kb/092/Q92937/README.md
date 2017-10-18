---
layout: page
title: "Q92937: PC Tools Drivers May Cause Windows to Stop Responding (Hang)"
permalink: kb/092/Q92937/
---

## Q92937: PC Tools Drivers May Cause Windows to Stop Responding (Hang)

	Article: Q92937
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you install PC Tools for MS-DOS, your mouse and/or keyboard behave
	erratically in Microsoft Windows, or Windows stops responding (hangs) after the
	logo screen is displayed.
	
	CAUSE
	=====
	
	During installation, PC Tools for MS-DOS, version 7.0, 7.1, or 8.0, may make the
	following changes to the [boot] section of the SYSTEM.INI file:
	
	     mouse.drv=C:\PCTOOLS\SYSTEM\COMMMOU.DRV
	     keyboard.drv=C:\PCTOOLS\SYSTEM\COMMKBD.DRV
	     display.drv=C:\PCTOOLS\SYSTEM\COMMDIS.DRV  (version 8.0 only)
	     cpdisplay.drv=<original display driver>
	
	NOTE: The paths to these files may vary.
	
	The entry for <original display driver> is the driver filename for the
	active display drive as shown in Windows Setup.
	
	These modifications can change mouse and/or keyboard behavior in Windows, or
	cause Windows to hang.
	
	WORKAROUND
	==========
	
	To work around these problems, deactivate (comment) the lines shown above by
	inserting a semicolon (;) at the beginning of each line. Then, add the following
	lines to the [boot] section of the SYSTEM.INI file:
	
	     mouse.drv=MOUSE.DRV
	     keyboard.drv=KEYBOARD.DRV
	     display.drv=<original display driver>
	
	These are the standard settings for the Microsoft mouse, enhanced 101- or 102-key
	keyboard, and current display driver. If you are using a different mouse, or
	keyboard, run Setup to reinstall the appropriate driver(s).
	
	NOTE: This workaround disables the PC Tools Commute application.
	
	PC Tools for MS-DOS is manufactured by Central Point Software, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	this product's performance or reliability.
	
	Additional query words: 3.10 commute 8.00 8.0 PCTOOLS
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
