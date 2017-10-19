---
layout: page
title: "Q178907: XADM: Open File Backup Backs Up Inconsistent Exchange Databases"
permalink: /kb/178/Q178907/
---

## Q178907: XADM: Open File Backup Backs Up Inconsistent Exchange Databases

	Article: Q178907
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 22-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	
	
	SYMPTOMS
	========
	
	If you use backup software that performs a backup of the Exchange Server
	database files while the Exchange services are running, the backup of the
	databases will be inconsistent. If you restore this backup and attempt to start
	the respective Exchange Server services, you will receive the following error
	message on the screen, in the Windows NT Event Viewer Application log, or both:
	
	  Error -550 has occurred
	
	CAUSE
	=====
	
	The Exchange databases are a combination of the database files (.Edb files) and
	the logs (.Log files). All transactions occurring in Exchange Server are written
	to the log files first and then written into the actual database files, after a
	period of time.
	
	The Exchange databases are considered to be consistent when all transactions from
	the log files have been written into the database files. The database is then
	consistent with the log files. When the information store service is shut down,
	all transactions from the log files are written into the information store
	service databases (Priv.edb and Pub.edb). When the directory service is shut
	down, all transactions from the log files are written into the directory
	database (Dir.edb). The only time you can be absolutely certain that an Exchange
	Server database is consistent is when its respective service is shut down
	without error.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Use backup software that is designed to back up Exchange Server while it is
	  online.
	
	  -or-
	
	- Stop the information store and directory services before you perform a backup
	  of the Exchange Server databases.
	
	Additional query words: Jet_errDatabaseInconsistent
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
