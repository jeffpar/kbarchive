---
layout: page
title: "Q70468: Incorrect Installation of Novell VPICDA.386 Patch"
permalink: /kb/070/Q70468/
---

## Q70468: Incorrect Installation of Novell VPICDA.386 Patch

	Article: Q70468
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The following information applies to the VPICDA.386 patch and INSTALL.EXE
	program supplied with the Novell DOS/Windows Workstation Update. VPICDA.386
	allows Windows to run in enhanced mode on NetWare workstations with network
	adapters configured for IRQ2.
	
	When applying the VPICDA.386 patch without the aid of INSTALL.EXE, which normally
	accompanies the file, take care to modify the SYSTEM.INI correctly.
	
	The original line in the SYSTEM.INI that reads
	
	     device=*vpicd
	
	should be changed to:
	
	     device=vpicda.386
	
	MORE INFORMATION
	================
	
	Problems Encountered
	--------------------
	
	- Divide overflow
	
	- Hanging at the logo screen
	
	- Various memory errors at bootup
	
	- The error
	
	  Cannot find a device file that may be needed to run Windows in 386 enhanced
	  mode; run setup again
	
	  (random characters may also appear on the screen)
	
	- The error message
	
	  The conventional memory in your system is fragmented and Windows cannot run
	  in 386 enhanced mode; please reboot your computer and try again or else run
	  Windows in real mode by typing win/r
	
	  (preceded by random characters on the screen)
	
	Causes
	------
	
	You may experience some of the above problems or error messages if:
	
	- The VPICDA.xxx device line in the SYSTEM.INI includes an asterisk (that is,
	  device=*vpicda.386).
	
	- If two VPICDA.xxx device lines are in the SYSTEM.INI at the same time.
	
	- If the VPICDA.xxx device is called from the CONFIG.SYS file.
	
	Additional query words: 3.0 3.00 3.00a win30
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
