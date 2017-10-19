---
layout: page
title: "Q85390: Mouse Pointer Lost Switching from MS-DOS-Based Application"
permalink: /kb/085/Q85390/
---

## Q85390: Mouse Pointer Lost Switching from MS-DOS-Based Application

	Article: Q85390
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	If you are running Microsoft Windows in 386 enhanced mode and losing the
	mouse pointer when switching to or from MS-DOS-based applications, then
	change Device Contention for the communications port to Never Warn.
	
	Steps to Change Device Contention
	---------------------------------
	
	1. Run Control Panel.
	
	2. Choose the 386 Enhanced icon.
	
	3. Highlight the COM port being used for the mouse (COM1 or COM2) and select
	  Never Warn.
	
	This is equivalent to adding the line Com1AutoAssign=0 to the
	SYSTEM.INI file's [386enh] section.
	
	For more information on this setting, refer to page 247 of the "Microsoft
	Windows User's Guide," or page 195 of the "Microsoft Windows Resource Kit"
	guide.
	
	Additional query words: 3.10 3.1 3.11 logitech genius dos ms-dos
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
