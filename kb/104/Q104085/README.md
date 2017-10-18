---
layout: page
title: "Q104085: PC WSPlus: Err Msg: Clean-Up Schedule Files"
permalink: kb/104/Q104085/
---

## Q104085: PC WSPlus: Err Msg: Clean-Up Schedule Files

	Article: Q104085
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In versions 1.0 and 1.0a of Microsoft Schedule+ for Windows, when the allotted
	Schedule+ storage limit has expired, the following dialog box and message
	appear:
	
	  Clean-Up Schedule Files
	  There is information stored in your schedule file which is older than the
	  limit set for discarding data. Would you like to delete it?
	
	At this point, you have three options:
	
	- Create Archive Before Deleting
	
	- Delete
	
	  -or-
	
	- Do Not Delete
	
	CAUSE
	=====
	
	You have information in your Schedule+ calendar file on the server that is older
	than the time limit set by the Schedule+ administrator. This limit is the period
	of time, in months, during which all users can keep old information in their
	calendar files on the Mail server. This time period can be anywhere from 1 to 99
	months. The default is 6 months.
	
	RESOLUTION
	==========
	
	You must select one of the three options available or contact your Schedule+
	administrator and ask to have the Schedule storage limit raised. The Schedule+
	storage limit is not indicated to Schedule+ users; only the Schedule+
	administrator can view the storage limit in the Schedule+ Administration
	program.
	
	If you are using Schedule+ running under Windows for Workgroups, you cannot
	change this setting. This time limit can only be changed in the Schedule+
	Administrator program, which is not supplied with the Windows for Workgroups
	version of Schedule+.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
