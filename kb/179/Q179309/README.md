---
layout: page
title: "Q179309: XADM: LDAP Port for SSL Is Not Configurable In Exchange"
permalink: /kb/179/Q179309/
---

## Q179309: XADM: LDAP Port for SSL Is Not Configurable In Exchange

	Article: Q179309
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 31-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 5.0 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	In Microsoft Exchange Server versions 5.0 and 5.5, the Secure Sockets Layer
	(SSL) port for Lightweight Directory Access Protocol (LDAP) can not be changed;
	it is fixed on port 636.
	
	MORE INFORMATION
	================
	
	Currently, all clients are configured to connect to port 636 for SSL LDAP
	directory queries. This port is not configurable from the client, so there is no
	reason to change it on the server. Doing so would make clients unable to connect
	for these queries. Normal LDAP queries are configured for Port 389. For more
	information on configuring this port, please see the following Microsoft
	Knowledge Base article:
	
	  Q176169 XADM: How to Install ILS on Exchange Server Computer
	
	Additional query words: Security encryption certificate
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
