---
layout: page
title: "Q169645: XCON: MTA Event ID 9996 Occurs"
permalink: /kb/169/Q169645/
---

## Q169645: XCON: MTA Event ID 9996 Occurs

	Article: Q169645
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you look at the Windows NT Application log for Microsoft Exchange Server
	Event Ids, the following may appear:
	
	  The description for Event ID ( 9996 ) in Source ( MSExchangeMTA ) could not
	  be found.
	  It contains the following insertion string(s): ExitProcess called in file:
	  K:\MTA\src\emsmta\sysglue\sbnilnt.c; line: 2156.
	
	The text for this message will vary, but it will always report the description
	could not be found.
	
	CAUSE
	=====
	
	This is a generic event that occurs when an informational condition or error
	arises and there is no error string matching exactly. The event pops up with the
	location in the source code of the error. More often then not this event is
	informational or non-critical, and represents normal MTA housekeeping. If an
	actual problem does exist; other Event IDs will be present to indicate the
	problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	versions 4.0, 5.0, and 5.5. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbbug
	
	=============================================================================
	
