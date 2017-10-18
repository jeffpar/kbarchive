---
layout: page
title: "Q172812: XADM: Event ID 9031 Database Resource Failure Error -1011"
permalink: kb/172/Q172812/
---

## Q172812: XADM: Event ID 9031 Database Resource Failure Error -1011

	Article: Q172812
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0 SP3
	Operating System(s): 
	Keyword(s): 
	Last Modified: 04-JUL-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following events may appear in the application Event Viewer:
	
	  Event ID: 9031
	  Source: MSExchangeIS
	  Type: Error
	  Category: None
	  Description: Database Resource Failure error -1011 occured in function
	  JTAB_BASE::EcSeek while accessing the database.
	
	When attempting to do some client functions you may get also get the error
	message:
	
	  Client operation failed.
	
	When selecting F2 on the error dialog box, the following error message appears:
	
	  Microsoft Exchange Server Information Store -- 1281 -- [80000008:FFFFFC0D].
	
	When the same exact operation is retried, the operation is successful.
	
	CAUSE
	=====
	
	The buffers for the Microsoft Exchange Server directory and information store
	are set too low. Operations are failing because the directory or information
	store cannot obtain the resources to open a new session with the JET database
	intermittently.
	
	RESOLUTION
	==========
	
	Re-run the Microsoft Exchange Server Performance Optimizer.
	
	MORE INFORMATION
	================
	
	Performance Optimizer uses internal algorithms to set a variety of Exchange
	Server values. Some of these algorithms changed slightly in the Exchange Server
	4.0a Service Pack 2 release. So re-running Performance Optimizer from a version
	of Exchange Server later than 4.0a SP2 will recalculate some of these
	performance values even if there are no changes to physical memory, number of
	users, and so on.
	
	The store and directory buffers are basically pools of memory for either of these
	services. Each time the information store or the directory opens a session with
	the JET database, it needs to pull from its buffer to allocate memory. If there
	are not enough buffers on a busy server, you receive out-of-memory errors
	(1011).
	
	Re-running the Performance Optimizer significantly increases the buffers and
	subsequently, the 9031 events stop being generated.
	
	After re-running Exchange Server Performance Optimizer, the log file Perfopt.log
	shows a dramatic increase in the Set # of information store buffers and
	directory buffers similar to the following:
	
	  Set # of information store buffers from 9330 to 20000
	  Set # of directory buffers from 3110 to 7915
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbZNotKeyword2 kbExchange400SP3
	Version           : winnt:4.0 SP3
	Issue type        : kbprb
	
	=============================================================================
	
