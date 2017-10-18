---
layout: page
title: "Q232380: XCLN: Tentative Appointments Missing Schedule+ Free Busy Message"
permalink: kb/232/Q232380/
---

## Q232380: XCLN: Tentative Appointments Missing Schedule+ Free Busy Message

	Article: Q232380
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 07-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Free Busy information is message based. Specifically, each user sends a single
	message to the Schedule+ Free Busy folder with all of their calendar information
	in the message. Each time a user makes changes to the calendar, a new message is
	sent to the system Free Busy folder (which overwrites the previous message).
	
	You may need to rebuild the Schedule+ Free Busy information using the Guidgen.exe
	or Mdbvu32.exe utilities, which delete Schedule+ Free Busy messages for users.
	
	For additional information about rebuilding Schedule+ Free Busy information,
	please click the article number below to view the article in the Microsoft
	Knowledge Base:
	
	  Q152960 XADM: Reassigning Site Roles after Removing the First Server in an
	  Exchange Site
	
	
	The Schedule+ Free Busy folder is repopulated when users create new calendar
	items or accept meeting requests. During this period some users' Free Busy
	information is temporarily unavailable because they have not created or accepted
	any meeting items.
	
	MORE INFORMATION
	================
	
	Until a user logs on to the server and makes or accepts an appointment (a "busy"
	time), there is no Free Busy information to view.
	
	Users who are out of the office when the Schedule+ Free Busy folder is recreated
	have no viewable Free Busy information.
	
	If there is no busy time (a meeting or accepted meeting request) in a user's
	calendar, an automatically accepted meeting booked as tentative does not create
	a new Free Busy message for that user.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
