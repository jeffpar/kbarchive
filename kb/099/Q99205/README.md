---
layout: page
title: "Q99205: PC WSPlus: Err Msg: Not Enough Memory to Display Dialog Box"
permalink: /kb/099/Q99205/
---

## Q99205: PC WSPlus: Err Msg: Not Enough Memory to Display Dialog Box

	Article: Q99205
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbusage kbbug1.00 kbbug1.00a
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Following a successful installation of Microsoft Schedule+ for Windows as a
	stand-alone user, if the USER_NAME.CAL file contains a space, the calendar file
	may work for a period of time but an invalid calendar file is eventually
	generated (the calendar file becomes corrupted and/or is unrecognized by
	Schedule+).
	
	This problem generally occurs when you use the Schedule+ Import and Export
	commands from the File menu. Using either command generates an unexpected and
	unrelated out-of-memory error message. In other cases, Schedule+ reports that
	the calendar file is not a valid calendar file.
	
	CAUSE
	=====
	
	This problem occurs when you include a space within your Sign In name; for
	example, "Jon Jones." This space is interpreted by Schedule+ as an underscore
	(_) character.
	
	If you try to manipulate the calendar file at the MS-DOS level, using the Copy,
	Rename, or Type command, you will receive the following two errors in succession
	and in the following order:
	
	  CANNOT RENAME <drive>\<subdir>\[<filename>.CAL]
	
	  CANNOT FIND FILE [<filename>.CAL]
	
	NOTE: You may still be able to view and manipulate the information in the
	calendar file.
	
	RESOLUTION
	==========
	
	The only way to retrieve the current information in your calendar file is to
	copy the desired appointments into another program, if possible, or retrieve the
	information from a current backup.
	
	After you copy the desired information, delete the local <username>.CAL
	file from your Schedule+ directory and delete the SCHDPLUS.INI file from your
	Windows directory. Start Schedule+ and create a new calendar file without
	placing a space in the Sign In dialog box. Copy any retrieved information into
	the new <username>.CAL file.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 1.0 and 1.0a of
	Microsoft Schedule+ for Windows. We are researching this problem and will post
	new information here in the Microsoft Knowledge Base as it becomes available.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
