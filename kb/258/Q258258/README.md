---
layout: page
title: "Q258258: XADM: Exchange 5.5 SP3 Mailbox Manager conflicts with Site Serve"
permalink: /kb/258/Q258258/
---

## Q258258: XADM: Exchange 5.5 SP3 Mailbox Manager conflicts with Site Serve

	Article: Q258258
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-APR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you open Mailbox Manager properties and click the Server Selections tab,
	the following error message may be displayed:
	
	  LDAP: Protocol error
	
	CAUSE
	=====
	
	This behavior can occur if Microsoft Site Server is installed on the computer
	from the Microsoft Windows NT Option Pack. Site Server installs the Microsoft
	Lightweight Directory Access Protocol (LDAP) service and causes a conflict with
	Mailbox Manager, which uses LDAP to query the directory.
	
	RESOLUTION
	==========
	
	To resolve this behavior, use the following steps:
	
	1. If you are not using Site Server, either stop and set the LDAP Service to
	  manual in Control Panel Services or uninstall Site Server.
	
	2. If you are using the Site Server LDAP service, you need to change the LDAP
	  Port number in Exchange Server. To do this, use the following steps:
	
	  a. Start Exchange Server Administrator.
	
	  b. Click Site Container, click Configuration, and then click Protocols.
	
	3. When the LDAP Directory Site Defaults properties page is displayed, change
	  the port number to a different number (for example, 390).
	
	  NOTE: For additional information, click the article number below to view the
	  article in the Microsoft Knowledge Base:
	
	  Q224447 How To Change LDAP Port Assignments in Exchange Server
	
	4. Click the Authentication tab.
	
	5. Make sure the Windows NT Challenge/Response check box is selected. No other
	  options are required to be selected.
	
	6. Stop the Directory service, and then restart the Exchange Server services for
	  the new port number to take effect.
	
	7. Ensure Mailbox Manager is working and no error messages are displayed.
	
	Additional query words: SiteServer
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbprb
	
	=============================================================================
	
