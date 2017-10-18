---
layout: page
title: "Q108421: WFWG 3.11 Err Msg: Error 1: An Internal Error Occurred"
permalink: kb/108/Q108421/
---

## Q108421: WFWG 3.11 Err Msg: Error 1: An Internal Error Occurred

	Article: Q108421
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): 
	Last Modified: 29-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Running the NET START FULL command at the MS-DOS command prompt or entering
	Microsoft Windows for Workgroups yields the following error message:
	
	  Error 1: an internal error occurred.
	
	CAUSE
	=====
	
	This error may be caused by:
	
	- The presence of the DirectHost=No line in the [Network] section of the
	  SYSTEM.INI file.
	
	  -or-
	
	- The absence of IFSHLP.SYS in the CONFIG.SYS file.
	
	RESOLUTION
	==========
	
	To correct this problem, do one of the following:
	
	- If the [Network] section of the SYSTEM.INI file contains the DirectHost=No
	  line, change the DirectHost= value to Yes or remove the line.
	
	- If your CONFIG.SYS file is missing the IFSHLP.SYS line, insert the following
	  statement in the CONFIG.SYS file
	
	  Device=<C:\WINDOWS>\IFSHLP.SYS
	
	  where <C:\WINDOWS> is the drive and directory containing your Windows
	  files.
	
	Additional query words: 3.11 map login error
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch
	Version           : WINDOWS:
	
	=============================================================================
	
