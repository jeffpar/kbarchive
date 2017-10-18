---
layout: page
title: "Q267987: XADM: Directory Service Stops and Cannot Restart with Event IDs"
permalink: kb/267/Q267987/
---

## Q267987: XADM: Directory Service Stops and Cannot Restart with Event IDs

	Article: Q267987
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 27-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you are running Exchange Server 5.0, the directory service may stop
	responding, with the following events recorded in the application log of Event
	Viewer:
	
	  Event ID: 32
	  Source: EDB
	  MSExchangeDS 145
	  Unable to create the log. Error -1032.
	
	  Event ID: 1171
	  Source: MSExchangeDS
	  Description: Exception E0010004 has occurred with parameters -510 and Zero.
	  Internal ID of 2080112.
	
	When you check the size of the Directory database (Dir.edb), you may find that
	the size of the file is greatly reduced.
	
	When you attempt to restart the directory service by restarting the Exchange
	Server computer, the directory service may not start and the following event
	appears in the application log of Event Viewer:
	
	  Event ID: 1002
	  Source: MSExchangeDS
	  Description: The microsoft exchange server database (EDB) could not be
	  initialized and returned error -1022. The directory cannot continue.
	
	CAUSE
	=====
	
	This behavior can occur when the Dir.edb file structure is damaged.
	
	RESOLUTION
	==========
	
	To resolve this issue, restore the Dir.edb file from a tape backup.
	
	If you do not have a valid backup copy of the Dir.edb file, you can restore the
	file through full disaster recovery of Exchange Server.
	
	MORE INFORMATION
	================
	
	For additional information on restoring the Dir.edb, click the article numbers
	below to view the articles in the Microsoft Knowledge Base:
	
	  Q183266 XADM: How To Restore Offline Backup of Dir Svc and Info Store
	
	  Q184186 XADM: Recovering Exchange from a Corrupted Directory
	
	For more complete information about full disaster recovery of Exchange Server,
	see the "Disaster and Recovery Planning" white paper at:
	
	http://www.microsoft.com/exchange/DeployAdmin/DeployAdmin.htm
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Component         : Directory DirectoryServices
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
