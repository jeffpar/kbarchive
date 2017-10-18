---
layout: page
title: "Q99667: PC WSPlus: Err Msg: Schedule Transport DLL Does Not Support..."
permalink: kb/099/Q99667/
---

## Q99667: PC WSPlus: Err Msg: Schedule Transport DLL Does Not Support...

	Article: Q99667
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	1.00 1.00a
	WINDOWS
	kbother
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	- the operating system: Microsoft Windows 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	The following error message may appear when you start version 1.0 of Microsoft
	Schedule+ for Windows or the Schedule+ component of Windows for Workgroups:
	
	  Your schedule transport DLL does not support the current transport. You will
	  only be able to work offline. PCMail users are supported.
	
	CAUSE
	=====
	
	This error occurs if you are using the wrong (or corrupted) TRNSCHED.DLL file.
	Make sure you only have one TRNSCHED.DLL file on your hard disk and that it is
	the correct one for your version of Schedule+.
	
	
	MORE INFORMATION
	================
	
	If you are using version 1.0 or 1.0a of Microsoft Schedule+ for Windows, the
	file TRNSCHED.DLL should have the following properties:
	
	  TRNSCHED.DLL    12928    7/12/92  12:00:00am  (version 1.0)
	  TRNSCHED.DLL    12928    10/06/92 12:00:00am  (version 1.0a)
	
	If you are using Windows for Workgroups Schedule+, the file TRNSCHED.DLL should
	be located in the WINDOWS directory, and have the following properties:
	
	  TRNSCHED.DLL    12960    10/1/92 3:11:00am
	
	If you are using version 1.0 or 1.0a of Microsoft Schedule+ for Windows with
	Windows for Workgroups, you should use the Windows for Workgroups Schedule+
	TRNSCHED.DLL file from the WINDOWS directory that has the following properties:
	
	  TRNSCHED.DLL    12960    10/1/92 3:11:00am
	
	Additional query words: schedule plus 1.00 1.00a w_wfw unable sched scheduler scheduleplus
	
	======================================================================
	Keywords          :  
	Technology        : kbOSWinSearch kbZNotKeyword6 kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
