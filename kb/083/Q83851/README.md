---
layout: page
title: "Q83851: SLEEP.SYS 3.1 Required for APM on AST Laptops"
permalink: kb/083/Q83851/
---

## Q83851: SLEEP.SYS 3.1 Required for APM on AST Laptops

	Article: Q83851
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The advanced power management (APM) icon does not show up in Control Panel on
	AST APM laptops under Windows version 3.1 unless you use SLEEP.SYS, version
	3.1.
	
	According to AST technical support, SLEEP.SYS, version 3.1, is required for APM
	to function correctly with Windows 3.1. You can download this file in its
	compressed format (PEXEC386.ZIP) from the AST bulletin board.
	
	If your BIOS version is 1.06 or earlier, you should contact AST for a BIOS
	upgrade, as this version does not work correctly with SLEEP.SYS version 3.1.
	
	MORE INFORMATION
	================
	
	For more instructions on installing APM for Windows 3.1, please see section 5.0,
	"Using Advanced Power Management (APM)," in the Windows 3.1 README.WRI file.
	
	In addition, make sure the correct settings are in the SYSTEM.INI file, as
	follows:
	
	     [386Enh]
	     device=vpowerd.386
	
	     [boot]
	     drivers=power.drv
	
	NOTE: Windows does NOT set up automatically for APM machines. You must run the
	maintenance mode of Setup and select one of the APM machines.
	
	The AST products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	Additional query words: 3.10 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
