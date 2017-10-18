---
layout: page
title: "Q130431: Appointments That End on the Next Day Are Not Archived"
permalink: kb/130/Q130431/
---

## Q130431: Appointments That End on the Next Day Are Not Archived

	Article: Q130431
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you select a time of 11:30 P.M. in the schedule window, the appointment
	will end at 12:00 A.M. (midnight) the next day and not 11:59 P.M. the same day.
	This affects appointments that are archived before the next day's date.
	
	For example, a 30-minute appointment exists for 9/1/95 from 11:30 P.M. to 12:00
	A.M. (9/2/95). If you choose to archive appointments before 9/2/95, the 11:30
	P.M. appointment will not be archived because it does not end until 9/2/95.
	
	CAUSE
	=====
	
	This is by product design. All appointments start and stop on exact boundary
	values. When you click the mouse pointer on a specific time slot, Schedule+
	displays the date and length of time of the area you have selected. An 11:30
	P.M. appointment will end at 12:00 A.M, in order to be consistent with
	appointments created at other times during the day.
	
	Additional query words: 7.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0; Win95:7.0
	
	=============================================================================
	
