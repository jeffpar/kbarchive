---
layout: page
title: "Q258236: XADM: Third-Party Backup Software May Not Restore Log Files"
permalink: /kb/258/Q258236/
---

## Q258236: XADM: Third-Party Backup Software May Not Restore Log Files

	Article: Q258236
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): exc4 exc5 exc55
	Last Modified: 23-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the Microsoft Exchange Directory Service or the
	Information Store Service after a database is restored, the service may not
	start.
	
	You may receive one of the following error messages, or a similar error message,
	which indicates that log files are missing:
	
	  Error(s) -1811 JET_errFileNotFound
	
	  -or-
	
	  -509 JET_errMissingPreviousLogFile
	
	If you check the database in question by running the following command
	
	  eseutil /mholt;path to DB file> |more
	
	the database appears to be in an inconsistent state, which indicates that to
	start the database, log files must be played into it. In addition, the "Restore
	In Progress Key" may be missing from the registry after the restore.
	
	CAUSE
	=====
	
	This behavior can occur because certain backup software packages allow you to
	restore log files from an online backup. When each service starts, it is
	directed to the transaction log files so that it can replay any missing
	transactions. These log files default to the Dsadata folder in the Directory
	Service or the Mdbdata folder in the Information Store Service.
	
	RESOLUTION
	==========
	
	To resolve this issue, restore log files in the backup software when you restore
	from an online backup.
	
	WORKAROUND
	==========
	
	To work around this issue, restore the entire database again. You can also
	restore only the missing log files by using the Exchange Server-aware portion of
	the backup software.
	
	MORE INFORMATION
	================
	
	Log files may not be successfully replayed during restoration if circular
	logging is enabled for the server that is being restored.
	
	For additional information about circular logging and online backups, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q181798 XADM: Online Restore May Not Replay Log Files
	
	Additional query words:
	
	======================================================================
	Keywords          : exc4 exc5 exc55 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
