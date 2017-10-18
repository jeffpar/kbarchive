---
layout: page
title: "Q190713: Key Management Server Backup and Disaster Recovery"
permalink: kb/190/Q190713/
---

## Q190713: Key Management Server Backup and Disaster Recovery

	Article: Q190713
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.5, 4.0, 5.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you back up the Exchange Server databases during an online backup, the
	Kmsdata directory is not included.
	
	MORE INFORMATION
	================
	
	To successfully back up the Kmsdata directory so that all security keys are
	recoverable, perform the following steps:
	
	1. Stop the Microsoft Exchange Key Management Server service.
	
	2. Run backup or make a copy of the Kmsdata directory (drive:\Exchsrvr).
	
	3. When the offline backup or the copy has completed, verify that all files have
	  been copied.
	
	4. Restart the Microsoft Exchange Key Management Server service.
	
	To restore the directory or recover lost files, perform the following steps:
	
	1. Ensure that the Key Management Server service is stopped.
	
	2. Restore the Kmsdata directory from backup to the drive:\Exchsrvr\Kmsdata
	  directory.
	
	3. In Control Panel Services, highlight the Microsoft Exchange Key Management
	  Server.
	
	4. Type in the Key Management Server password or insert the disk, and then start
	  the Microsoft Exchange Key Management Server service.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbinfo
	
	=============================================================================
	
