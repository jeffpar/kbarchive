---
layout: page
title: "Q86251: Kingston SX/NOW 386 Upgrade Board Requires Windows Reinstall"
permalink: /kb/086/Q86251/
---

## Q86251: Kingston SX/NOW 386 Upgrade Board Requires Windows Reinstall

	Article: Q86251
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If the Kingston Technology SX/NOW 386 upgrade board is installed into a 286
	computer that already has Windows versions 3.0 or 3.1 installed, you may need to
	reinstall Windows so that it can run in 386 enhanced mode.
	
	MORE INFORMATION
	================
	
	When reinstalling Windows after upgrading to the Kingston Technology SX/NOW
	board, you should do the following:
	
	1. Remove HIMEM.SYS from the CONFIG.SYS file.
	
	2. Remove SMARTDRV.SYS from the CONFIG.SYS file if you are running Windows 3.0.
	  If you are running Windows 3.1, remove SMARTDRV.EXE from the AUTOEXEC.BAT
	  file and the CONFIG.SYS file. (With Windows 3.1, SMARTDRV.EXE may not be in
	  the CONFIG.SYS.)
	
	3. Restart the computer.
	
	4. Run Windows Setup.
	
	For more information, contact Kingston technical support.
	
	The Kingston product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3.10
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
