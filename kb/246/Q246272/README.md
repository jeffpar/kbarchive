---
layout: page
title: "Q246272: XADM: Error 4294966767 Appears, Store Stops When Disk Space Low"
permalink: kb/246/Q246272/
---

## Q246272: XADM: Error 4294966767 Appears, Store Stops When Disk Space Low

	Article: Q246272
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 22-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you run Microsoft Exchange Server 5.5 on a computer that has limited hard
	disk space, the Information Store (IS) service may stop unexpectedly, and you
	may receive the following error message:
	
	  The Microsoft Exchange Information Store service terminated with
	  service-specific error 4294966767.
	
	The following entry may appear in the application log:
	
	  Event ID: 1113
	  Source: MSExchangeIS
	  Type: Error
	  Category: None
	  Description: The log disk is full. Attempting to stop the Microsoft Exchange
	  Information Store service.
	
	Also, the following entry may appear in the system log:
	
	  Event ID: 7024
	  Source: Service Control Manager
	  Type: Error
	  Description: The Microsoft Exchange Information Store service terminated with
	  service-specific error 4294966767.
	
	CAUSE
	=====
	
	This behavior can occur when the hard disk drive on which transaction log files
	are stored lacks adequate space for creation of another log file. (The Mdbdata
	folder in X:\Exchsrvr holds these files.)
	
	RESOLUTION
	==========
	
	To resolve this issue, run Microsoft Exchange Performance Optimizer to move the
	log files to a different hard disk drive. This drive must have enough space to
	hold all the existing logs and still allow the Information Store service to
	start up.
	
	To work around this issue if you do not have another suitable hard disk drive,
	enable circular logging, or add another hard disk drive and then run Performance
	Optimizer.
	
	NOTE: When you enable circular logging, you cannot do incremental or differential
	backups. Circular logging automatically writes over transaction log files after
	the data they contain is committed to the database.
	
	MORE INFORMATION
	================
	
	When the JET database engine detects an 'out of disk space' condition on the
	hard disk drive that contains the log file, the following events take place:
	
	- The JET database engine refuses to take any more transactions from the
	  Information Store service or the Directory service.
	
	- The information store rolls back all uncommitted transactions (this is done
	  through use of the reserved log files Res1.log and Res2.log).
	
	- The information store shuts down, and the JET database engine flushes all
	  uncommitted transactions in the log files into the database and leaves the
	  databases in a consistent state.
	
	For more information on circular logging, please see the following articles in
	the Microsoft Knowledge Base:
	
	  Q147523 XADM: Enabling or Disabling Circular Logging
	
	  Q147524 XADM: How Circular Logging Affects the Use of Transaction Logs
	
	Additional query words: MDBDATA IS
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
