---
layout: page
title: "Q274743: SMS: SQL Error 3023 in Collection Evaluator Log"
permalink: /kb/274/Q274743/
---

## Q274743: SMS: SQL Error 3023 in Collection Evaluator Log

	Article: Q274743
	Product(s): Microsoft Systems Management Server
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): kbDatabase kbServer kbsms200 kbCollections kbsmsUtil
	Last Modified: 02-FEB-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server version 2.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Collection Evaluator component, along with various other Systems Management
	Server (SMS) components, may generate an SQL error 3023 if it runs during the
	backup of the SMS database.
	
	The following error messages is generated in the Colleval.log file on the site
	server:
	
	  ********~Evaluating SMS00007
	  Next due date for collection SMS00007 is 09/26/00 11:00:00
	  Preparing to refresh collection SMS00007
	  SQL Err #10007> General SQL Server error: Check messages from the SQL
	  Server.
	  SQL Msg #3023> Backup, CHECKALLOC, bulk copy, SELECT INTO, and file
	  manipulation (such as CREATE FILE) operations on a database must be
	  serialized. Reissue the statement after the current backup, CHECKALLOC, or
	  file manipulation operation is completed.
	  CCollectionSource_SQL::RefreshResults - could not create index
	  Could not refresh collection SMS00007. Will retry later.
	
	CAUSE
	=====
	
	These messages can appear if the SMS services are allowed to run while the
	backup operation is in progress, and a component attempts a database operation.
	
	Some SQL operations are serial in nature, meaning that only one operation can be
	performed at a time while this operation is in a running state. The backup
	operation is one such operation. Any operations specified in the error message
	in the "Symptoms" section may fail, and generate a 3023 error message while the
	backup operation is running. This creates the need to shut down all SMS services
	before starting an SMS database backup.
	
	The Backup SMS Site Server database maintenance task that is included with SMS
	2.0 stops the necessary SMS services during execution. Using other methods to
	perform the same task may result in this error message if the SMS services are
	not shut down prior to performing the backup.
	
	WORKAROUND
	==========
	
	It is highly recommended that the SMS database maintenance task be used to shut
	down the SMS services, and also to back up the SMS database, files, and
	registry.
	
	For additional information on how to perform a backup of the SMS database refer
	to Chapter 18, "Maintaining SMS Systems" in the Microsoft Systems Management
	Server 2.0 Administrator's Guide.
	
	Additional query words: prodsms backup collection evaluator evaluation
	
	======================================================================
	Keywords          : kbDatabase kbServer kbsms200 kbCollections kbsmsUtil 
	Technology        : kbSMSSearch kbSMS200
	Version           : :2.0
	Issue type        : kbprb
	
	=============================================================================
	
