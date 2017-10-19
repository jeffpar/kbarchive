---
layout: page
title: "Q71264: Information on SYSTEM.INI &#91;386enh&#93; Entry SystemROMBreakPoint="
permalink: /kb/071/Q71264/
---

## Q71264: Information on SYSTEM.INI &#91;386enh&#93; Entry SystemROMBreakPoint=

	Article: Q71264
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-SEP-1999
	
	3.00 3.00a 3.10 3.11
	
	WINDOWS
	
	kbref kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following is information about the SYSTEM.INI [386Enh] entry
	SystemROMBreakPoint=.
	
	The first section is taken from the Windows SYSINI3.TXT file. Below that, you
	find more specific information on Windows' relationship with
	SystemROMBreakPoint=.
	
	MORE INFORMATION
	================
	
	SYSINI3.TXT
	-----------
	
	SystemROMBreakPoint=<Boolean>
	
	Default: True
	Purpose: Specifies whether Windows should use ROM address
	        space between F000:0000 and 1 MB for a break
	        point. Windows in 386 enhanced mode normally
	        searches this space to find a special instruction
	        that is used as a system break point. If this
	        address space contains something other than
	        permanently available ROM, you should disable
	        this setting.
	
	To change: Use Notepad to edit the SYSTEM.INI file.
	
	Windows is searching for a byte value equal to 63H, which is an adjust-requested
	privilege level (ARPL) instruction in the range F000-FFFF.
	
	When the SystemROMBreakPoint variable is set to false, enhanced mode Windows
	allocates a one-byte block of global virtual 8086 memory in low MS-DOS
	conventional memory and writes a 63h in it.
	
	With QEMM and 386Max, SystemROMBreakPoint= must be set to false. These expanded
	memory emulators remap the ROM. The search in the system ROM for the system ROM
	break point must be disabled if the ROM is going to be remapped.
	
	Additional query words: 3.00 3.00a 3.10 3.11 winmem \* yeswin4
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
