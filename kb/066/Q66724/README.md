---
layout: page
title: "Q66724: DFI 200h Mouse Settings Switch for Windows 3.0"
permalink: /kb/066/Q66724/
---

## Q66724: DFI 200h Mouse Settings Switch for Windows 3.0

	Article: Q66724
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 12-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You may have difficulty using the DFI 200H series mouse with Microsoft Windows
	version 3.0. For example, the mouse pointer may appear but not function, or the
	mouse pointer may be unavailable.
	
	CAUSE
	=====
	
	The switch on the mouse may be set up incorrectly.
	
	RESOLUTION
	==========
	
	The DFI 200H series mouse has a sliding button located on the side of the mouse.
	There are two settings that indicate the following:
	
	  2 - for two-button mouse operation
	  3 - for three-button mouse operation
	
	Be sure that the switch is set for a two-button mouse.
	
	To enable the mouse, you should place one of the following device statements in
	either the AUTOEXEC.BAT file or the CONFIG.SYS file.
	
	NOTE: Do not use both statements at the same time. Use one or the other.
	
	AUTOEXEC.BAT
	------------
	
	     C:\DFIMOUSE\DFIMOUSE /Y
	
	CONFIG.SYS
	----------
	
	     DEVICE=C:\DFIMOUSE\DFIMOUSE.SYS
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3rdparty two three button KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
