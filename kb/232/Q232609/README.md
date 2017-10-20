---
layout: page
title: "Q232609: XADM:  How to Verify the Integrity of a Key Management Server DB"
permalink: /kb/232/Q232609/
---

## Q232609: XADM:  How to Verify the Integrity of a Key Management Server DB

{% raw %}

	Article: Q232609
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 27-NOV-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The Microsoft Exchange Key Management Server uses Extensible Storage Engine
	(also referred to as "ESE") database technology, which is also implemented in
	the Exchange Server database files.
	
	Customers have requested the ability to verify the integrity of these various
	ESE-based databases, and a variety of utilities exist to perform this function.
	This article describes the options available for Exchange Key Management Server
	databases.
	
	MORE INFORMATION
	================
	
	The Microsoft Exchange Key Management Server service includes an executable file
	named Kmserver.exe. When the Exchange Key Management Server service is stopped,
	you can supply a variety of command-line switches to Kmserver.exe, depending
	upon your specific need.
	
	Validate the Integrity of the Microsoft Exchange Key Management Server Database File
	------------------------------------------------------------------------------------
	
	1. Stop the Microsoft Exchange Key Management Service.
	
	2. Make a backup of your Exchsrvr\Kmsdata directory.
	
	3. Go to a command prompt.
	
	4. Change to the Exchsrvr\Bin directory.
	
	5. Type the following:
	
	  "kmserver <kmserverpassword> -R" (without the quotation marks or
	  brackets)
	
	6. As this is running, events will be logged in the Event Viewer's application
	  log.
	
	  NOTE: Please review the application log to inspect the actions that were
	  performed.
	
	7. Restart the Microsoft Exchange Key Management Service.
	
	Repair the Microsoft Exchange Key Management Server Database File
	-----------------------------------------------------------------
	
	1. Stop the Microsoft Exchange Key Management Service.
	
	2. Make a backup of your Exchsrvr\Kmsdata directory.
	
	3. Go to a command prompt.
	
	4. Change to the Exchsrvr\Bin directory.
	
	5. Type the following:
	
	  "kmserver <kmserverpassword> -RF" (without the quotation marks or
	  brackets)
	
	6. As this is running, events will be logged to Event Viewer's application log.
	
	  NOTE: Please review the application log to inspect the actions that were
	  performed.
	
	7. Restart the Microsoft Exchange Key Management Service.
	
	Additional query words: cert jet eseutil edbutil certificate encryption physical corruption
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbhowto
	
	=============================================================================
	

{% endraw %}
