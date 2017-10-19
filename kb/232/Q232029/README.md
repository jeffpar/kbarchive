---
layout: page
title: "Q232029: XFOR: Scheduled Dirsync Retries when Import Container Missing"
permalink: /kb/232/Q232029/
---

## Q232029: XFOR: Scheduled Dirsync Retries when Import Container Missing

	Article: Q232029
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 05-JUN-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you schedule directory synchronization (dirsync) for the Microsoft Exchange
	Connector for Novell GroupWise to run automatically, the service initiates the
	dirsync process in both directions. If you do not specify a Recipients container
	in either the Import or Export containers' properties, the dirsync process runs
	indefinitely.
	
	CAUSE
	=====
	
	The scheduled dirsync process starts a dirsync cycle for both directions. If a
	Recipients container is missing, dirsync runs continuously until it is stopped
	manually.
	
	RESOLUTION
	==========
	
	Specify a Recipients container for both the Import and Export containers. If you
	want one-way dirsync, use the filtering mechanism on the GroupWise Connector to
	filter out GroupWise recipients from becoming custom recipients in the Exchange
	Server directory.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
