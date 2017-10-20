---
layout: page
title: "Q131844: Inconsistent Appointment Creation with Mouse in Planner"
permalink: /kb/131/Q131844/
---

## Q131844: Inconsistent Appointment Creation with Mouse in Planner

{% raw %}

	Article: Q131844
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
	
	When you use the mouse to create an appointment in the Planner view that lasts
	longer than 24 hours, the appointment only lasts until 11:59 P.M. of the start
	date of the appointment. This problem occurs if you have only one day displayed
	in the Daily view.
	
	CAUSE
	=====
	
	When a single day is displayed in the Daily view, appointments created by using
	the mouse can only last from 00:00 to 24:00 of the day that is displayed.
	
	This is by product design.
	
	RESOLUTION
	==========
	
	In the Planner view:
	
	- Select the time for the appointment, click the right mouse button, and then
	  select New Appointment.
	
	  -or-
	
	- Select the time and click Appointment on the Insert menu.
	
	  -or-
	
	- Select the time and press CTRL+N.
	
	In the Daily view:
	
	On the View menu, click Number of Days. Choose the number of days the appointment
	is to span. Then switch to the Planner view and create the appointment.
	
	Additional query words: schedule plus 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0; Win95:7.0
	
	=============================================================================
	

{% endraw %}
