---
layout: page
title: "Q112282: PC WSPlus: Schedule+ Monthly View Space Not Fully Used"
permalink: /kb/112/Q112282/
---

## Q112282: PC WSPlus: Schedule+ Monthly View Space Not Fully Used

	Article: Q112282
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	In version 1.0 of Microsoft Schedule+, a Monthly View of a calendar of
	appointments can be printed. Due to the print algorithm it can appear that the
	appointment information for the day is displayed on the calendar incompletely,
	while other days may appear that the space on a given day is more fully
	utilized.
	
	RESOLUTION
	==========
	
	Printing a Weekly View will yield more appointment space; thus, appointment
	descriptions not appearing in the monthly view should appear on a Weekly View.
	The Weekly View also allows for additional appointment information with a "More"
	field, and it also has a "Notes:" field to print daily notes.
	
	For larger numbers of appointments or verbose appointment information the Daily
	View may be required to print complete appointment information.
	
	MORE INFORMATION
	================
	
	The amount of space is determined by the number of appointments on a given day.
	The following table lists the number of spaces allocated (per line) to the day
	based on the number of appointments for both portrait and landscape printing
	schemes.
	
	Number of         Number of lines            Number of lines
	Appointments      Allocated per day          Allocated per day
	                 (Portrait)                 (Landscape)
	---------------------------------------------------------------------
	
	1                    11                       7
	2                     5                       3
	3                     3                       2
	4                     2                       1
	5                     2                       1
	6                     1                       1
	
	Therefore, a day consisting of 6 appointments on a portrait printout will appear
	that only half the available space on a given day is being used since only 1
	line is allocated for each appointment.
	
	Portrait printing has a maximum of 11 appointments that can be printed on a given
	day. Landscape has a maximum of 7 appointments. After this number is exceeded
	the latest appointments will not get printed.
	
	Additional query words: 1.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
