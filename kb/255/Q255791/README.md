---
layout: page
title: "Q255791: XADM: Inappropriate Authentication with Mailbox Manager"
permalink: /kb/255/Q255791/
---

## Q255791: XADM: Inappropriate Authentication with Mailbox Manager

	Article: Q255791
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 08-MAY-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Server Selection tab for the Mailbox Manager utility may not list the
	available servers in the site. Under Servers, the following is displayed:
	
	  LDAP: Inappropriate Authentication.
	
	Mailbox Manager also processes mailboxes on the local server, but does not scan
	mailboxes that are located on other servers.
	
	CAUSE
	=====
	
	This issue can occur if Microsoft Windows NT Challenge/Response has been removed
	as a form of authentication from the Lightweight Directory Access Protocol
	(LDAP).
	
	RESOLUTION
	==========
	
	To resolve this issue, when you need to modify the Server Selection tab, make
	sure that Windows NT Challenge/Response authentication is enabled for LDAP on
	the Authentication tab.
	
	MORE INFORMATION
	================
	
	For additional information about Mailbox Manager and LDAP authentication, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q239065 XADM: LDAP Authentication Method Is Not Supported Error Message When
	  Configuring Mailbox Manager
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
