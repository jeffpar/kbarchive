---
layout: page
title: "Q97015: Setup Does Not Correctly Update Windows .INI Files"
permalink: /kb/097/Q97015/
---

## Q97015: Setup Does Not Correctly Update Windows .INI Files

	Article: Q97015
	Product(s): Microsoft Disk Operating System
	Version(s): MS-DOS:6.0,6.2,6.21,6.22
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft MS-DOS operating system versions 6.0, 6.2, 6.21, 6.22 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you install MS-DOS 6 Upgrade, Setup may be unable to correctly modify the
	Windows SYSTEM.INI and PROGMAN.INI files.
	
	CAUSE
	=====
	
	This problem is typically caused by terminate-and-stay-resident (TSR) programs
	that are incompatible with Setup.
	
	WORKAROUND
	==========
	
	To resolve the problem, you should try to restore your unmodified backup .INI
	files, disable your TSRs, then run Setup with the /E parameter.
	
	You may be able to copy the unmodified backup files over incorrectly modified, or
	missing .INI files. For example, your backup files probably have the .BAK
	extension (although the extension may be .1, .2, .3, and so on if you have
	installed MS-DOS more than once).
	
	Proceed as follows:
	
	1. To restore your backup files, type the following at the MS-DOS command prompt
	  and then press ENTER:
	
	  " copy c:\windows\system.bak c:\windows\system.ini
	  copy c:\windows\progman.bak c:\windows\progman.ini " (without the quotation
	  marks)
	
	2. Use the REM command to disable any TSR programs in your CONFIG.SYS and
	  AUTOEXEC.BAT files.
	
	3. Reinstall the optional utilities by running Setup with the /E parameter.
	
	Additional query words: 6.22 6.00 trash delete missing lost 6.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMSDOSSearch kbMSDOS621 kbMSDOS622 kbMSDOS620 kbMSDOS600
	Version           : MS-DOS:6.0,6.2,6.21,6.22
	
	=============================================================================
	
