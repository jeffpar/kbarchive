---
layout: page
title: "Q93128: Err Msg: &quot;WinPrint Manager Printer Error...&quot; (WinJet)"
permalink: kb/093/Q93128/
---

## Q93128: Err Msg: &quot;WinPrint Manager Printer Error...&quot; (WinJet)

	Article: Q93128
	Product(s): Microsoft Windows Printing Issues
	Version(s): 3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	- the operating system: MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you switch between a LaserMaster WinJet 300 and a WinJet 800, you receive
	the following printer error message:
	
	  WinPrint Manager
	  Printer Error: VPD cannot register frame buffer
	
	Other error messages are then displayed.
	
	CAUSE
	=====
	
	If you switch between a LaserMaster WinJet 300 and a WinJet 800 must manually
	edit the SYSTEM.INI file. The printer errors occur if you fail to do this.
	
	WORKAROUND
	==========
	
	WinJet 300
	----------
	
	The WinJet 300 installation adds the following lines to the [386Enh] section of
	the SYSTEM.INI file:
	
	  device=LMLPV.386 ;WinPrint
	  device=LMCAP.386 ;WinPrint
	  device=LMMI.386  ;WinPrint
	
	When you install a WinJet 300 over an existing WinJet 800, the installation
	process does not remove the line (device=LMHAROLD.386 ;WinPrint). You must do
	this manually, as follows:
	
	1. Make a backup copy of your SYSTEM.INI by copying the file to SYSTEM.BAK.
	
	2. Open the SYSTEM.INI in a text editor (NOTEPAD.EXE).
	
	3. Place a semicolon in front of the device=LMHAROLD.386 line in the [386Enh]
	  section of the SYSTEM.INI file.
	
	  The line should appear as in the sample below:
	
	     [386Enh]
	     device=LMLPV.386 ;WinPrint
	     ;device=LMHAROLD.386 ;WinPrint
	     device=LMCAP.386 ;WinPrint
	     device=LMMI.386 ;WinPrint
	
	WinJet 800
	----------
	
	The WinJet 800 installation adds the following lines to the [386Enh] section of
	the SYSTEM.INI file:
	
	  device=LMHAROLD.386 ;WinPrint
	  device=LMCAP.386 ;WinPrint
	  device=LMMI.386 ;WinPrint
	
	When you install a WinJet 800 over an existing WinJet 300, the installation
	process does not remove the line (device=LMLPV.386 ;WinPrint). You must do this
	manually as follows:
	
	1. Make a backup copy of your SYSTEM.INI by copying the file to SYSTEM.BAK.
	
	2. Open the SYSTEM.INI in a text editor (NOTEPAD.EXE).
	
	3. Place a semicolon in front of the device=LMLPV.386 line in the [386Enh]
	  section of the SYSTEM.INI.
	
	  The line should appear as in the sample below:
	
	     [386Enh]
	     ;device=LMLPV.386 ;WinPrint
	     device=LMHAROLD.386 ;WinPrint
	     device=LMCAP.386 ;WinPrint
	     device=LMMI.386 ;WinPrint
	
	MORE INFORMATION
	================
	
	For more information, call LaserMaster Technical Support.
	
	The WinJet products included here are manufactured by a LaserMaster, a vendor
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: err msg 3.10 win31 800 winjet 3rdparty 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbOSMSDOS kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : :3.0,3.0a,3.1,3.11
	
	=============================================================================
	
