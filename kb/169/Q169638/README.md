---
layout: page
title: "Q169638: XADM: Exchange Uses Information Store for Intersite Replication"
permalink: /kb/169/Q169638/
---

## Q169638: XADM: Exchange Uses Information Store for Intersite Replication

	Article: Q169638
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbtshoot exc4 exc5 exc55
	Last Modified: 07-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to remove the Private Information Store from an Exchange Server
	version 5.0 or 5.5 computer that is acting as the site's replication bridgehead
	server, the following error message may be appear:
	
	  STOP
	  This Private Information Store is being used. Remove the Directory
	  Replication Connector first.
	
	CAUSE
	=====
	
	In Microsoft Exchange Server 5.0 and 5.5, the information store is used to
	deliver and receive inter-site replication messages. The Directory service uses
	MAPI calls to communicate with the store for this purpose. In Exchange Server
	4.0, the above error message does not appear because the Directory service
	communicates directly with the message transfer agent (MTA) for inter-site
	replication communications.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtshoot exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
