---
layout: page
title: "Q173558: XADM: Client Fails to Connect to Alternate PF Server"
permalink: /kb/173/Q173558/
---

## Q173558: XADM: Client Fails to Connect to Alternate PF Server

	Article: Q173558
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kberrmsg
	Last Modified: 07-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	
	Using a Microsoft Exchange Client, you can open a Public Folder (PF) and
	successfully view its contents. However, when you attempt to post a message to
	this same PF, you receive the following message:
	
	  The contents of this public folder are currently unavailable. Either the
	  Microsoft Exchange Server computer servicing this public folder is down
	  or the public folder has not been replicated to this site. See your
	  Administrator.
	
	CAUSE
	=====
	
	This behavior can occur when the Microsoft Exchange Server that originally
	hosted the PF for you shuts down. When you attempt to post a message to the PF,
	the Exchange Client will attempt to make an RPC connection to this PF Server and
	fail. Even though other Exchange Servers in the Site contain replicas of this
	PF, the Exchange Client will not attempt to connect to these Exchange Servers to
	complete this task.
	
	STATUS
	======
	
	This is by product design.
	
	WORKAROUND
	==========
	
	If this original PF Server remains shut down, you will need to log out and log
	in again to connect to a different PF Server. During the login process, the
	Exchange Client will realize that the preferred instance is not available and
	make an alternative connection to a different PF Server.
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
