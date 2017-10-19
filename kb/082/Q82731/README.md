---
layout: page
title: "Q82731: Windows 3.1 WIN.COM Command Switches"
permalink: /kb/082/Q82731/
---

## Q82731: Windows 3.1 WIN.COM Command Switches

	Article: Q82731
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	WIN.COM is the program that starts the Microsoft Windows operating system
	version 3.1 startup process. WIN.COM also performs the functions below.
	
	- WIN.COM makes the following preliminary checks to ensure that Windows can be
	  started:
	
	  a. Is the minimum amount memory required to start Windows available?.
	
	  b. Verifies that Windows is not already running.
	
	  c. Verifies that the necessary binaries Windows needs to execute are
	     available.
	
	- WIN.COM decides whether to start Windows in standard mode or 386 enhanced
	  mode depending on available XMS memory and the processor type. WIN.COM starts
	  386 enhanced mode if it finds at least 1024KB available XMS memory and is on
	  a 80386 computer; otherwise, WIN.COM starts in standard mode. If the machine
	  has less than about 256K XMS memory, WIN.COM refuses to start Windows at all.
	
	- If WIN.COM is either forced or decides to start in standard mode, it first
	  executes the task switcher (WSWAP.EXE). This is the
	  terminate-and-stay-resident (TSR) program that allows Windows to switch among
	  MS-DOS applications and Windows while running in standard mode.
	
	The following is a list of WIN.COM switches and their functions:
	
	WIN [/3] [/S] [/B] [/D:[F][S][V][X]]
	
	  /?  Prints this instruction banner.
	  /3  Starts Windows in 386 enhanced mode.
	  /S  Starts Windows in standard mode.
	  /2  Synonym for the /S switch.
	  /B  Creates a file, BOOTLOG.TXT, that records system messages.
	      generated during system startup (boot).
	  /D  Used for troubleshooting when Windows does not start
	      correctly.
	  :F  Turns off 32-bit disk access. Equivalent to SYSTEM.INI [386enh]
	      setting: 32BitDiskAccess=FALSE.
	  :S  Specifies that Windows should not use ROM address space between
	      F000:0000 and 1 MB for a break point. Equivalent to SYSTEM.INI
	      [386enh] setting: SystemROMBreakPoint=FALSE.
	  :V  Specifies that the ROM routine handles interrupts from the hard
	      drive controller. Equivalent to SYSTEM.INI [386enh] setting:
	      VirtualHDIRQ=FALSE.
	  :X  Excludes all of the adapter area from the range of memory that
	      Windows scans to find unused space. Equivalent to SYSTEM.INI
	      [386enh] setting: EMMExclude=A000-FFFF.
	
	Additional query words: 3.10 argument f s v x fsvx
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
