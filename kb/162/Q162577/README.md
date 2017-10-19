---
layout: page
title: "Q162577: STOP: C0000143 MISSING DISPLAY_DRIVER.DLL"
permalink: /kb/162/Q162577/
---

## Q162577: STOP: C0000143 MISSING DISPLAY_DRIVER.DLL

	Article: Q162577
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kb3rdparty kbsetup
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you upgrade from Windows NT version 3.51 to Windows NT version 4.0, the
	following blue screen STOP message appears:
	
	  STOP: (MISSING SYSTEM FILES)
	  The required system file Display_driver.dll is bad or missing.
	
	The problem is not solved by doing any of the following:
	
	- Replacing the video driver in use in the Display tool in Control Panel with a
	  standard VGA driver and repeating the upgrade.
	
	- Changing the video card and repeating the upgrade.
	
	- Replacing the Vga.dll file from a parallel installation.
	
	CAUSE
	=====
	
	This problem occurs when you install an application called Remotely Possible by
	AVALAN Technology. This application replaces the Vga.dll with a .dll file called
	Ntvdrv.dll. It also replaces the Msgina.dll.
	
	RESOLUTION
	==========
	
	Before upgrading to Windows NT 4.0, you can do one of the following:
	
	- In the Remotely Possible application, disable Host Mode. This will remove the
	  files that are causing the problem.
	
	- Remove the Remotely Possible program before you install Windows NT 4.0.
	
	- Contact AVALAN Technology for an upgraded version of Remotely Possible.
	
	-or-
	
	If you have already upgraded to Windows NT 4.0, perform these steps:
	
	1. Do a parallel installation of Windows NT 4.0 and start to that installation.
	
	2. At an MS-DOS prompt, type the following:
	
	  Cd \%Systemroot%\system32
	  Copy Vga.dll Ntvdrv.dll
	  Copy Msgina.dll Logonrem.dll
	
	3. Restart the computer to the original installation of Windows NT 4.0. Delete
	  the reference to the parallel installation in the Boot.ini file, and delete
	  the parallel installation directory.
	
	MORE INFORMATION
	================
	
	For additional information, call AVALAN Technology, Inc., at (508) 429-6482, or
	visit the AVALAN Web site at:
	
	  http://www.avalan.com/ts/tsindex.html
	
	The third-party products discussed here are manufactured by vendors independent
	of Microsoft; we make no warranty, implied or otherwise, regarding these
	products' performance or reliability.
	
	Additional query words: pcanywhere
	======================================================================
	Keywords          : kb3rdparty kbsetup 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
