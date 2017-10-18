---
layout: page
title: "Q193378: XFOR: List of Default Jet Database Files in DXADATA"
permalink: kb/193/Q193378/
---

## Q193378: XFOR: List of Default Jet Database Files in DXADATA

	Article: Q193378
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After the Microsoft Exchange Directory Synchronization service (DXA) is started
	for the first time, several files appear in the exchsrvr\dxadata subdirectory.
	These files are Jet database files related to directory synchronization between
	Exchange Server and Microsoft Mail servers.
	
	MORE INFORMATION
	================
	
	The following files are Jet database components for directory synchronization:
	
	- Xdir.edb. Jet database. Includes mappings list of all transactions that have
	  been sent by the DXA.
	
	- Edb.chk. External checkpoint file that marks the position in the log files at
	  which the database is in a consistent state.
	
	- Edb.log. Write-ahead transaction log for directory synchronization
	  transaction.
	
	- Temp.edb. Log file used to store transactions that are in progress. Temp.edb
	  is also used for some transient storage during online compaction.
	
	- Res1.log and Res2.log. Reserved disk space, so that if the database or log
	  file hard disk drive is full, Exchange Server can still be cleanly stopped.
	
	NOTE: The Res1.log and Res2.log files are created with the size of 1,024 KB
	instead of 5,120 KB, which is the size for directory and information store
	databases' log files.
	
	Additional query words: msexchangedx
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
