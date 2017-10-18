---
layout: page
title: "Q146366: Mtg Req: Decline and Don't Send Response - Attendee Icon Wrong"
permalink: kb/146/Q146366/
---

## Q146366: Mtg Req: Decline and Don't Send Response - Attendee Icon Wrong

	Article: Q146366
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:4.0,7.0; Win95:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, version 4.0 
	- Microsoft Exchange Windows NT client, version 4.0 
	- Microsoft Exchange Client for Windows 95, version 4.0 
	- Microsoft Schedule+, version 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When User1 sends a meeting request to User2, and User2 declines the meeting but
	doesn't send a response (just closes the response without sending it), User1
	still shows User2's icon as being the closed envelope with the question mark and
	not the red X.
	
	The icons in the Attendees list for User2 still has the envelope with the
	question mark, showing that they have been sent a request.
	
	CAUSE
	=====
	
	We changed the design from silent response to no response if the user declines
	to send a response. Customers complained about Microsoft Exchange sending
	messages that they said NO to sending.
	
	Additional query words: 4.00 7.00
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbExchange400NT
	Version           : WINDOWS:4.0,7.0; Win95:4.0
	
	=============================================================================
	
