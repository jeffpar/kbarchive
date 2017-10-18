---
layout: page
title: "Q84354: Cannot Find DOS Application when Executed from Windows 3.1"
permalink: kb/084/Q84354/
---

## Q84354: Cannot Find DOS Application when Executed from Windows 3.1

	Article: Q84354
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Windows operating system version 3.1 in 386 enhanced mode, the
	following error may occur when you attempt to run a non-Windows-based
	application if the 386grabber= entry in the [Boot] section of the SYSTEM.INI
	file does not specify a grabber file, or is invalid
	
	  Cannot find <FILENAME.EXT> command (or one of its components). Check to
	  ensure the path and filename are correct and that all required libraries are
	  available.
	
	where <FILENAME.EXT> is the executable for the MS-DOS-based application.
	
	WORKAROUND
	==========
	
	To correct the error, either run the MS-DOS maintenance mode of Windows 3.1 to
	reinstall the video driver, or add the correct grabber file to the 386grabber=
	line.
	
	- Edit the [Boot] section of the SYSTEM.INI to add a valid grabber file for the
	  video driver that is installed, to the 386grabber= line.
	
	  -or-
	
	- Reinstall the video driver through the MS-DOS maintenance mode of Windows 3.1
	  Setup. To do this:
	
	  1. Exit Windows 3.1.
	
	  2. Change the directory to the Windows directory.
	
	  3. Type "setup" (without the quotation marks).
	
	MORE INFORMATION
	================
	
	The 386grabber entry specifies the filename of the device driver (called a
	grabber) that makes a non-Windows application visible when using Windows in 386
	enhanced mode.
	
	Additional query words: 3.10 3.11 application execution error err msg dos
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
