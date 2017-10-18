---
layout: page
title: "Q81523: NOMOUSE.DRV Is Required when No Mouse Is Installed"
permalink: kb/081/Q81523/
---

## Q81523: NOMOUSE.DRV Is Required when No Mouse Is Installed

	Article: Q81523
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a mouse driver is removed from Microsoft Windows, Windows requires that the
	NOMOUSE.DRV driver be installed. This driver tells Windows that a mouse is not
	present. This is necessary because Windows requires a driver to be associated
	with the "Mouse.drv=" line in the [boot] section of the SYSTEM.INI file. During
	startup, Windows takes the following actions depending on what it finds in the
	"Mouse.drv=" line:
	
	- If the Mouse.drv= line does not have an entry after the equal (=) sign,
	  Windows exits to an MS-DOS command prompt.
	
	- If the Mouse.drv= line is missing from the SYSTEM.INI file, Windows looks in
	  the Windows and system directories and the path. If there is a MOUSE.DRV file
	  there, then it uses it, regardless of file date or size.
	
	- If there is no MOUSE.DRV file, then Windows exits to an MS-DOS command
	  prompt.
	
	Windows does not search for the following mouse drivers:
	
	  NOMOUSE.DRV
	  LMOUSE.DRV
	  MSMOUSE.DRV
	  MSMOUSE2.DRV
	
	MORE INFORMATION
	================
	
	To properly remove a mouse:
	
	1. Double-click the Windows Setup icon from the Main program group.
	
	2. From the Options menu, choose Change System Settings.
	
	3. Click the Down Arrow button at the end of the Mouse box.
	
	4. From the list of available mice, select:
	
	  No mouse or other pointing device
	
	5. Choose OK.
	
	6. Windows prompts for the appropriate disk.
	
	It is also possible to perform this function by exiting to MS-DOS and running
	Windows SETUP.EXE (located in the Windows directory) from the command line.
	
	Additional query words: 3.00 3.00a 3.10 removed de-installed delete 3.11 deinstalled
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
