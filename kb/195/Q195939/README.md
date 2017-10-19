---
layout: page
title: "Q195939: XFOR: Behavior of Notes, SNADS, and PROFS Log Files"
permalink: /kb/195/Q195939/
---

## Q195939: XFOR: Behavior of Notes, SNADS, and PROFS Log Files

	Article: Q195939
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If an Exchange site with Notes, SNADS, and PROFS connectors is extremely busy,
	large number of logs could accumulate. The log files are stored in the
	<exchsrvr>\Connect\Exchconn\logs directory. All three (Notes, SNADS and
	PROFS) connectors share the same files and directory for logging.
	
	After the last log file is reached for a particular day, say 980220ZZ.log, this
	file will grow infinitely. This will continue until there is no disk space left,
	at which point the connector will crash. The crash occurs because the Notes mail
	Connector is currently incapable of detecting the lack of sufficient disk space.
	
	MORE INFORMATION
	================
	
	Microsoft has confirmed this to be a problem in Exchange Server 5.5.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.5
	Issue type        : kbinfo
	
	=============================================================================
	
