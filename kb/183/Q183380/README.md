---
layout: page
title: "Q183380: XADM: Full Online Backup Must Be Done After a Defrag or Repair"
permalink: /kb/183/Q183380/
---

## Q183380: XADM: Full Online Backup Must Be Done After a Defrag or Repair

	Article: Q183380
	Product(s): Microsoft Exchange
	Version(s): Windows:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-APR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	After a Microsoft Exchange database is defragmented or repaired off-line (by
	running the Edbutil or Eseutil utilities), a full online backup must be
	performed as soon as possible.
	
	If the backup is not done, it could severely impact the ability to recover from a
	disaster that occurs after the off-line defragmentation or repair was done.
	
	MORE INFORMATION
	================
	
	When the databases are defragmented or repaired, they get a new log signature.
	As a result, any logs generated after the defragmentation (or repair) process
	will be incompatible with the databases just as they were before the
	defragmentation or repair process. Therefore, if a disaster occurs and you need
	to restore before the next full online backup has been performed, you will not
	be able to recover data generated after the defragmentation (or repair) because
	the logs have a different signature. For this reason, it is very important that
	you perform a full online backup immediately after you do a defragmentation (or
	repair) of the database.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : Windows:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
