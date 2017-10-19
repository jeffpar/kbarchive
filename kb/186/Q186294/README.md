---
layout: page
title: "Q186294: Schedule+ Week Numbering Incorrect in Monthly View"
permalink: /kb/186/Q186294/
---

## Q186294: Schedule+ Week Numbering Incorrect in Monthly View

	Article: Q186294
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0,7.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 7.0, 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	With Microsoft Schedule+, when you use the option to "Show week numbers in the
	calendar" and view a calendar using the monthly view, the week numbers displayed
	may not be correct and may not match those printed.
	
	CAUSE
	=====
	
	This occurs when the first day of the year starts on the fifth day of the
	calendar week. For example, in 1998, the first day of the year starts on
	Thursday. If you have the first day of the week option set for Sunday, then
	January 1 is on the fifth day of the week in the monthly calendar display.
	
	WORKAROUND
	==========
	
	Choosing another day as the first day of the week corrects this problem. In the
	example above, if you change the first day of the week to Monday, then January 1
	will start on the forth day of the calendar week.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Schedule+ 7.0, & 7.5.
	
	MORE INFORMATION
	================
	
	Steps To Reproduce the Problem
	------------------------------
	
	1. On the Tools menu, click Options.
	
	2. On the General tab, click to select Sunday from the "Week starts on" list.
	
	3. On the Display tab, click to select the "Show week numbers in the calendar"
	  option, and click OK.
	
	4. Click the Monthly tab to display the Monthly view.
	
	5. Click the calendar controls to go to January 1998.
	
	6. Notice that January 1 is found in week one and February 1 is found in week
	  six.
	
	7. Click the calendar controls to go to February 1998.
	
	8. Notice that February 1 is now found in week five. This same weekly sequence
	  continues for the rest of the year.
	
	NOTE: If you print monthly calendars for the whole year, you will find January 1
	in week one and February 1 in week five. This same pattern follows for the
	entire year.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule750
	Version           : WINDOWS:7.0,7.5
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
