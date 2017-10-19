---
layout: page
title: "Q94985: MemMaker Fails to Undo Changes to CONFIG.SYS File"
permalink: /kb/094/Q94985/
---

## Q94985: MemMaker Fails to Undo Changes to CONFIG.SYS File

	Article: Q94985
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 23-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If your AUTOEXEC.BAT, CONFIG.SYS, or Windows SYSTEM.INI file is marked as
	read-only, MemMaker displays the following error message:
	
	  MemMaker cannot continue because it cannot gain access to the AUTOEXEC.BAT,
	  CONFIG.SYS, or Windows SYSTEM.INI file. Make sure the read-only attribute for
	  those files is not set.
	
	  To undo MemMaker's changes, press ENTER.
	
	If your AUTOEXEC.BAT file or SYSTEM.INI file is marked read-only but the
	CONFIG.SYS file is not, MemMaker does not undo the changes it made to the
	CONFIG.SYS file.
	
	WORKAROUND
	==========
	
	To work around this problem, remove the read-only attribute on the AUTOEXEC.BAT
	and/or SYSTEM.INI file and restart MemMaker. To remove the read-only attribute
	on the AUTOEXEC.BAT and/or SYSTEM.INI files, use the ATTRIB command as follows:
	
	  attrib c:\autoexec.bat -r
	
	  -and/or-
	
	  attrib c:\windows\system.ini -r
	
	Additional query words: 6.22 6.00 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
