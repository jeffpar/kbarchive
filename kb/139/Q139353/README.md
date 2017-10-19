---
layout: page
title: "Q139353: PC WSPlus: Err Msg: Problem Occurred Initializing MSSCHED.DLL"
permalink: /kb/139/Q139353/
---

## Q139353: PC WSPlus: Err Msg: Problem Occurred Initializing MSSCHED.DLL

	Article: Q139353
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbenv
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you start Schedule+ for Windows, you may receive the following error:
	
	  STOP: A Problem Occurred Initializing MSSCHED.DLL, which prevents Microsoft
	  Schedule+ from running.
	
	
	CAUSE
	=====
	
	This error is not actually caused by the MSSCHED.DLL file, but it may be caused
	by one of the following:
	
	- The file TRNSCHED.DLL is not present, is corrupt, is not accessible through
	  the path statement, or has been renamed.
	
	- The SCHEDULETRANSPORT= entry in the SCHDPLUS.INI is incorrect. The correct
	  setting should be the one of the following:
	
	  SCHEDULETRANSPORT=TRNSCHED.DLL
	
	  -OR-
	
	  SCHEDULETRANSPORT=TRNSCHED
	
	  If the above line contains a path to the file (for example,
	  C:\WINDOWS\SYSTEM\TRNSCHED.DLL), even if it is the correct path, it will not
	  work. The SCHEDULETRANSPORT entry cannot have a path of any kind.
	
	  Notes:
	
	   - The SCHEDULETRANSPORT= line does not have to be present in the INI file.
	     Schedule+ is designed so that it will look for TRNSCHED.DLL by default.
	
	   - The TRNSCHED.DLL file provides access to local and postoffice calendar
	     files (*.CAL)
	
	RESOLUTION
	==========
	
	Make sure that the TRNSCHED.DLL is present, or its directory is in the path
	statement. If the file is present and/or in the path statement, check the
	SCHDPLUS.INI for the correct spelling of the SCHEDULETRANSPORT line. The section
	in the SCHDPLUS.INI file should be the following:
	
	  [Microsoft Schedule+]
	  SCHEDULETRANSPORT = TRNSCHED.DLL
	
	Additional query words: 1.00 mssched.dll initializing schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
