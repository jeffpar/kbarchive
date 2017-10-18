---
layout: page
title: "Q178934: XADM: Full Online Backup Fails with Event ID 15 with Error -1811"
permalink: kb/178/Q178934/
---

## Q178934: XADM: Full Online Backup Fails with Event ID 15 with Error -1811

	Article: Q178934
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0,5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 23-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	During a full online backup and after the Exchange Server directory has been
	backed up, Windows NT backup stops, with the following error messages written to
	the event viewer when it begins to back up the information store.
	
	  Event ID: 15
	  Source: EDB
	  Description: MSExchangeIS ((190)) The database engine has stopped the backup
	  with error -1811.
	
	  Event ID: 105
	  Source: ESE97
	  Type: Error
	  Category: Logging/Recovery
	  Description: MSExchangeIS ((202) ) The database engine has stopped the backup
	  with error -1811.
	
	WORKAROUND
	==========
	
	Error -1811 is JET_errFileNotFound. The error above signals that a transaction
	log file is either missing or corrupt. Perform the following steps to work
	around this problem:
	
	1. Stop the Information Store service.
	
	2. Remove all the .LOG files from the \Exchsrvr\Mdbdata directory, and place
	  them in a temporary directory.
	
	3. Find the Edb.chk file (located in the \Exchsrvr\Mdbdata directory on one of
	  the drives), and place it in the temporary directory.
	
	4. Start the Information Store service.
	
	5. Start the full online backup of the Exchange Server again.
	
	Result: The full online backup should complete without error.
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : winnt:5.0,5.5
	Issue type        : kbprb
	
	=============================================================================
	
