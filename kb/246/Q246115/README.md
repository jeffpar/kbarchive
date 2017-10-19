---
layout: page
title: "Q246115: XCON: Internet Mail Service Won't Start, Logs Event 2140 and 100"
permalink: /kb/246/Q246115/
---

## Q246115: XCON: Internet Mail Service Won't Start, Logs Event 2140 and 100

	Article: Q246115
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 10-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start either the Internet Mail Service (Exchange Server 5.0
	and later) or the Internet Mail Connector (IMC) (Exchange Server 4.0), it does
	not start. Event ID 2140 and Event ID 100 may be logged in the Windows NT Event
	Viewer application event log.
	
	CAUSE
	=====
	
	The Internet Mail Service or IMC property pages may not be properly configured.
	In the Internet Mail tab, the administrator's mailbox may not be a valid
	mailbox.
	
	RESOLUTION
	==========
	
	To resolve the problem:
	
	1. Start the Exchange Server Administrator program, click the Configuration
	  container, and then click the Connectors container.
	
	2. Double-click either Internet Mail Service or IMC, as applicable.
	
	3. Click the Internet Mail tab of the Internet Mail Service or IMC properties
	  page, and then select a valid user for the administrator's mailbox. The
	  Exchange Server Internet Mail Service or IMC starts.
	
	MORE INFORMATION
	================
	
	For additional information about other things that keep the Internet Mail
	Service or IMC from starting, click the article numbers below to view the
	articles in the Microsoft Knowledge Base:
	
	  Q148727 XFOR: Internet Mail Connector Fails to Start
	
	  Q191548 Troubleshooting Guide for the Internet Mail Connector/Internet Mail
	  Service
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
