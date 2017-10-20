---
layout: page
title: "Q230051: XFOR: Internet Mail Connector Dial-Up Connection Stops Working"
permalink: /kb/230/Q230051/
---

## Q230051: XFOR: Internet Mail Connector Dial-Up Connection Stops Working

{% raw %}

	Article: Q230051
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
	
	The Internet Mail Connector on an Exchange 5.5 server is initially configured to
	forward all mail to a Simple Mail Transfer Protocol (SMTP) host over a dial-up
	connection. This works fine and all SMTP mail is successfully sent using the
	Remote Access Service (RAS) link to the remote host.
	
	However, problems may occur if an additional entry is created using the Email
	Domain button on the Connections tab of the Microsoft Internet Mail Service. If
	that connection is set to use Domain Name Service (DNS) or forwards all messages
	directly to a host using a local area network (LAN) link instead of RAS, the
	dial-up connection specified on the Connections tab never dials again.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server
	version 5.5. For additional information, please see the following article in the
	Microsoft Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	The English version of this fix should have the following file attributes or
	later:
	
	Component: Internet Mail Service
	
	+---------------------------+
	| File name    | Version    | 
	+---------------------------+
	| Msexcimc.exe | 5.5.2591.0 | 
	+---------------------------+
	| Imcmsg.dll   | 5.5.2591.0 | 
	+---------------------------+
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 3.
	
	Additional query words: IMC
	
	======================================================================
	Keywords          : exc55 EXC55SP3Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
