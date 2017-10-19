---
layout: page
title: "Q128518: PC WSPlus: Cannot Open Appointment Book with View Free/Busy"
permalink: /kb/128/Q128518/
---

## Q128518: PC WSPlus: Cannot Open Appointment Book with View Free/Busy

	Article: Q128518
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 15-SEP-1999
	
	1.00 1.00a
	WINDOWS
	kbenv kberrmsg kbusage
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you set access privileges for Microsoft Schedule+ to View Free/Busy Times,
	and a specified user attempts to open your appointment book, the user will
	receive the following error:
	
	  The schedule file could not be opened. You may not have the necessary access
	  privileges or the file may be unavailable.
	
	RESOLUTION
	==========
	
	To allow other users to open your appointment book, you must grant them at least
	the Read Appointments & Tasks level of privileges.
	
	MORE INFORMATION
	================
	
	The View Free/Busy Times privilege does not give a Schedule+ user the ability to
	open your appointment book. This privilege allows the user to view free/busy
	information by selecting the planner section, then adding the person you want to
	see free/busy information for as an attendee. Busy times will appear as colored
	lines on the grid. Alternatively, free times will appear as blank areas.
	
	To have the ability to open another's appointment book you need to give the user
	at least Read Appointments and Tasks privileges.
	
	The following is a summary of access privileges and what they allow from lowest
	to highest privilege:
	
	None - This access privilege denies the specified user(s) all access to your
	schedule, including viewing your appointment book and task list, and comparing
	your free and busy times to theirs in the planner.
	
	View Free/Busy Times - Grants the specified user the ability to overlay your
	schedule on his or hers in the planner, to compare availability for meetings.
	Users with this access privilege cannot view or change your appointments,
	tentative appointments, or tasks.
	
	Read Appointments & Tasks - Grants the specified user the ability to view
	your appointments and tasks (except for those you designated as private). This
	access privilege does not allow the user to create, modify, or delete entries in
	your appointment book or task list.
	
	Create Appointments & Tasks - Grants the specified user the ability to create
	entries in your appointment book and task list. The user can delete or modify
	any appointments he or she made.
	
	Modify Appointments & Tasks - Grants the specified user the ability to
	create, modify, or delete any entries in your appointment book and task list,
	regardless of who made the appointments and tasks, except those you designated
	as private. When you appoint another user to be your schedule assistant, that
	user automatically receives this access privilege.
	
	Assistant - Permits the specified user to view, create, delete, and modify your
	appointments and tasks, except those you have designated private. Your assistant
	can send and receive meeting messages on your behalf. Your assistant does not
	need to know your schedule password.
	
	Additional query words: schedule plus 1.00 1.00a
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
