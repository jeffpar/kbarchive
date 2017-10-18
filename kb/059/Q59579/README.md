---
layout: page
title: "Q59579: Cannot ALT+TAB Out of Non-Windows Application"
permalink: kb/059/Q59579/
---

## Q59579: Cannot ALT+TAB Out of Non-Windows Application

	Article: Q59579
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article describes the reasons why you may be unable to switch from a
	non-Windows application in standard mode.
	
	MORE INFORMATION
	================
	
	An inability to switch from a non-Windows application in standard mode can occur
	for any of the following reasons:
	
	- One or more of the Directly Modifies options is set in the PIF file for the
	  application.
	
	- The application is trapping all keyboard input. The application must be
	  closed to switch back to Windows.
	
	- The Prevent Program Switch option is selected in the PIF file for the
	  application.
	
	- Shortcut keys normally used by Windows, such as ALT+TAB, are reserved for use
	  by the application in the PIF file.
	
	- The wrong video mode is incorrectly selected in the PIF file.
	
	- Your video display is an EGA, and the driver EGA.COM is improperly installed
	  in the AUTOEXEC.BAT file. Ensure that the file EGA.COM resides in the Windows
	  system directory.
	
	- The non-Windows application is using a video mode that is not supported
	  currently under Windows; therefore, Windows cannot save or restore the
	  display when switching.
	
	Additional query words: 3.00 3.00a 3.0 3.0a TSHOOT win30 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
