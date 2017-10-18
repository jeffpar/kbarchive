---
layout: page
title: "Q86844: PC WSPlus: Calendar File Must Be Available for Reminders"
permalink: kb/086/Q86844/
---

## Q86844: PC WSPlus: Calendar File Must Be Available for Reminders

	Article: Q86844
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Version 1.0 of Microsoft Schedule+ for Windows will not bring up reminders if it
	cannot access either the postoffice calendar file or the locally stored calendar
	file. It will bring up these reminders that should have been displayed when
	either of these files becomes available.
	
	CAUSE
	=====
	
	When you work offline, Schedule+ uses the local file to store tasks,
	appointments, and reminders. You can move the local calendar file via the File
	menu to a disk for use on a home or portable computer, or to a network drive to
	save hard disk space locally. If that disk is removed from the drive or if that
	server is disconnected from your computer while Schedule+ is running offline,
	the reminders stored on it will not appear until the disk is returned to the
	drive, the network drive is re-attached, or you sign back into Mail and work
	online. Schedule+ will alert you if this file is unavailable when you create or
	modify reminders, events, or tasks; when you exit; and when you switch between
	working offline and working online.
	
	Additional query words: 1.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
