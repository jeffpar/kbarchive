---
layout: page
title: "Q165146: XCON: Exchange MTA Logs Event ID 62 and 3144"
permalink: kb/165/Q165146/
---

## Q165146: XCON: Exchange MTA Logs Event ID 62 and 3144

	Article: Q165146
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbsetup kbtshoot kbusage exc4 exc5 exc55
	Last Modified: 19-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server may log the following warnings in the Windows NT event
	viewer:
	
	  Event ID 3144
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: X.400 Service
	
	  An internal MTA error occurred: message submit failure. Object ID:
	  06xxxxx.
	
	  Entity name:
	
	  /o=Microsoft/ou=MAILER/cn=Configuration/cn=Servers/cn=HIGHLANDERS/ 
	  cn=Microsoft
	
	  Private MDB. [XAPI DELIVER 47 109] (12)
	
	  Event ID 62
	  Source MSExchangeMTA
	  Type Warning
	  Category x.400 Service
	
	  A delivery failure occurred for the message with message transfer
	  service identifier. X.400 reason code unable-to-transfer. Diagnostic
	  content-too-long.
	
	  Contact Microsoft Product Support Services. [0 MTA SUBMIT 25 112] (12)
	
	CAUSE
	=====
	
	These warnings are caused by a message that exceeds the limit set on the Servers
	MTA. Increasing the server's message transfer agent (MTA) message size limit
	will resolve the problem
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbsetup kbtshoot kbusage exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
