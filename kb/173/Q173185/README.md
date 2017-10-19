---
layout: page
title: "Q173185: XCLN: Err Msg: The Schedule File Could Not Be Opened"
permalink: /kb/173/Q173185/
---

## Q173185: XCLN: Err Msg: The Schedule File Could Not Be Opened

	Article: Q173185
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,7.0,7.5; Win95:4.0,5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 3.x client, versions 4.0, 5.0 
	- Microsoft Exchange Client for Windows 95, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Schedule+, versions 7.0, 7.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to open another user's schedule, the following error message is
	displayed:
	
	  The schedule file could not be opened. A message service provider
	  reported an error.
	
	CAUSE
	=====
	
	Replication may not have been correctly set up between the two involved sites.
	
	WORKAROUND
	==========
	
	To work around this problem, use the Microsoft Exchange Administrator program to
	set up directory replication between the involved sites.
	
	NOTE: Setting up custom recipients for the user of another site is not sufficient
	to open a cross-site schedule. A network connection must exist between the two
	computers where the schedules reside.
	
	Additional query words: access denied Schedule File
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange400 kbExchangeClientSearch kbZNotKeyword2 kbScheduleSearch kbSchedule700 kbZNotKeyword3 kbSchedule750 kbExchange400NT kbExchange500NT
	Version           : WINDOWS:4.0,5.0,7.0,7.5; Win95:4.0,5.0
	Issue type        : kbprb
	
	=============================================================================
	
