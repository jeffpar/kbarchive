---
layout: page
title: "Q179308: XADM: How To Verify Exchange Online Backups"
permalink: /kb/179/Q179308/
---

## Q179308: XADM: How To Verify Exchange Online Backups

	Article: Q179308
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-MAR-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	To verify that the Microsoft Exchange Server online backup contains a usable
	copy of the database, perform the following steps:
	
	1. Perform an online backup.
	
	2. Set up a test server and restore the backup.
	
	3. Stop the Exchange services.
	
	4. For Exchange Server version 4.0 and 5.0, defrag the databases and verify that
	  no errors are reported when you run the following commands:
	
	   - edbutil /d /ispriv
	
	   - edbutil /d /ispub
	
	   - edbutil /d /ds
	
	  For Exchange Server version 5.5, perform an integrity check of the databases
	  and verify that no errors are reported when you run the following commands:
	
	   - eseutil /g /ispriv
	
	   - eseutil /g /ispub
	
	   - eseutil /g /ds
	
	5. Restart the services.
	
	If the services start at this point, the database is usable and contains no
	errors.
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : WINDOWS:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
