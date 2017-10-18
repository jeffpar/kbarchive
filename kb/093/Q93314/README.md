---
layout: page
title: "Q93314: OK, Browse Buttons Disabled in File Manager Associate Option"
permalink: kb/093/Q93314/
---

## Q93314: OK, Browse Buttons Disabled in File Manager Associate Option

	Article: Q93314
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the OK and Browse buttons are unavailable (dimmed) for a particular file
	extension in Windows version 3.1 File Manager when you choose Associate from the
	File menu, then the file extension is on the "Programs=" line in the [Windows]
	section of the WIN.INI file.
	
	If a file extension is on the "Programs=" line under Windows version 3.0, the
	Associate option is unavailable in File Manager when you attempt to associate
	the file extension with an application.
	
	To associate the file extension with an application, remove the file extension
	from the "Programs=" line in the [Windows] section of the WIN.INI.
	
	MORE INFORMATION
	================
	
	Windows treats files whose file extensions are on the "Programs=" line as if
	they are executable files.
	
	To determine if the file extension in question is on the "Programs=" line, run
	File Manager and look at the icon next to a file that has the file extension in
	question. If the icon next to the file appears as a rectangular gray box with a
	green bar across the top (or a rectangular box with a smaller rectangular box
	within it), then that file extension is on the "Programs=" line within the
	WIN.INI file.
	
	The icon should appear exactly like the icons to the left of files with the .EXE,
	.PIF, .COM, or .BAT file extensions.
	
	The same behavior may occur if you try to associate a file without a file
	extension.
	
	For more information, query on the following words in the Microsoft Knowledge
	Base:
	
	  File and Manager and Associate and extension
	
	Additional query words: 3.00 3.00a 3.10 3.11 grey gray grayed greyed disabled
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
