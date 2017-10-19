---
layout: page
title: "Q86376: PC WSPlus: Assistant Needs Access to Postoffice"
permalink: /kb/086/Q86376/
---

## Q86376: PC WSPlus: Assistant Needs Access to Postoffice

	Article: Q86376
	Product(s): Microsoft Schedule+ for Windows
	Version(s): WINDOWS:1.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Schedule+ for Windows, version 1.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An assistant in Microsoft Schedule+ for Windows can be anyone from the Global
	Address List (GAL); however, if the assistant is on another postoffice, there
	must be a dynamic link to the user's postoffice from the assistant's postoffice.
	The following error will be displayed if there is no link:
	
	  Unable to access the file for manager.
	
	CAUSE
	=====
	
	SCHDIST.EXE moves the information about an assistant to another postoffice. When
	the assistant tries to read the meeting request in Schedule+, the postoffice
	file confirms that the user is the assistant, and then tries to make the
	connection. If dynamic connections have been set up, this will work normally.
	
	Additional query words: 1.00 schedule distribution plus
	
	======================================================================
	Keywords          :  
	Technology        : kbScheduleSearch kbSchedule100
	Version           : WINDOWS:1.0
	
	=============================================================================
	
