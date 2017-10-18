---
layout: page
title: "Q66084: IgnoreInstalledEMM=yes Not Working Properly with Windows 3.0"
permalink: kb/066/Q66084/
---

## Q66084: IgnoreInstalledEMM=yes Not Working Properly with Windows 3.0

	Article: Q66084
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 05-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If an expanded memory manager that was not designed specifically to work with
	Windows in 386 enhanced mode is loaded in the CONFIG.SYS file, the message
	
	  ERROR: Cannot install the 386 enhanced mode Expanded Memory driver
	
	is displayed immediately after the opening logo screen appears. It does not
	matter what the IgnoreInstalledEMM= line is set to.
	
	CAUSE
	=====
	
	The line IgnoreInstalledEMM=yes in the [386Enh] section of the SYSTEM.INI file
	is designed to make Microsoft Windows version 3.0 ignore any unknown external
	expanded memory manager. This does not work properly in Windows 3.0.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows versions 3.0 and 3.0a.
	This problem does not occur in later versions of Windows.
	
	WORKAROUND
	==========
	
	Boot the machine with a CONFIG.SYS file that does not load an expanded memory
	manager when you need to use Windows 3.0 in 386 enhanced mode.
	
	Additional query words: 3.00 3.00a 3.0 3.0a EMM.SYS REMM.SYS ASTEMM.SYS BRATEMM.SYS QEMM.SYS 386MAX.SYS PS2EMM.SYS CEMM.EXE MM.SYS winmem yes no
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a
	Version           : WINDOWS:3.0,3.0a
	
	=============================================================================
	
