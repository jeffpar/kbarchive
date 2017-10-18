---
layout: page
title: "Q311396: XADM: Error -1022 and -1032 After Restore of Directory"
permalink: kb/311/Q311396/
---

## Q311396: XADM: Error -1022 and -1032 After Restore of Directory

	Article: Q311396
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 25-APR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	You restore an Exchange Server 5.5 directory from offline backup and you want to
	try to play the log files forward. When you try to start the Exchange 5.5 Server
	directory service, the service does not start, and the following event ID
	messages are logged in the Application event log:
	
	  Event Type: Error
	  Event Source: ESE97
	  Event Category: (7)
	  Event ID: 0
	  Description:
	  MSExchangeDS (256) Unexpected Win32 error: 0x6
	
	  -and-
	
	  Event Type: Error
	  Event Source: MSExchangeDS
	  Event Category: (9)
	  Event ID: 1002
	  Description:
	  The Microsoft Exchange Server database (EDB) could not be initialized and
	  returned error -1022. Unrecoverable error, the directory can't continue.
	
	After these event ID messages are logged, you can start the Exchange directory
	service and you do not receive any errors.
	
	You stop the Exchange directory service again, restore the same offline backup a
	second time, and then try to play the log files forward a second time. When you
	try to start the Exchange directory service, the service does not start, and the
	following event ID messages are logged in the Application event log:
	
	  Event Type: Error
	  Event Source: ESE97
	  Event Category: (1)
	  Event ID: 145
	  Description:
	  MSExchangeDS (294) The database engine could not access the file called
	  E:\exchsrvr\DSADATA\dir.edb.
	
	  Event Type: Warning
	  Event Source: ESE97
	  Event Category: (3)
	  Event ID: 132
	  Description:
	  MSExchangeDS (294) Unable to read header of database
	  E:\exchsrvr\DSADATA\dir.edb. Error -1032. Database may have been moved.
	  Recovery will continue with the database in the new location.
	
	  Event Type: Error
	  Event Source: MSExchangeDS
	  Event Category: (9)
	  Event ID: 1002
	  Description:
	  The Microsoft Exchange Server database (EDB) could not be initialized and
	  returned error -1032. Unrecoverable error, the directory can't continue.
	
	After these error occur, the Exchange directory service no longer starts unless
	you revert to a previous backup.
	
	NOTE: Error -1022 is Jet_errDiskIO and Error -1032 is Jet_errAccessDenied. For a
	full list of ESE error codes, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q177761 XADM: ESE97 Error Codes
	
	CAUSE
	=====
	
	This behavior can occur because the recovery process tries to attach to the
	database two times. When the recovery process tries to attach the second time,
	it does not respond and you receive the -1032 error because the recovery process
	is already attached to the database.
	
	WORKAROUND
	==========
	
	To work around this behavior, perform online backups, in addition to offline or
	snapshot backups of the Exchange Directory.
	
	MORE INFORMATION
	================
	
	The -1032 errors indicated in the event ID messages only occur if the following
	conditions are true and occur in the following sequence:
	
	1. Before you restore the Exchange directory files, you stop the directory
	  service cleanly by using Service Control Manager, or the equivalent command.
	
	2. After you restore the Exchange directory files from offline backup, you
	  remove the checkpoint file (Edb.chk) and leave sequential logs in place so
	  that you can play forward.
	
	3. When you start the directory service at this point, the directory service
	  stops responding and you receive the -1022 error. However, you can start the
	  directory service after this error.
	
	4. You stop the directory service cleanly, or the service stops responding and
	  have not created a new offline or online backup.
	
	5. You restore the same offline backup or another copy of the offline backup of
	  the directory a second time, remove the checkpoint file (Edb.chk), and you
	  maintain the sequential logs so that you can play forward.
	
	6. When you start the directory service, the directory service does not respond
	  and you receive the -1032 error.
	
	These event ID messages and errors do not occur when you restore the Exchange
	Server 5.5 information store from offline or snapshot backups. This behavior
	only occurs when you restore the Exchange directory from an offline backup.
	
	For additional information about supportability of using offline backups with
	Exchange, see the 'Supportability of Offline and Snapshot Backup Solutions'
	section in Q237767, click the article number below to view the article in the
	Microsoft Knowledge Base:
	
	  Q237767 XADM: Understanding Offline and Snapshot Backups
	
	For additional information, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q296787 XADM: Offline Backup and Restore Procedures for Exchange Server 4.0,
	  5.0, and 5.5
	
	Additional query words: snap emc teim timefinder bcv ds offline backup
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
