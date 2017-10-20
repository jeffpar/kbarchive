---
layout: page
title: "Q175988: XFOR: Not All IMAP Clients Are Built Alike"
permalink: /kb/175/Q175988/
---

## Q175988: XFOR: Not All IMAP Clients Are Built Alike

{% raw %}

	Article: Q175988
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you use Microsoft Exchange Server 5.5 and want to run IMAP clients against an
	Exchange Server computer, you need to be aware that not all IMAP clients are
	alike.
	
	MORE INFORMATION
	================
	
	Microsoft Exchange Server 5.5 is IMAP4 Rev 1 compliant, which is covered by RFC
	2060. IMAP comprises over 30 commands, through which messages can be searched,
	fetched, and expunged from the Exchange Server computer. IMAP is well suited for
	online and offline use. IMAP can connect to multiple mailboxes (providing
	permissions are in place) and public folders, and can be used for non email
	purposes, such as news services.
	
	IMAP is powerful and flexible. Microsoft and the many other makers of IMAP
	clients showcase IMAP functionality in different ways. For example, some clients
	do not have a folder view and some do. Some clients show all folders associated
	with the mailbox account and others require the user to subscribe to them. Users
	that run multiple IMAP clients may not find consistent results across every
	client they use. As a result, users and administrators may look to the Exchange
	Server computer as the source of some IMAP client problems.
	
	Microsoft has tested over a dozen IMAP clients since it committed to IMAP
	protocol support for Exchange Server 5.5, and testing continues. When Microsoft
	sees client behavior that may be interpreted as server trouble, that information
	is posted in the Microsoft Knowledge Base. A number of articles already exist,
	and more will be added as the product matures.
	
	Exchange Server 5.5 is IMAP neutral, and it accepts and responds to IMAP commands
	assembled by the client. Though the clients use a common framework (RFC 2060),
	not all clients work the same. When performance questions arise, administrators
	can activate detailed IMAP protocol logging, and they can view the IMAP
	conversation.
	
	Additional query words: IMA
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WINDOWS:5.5
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
