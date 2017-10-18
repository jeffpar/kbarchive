---
layout: page
title: "Q241186: XADM: DirRep Bridgeheads Generate Unnecessary Notifications"
permalink: kb/241/Q241186/
---

## Q241186: XADM: DirRep Bridgeheads Generate Unnecessary Notifications

	Article: Q241186
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55 kbExchange550preSP4fix kbExchange550sp4Fix
	Last Modified: 11-NOV-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Directory replication may take several hours on a large Exchange Server site
	that has many servers if this site also has a directory bridgehead server with
	many downstream sites attached to it.
	
	At each replication interval, the bridgehead server can receive updates to (2 X
	number of sites) directory contexts, which it has to pass on to the other
	servers within its own site. These intrasite remote procedure call (RPC) updates
	are serialized and queued. If there are n downstream sites and the bridgehead
	has y servers in its own site, the bridgehead has up to (n X y X 2) directory
	replication updates to send to its local site. The issue is that the bridgehead
	always sends a change notification for all contexts to all servers in its site
	even if there have been no directory changes in the remote sites. When you
	multiply the number of updates by the replication pause interval between each
	update, the whole process can take some time (several hours in extreme cases).
	
	CAUSE
	=====
	
	The speed of directory replication can be affected by many factors; however, in
	this particular case, the issue is caused by the fact that the notification
	mechanism on the directory replication bridgehead servers generates
	notifications for downstream naming contexts regardless of whether there are
	changes or not. On large Exchange Server systems, this behavior can cause valid
	directory changes to be queued behind a large number of notifications containing
	no real information.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5 . This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
