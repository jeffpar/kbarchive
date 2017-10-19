---
layout: page
title: "Q251410: XADM: Backup Stops with Events 105 and 145 and Error 1032"
permalink: /kb/251/Q251410/
---

## Q251410: XADM: Backup Stops with Events 105 and 145 and Error 1032

	Article: Q251410
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 12-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	A backup program that is Exchange Server aware may stop, and the following two
	events may be logged in the application event log:
	
	  Event Type: Error
	  Event Source: ESE97
	  Event Category: Logging/Recovery
	  Event ID: 105
	  Description: MSExchangeIS ((nnn)) The database engine has stopped the backup
	  with error -1032.
	
	  Event Type: Error
	  Event Source: ESE97
	  Event Category: General
	  Event ID: 145
	  Description: MSExchangeIS ((nnn)) The database engine could not access the
	  file called [path]\exchsrvr\MDBDATA\\edbxxxxx.log.
	
	CAUSE
	=====
	
	This problem can occur if the current backup job conflicts with another backup
	job, which may or may not be Exchange Server aware. When the Extensible Storage
	Engine (ESE) backup process cannot open a transaction log because there is a
	conflicting backup job, ESE97 generates the two events in the "Symptoms" section
	of this article, and the backup program stops.
	
	RESOLUTION
	==========
	
	Disable one of the conflicting backup jobs. You may need to contact the software
	vendor to find the conflicting backup job.
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
