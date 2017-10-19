---
layout: page
title: "Q169196: XADM: Client Slow to Access a Public Folder"
permalink: /kb/169/Q169196/
---

## Q169196: XADM: Client Slow to Access a Public Folder

	Article: Q169196
	Product(s): Microsoft Exchange
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 29-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you try to access a public folder from Microsoft Exchange Client, the
	client appears to stop responding for a while before it accesses the public
	folder.
	
	This normally occurs if the server containing a replica of the public folder is
	unavailable. In that case, the client then tries to connect to another server
	that contains a replica of the public folder.
	
	CAUSE
	=====
	
	In Microsoft Exchange Server 4.0, the client slows down as described each time
	the public folder in question is accessed (for example, each time you open a
	message in the public folder). This is because the client tries to connect to
	the initial server, even though it has previously tried to connect to that
	server and failed.
	
	MORE INFORMATION
	================
	
	This problem does not occur in Exchange Server 5.0. The client keeps track of
	which servers it has tried to connect to and failed and will not try to connect
	to any of these servers to access public folders.
	
	For example, say Server A and Server B are two servers in a site containing
	replicas of a public folder, PF1. Consider the connection modulus for the client
	computer causes the Exchange client to first try to connect to Server A to
	access PF1. If Server A is down the first time public folder PF1 is accessed,
	the client will wait while trying to connect to Server A. After waiting for the
	timeout interval, the client will then connect to Server B and be able to access
	the public folder. However after the first attempt, every time the client tries
	to access the same public folder, PF1, it will not try to connect to Server A
	but will directly go to Server B. This information is only kept in memory and is
	lost when the client is exited. Thus, the next time the client is started, it
	will again try to connect to Server A.
	
	For more information on the algorithm that is used to determine which public
	folder replica is accessed when a user tries to open the contents of a public
	folder, please refer to the following Knowledge Base article:
	
	  Q154941 XADM: How to Determine Which Public Folder Replica Is Used
	
	Additional query words: hang
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : WinNT:4.0
	Issue type        : kbprb
	
	=============================================================================
	
