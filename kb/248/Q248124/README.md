---
layout: page
title: "Q248124: XADM: Service Specific Error 4015 When Information Store Starts"
permalink: /kb/248/Q248124/
---

## Q248124: XADM: Service Specific Error 4015 When Information Store Starts

	Article: Q248124
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): exc55
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	After an online restoration of the directory service and the information store
	on a test server, the Exchange Server Information Store service may not start
	and a specific error 4015 may occur.
	
	The following error messages may be logged in the Application event log:
	
	  Event ID: 5000
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description:
	  Unable to initialize the Microsoft Exchange Information Store service. Error
	  0xfaf.
	
	  Event ID: 1121
	  Source: MSExchangeIS
	  Type: Error
	  Category: General
	  Description:
	  Error 0xfaf connecting to the Microsoft Exchange Server Directory Service.
	
	CAUSE
	=====
	
	This issue can occur if the server is renamed after Exchange Server
	installation; some values in the MSExchangeIS key contain the name of the test
	server.
	
	RESOLUTION
	==========
	
	To resolve this issue, make sure that the name of the Exchange Server computer
	matches the server name that is used in the DSA Computer, MTA Computer, and This
	Server values in the MSExchangeIS key.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To make sure that the name of the Exchange Server computer matches the server
	name that is used in the DSA Computer, MTA Computer, and This Server values:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeIS\ParametersSystem
	
	3. Note the server name that is used in the following values:
	
	   - DSA Computer
	
	   - MTA Computer
	
	   - This Server
	
	4. Quit Registry Editor.
	
	5. Use one of the following steps, as applicable:
	
	   - Rename the computer that is running Microsoft Windows 2000 Server or
	     Microsoft Windows NT Server, and install Exchange Server 5.5 again.
	
	   - Change the registry values in step 3 to match the correct server name.
	
	
	Additional query words: 0xfaf ds is
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
