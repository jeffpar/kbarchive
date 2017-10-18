---
layout: page
title: "Q167824: XCLN: How Schedule+ Displays Busy Times for Resources"
permalink: kb/167/Q167824/
---

## Q167824: XCLN: How Schedule+ Displays Busy Times for Resources

	Article: Q167824
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:7.0
	Operating System(s): 
	Keyword(s): kbenv kbusage
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 7.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	In planner view in Microsoft Schedule+, the busy times for resources are based
	on a different logical interpretation than the busy times for required or
	optional attendees. That is, the planner will display as busy (or not available)
	only if ALL resources are busy while meeting attendees will show as busy when
	ANY of the attendees are busy.
	
	There are four methods for viewing the individual busy resources:
	
	1. Resources that are busy during the selected meeting interval will display a
	  red X next to their name in the attendees list.
	
	2. Double click the selected meeting time to show individual attendees and
	  resources that are busy during that time.
	
	3. Secondary click on the selected meeting time to show individual attendees and
	  resources that are busy during that time.
	
	4. Choosing the Request Meeting button will bring up a dialog if multiple
	  resources are available allowing the user to select one or more resources for
	  the meeting.
	
	MORE INFORMATION
	================
	
	When Microsoft Schedule+ generates the busy times for resources, it constructs a
	query using the "and" operator. For example, Schedule+ constructs a query such
	as "if resource A AND resource B are busy," show the indicators for the busy
	times.
	
	In contrast, when Microsoft Schedule+ generates the busy times for required or
	optional attendees, it constructs a query using the "or" operator. For example,
	it constructs a query such as "if required attendee A OR required attendee B is
	busy," show the indicators for the busy times.
	
	This behavior is by design.
	
	Additional query words: WINNT WIN16 WIN95 XCLN XSCH KBUSAGE
	
	======================================================================
	Keywords          : kbenv kbusage 
	Technology        : kbScheduleSearch kbSchedule700
	Version           : WINDOWS:7.0
	Hardware          : x86
	Issue type        : kbinfo
	
	=============================================================================
	
