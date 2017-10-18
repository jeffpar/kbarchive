---
layout: page
title: "Q301505: XADM: Directory Service Doesn't Start, Event Log Error -510"
permalink: kb/301/Q301505/
---

## Q301505: XADM: Directory Service Doesn't Start, Event Log Error -510

	Article: Q301505
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange 2000 Server 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the directory service, a pop-up window reports the
	following error:
	
	  Could not start the Microsoft Exchange Directory service on \\SERVERNAME
	  Error 2140: An internal Windows NT error occurred.
	
	The event log shows the following events:
	
	Event ID: 109
	Source: ESE97
	Type: Information
	MSExchangeDS (988) the database engine is replaying log file
	R:\LogFiles\DSAData\edb.log.
	
	Event ID: 110
	Source: ESE97
	Type: Information
	MSExchangeDS (988) the database engine has successfully completed recovery
	steps.
	
	Event ID: 0
	Source: ESE97
	Type: Information
	MSExchangeDS (988) -510
	
	Event ID: 1166
	Source: ESE97
	Type: Information
	Error -510 has occurred (internal ID 2030148). Contact Microsoft Technical
	Support for assistance.
	
	Event ID: 1002
	Source: ESE97
	Type: Information
	The Microsoft Exchange Server database (EDB) could not be initialized and
	returned error -510. Unrecoverable error, the directory can't continue.
	
	CAUSE
	=====
	
	Error -510 corresponds to JET_errLogWriteFail. The error can be caused by a
	corrupted Edb.log file.
	
	WORKAROUND
	==========
	
	To work around this issue, follow these steps:
	
	1. Backup your current database.
	
	2. Check whether Dir.edb is consistent by using eseutil /mh.
	
	3. Do one of the following:
	
	   - If Dir.edb is consistent, remove all log files and start the directory
	     service.
	
	     -or-
	
	   - If Dir.edb is inconsistent, restore from backup.
	
	4. When you restore from Online Backup, replay only transaction logs older than
	  the corrupted one.
	
	5. When you restore from Offline Backup, empty the database and transaction log
	  directories and restore only Dir.edb.
	
	Additional query words: exch2kp2w
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2 kbExchange2000Search kbExchange2000Serv
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
