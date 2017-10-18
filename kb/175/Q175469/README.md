---
layout: page
title: "Q175469: XADM: Information Store Server Specific Error 2"
permalink: kb/175/Q175469/
---

## Q175469: XADM: Information Store Server Specific Error 2

	Article: Q175469
	Product(s): Microsoft Exchange
	Version(s): winnt:5.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.0 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you attempt to perform a disaster recovery, the store fails to start during
	the restore process and you receive the following error message:
	
	  The Microsoft Exchange Information Store service returned service specific
	  error 2
	
	The event log shows the following information:
	
	  Event ID 1081
	  Source: MSExchangeIS
	  Type: Error
	  Category: Recovery
	  Description: Unable to recover the database because error 0x00000002
	  Occurred after a restore operation.
	
	  Event ID: 5000
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description: Unable to initialize the Microsoft Exchange Information
	  Store Service.
	  Error 2.
	
	CAUSE
	=====
	
	The problem occurs if circular logging is enabled on the server you are
	restoring to, and disabled on the server you are restoring from (the backup
	tape).
	
	WORKAROUND
	==========
	
	To work around this problem, turn circular logging off on the restore server.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	An alternate method to work around the problem, is to locate and delete the
	following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\RESTORE IN
	  PROGRESS
	
	
	Additional query words: won't start service
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbZNotKeyword2
	Version           : winnt:5.0
	Issue type        : kbprb
	
	=============================================================================
	
