---
layout: page
title: "Q239082: XIMS: IMAP4 Client Hangs Attempting to Append Message Using SSL"
permalink: /kb/239/Q239082/
---

## Q239082: XIMS: IMAP4 Client Hangs Attempting to Append Message Using SSL

{% raw %}

	Article: Q239082
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 EXC55SP3Fix
	Last Modified: 30-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You may experience either of the following symptoms:
	
	- When an Internet Mail Access Protocol version 4 (IMAP4) client attempts to
	  send a message to an Exchange Server computer using the APPEND command and
	  Secure Sockets Layer (SSL) authentication, the client may stop responding
	  (hang). This problem is known to occur with Netscape Messenger version 4.5,
	  but it may also occur with other clients.
	
	- After an IMAP4 client connects to an Exchange Server computer, the server may
	  end the connection unexpectedly, or may not end the connection in situations
	  where it should.
	
	CAUSE
	=====
	
	These problems can occur for the following reasons:
	
	- If the server obtains the end of the message and a carriage return/line feed
	  (CR/LF) during a single read, the CR/LF may be ignored, and therefore it is
	  not decrypted. This causes the client to stop responding.
	
	- The server may not properly increment or decrement the counters associated
	  with the receive chain length.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Information Store
	
	+-------------------------+
	| File name  | Version    | 
	+-------------------------+
	| Gapi32.dll | 5.5.2650.4 | 
	+-------------------------+
	| Mdbmsg.dll | 5.5.2650.4 | 
	+-------------------------+
	| Netif.dll  | 5.5.2650.4 | 
	+-------------------------+
	| Store.exe  | 5.5.2650.4 | 
	+-------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	
	MORE INFORMATION
	================
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
