---
layout: page
title: "Q152479: Err Msg: You Are Not this Person's Assistant"
permalink: kb/152/Q152479/
---

## Q152479: Err Msg: You Are Not this Person's Assistant

	Article: Q152479
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0,7.0; Win95:7.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 21-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, versions 1.0, 7.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When a Microsoft Schedule+ 7.0 user accepts a meeting invitation sent by a
	Schedule+ 1.0 user, the reply message has the following message attached to the
	top of the meeting response message when read using version 3.x of Mail for
	Windows:
	
	  You are not this person's assistant.
	
	NOTE: The message does not show if the message is read through the Schedule+ 1.0
	messages box.
	
	STATUS
	======
	
	This problem has nothing to do with delegates or assistants.
	
	Schedule+ 1.0 expects that if there is a SentRepresenting property then the
	person must have an assistant. For Meeting forms, MAPI messaging providers will
	stamp the SentRepresenting property for all messages even if you do not have an
	assistant. The message will be similar to the following:
	
	Sent by: Johnny Lee, Sent Representing: Johnny Lee.
	
	Schedule+ 1.0 sees the sent representing and determines that you have not set
	yourself as your assistant and tells you.
	
	
	MORE INFORMATION
	================
	
	The meeting is booked properly in version 7.0 and the acceptance response is
	also recorded properly in version 1.0. Using the Schedule+ 1.0 viewer, things
	appear as they should.
	
	There should be no string displayed on the title of the response message.
	
	Steps to Reproduce the Problem
	------------------------------
	
	1. Schedule+ 1.0 user sends a meeting request to a Schedule+ 7.0 user.
	
	2. Schedule+ 7.0 user accepts it and replies to it.
	
	3. Schedule+ 1.0 user open this response in the Mail for Windows 3.x client.
	
	RESULTS: You receive the message mentioned in the SYPMTOMS section.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOfficeSearch kbSQLServ700 kbScheduleSearch kbOffice95Search kbZNotKeyword3 kbMPTMathopolis
	Version           : WINDOWS:1.0,7.0; Win95:7.0
	
	=============================================================================
	
