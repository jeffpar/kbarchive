---
layout: page
title: "Q90326: Schedule+ Err Msg: Schedule Transport DLL Does Not Support..."
permalink: kb/090/Q90326/
---

## Q90326: Schedule+ Err Msg: Schedule Transport DLL Does Not Support...

	Article: Q90326
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:1.0,3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when you start Microsoft Schedule+ for
	Windows or the Schedule+ component of Windows for Workgroups (WFWG):
	
	  Your schedule transport DLL does not support the current transport. You will
	  only be able to work offline. PCMail users are supported.
	
	CAUSE
	=====
	
	This occurs if you are using the wrong (or corrupt) TRNSCHED.DLL file.
	
	
	RESOLUTION
	==========
	
	Make sure you only have one TRNSCHED.DLL file on your hard disk and that it is
	the correct one for your Schedule+ version.
	
	Windows for Workgroups Schedule+
	--------------------------------
	
	If you are using Windows for Workgroups Schedule+, the file TRNSCHED.DLL should
	be located in the WINDOWS directory, and have the following properties:
	
	For version 3.11:
	
	  TRNSCHED.DLL    12960        11/1/93 3:11:00am
	
	For version 3.1:
	
	  TRNSCHED.DLL    12960        10/1/92 3:11:00am
	
	
	The TRNSCHED.DLL file is located on your original installation disks as follows:
	
	             5.25-inch disks   3.5-inch disks
	
	 -------------------------------------------
	  WFWG 3.1       disk 8           disk 6
	  WFWG 3.11      disk 8           disk 6
	
	Schedule+ for Windows
	---------------------
	
	If you are using version 1.0 of Microsoft Schedule+ for Windows, the file
	TRNSCHED.DLL should have the following properties:
	
	  TRNSCHED.DLL   12928   7/12/92 12:00:00am
	
	
	If you are using version 1.0 or 1.0a of Microsoft Schedule+ with Windows for
	Workgroups, you should use the Windows for Workgroups Schedule+ TRNSCHED.DLL
	file from the WINDOWS directory as described above.
	
	Additional query words: 3.10 3.11 1.00 unable sparta sched+ plus scheduler schedule
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbScheduleSearch kbWFWSearch kbWFW310 kbWFW311 kbSchedule100
	Version           : WINDOWS:1.0,3.1,3.11
	
	=============================================================================
	
