---
layout: page
title: "Q242063: XADM: Recovery May Incorrectly Increment the Checkpoint File"
permalink: kb/242/Q242063/
---

## Q242063: XADM: Recovery May Incorrectly Increment the Checkpoint File

	Article: Q242063
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
	
	The recovery mechanism in JET may incorrectly advance the checkpoint under
	certain circumstances. If JET is started and finds that the database is in an
	inconsistent state, JET attempts recovery. If the database is locked open for
	some reason (by another process such as a backup program), JET receives an error
	-1032 (Jet_errFileAccessDenied), but does not handle the error properly. JET
	continues to try to play forward the logs into the database and increment the
	checkpoint file.
	
	The following events may be observed in the application event log:
	
	Source  Category      Event ID   Description  
	==============================================
	ESE97	Information	100	The database engine 05.2448.0002 started. 
	ESE97	Information	108	The database engine is initiating recovery steps. 
	ESE97	Information	109	The database engine is replaying log file C:\exchsrvr\MDBDATA\edb00001.log. 
	ESE97	Error		145	The database engine could not access the file called C:\exchsrvr\MDBDATA\PRIV.EDB. 
	ESE97	Error		145	The database engine could not access the file called C:\exchsrvr\MDBDATA\PRIV.EDB. 
	ESE97	Warning		132	Unable to read header of database C:\exchsrvr\MDBDATA\PRIV.EDB. Error -1032. Database may have been moved. Recovery continues with the database in the new location. 
	ESE97	Information	109	The database engine is replaying log file C:\exchsrvr\MDBDATA\edb00002.log. 
	ESE97	Information	109	The database engine is replaying log file C:\exchsrvr\MDBDATA\edb00003.log. 
	ESE97	Information	109	The database engine is replaying log file C:\exchsrvr\MDBDATA\edb.log. 
	ESE97	Information	110	The database engine has successfully completed recovery steps. 
	ESE97	Error		145	The database engine could not access the file called C:\exchsrvr\MDBDATA\PRIV.EDB. 
	ESE97	Error		145	The database engine could not access the file called C:\exchsrvr\MDBDATA\PRIV.EDB. 
	ESE97	Error		145	The database engine could not access the file called C:\exchsrvr\MDBDATA\PRIV.EDB. 
	MSExchangeIS	Error	1120	Error Non-database file or corrupted database initializing the Microsoft Exchange Server Information Store database. 
	MSExchangeIS	Error	5000	Unable to initialize the Microsoft Exchange Information Store service. Error Non-database file or corrupted database. 
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Exchange Server 5.5.
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q191014 XGEN: How to Obtain the latest Exchange Server 5.5 Service Pack
	
	
	WORKAROUND
	==========
	
	The workaround for this issue is to remove the file lock on the database, which
	is usually caused by a backup program actively backing up the database. Do not
	run file-level backup programs against the Exchange Server database when the
	database is running. Stop the Exchange Server services first. The recommended
	backup method is to use Exchange Server-aware backup programs to do an online
	backup.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Microsoft Exchange Server
	version 5.5. This problem was first corrected in Exchange Server 5.5 Service
	Pack 4.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 kbExchange550preSP4fix kbExchange550sp4Fix 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
