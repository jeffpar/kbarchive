---
layout: page
title: "Q163913: XADM: IS or DS Stops Due to Lack of Drive Space for Log Files"
permalink: /kb/163/Q163913/
---

## Q163913: XADM: IS or DS Stops Due to Lack of Drive Space for Log Files

{% raw %}

	Article: Q163913
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 28-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Microsoft Exchange Information Store (IS) or Directory (DS) services shut
	down unexpectedly and log the following message in the Windows NT Server Event
	Viewer Application log:
	
	  Event ID: 49
	  Source: EDB
	  Type: Warning
	  Category: Logging/Recovery
	  Description:
	  MSExchangeIS (or DS) ((286) ) The database engine is rejecting update
	  operations due to low free disk space on the log disk.
	
	  Event ID: 1113
	  Source: MSExchangeIS (or DS)
	  Type: Error
	  Category: None
	  Description:
	  The log disk is full. Attempting to stop the Microsoft Exchange Information
	  Store service.
	
	One or more of the entries in the Event Log may indicate error -529 (
	JET_errLogDiskFull) has occurred.
	
	CAUSE
	=====
	
	The disk drive containing the transaction logs for the service (MDBDATA for the
	IS and DSADATA for the DS) has no available space to create another log file.
	
	RESOLUTION
	==========
	
	Using the Microsoft Exchange Performance Optimizer, move the transaction logs to
	another drive containing sufficient free disk space. The new drive should have
	enough free disk space for all the existing logs to be moved to that drive and
	then have enough free disk space for the service to startup.
	
	MORE INFORMATION
	================
	
	The following events take place when the JET database engine detects and out of
	disk space condition on the log file drive:
	
	1. The JET database engine refuses to take any more transactions from the
	  Information Store service or Directory service.
	
	2. The Information Store will rollback all uncommitted transactions (this is
	  done with the use of the reserved log files RES1.LOG and RES2.LOG).
	
	3. The Information Store shuts down gracefully, meaning all uncommitted
	  transactions in the log files are flushed into the database and the databases
	  are in a consistent state.
	
	If log files are filling up your drive, you may want to find out whether they are
	being purged after backups. For additional information on how to determine which
	log files can safely be deleted, click the article number below to view the
	article in the Microsoft Knowledge Base:
	
	  Q240145 XADM: How to Tell Which Transaction Log Files Can Be Safely Removed
	
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : :4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
