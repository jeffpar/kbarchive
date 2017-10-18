---
layout: page
title: "Q84937: Err Msg: The Microsoft Windows 32-Bit Disk Driver (WDCTRL)..."
permalink: kb/084/Q84937/
---

## Q84937: Err Msg: The Microsoft Windows 32-Bit Disk Driver (WDCTRL)...

	Article: Q84937
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you run Windows version 3.1 in 386 enhanced mode with the 32-bit disk access
	feature enabled, the following error message may appear:
	
	  The Microsoft Windows 32-bit disk driver (WDCTRL) will not be loaded because
	  WDCTRLDISABLE=Y is set in this machine's environment. Remove this environment
	  string and the 32-bit disk driver will load normally.
	
	  To continue starting Windows without using the 32-bit disk driver, press any
	  key.
	
	CAUSE
	=====
	
	This error message occurs when there is an environment variable called
	WDCTRLDISABLE being set at the MS-DOS level before Windows is started.
	
	RESOLUTION
	==========
	
	To correct this problem, use the MS-DOS SET command to check for the existence
	of WDCTRLDISABLE, and if it exists, type the following at the MS-DOS command
	prompt to clear it:
	
	  SET WDCTRLDISABLE=
	
	If necessary, edit the AUTOEXEC.BAT file in a text editor such as Notepad or the
	MS-DOS Editor to remove the WDCTRLDISABLE=Y setting.
	
	Additional query words: err msg WIN386.EXE
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	
