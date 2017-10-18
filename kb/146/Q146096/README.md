---
layout: page
title: "Q146096: XCLN: Hidden Groups in Attendees List Not Invited to Meeting"
permalink: kb/146/Q146096/
---

## Q146096: XCLN: Hidden Groups in Attendees List Not Invited to Meeting

	Article: Q146096
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows 95, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you send a meeting request from the Planner tab in Microsoft Schedule+ while
	an individual or resource is not visible in the Attendee list, the individual or
	resource is not invited to the meeting.
	
	For example, when you click the minus sign next to Required, the list of required
	attendees is hidden and the check mark is removed from the check box. If you
	click Request Meeting at this point, none of the attendees within the Required
	group will be invited to your meeting.
	
	This problem does not occur if, for example, you hide the group of attendees, and
	then you click to select the check box next to the group.
	
	To show or hide a group, click the plus (+) or minus (-) signs next to Required,
	Optional, or Resource in the Attendees list on the Planner tab. To show or hide
	an individual, click to select or clear the check box next to the name of the
	individual.
	
	CAUSE
	=====
	
	When you hide a group (Required, Optional or Resource), Schedule+ hides all of
	the individuals or resources in that group and clears the check box next to the
	group. The individuals or resources are not added to your meeting request.
	
	RESOLUTION
	==========
	
	To invite all of the attendees,
	
	- Show the Attendees list before you click Request Meeting.
	
	  -or-
	
	- Click to select the check box next to the group (Required, Optional, or
	  Resource) while the list is collapsed.
	
	If you do not want to invite one or more individuals, click to clear the check
	box next to the name of the attendee you do not want to invite before you click
	Request Meeting.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in versions 4.0, of Microsoft
	Exchange. We are researching this problem and will post new information here in
	the Microsoft Knowledge Base as it becomes available.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbScheduleSearch kbZNotKeyword3 kbSchedule700Win95
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbhowto
	
	=============================================================================
	
