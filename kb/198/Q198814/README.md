---
layout: page
title: "Q198814: XADM: Recovering a KM Server after a complete Exchange Rebuild"
permalink: /kb/198/Q198814/
---

## Q198814: XADM: Recovering a KM Server after a complete Exchange Rebuild

	Article: Q198814
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	If you completely reinstall Exchange Server 5.5, you will have to reinstall Key
	Management Server as well. The following article outlines the steps necessary to
	recover Key Management Server to a computer with the same name.
	
	You need the following before you can successfully restore Key Management
	Server:
	
	- A backup of the Kmsdata directory from the original Key Management Server.
	
	- The alpha string that you input when you start the Key Management Server
	  services, or the start up disk.
	
	1. Reinstall Exchange Server, any service packs, and Key Management Server. It
	  will create a new alpha string for you to write down or store on disk.
	
	2. After installation, stop the Exchange Key Management Server service.
	
	3. Go to the <path>\Exchsrvr\Kmsdata directory, and delete all files.
	
	4. Restore the Kmsdata directory from backup.
	
	5. Go to Services, and select the Microsoft Exchange Key Management Server
	  service.
	
	6. On the start up parameters, type in the alpha string, or insert the start up
	  disk from the old (original) Key Management Server.
	
	7. Start the Microsoft Key Management Server service.
	
	At this point, you have recovered and successfully reinstalled the original Key
	Management Server and all of its data.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbhowto
	
	=============================================================================
	
