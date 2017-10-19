---
layout: page
title: "Q112173: PC WSPlus: Drag &amp; Drop Schedule+ Reassigns Appointment Times"
permalink: /kb/112/Q112173/
---

## Q112173: PC WSPlus: Drag &amp; Drop Schedule+ Reassigns Appointment Times

	Article: Q112173
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When an appointment that spans a preset time slot is moved into a new time slot
	with the mouse, it will reset the time the appointment begins and its duration
	to reflect the time represented by the icon.
	
	For example, if you create a 20 minute appointment from 10:50 to 11:10, the
	appointment will display as extending from 10:30 to 11:30. If you then select
	the appointment using the mouse, relocate the beginning of the appointment to
	12:00, and view the time frame, by choosing Edit Appointment from the Edit menu,
	the appointment will now begin at 12:00 and the time assigned to the appointment
	will now be 1 hour from 12:00 to 1:00.
	
	CAUSE
	=====
	
	This is by design.
	
	RESOLUTION
	==========
	
	The start time, date, and appointment duration will coincide with the location
	and size of the icon. To preserve the appointment[ASCII 146]s original duration,
	choose Move Appointment from the Edit menu. The Move Appointment command will
	allow you to change the appointment's date as well as the time.
	
	
	Additional query words: schedule plus 3.00 3.00b 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
