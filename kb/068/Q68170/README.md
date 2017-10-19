---
layout: page
title: "Q68170: Disabling Shadow RAM on the AST Bravo 386sx"
permalink: /kb/068/Q68170/
---

## Q68170: Disabling Shadow RAM on the AST Bravo 386sx

	Article: Q68170
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you experience problems running Microsoft Windows version 3.0 on an AST Bravo
	386sx, you may need to disable the shadow RAM feature. You can disable shadow
	RAM on this machine by using the CMOS setup program as follows:
	
	1. Switch the computer off for a few seconds.
	
	2. Switch the computer on.
	
	3. Press CTRL+ALT+ESC until a keyboard error message appears on screen. If the
	  setup screen does not appear immediately then press CTRL+ALT+ESC.
	
	MORE INFORMATION
	================
	
	You can also disable Windows' use of the shadow RAM area by doing the
	following:
	
	1. Use a text editor such as Notepad or SysEdit.
	
	2. Load the SYSTEM.INI file for editing.
	
	3. Add the line EMMExclude=E000-EFFF below the [386Enh] section of this file.
	
	For more information, contact AST technical support.
	
	The AST product included here is manufactured by a vendor independent of
	Microsoft; we make no warranty, implied or otherwise, regarding this product's
	performance or reliability.
	
	Additional query words: 3rdparty 3.0 3.00 3.0a 3.00a win30 KBHW
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
