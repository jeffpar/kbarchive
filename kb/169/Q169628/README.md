---
layout: page
title: "Q169628: XCON: MTA May Hang After Running from the Command Line"
permalink: kb/169/Q169628/
---

## Q169628: XCON: MTA May Hang After Running from the Command Line

	Article: Q169628
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	The Microsoft Exchange Server message transfer agent (MTA) may hang and/or
	generate database errors after it runs from the command line.
	
	MORE INFORMATION
	================
	
	The MTA is normally started as a service known as MSExchange MTA. However, it is
	possible to start the MTA from the Exchsrvr\bin directory, if you run Emsmta.exe
	from the command line. The MTA will function normally, but you will need to use
	the CTRL-C keystroke combination at the command line to stop the MTA. After you
	stop the MTA using the CTRL-C keystroke combination, the server needs to be
	rebooted if it is expected to go back into a production role. Running Emsmta.exe
	from the command line should only be attempted when MTA debugging is needed.
	This should never be considered normal operation. This behavior is by product
	design.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
