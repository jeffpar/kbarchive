---
layout: page
title: "Q146066: Sch+ 1.0 User Unable to Read Meeting Details of Sch+ 7.0 User"
permalink: /kb/146/Q146066/
---

## Q146066: Sch+ 1.0 User Unable to Read Meeting Details of Sch+ 7.0 User

	Article: Q146066
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you are using Schedule+ version 1.0 and want to add an attendee who uses
	Schedule+ version 7.0, you can view the Free/Busy times of the Schedule+ 7.0
	user, but you cannot view meeting details.
	
	CAUSE
	=====
	
	Schedule+ 7.0 keeps meeting information in a schedule file that has a format
	unknown to Schedule+ 1.0. Schedule+ 1.0 uses files with an extension of CAL, and
	Schedule+ 7.0 information is kept in files with extension of SCH. These files
	are in different formats.
	
	This does not prevent the exchange of Free/Busy times, just meeting details.
	
	
	Additional query words: 1.00 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700 kbSchedule100
	Version           : WINDOWS:1.0,7.0
	
	=============================================================================
	
