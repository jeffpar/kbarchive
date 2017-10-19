---
layout: page
title: "Q239065: XADM: Error Message: LDAP Authentication Method Is Not Supported"
permalink: /kb/239/Q239065/
---

## Q239065: XADM: Error Message: LDAP Authentication Method Is Not Supported

	Article: Q239065
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3
	Last Modified: 08-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you configure Microsoft Exchange Mailbox Manager on a server running
	Exchange Server 5.0 Service Pack 2, and click the Server Selection tab, no
	servers are listed, and you may receive the following error message:
	
	  LDAP Authentication method is not supported
	
	WORKAROUND
	==========
	
	If you have a computer running Exchange Server version 5.5 in the site, you can
	configure Mailbox Manager from that server.
	
	If you do not have any Exchange Server 5.5 computers in the site, you can still
	run Microsoft Exchange Mailbox Manager on the 5.0 computer. Cleanup is performed
	on mailboxes on that server, although you cannot see the server on the Server
	Selection tab.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 Service Pack 3.
	
	MORE INFORMATION
	================
	
	This behavior also affects the retrieval of hidden mailboxes.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55sp3 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : winnt:5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbnofix
	
	=============================================================================
	
