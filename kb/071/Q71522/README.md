---
layout: page
title: "Q71522: Windows: AUTOEXEC.BAT Is Not Run During Boot"
permalink: kb/071/Q71522/
---

## Q71522: Windows: AUTOEXEC.BAT Is Not Run During Boot

	Article: Q71522
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The AUTOEXEC.BAT file is not run when you boot your computer if the
	"SHELL=COMMAND.COM" statement in the CONFIG.SYS file is missing the "/P"
	parameter.
	
	MORE INFORMATION
	================
	
	The "SHELL=" statement tells the system what command processor to load during
	boot up. Most often this is used to load the MS-DOS COMMAND.COM to increase the
	environment space. The correct syntax for this is:
	
	  SHELL=C:\DOS\COMMAND.COM /E:512 /P
	
	In the example above, the "/E:" parameter is increasing the MS-DOS environment to
	512 bytes (the default is 160 bytes).
	
	The "/P" parameter tells COMMAND.COM that this instance of itself is permanent.
	Without this parameter, COMMAND.COM would load itself into memory, then
	terminate that instance of itself. In doing so, the process of running the
	AUTOEXEC.BAT file is skipped.
	
	REFERENCES
	==========
	
	"The MS-DOS Encyclopedia," pages 782-783. Microsoft Press, 1988.
	
	"Supercharging MS-DOS," pages 106-115. Microsoft Press, 1989.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
