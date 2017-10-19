---
layout: page
title: "Q259906: XADM: Event ID 5389 When KM Server Is Moved to a New Server"
permalink: /kb/259/Q259906/
---

## Q259906: XADM: Event ID 5389 When KM Server Is Moved to a New Server

	Article: Q259906
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 02-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you move Key Management (KM) server to a new server in the site, KM server
	may not start. The following event may be logged in the application event log:
	
	  Event ID: 5389
	  Source: MSExchangeKMS
	  Description: KMS is exiting with error 0.
	
	CAUSE
	=====
	
	This issue can occur when the KM server database is running on a version of
	Microsoft Exchange Server that is later than the Exchange Server service pack
	that is installed on the new server.
	
	WORKAROUND
	==========
	
	To work around this issue, ensure that the current server and the server that KM
	server was moved from are running the same version and service pack of Exchange
	Server.
	
	MORE INFORMATION
	================
	
	When you use the Exchange Server 5.5 CD-ROM to install KM server components, you
	must reinstall the current Exchange Server service pack.
	
	Additional query words: KMS update move
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
