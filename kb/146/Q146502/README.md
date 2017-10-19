---
layout: page
title: "Q146502: Which Schedule+ Meeting Time is Correct?"
permalink: /kb/146/Q146502/
---

## Q146502: Which Schedule+ Meeting Time is Correct?

	Article: Q146502
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If Microsoft Schedule+ User1 sends a meeting request for a date in the future to
	Microsoft Schedule+ User2 and then immediately sends another request to change
	the time, User2 will receive two messages at same time and the Receive date and
	time will be the same. There is no way to let User2 know which meeting time is
	correct.
	
	MORE INFORMATION
	================
	
	We can't tell a request is out of date until at least one of them has been
	booked (or declined). There's no way to compare the two messages to each other,
	only to something already on the schedule.
	
	If the recipient accepts (or declines) both of them, only the latest one will be
	booked.
	
	For example, you make a meeting and then reschedule it 5 times in about 10
	seconds. Recipients will receive these in a funny order and will have no idea
	which one is the final request. If they simply open each one and Accept them
	all, the final version is what will be booked on the schedule. Even if the final
	one happens to be booked right away, the others will be out of date and will not
	be booked.
	
	The actual message at the top of the Microsoft Schedule+ message is "This meeting
	is out of date[ASCII 148] and the Accept/Decline buttons will be gray.
	
	Note: For quick information, User1 should include a message on the Subject line
	indicating the change.
	
	Additional query words: 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3
	Version           : WINDOWS:7.0; Win95:7.0
	
	=============================================================================
	
