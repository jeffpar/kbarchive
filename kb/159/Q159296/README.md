---
layout: page
title: "Q159296: XCON: MTA May Log Event ID 2187 for Specific DAT Files"
permalink: /kb/159/Q159296/
---

## Q159296: XCON: MTA May Log Event ID 2187 for Specific DAT Files

	Article: Q159296
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 16-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you start the Microsoft Exchange Server Message Transfer Agent (MTA)
	service, versions 4.0, 4.0 Service Pack 1, 4.0 Service Pack 2, and 4.0 Service
	Pack 3 of the service may log events similar to the following after MTACHECK has
	performed a successful integrity check of the MTA database:
	
	  Event:2187
	  Source:MTA
	  Type:Warning
	  Cat:Internal Processing
	  Description: An MTA database server error was encountered while attempting to
	  unlock an object which is not locked. Called from MTA. Procedure 460. Object
	  at fault: 06000174. [DB Server DISP:ROUTER 16 58] (14)
	
	MORE INFORMATION
	================
	
	The MTA continues to process all other DAT files successfully because this is a
	non-fatal error. Only the messages specified by this warning are not processed
	successfully. In the example above, the message that generated the error was
	temporarily present in the MTADATA directory as Db000174.dat.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2 kbExchange400SP1 kbExchange400SP2 kbExchange400SP3
	Version           : winnt:4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
