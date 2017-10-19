---
layout: page
title: "Q142544: Windows 95/98 Win.com Command-Line Switches"
permalink: /kb/142/Q142544/
---

## Q142544: Windows 95/98 Win.com Command-Line Switches

	Article: Q142544
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): 95
	Operating System(s): 
	Keyword(s): kbenv win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 98 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the command-line switches for Win.com. Win.com is called by
	Io.sys after the Autoexec.bat file is processed, and starts the Windows 95/98
	startup process.
	
	MORE INFORMATION
	================
	
	The syntax for Win.com is:
	
	  WIN {/D:[F] [M] [N] [S] [V] [X]} [/W] [/WX]
	
	The command-line switches for Win.com are described below:
	
	  /W  Restores the Config.sys and Autoexec.bat files from Config.wos
	      and Autoexec.wos and prompts:
	
	         Press any key to continue...
	         Pressing a key reboots the system back to Windows 95/98.
	
	  /WX Restores the Config.sys and Autoexec.bat files from Config.wos
	      and Autoexec.wos and reboots the system to Windows 95/98.
	
	      NOTE: .wos files are created when you open a program requiring
	      MS-DOS mode and you have specified a new MS-DOS-mode
	      configuration. You might need to use the /W or /WX switch if you
	      shut off your computer while you are running an MS-DOS-based
	      program that requires MS-DOS mode and you want to return to
	      Windows 95/98.
	
	  /D: Used for troubleshooting when Windows 95/98 does not start
	      correctly. This switch is used with the following switches:
	
	      F  Turns off 32-bit disk access. This is equivalent to
	         "32BitDiskAccess=false" in the System.ini file.
	
	      M  Enables Safe mode. This is automatically enabled during a
	         Safe-mode boot (by pressing F5).
	
	      N  Enables Safe mode with networking. This is automatically
	         enabled during a Safe-mode boot (by pressing F6).
	
	      S  Specifies that Windows 95/98 should not use ROM address space
	         between F000:0000 and 1 MB for a break point. This is
	         equivalent to the "SystemROMBreakPoint=false" setting in the
	         [386Enh] section of the System.ini file.
	
	      V  Specifies that the ROM routine handles interrupts from the
	         hard disk controller. This is equivalent to the
	         "VirtualHDIRQ=false" setting in the System.ini file.
	
	      X  Excludes all of the adapter area from the range of memory that
	         Windows 95/98 scans to find unused space. This is equivalent to
	         the "EMMExclude=A000-FFFF" setting in the System.ini file.
	
	  NOTE: The following /D: parameters do not work in Windows 98:
	
	   - /D:FSVXN
	   - /D:N
	
	Additional query words: 98
	
	======================================================================
	Keywords          : kbenv win95 
	Technology        : kbWin95search kbWin98search kbZNotKeyword3 kbWin98
	Version           : 95
	Issue type        : kbinfo
	
	=============================================================================
	
