---
layout: page
title: "Q256221: XCON: Exchange Server 5.5 POP3 Clients Cannot Authenticate"
permalink: /kb/256/Q256221/
---

## Q256221: XCON: Exchange Server 5.5 POP3 Clients Cannot Authenticate

	Article: Q256221
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 18-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5, on platform(s):
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Post Office Protocol version 3 (POP3) clients may be unable to authenticate with
	Exchange Server 5.5 if it is running on a Microsoft Windows 2000 Advanced
	Server-based computer. The client generates the following error message:
	
	  "Your User name or password was rejected"
	  Error Logon Failure Port 110 ssl 0x800ccc90.
	
	The following event 11310 may also be logged in the application event log of the
	server:
	
	  pop3 unaccepted and unauthenticated user.
	
	Messaging Application Programming Interface (MAPI) clients can log on as the POP3
	user with no problem.
	
	If you telnet to port 110, you receive the following error message:
	
	  LOGIN FAILURE
	
	The application event log also contains event 11310 "LOGIN FAILURE" followed by
	event 11103 "losing connection."
	
	RESOLUTION
	==========
	
	To resolve this problem, upgrade to Exchange Server 5.5 Service Pack 3.
	
	Additional query words: IMAP4
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
