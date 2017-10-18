---
layout: page
title: "Q79731: Windows Err Msg: Your Program Cannot Be Swapped Out to Disk"
permalink: kb/079/Q79731/
---

## Q79731: Windows Err Msg: Your Program Cannot Be Swapped Out to Disk

	Article: Q79731
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the SET TEMP statement in your AUTOEXEC.BAT file is invalid or set to a drive
	that has insufficient disk space, Microsoft Windows may not function properly in
	standard mode. If this is the case, when you press ALT+ESC to return to Windows
	from an MS-DOS-based application, the following error message may be displayed:
	
	  Your program cannot be swapped out to disk. There is not enough space on your
	  disk. The suspended program will be restarted. You must free disk space to
	  switch out from this application, or else you must end the program before
	  trying to go back to Windows.
	
	MORE INFORMATION
	================
	
	For Windows 3.0 and 3.1 in standard mode to switch back from an MS-DOS-based
	application, Windows must swap that application to the hard drive. The area
	where Windows places this application on the hard drive is determined by the SET
	TEMP statement in the AUTOEXEC.BAT file. This problem may also arise if the SET
	TEMP statement is set to a drive that is low on disk space or if the SET TEMP is
	set to a RAM drive that is not large enough.
	
	
	Additional query words: tshoot 3.00 3.00a 3.10 3.11 Winmem
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
