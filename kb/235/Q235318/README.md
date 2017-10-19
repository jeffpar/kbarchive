---
layout: page
title: "Q235318: XFOR: Exchange Server NNTP Service Fails With 500 Command Not Re"
permalink: /kb/235/Q235318/
---

## Q235318: XFOR: Exchange Server NNTP Service Fails With 500 Command Not Re

	Article: Q235318
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): exc5 exc55
	Last Modified: 18-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Internet News Service fails to receive a push feed from an authorized
	Internet news provider. When the newsfeed provider issues an IHAVE command to
	the Exchange Server computer, the following error message may occur:
	
	  500 command not recognized.
	
	CAUSE
	=====
	
	The Internet News Service has failed to validate the newsfeed provider as an
	accepted server.
	
	
	RESOLUTION
	==========
	
	In addition to specifying the Remote USENET Site Name and Host Name, the IP
	address or fully qualified domain name of the newsfeed server needs to be added
	to the Additional Inbound Hosts (Remote host name) field. It is recommended that
	the IP address be used to avoid any name resolution problems.
	
	When configured correctly, the "Newsfeed type" listed on the General tab of the
	Newsfeed will read either "Newsgroups are accepted inbound," or "Newsgroups are
	accepted inbound and pushed outbound." You cannot edit the newsfeed property
	after it has been configured. When you are running the Newsfeed Setup Wizard, be
	sure that the "Inbound newsfeed type" is set to "Accept incoming messages
	(typical)."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server,
	version 5.5.
	
	
	Additional query words: nntp, ihave, command, telnet
	
	======================================================================
	Keywords          : exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
