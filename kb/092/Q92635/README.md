---
layout: page
title: "Q92635: Windows Temporary Files"
permalink: kb/092/Q92635/
---

## Q92635: Windows Temporary Files

	Article: Q92635
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:2.x,3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-2000
	
	2.X 3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 2.03, 2.1, 2.11, 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article discusses Windows temporary files and is organized into the
	following two sections:
	
	- Definition of Windows Temporary Files
	
	- What to Do with Temporary Files
	
	MORE INFORMATION
	================
	
	Definition of Windows Temporary Files
	-------------------------------------
	
	A Windows temporary file is created under the following three circumstances:
	
	1. Windows Desktop applications, such as Write, and multiple document interface
	  (MDI) applications, such as Excel, create temporary files to handle necessary
	  user editing.
	
	  Because a Desktop application cannot have multiple documents open at once, it
	  must immediately create a temporary file that allows you to undo any editing.
	  MDI applications create temporary files only when necessary (for related
	  editing), rather than for every worksheet that is open.
	
	2. When you run an MS-DOS-based standard application with Windows/286,
	  Windows/286 creates a temporary file (for example, ~PIFCHFA.TMP) so that it
	  can swap to disk to make room for other applications to use memory.
	
	3. When you print from Windows or any Windows-based application with the spooler
	  enabled, Windows creates temporary files on the hard disk. Windows spools the
	  print job to the temporary file and then sends it to the appropriate printer
	  as a background operation.
	
	Note: Microsoft recommends that you have approximately 2 megabytes (MB) of free
	disk space available for the creation of temporary files.
	
	What to Do with Temporary Files
	-------------------------------
	
	A number of files may appear on the hard drive in various directories beginning
	with a tilde character (~) and ending with a .TMP extension. These may be
	temporary files created by Windows that remain on the hard drive due to an
	irregular exit from a Windows session.
	
	Under normal conditions, these files are closed and deleted by Windows when you
	quit a Windows session. However, if you quit Windows in an irregular way (for
	example, restarting the computer or turning it off during an active Windows
	session) the files are not closed or deleted.
	
	The temporary files should be located in a designated subdirectory of their own.
	If temporary files appear in the root directory, you may have an invalid SET
	TEMP statement. Check for the following conditions:
	
	1. Using a text editor, such as Microsoft Windows Notepad, open the AUTOEXEC.BAT
	  file and make sure it includes a valid SET TEMP statement. This statement
	  should be similar to the following:
	
	  SET TEMP=C:\WINDOWS\TEMP
	
	2. Note the path that the SET TEMP statement points to and check to ensure that
	  such a subdirectory does exist. If not, create a subdirectory to match the
	  SET TEMP statement.
	
	3. If the SET TEMP statement is pointing to a RAM drive, make sure the RAM drive
	  is large enough to hold the temporary files being created.
	
	By ensuring that there is a valid SET TEMP statement and a separate subdirectory
	for temporary files, these files can easily be deleted on a regular basis.
	
	To delete a temporary file, use the following steps:
	
	1. Close Windows.
	
	2. From the MS-DOS command prompt, change to the TEMP directory.
	
	3. Delete any existing .TMP files. Make sure Windows is not running at the time
	  these files are deleted. Some of these .TMP files may be files that Windows
	  is using.
	
	Additional query words: 2.0 2.03 2.10 2.11 3.00 3.00a 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin203 kbWin210 kbWin211 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:2.x,3.0,3.0a,3.1,3.11
	
	=============================================================================
	
