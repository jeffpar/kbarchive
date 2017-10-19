---
layout: page
title: "Q262439: XADM: Indexes Rebuilt Twice or More After NT Upgrade"
permalink: /kb/262/Q262439/
---

## Q262439: XADM: Indexes Rebuilt Twice or More After NT Upgrade

	Article: Q262439
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After an upgrade of Microsoft Windows NT, the Exchange Server database indexes
	rebuild themselves more than once.
	
	CAUSE
	=====
	
	The rebuilding of the database indexes (or "re-indexing") should only happen
	once for each operating system upgrade. However, there are instances in which
	the indexing occurs more than once. For example, if the databases are not shut
	down gracefully, the re-index event is never flushed to disk; the next time the
	services start (such as during a reboot), the database indexes are rebuilt.
	
	WORKAROUND
	==========
	
	Shut down all Exchange Server services and restart them. If the databases
	re-index themselves, cycle the services again. If the re-indexing occurs again,
	contact Microsoft Product Support Services.
	
	MORE INFORMATION
	================
	
	The Extensible Storage Engine (ESE) database determines whether the database
	needs to be indexed by checking the current operating system (OS) version
	contained in the database header. If the OS version is different than the
	current version, ESE indexes the database. This can be retrieved by running
	ESEUTIL /MH <full path and name of database>.
	
	Results will be similar to the following:
	
	OS Version: (4.0.1381 SP 5)
	
	If the current version of Windows NT is Service Pack 5 (SP5), an index should not
	be required.
	
	For additional information about re-indexing, click the article number below to
	view the article in the Microsoft Knowledge Base:
	
	  Q215297 XADM: Windows NT Version Change May Cause Exchange DB Indexes to be
	  Rebuilt
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
