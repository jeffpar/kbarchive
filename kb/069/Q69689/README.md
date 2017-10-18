---
layout: page
title: "Q69689: SysEdit Err Msg: Cannot Create File &#92;windows&#92;system.ini"
permalink: kb/069/Q69689/
---

## Q69689: SysEdit Err Msg: Cannot Create File &#92;windows&#92;system.ini

	Article: Q69689
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:3.0,3.0a,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 02-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.0, 3.0a, 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you choose Save from the File menu, the SysEdit program packaged with
	Microsoft Windows displays the following error message:
	
	  Cannot Create File \windows\system.ini
	
	CAUSE
	=====
	
	The path to the SYSTEM.INI file does not contain the correct drive
	specification. For example, the following path would cause this error message:
	
	  path=\windows;\dos;\games
	
	NOTE: The same error occurs with the WIN.INI file if the path is incorrect.
	
	RESOLUTION
	==========
	
	To correct this problem, set the full path to the SYSTEM.INI file in the PATH
	statement in the AUTOEXEC.BAT file. Include the drive and subdirectory where the
	Windows SYSTEM.INI file resides. For example:
	
	  path=c:\windows
	
	Additional query words: 3.00 3.0 3.0a 3.00a 3.10 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin300 kbWin300a kbWin310 kbWin311
	Version           : WINDOWS:3.0,3.0a,3.1,3.11
	
	=============================================================================
	
