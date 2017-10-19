---
layout: page
title: "Q93132: PC WSPlus: Err Msg: Can't Find SCHDMSG.DLL"
permalink: /kb/093/Q93132/
---

## Q93132: PC WSPlus: Err Msg: Can't Find SCHDMSG.DLL

	Article: Q93132
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error may occur when you try to send a message:
	
	  Can't find SCHDMSG.DLL
	
	CAUSE
	=====
	
	This .DLL file is not on your current search path.
	
	RESOLUTION
	==========
	
	Modify your AUTOEXEC.BAT file so that the PATH statement includes the
	subdirectory that contains SCHDMSG.DLL. (The subdirectory is usually C:\MSMAIL.)
	
	Additional query words: 1.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
