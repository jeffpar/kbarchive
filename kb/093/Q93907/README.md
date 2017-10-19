---
layout: page
title: "Q93907: Err Msg: Illegal Function Call (with WinPrint)"
permalink: /kb/093/Q93907/
---

## Q93907: Err Msg: Illegal Function Call (with WinPrint)

	Article: Q93907
	Product(s): Microsoft Windows Printing Issues
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	- the operating system: MS-DOS, version 5.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you upgrade from LaserMaster's WinPrint version 1.0 to WinPrint version
	1.5, you may receive the following error message:
	
	  Illegal Function Call
	
	CAUSE
	=====
	
	This occurs because WinPrint is referring to an earlier WinPrint font.
	
	WORKAROUND
	==========
	
	1. Exit Windows and restart your system.
	
	2. Restart Windows, and open the WinPrint program group.
	
	3. Choose the Fontman icon.
	
	4. Select all installed fonts and choose Remove.
	
	5. There should now be no fonts installed. If there still appear to be some
	  fonts present, choose Verify, then choose NO when asked if you want to use
	  these fonts with WinPrinter.
	
	6. Choose YES when asked if you want to delete references to these Fonts for
	  WinPrint and WinSpool.
	
	7. Exit Windows.
	
	8. Restart Windows, and then restart the WinPrint version 1.5 installation
	  program.
	
	9. After the installation is complete, you can add your Type 1 fonts in the
	  WinPrint Font Manager.
	
	MORE INFORMATION
	================
	
	For additional information about WinPrint, contact LaserMaster.
	
	WinPrint is manufactured by LaserMaster, a vendor independent of Microsoft; we
	make no warranty, implied or otherwise, regarding this product's performance or
	reliability.
	
	
	Additional query words: 3.10 win31 800 winprinter winjet 3rdparty 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbOSMSDOS kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	
