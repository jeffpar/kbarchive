---
layout: page
title: "Q133399: How to Clear All Schedule+ Data"
permalink: kb/133/Q133399/
---

## Q133399: How to Clear All Schedule+ Data

	Article: Q133399
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbfaq
	Last Modified: 12-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Schedule+ contains an undocumented key combination that allows users to reset
	the local and server copies of their schedule files.
	
	To reset the files
	------------------
	
	1. Exit Schedule+ if it is currently running.
	
	2. Press and hold CTRL+SHIFT while you double-click the Schedule+ icon.
	
	3. You will be prompted with a dialog box warning you that both of the files
	  will be cleared of your schedule data.
	
	4. Click the Yes button to continue.
	
	5. If you are prompted for the profile, choose the appropriate profile and click
	  OK.
	
	6. Release CTRL+SHIFT.
	
	Schedule+ will start with a clean local and server schedule.
	
	
	MORE INFORMATION
	================
	
	During this process, a copy of the schedule file is made in the Windows
	subdirectory with the name _SCHDxx.BAK where xx is an incremented number. If
	necessary, you can use this file to replace the local schedule file.
	
	Additional query words: schedule plus 7.00
	
	======================================================================
	Keywords          :  kbfaq
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
