---
layout: page
title: "Q274403: XADM: Internet Mail Service Stops Processing Inbound Conversion"
permalink: kb/274/Q274403/
---

## Q274403: XADM: Internet Mail Service Stops Processing Inbound Conversion

	Article: Q274403
	Product(s): Microsoft Exchange
	Version(s): 5.5 SP3
	Operating System(s): 
	Keyword(s): exc55sp3 kbExchange550sp4Fix
	Last Modified: 08-MAY-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 SP3 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	
	Exchange Server computers may encounter backlogs of items that are awaiting
	inbound conversion on the Internet Mail Service after you apply the fix from the
	following Microsoft Knowledge Base article:
	
	  Q268357 XADM: Exchange Clients Appear to Hang When Information Store Queries
	  Directory
	
	The inbound conversion queue may not clear until the services are stopped and
	restarted. The services, particularly the information store, may take an
	abnormally long time to shut down or may stop responding (hang) while they are
	shutting down, whether or not the server has an Internet Mail Service
	configured.
	
	
	CAUSE
	=====
	
	The deadlock is caused by two threads that are waiting for two critical sections
	to complete. Thread 1 enters critsec A. Thread 2 enters critsec B. Before either
	thread releases the critical sections, thread 1 asks for critsec B and thread 2
	asks for critsec A. This behavior was not a problem before the fix because the
	work being done before was all on the same thread, and locking order did not
	matter.
	
	RESOLUTION
	==========
	
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the Latest Exchange Server 5.5 Service Pack
	
	
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	Store.exe builds 5.5.2653.7 through 5.5.2653.18. This problem was first
	corrected in Exchange Server 5.5 Service Pack 4.
	
	MORE INFORMATION
	================
	
	To test this, import a lot of directory changes at the same time that you are
	modifying objects such as protocols, site addressing, or the Gateway Address
	Resolution Table (GWART). You must have many small changes being imported to
	catch this.
	
	Additional query words: DS Imail IMS IS
	
	======================================================================
	Keywords          : exc55sp3 kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange550SP3
	Version           : :5.5 SP3
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
