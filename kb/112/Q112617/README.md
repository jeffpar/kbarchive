---
layout: page
title: "Q112617: WFWG 3.11 Err Msg: Write Timeout on Drive C:"
permalink: /kb/112/Q112617/
---

## Q112617: WFWG 3.11 Err Msg: Write Timeout on Drive C:

	Article: Q112617
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Adaptec SCSI controller 1542C with Windows for Workgroups 3.11,
	choosing the MS-DOS Prompt may result in the following error message:
	
	  Write timeout on drive C:
	
	You may also be unable to share files on your machine.
	
	RESOLUTION
	==========
	
	To correct this problem, Adaptec Technical Support suggests setting the
	TimerCriticalSection variable in the [386Enh] section of the SYSTEM.INI file to
	zero:
	
	     [386Enh]
	     TimerCriticalSection=0
	
	MORE INFORMATION
	================
	
	
	Additional query words: 3.11 hangs crash hung
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	
