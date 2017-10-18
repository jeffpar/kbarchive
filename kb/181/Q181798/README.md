---
layout: page
title: "Q181798: XADM: Online Restore May Not Replay Log Files"
permalink: kb/181/Q181798/
---

## Q181798: XADM: Online Restore May Not Replay Log Files

	Article: Q181798
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 02-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are restoring a database created during an online backup, the log files
	may not replay into the database being restored if the circular logging status
	has been changed from disabled to enabled.
	
	CAUSE
	=====
	
	In the following scenario, the log files will not be replayed:
	
	1. Circular logging is enabled.
	
	2. An online backup is made of the information store or directory.
	
	3. Circular logging is disabled.
	
	4. A restore of the information store or directory is made to the server.
	
	Log files created after circular logging is disabled cannot be replayed into a
	database created when circular logging was enabled. In most cases, there will be
	a gap in the logfile sequence, and messages cannot be recovered from logs
	residing on the drive.
	
	WORKAROUND
	==========
	
	When circular logging is disabled, you must immediately perform a backup of the
	information store and directory to be able to restore a database and replay the
	log files that will begin to be created after circular logging is disabled.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
