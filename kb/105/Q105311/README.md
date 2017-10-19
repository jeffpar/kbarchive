---
layout: page
title: "Q105311: PC WSPlus: Default Reminder Poll Time in Schedule+"
permalink: /kb/105/Q105311/
---

## Q105311: PC WSPlus: Default Reminder Poll Time in Schedule+

	Article: Q105311
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Versions 1.0 and 1.0a of Microsoft Schedule+ for Windows allows you to change
	the time interval in which Schedule+ polls your calendar file on the server by
	adding the following line to the SCHDPLUS.INI file
	
	  ReminderPollTime=X
	
	where X is the number of minutes the user's workstation polls the server calendar
	file for an appointment.
	
	By default, Schedule+ Reminders polls your calendar file on the server every 1
	minute. If you are connecting to your postoffice via a Remote Access Service
	(RAS), setting this parameter to 60 minutes or more will speed up Schedule+'s
	performance by only reminding you of appointments every 60 minutes.
	
	Additional query words: schedule plus 1.00 1.00a default
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
