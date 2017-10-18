---
layout: page
title: "Q85366: Maintenance Mode Windows Setup Doesn't Run from Inside Windows"
permalink: kb/085/Q85366/
---

## Q85366: Maintenance Mode Windows Setup Doesn't Run from Inside Windows

	Article: Q85366
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the PATH environment variable does not include the drive letter for the
	WINDOWS directory, you may be unable to run Windows Setup from within Windows,
	and you cannot save any changes you make with the System Configuration Editor
	(SYSEDIT.EXE).
	
	MORE INFORMATION
	================
	
	A PATH environment variable such as
	
	  PATH=\;\DOS;\WINDOWS;\ETC
	
	does not allow the maintenance mode of Windows Setup to run from within Windows.
	This problem occurs only if Windows was started from a directory other than the
	WINDOWS directory. If the following error message appears, edit the PATH
	environment variable in the AUTOEXEC.BAT file to include all drive letters (for
	example, PATH=C:\;C:\DOS;C:\WINDOWS;C:\ and so on):
	
	  Windows Setup
	
	  You are attempting to set up from within Windows. Quit Windows and type
	  `setup' at the MS-DOS command prompt.
	
	The same result occurs if you do either of the following:
	
	- Try to run Setup by double-clicking SETUP.EXE in File Manager.
	
	  -or-
	
	- Include the path for Windows in the Program Manager Properties dialog box.
	
	To determine if it should run in maintenance mode or in full installation mode,
	Setup looks for WINVER.EXE in the current directory. Starting Windows from the
	WINDOWS directory does not result in this error message because SETUP.EXE can
	find the required files.
	
	Additional query words: 3.10 3.1 3.11 statement
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
