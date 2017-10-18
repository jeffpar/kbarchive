---
layout: page
title: "Q157706: Icons Not Updating in Sched+ 7.0 for Rsponses from Sched+ 1.0"
permalink: kb/157/Q157706/
---

## Q157706: Icons Not Updating in Sched+ 7.0 for Rsponses from Sched+ 1.0

	Article: Q157706
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+, versions 1.0, 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Schedule+ 7.0 tracks the responses from requested attendees and changes the icon
	in the Meeting property page accordingly. When a meeting request is first sent
	out from Schedule+ 7.0, the Edit Item under Edit on the Attendees tab will have
	a "?" icon next to each invited attendee's name. As the results come back,
	either Accepted or Denied, this icon changes to a check mark or "x" icon
	accordingly.
	
	The tracking method used to determine which appointment the replies are
	associated with has changed from Schedule+ 1.0 to Schedule+ 7.0. Therefore, when
	Schedule+ 7.0 receives a response to a meeting that it cannot match up to the
	meeting ID from the response and to a valid meeting ID in its calendar file, it
	will attempt to match it by comparing the Subject line of the response to the
	Description field of its meetings.
	
	Therefore, when operating in a mixed environment of Schedule+ 7.0 users and
	Schedule+ 1.0 users, it is recommended that the Subject line not be changed from
	the description of the meeting. By default, when a new meeting request is
	created, the Subject field is the same as the description of the meeting.
	
	
	Additional query words: 1.00 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbSchedule100
	Version           : WINDOWS:1.0,7.0
	
	=============================================================================
	
