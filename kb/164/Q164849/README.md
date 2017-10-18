---
layout: page
title: "Q164849: XFOR: Migration Error Event ID 145"
permalink: kb/164/Q164849/
---

## Q164849: XFOR: Migration Error Event ID 145

	Article: Q164849
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kberrmsg kbnetwork kbother kbtool kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use the Migration wizard (Mailmig.exe) to migrate users from either
	Microsoft Mail or cc:Mail to Microsoft Exchange Server the following error
	message may appear:
	
	  The address book is unavailable. Check that the Microsoft Exchange Server is
	  still available.
	
	When you checking the Application event log, you may find the following event as
	well:
	
	  Event ID: 145
	  Source: MSExchangeMig
	  Description: Error Configuring the profile for Account: Microsoft System
	  Attendant.
	
	CAUSE
	=====
	
	During the migration process, it is necessary for the System Attendant to log on
	as the users being migrated in order to perform certain tasks such as moving
	messages or personal address book entries and so on. In order to log on, the
	System Attendant must create a temporary profile and configure that profile. To
	create a profile, the migration wizard makes some calls into the Emsui(32).dll,
	which by default resides in the %Systemroot%\System(32) directory.
	
	If the user running the migration wizard does not have access to Emsui(32).dll or
	access to the directory it resides in, the aforementioned events may be
	encountered.
	
	RESOLUTION
	==========
	
	To resolve this problem, grant the user running the migration wizard access to
	Emsui(32).dll:
	
	- Give the user access to the directory where Emsui(32).dll resides.
	
	  -OR-
	
	- Copy Emsui(32).dll to the directory where Mailmig.exe is (by default, this is
	  in the Exchsrvr\Bin directory)
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbnetwork kbother kbtool kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
