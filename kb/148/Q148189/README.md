---
layout: page
title: "Q148189: Free/Busy Time Planner Doesn't Translate Time Zones"
permalink: kb/148/Q148189/
---

## Q148189: Free/Busy Time Planner Doesn't Translate Time Zones

	Article: Q148189
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 17-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Free and Busy time is not translated to or from other time zones, which makes it
	difficult to schedule appointments across time zones. Data is always assumed to
	be in the local time zone. The expected behavior would be to show appointments
	in the originator's time zone values no matter what time zone the invitees are
	in. However, this is not what happens.
	
	RESOLUTION
	==========
	
	Once an appointment is scheduled, the time zones are managed properly. To find a
	free time for your invitee, you must make a mental time conversion, but once you
	find a free time that works, the actual appointment can be scheduled in your
	time and will show up correctly on your invitee's calendar in their time.
	
	For example, say User1 is located in the Pacific time zone using the Windows 95
	Exchange client and User2 is located in Eastern time zone using the Windows 95
	Exchange client. If User1 creates an appointment for 12:00 - 15:00 PST and
	invites User2 by using the Planner, User1 sees the appointment in Pacific time
	and User2 sees same appointment in Eastern time. If User2 creates appointment
	for 11:00 - 14:00 EST and invites User1 by using the Planner, User2 sees the
	appointment correctly in Pacific time and User1 sees the appointment correctly
	in Eastern time.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Schedule+ version 7.0.
	We are researching this problem and will post new information here in the
	Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words: 7.00 schedule plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	
	=============================================================================
	
