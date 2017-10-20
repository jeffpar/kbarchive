---
layout: page
title: "Q260065: XIMS: STARTTLS Unavailable When Connecting To Loopback"
permalink: /kb/260/Q260065/
---

## Q260065: XIMS: STARTTLS Unavailable When Connecting To Loopback

{% raw %}

	Article: Q260065
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 27-JUL-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you troubleshoot the Internet Mail Service (IMS), you may need to connect
	to the Exchange IMS locally. When you connect to the Exchange IMS through the
	loopback address (127.0.0.1) or by using Localhost, the STARTTLS command is not
	available, even if a Secure Socket Layer Certificate is properly configured.
	
	MORE INFORMATION
	================
	
	This behavior is by design. The loopback IP address is not used by the IMS for
	Transport Layer Security.
	
	To work around this issue, connect to the actual IP address of the server, or to
	its host name. Do not connect to Localhost or to the loopback address 127.0.0.1.
	
	Additional query words: starttls ims imc ssl localhost
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
