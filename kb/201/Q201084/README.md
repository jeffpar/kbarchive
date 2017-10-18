---
layout: page
title: "Q201084: XFOR: Error 'C1030B35' Configuring Exchange as DirSync Requestor"
permalink: kb/201/Q201084/
---

## Q201084: XFOR: Error 'C1030B35' Configuring Exchange as DirSync Requestor

	Article: Q201084
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you set up an Exchange Server computer to act as a directory
	synchronization (dirsync) requestor, you may receive the following error
	message:
	
	  Error occurred while processing email address C1030B35. See the event log for
	  more details.
	
	No errors are reported in the application event log.
	
	CAUSE
	=====
	
	There is already an Exchange Server computer in another site configured to act
	as a dirsync requestor against the Microsoft Mail dirsync server. That site is
	within the same Organization, and is replicating with your current site. Because
	of this replication, the dirsync address (Network\Po\$system) for the dirsync
	server that was to be created already exists within the Organization.
	
	RESOLUTION
	==========
	
	It is recommended that you have only one dirsync requestor to the same dirsync
	server in an Organization. The replication connector will migrate those MS Mail
	user names to the global address list in all other connected sites.
	
	Additional query words: Dir Sync Synch GAL DSS DSR
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0
	Issue type        : kbprb
	
	=============================================================================
	
