---
layout: page
title: "Q204216: XCLN: Schedule+ 1.0a Does Not Refresh Free and Busy Time"
permalink: kb/204/Q204216/
---

## Q204216: XCLN: Schedule+ 1.0a Does Not Refresh Free and Busy Time

	Article: Q204216
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0, on platform(s):
	   - the hardware: Intel x86 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Schedule+ version 1.0a may not refresh the free and busy availability
	symbols after data is displayed as unavailable (a dimmed check mark is displayed
	next to the user's name). This commonly occurs near the end of the year. This
	behavior occurs when you change the Year field in the planner to either a year
	earlier or later, before the date that you want has been displayed.
	
	When a planner is open, if you select an attendee (typically from another
	postoffice) for a date that contains no free and busy data for that user, a
	dimmed check mark is displayed next to the user's name, which signifies that no
	schedule data is available. If you then select a date that does contain free and
	busy information for the user, the dimmed check mark is not updated to reflect
	the available free and busy data, although the free and busy data itself may
	even be displayed in the planner view.
	
	WORKAROUND
	==========
	
	To work around this problem, select the date before you select the attendees
	list, or remove the attendee and then re-add the attendee to the attendee list
	after you chose the date. To prevent future occurrences of this problem, send 12
	months of free and busy data in advance. This problem does not affect Schedule+
	version 7.0 and later.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products that are
	listed at the beginning of this article.
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch
	Version           : WINDOWS:1.0
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
