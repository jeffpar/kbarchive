---
layout: page
title: "Q269007: XADM: Issues While Running Multiple Link Monitor Sessions"
permalink: kb/269/Q269007/
---

## Q269007: XADM: Issues While Running Multiple Link Monitor Sessions

	Article: Q269007
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 10-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you run multiple link monitor sessions on Exchange Server computers,
	multiple occurrences of the following event error message may be logged:
	
	  Event ID: 1005
	  Event Type: Error
	  Event Source: MSExchangeAdmin
	  Event Category: Monitoring
	  Description:
	  Unexpected error [0xc0040000 - The client operation failed. Microsoft Exchange
	  Server Information Store ID no: 8004010f-0501-8004010f] occurred.
	  OR
	  Unexpected error [0xc0040000 - The MAPI call failed. MAPI or an unexpected
	  service provider. ID no: 80004005-0000-00000000] occurred.
	  OR
	  Unexpected error [0xc0040000 - An unexpected, unknown error has occurred. MAPI
	  or an unspecified service provider. ID no: 8004010f-0000-00000000] occurred.
	
	
	CAUSE
	=====
	
	This issue can occur because the system attendant (Mad.exe) and the link
	monitors (which run in the Exchange Server Administrator program) are
	multithreaded, but the system attendant and the link monitors are not
	synchronized across processes. Therefore, threads in the system attendant and
	the Exchange Server Administrator program can pick up the same message at the
	same time and process the message, and then both the system attendant and the
	link monitors are designed to delete the message after they are finished. When a
	thread generates the 1005 error message, the other process has marked the
	message as "Used" and then deleted the message.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	MORE INFORMATION
	================
	
	The event ID 1005 error message may still be recorded in the application event
	log, but this only occurs if either the information store or the directory
	service is not available. That is a valid error case that should be recorded in
	the application event log.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
