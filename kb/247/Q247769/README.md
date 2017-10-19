---
layout: page
title: "Q247769: XADM: Error 1067 Occurs When Starting Directory Service After Re"
permalink: /kb/247/Q247769/
---

## Q247769: XADM: Error 1067 Occurs When Starting Directory Service After Re

	Article: Q247769
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 29-JAN-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to start the directory service in Microsoft Exchange Server 5.5
	after restoring it from backup, the directory may not start and you may receive
	the following error message:
	
	  Error 1067. The process terminated unexpectedly.
	
	The following events may appear in the Event Viewer:
	
	  Event ID: 124
	  Source: ESE97
	  Description: MSExchangeDS ((1432 ) ) Unable to read the log header. Error
	  -530.
	
	  Event ID: 1196
	  Source: MSExchangeDS
	  Description: Couldn't recover the restored Microsoft Exchange Server database
	  (EDB). Cannot continue. Error c8000212.
	
	CAUSE
	=====
	
	This behavior can occur on a recovery server or on a server you use for testing
	purposes because the Edb.log file that is created during a restore operation
	from backup interferes with the recovery process when the restore operation is
	finished.
	
	RESOLUTION
	==========
	
	To resolve this behavior, manually remove the existing data in the Dsadata
	folder before starting the restore operation from backup.
	
	NOTE: If you delete the Edb.log file to restart the directory service, run
	eseutil with the /g /v /x /ds options to ensure that this deletion does not
	introduce errors into the directory.
	
	MORE INFORMATION
	================
	
	To prevent this behavior in the future, use the setup /r command when you
	perform the restore installation.
	
	Additional query words: recovery disaster repair
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
