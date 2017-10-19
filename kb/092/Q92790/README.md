---
layout: page
title: "Q92790: WFWG Err Msg: Add SystemROMBreakpoint=FALSE to SYSTEM.INI"
permalink: /kb/092/Q92790/
---

## Q92790: WFWG Err Msg: Add SystemROMBreakpoint=FALSE to SYSTEM.INI

	Article: Q92790
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you install Windows or Windows for Workgroups when the third-party memory
	manager is not loaded, and then later you activate the memory manager, you may
	receive an error message stating that the "SystemROMBreakpoint=FALSE" line must
	be added to your SYSTEM.INI file.
	
	You may also receive this error message if you do not indicate where the WINDOWS
	directory is located when you install a third-party memory manager.
	
	WORKAROUND
	==========
	
	To work around either of the above situations, add the
	"SystemROMBreakpoint=FALSE" line to the [386enh] section of the SYSTEM.INI file.
	
	MORE INFORMATION
	================
	
	The "SystemROMBreakpoint=FALSE" line should be installed in the SYSTEM.INI file
	by the Setup program for Windows for Workgroups or Windows when some third-party
	memory managers (such as QEMM, 386MAX, and BlueMAX) are installed.
	
	Additional query words: 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
