---
layout: page
title: "Q139068: PC WSPlus: Issues When Multiple Users Have the Same Assistant"
permalink: kb/139/Q139068/
---

## Q139068: PC WSPlus: Issues When Multiple Users Have the Same Assistant

	Article: Q139068
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,1.0a
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 1.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Multiple users can have the same Assistant defined in their respective access
	privileges. For example, UserA and UserB can define the same Assistant, UserC,
	in their access privileges. If the Assistant (UserC) deletes a meeting request
	message sent to both UserA and UserB, the users can no longer respond to the
	meeting request, either confirming or denying attendance.
	
	RESOLUTION
	==========
	
	This is by product design. The current Schedule+ architecture cannot handle
	creating multiple messages.
	
	MORE INFORMATION
	================
	
	When UserD invites both UserA and UserB to a meeting, the meeting request
	message is received by the Assistant as one message. The Assistant double-
	clicks the meeting request, and it displays the meeting request messages for
	both UserA and UserB. If the Assistant (UserC) deletes the message or one of the
	meeting request displays, BOTH meeting request displays are deleted.
	
	If UserA has accepted the meeting, and UserB is out of town, and the Assistant
	(UserC) deletes the message, the Assistant (UserC) can not accept the meeting
	for UserB.
	
	
	Additional query words: 1.00 1.00a schedule plus multiple meeting requests Assistant
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100 kbSchedule100a
	Version           : WINDOWS:1.0,1.0a
	
	=============================================================================
	
