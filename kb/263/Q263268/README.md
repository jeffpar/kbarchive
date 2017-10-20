---
layout: page
title: "Q263268: XADM: Wrong Account Name Prevents New Server from Joining Site"
permalink: /kb/263/Q263268/
---

## Q263268: XADM: Wrong Account Name Prevents New Server from Joining Site

{% raw %}

	Article: Q263268
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	If you use the Microsoft Exchange Server Setup program to join an existing site,
	when you type the server name of the site that you want to join, a dialog box
	displays the service account that the existing server is currently using.
	Sometimes it displays only the service account name instead of both the domain
	name and the service account name. Setup then stops, and you receive the
	following error message:
	
	  Microsoft Exchange Server Setup
	  Processing file <file path>\server.ins, at or near line 276
	  No mapping between account names and security Ids was done.
	  Microsoft Windows NT
	  ID no: 0xc0020534
	
	This behavior also occurs when the two servers are in the same domain, and the
	new Microsoft Windows NT-based server is set up as a backup domain controller
	(BDC) of this domain. When you use the service account to log on to the new
	server, the behavior remains unchanged.
	
	CAUSE
	=====
	
	This behavior can occur when the Exchange Server account, in any of the
	Microsoft Exchange-related services, is set to <service account name> and
	not <domain name>\<service account name>.
	
	When Setup seeks a service account to continue the progress, it gets the service
	account name from the existing server's service logon account, which, in this
	case, is set to <service account name> only. The domain name cannot be
	retrieved. This prevents Setup from finding a proper domain controller to verify
	the security identifier (SID).
	
	RESOLUTION
	==========
	
	To resolve this issue, follow these steps:
	
	1. In Control Panel, double-click the Services icon.
	
	2. Click each Exchange Server-related service, and then change the account so
	  that it is formatted as <domain name>\<service account name>.
	
	After you have ensured that the service account names in all Exchange
	Server-related services are formatted correctly, restart Setup. The new server
	can now successfully join the existing site.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
