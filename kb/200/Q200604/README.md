---
layout: page
title: "Q200604: XIMS: IMAP4 Implementation Violates Licensing"
permalink: /kb/200/Q200604/
---

## Q200604: XIMS: IMAP4 Implementation Violates Licensing

{% raw %}

	Article: Q200604
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Microsoft Exchange Server version 5.5 Internet Message Access Protocol, Version
	4rev1 (IMAP4) clients can open more than one connection to an Exchange Server
	computer. Administrators who support a large IMAP4 community may face a
	licensing problem. Because the default licensing model for Exchange Server is on
	a one-seat connection for each session basis, users may be denied access.
	
	CAUSE
	=====
	
	Microsoft Outlook Express and non-Microsoft IMAP4 clients usually open a single
	session to send and receive mail. They may open additional sessions for specific
	operations such as folder manipulation.
	
	WORKAROUND
	==========
	
	Change the licensing mode for Exchange Server from
	per-server-concurrent-connections to per-seat-connections. You may need to
	purchase additional client access licenses (CALs).
	
	MORE INFORMATION
	================
	
	For example, if the licensing mode for Exchange Server is set to per-server for
	10 concurrent connections, and 5 Pine e-mail clients make a connection with 2
	sessions for each connection, any other client that tries to connect is denied
	access because of the lack of available licenses.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
