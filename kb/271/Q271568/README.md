---
layout: page
title: "Q271568: XCON: MTA Service Does Not Start Due to Event ID 3047"
permalink: /kb/271/Q271568/
---

## Q271568: XCON: MTA Service Does Not Start Due to Event ID 3047

	Article: Q271568
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
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
	
	When you attempt to start the Microsoft Exchange Server Message Transfer Agent
	(MTA) service, the following Event IDs may appear in the application event log:
	
	  Event ID: 3047
	  Source: MSExchangeMTA
	  Type: Error
	  Category: Configuration
	  Description:
	  Unable to initialize due to a bad configuration. Too many threads were
	  requested. The maximum number is xx, and xxx were requested. Contact
	  Microsoft Technical Support. [XAPI MAIN BASE 1] (16)
	
	  Event ID: 9406
	  Source: MSExchangeMTA
	  Type: Warning
	  Category: Resource
	  Description:
	  There is not enough Performance Monitor memory to display the MTA Connections
	  information. Stop attached Performance Monitors and re-start the MTA. [BASE
	  MAIN BASE 1] (14)
	
	CAUSE
	=====
	
	The MTA does not start due to one or more improperly configured registry keys.
	Too many threads are being requested, which does not allow the MTA to start. The
	summation of the Decimal value of 4 XAPI thread registry keys plus 3 determines
	the total number of threads. This total cannot exceed 75. The following Decimal
	value of these registry keys are summed:
	
	  XAPI MA queue threads : REG_DWORD
	  XAPI MA threads : REG_DWORD
	  XAPI MT queue threads : REG_DWORD
	  XAPI MT threads : REG_DWORD
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Stop the Message Transfer Agent (MTA) service.
	
	2. Run Regedt32.exe. To do so, click Start, click Run, and then type
	  "Regedt32.exe" (without the quotation marks) in the Open: box.
	
	3. Go to the following subkey:
	
	  KEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	4. Change the Decimal value of the these registry keys (Note: These new values
	  are the default values):
	
	  2 for XAPI MA queue threads : REG_DWORD : 0x2
	  2 for XAPI MA threads : REG_DWORD : 0x2
	  1 for XAPI MT queue threads : REG_DWORD : 0x1
	  1 for XAPI MT threads : REG_DWORD : 0x1
	
	5. Close the Registry Editor, and then start the Message Transfer Agent (MTA).
	
	MORE INFORMATION
	================
	
	The path of the following registry keys is:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeMTA\Parameters
	
	- XAPI MA queue threads
	
	  REG_DWORD
	  0x2
	  This value is the number of threads that handle interaction with the MTA on
	  behalf of the following clients:
	  - MDB and XAPI MA Delivery Queue clients.
	  - XAPI MA Retrieval Queue clients.
	
	- XAPI MA threads
	
	  REG_DWORD
	  0x2
	  This value is the number of threads that handle calls from the following
	  clients:
	  - MDB and XAPI MA Delivery Queue clients.
	  - XAPI MA Retrieval Queue clients.
	
	- XAPI MT queue threads
	
	  REG_DWORD
	  0x1
	  This value is the number of threads that handle interaction with the MTA on
	  behalf of XAPI MT Gateway clients.
	
	- XAPI MT threads
	
	  REG_DWORD
	  0x1
	  This value is the number of threads that handle calls from XAPI MT Gateway
	  clients.
	
	- XAPI/MMI client DMOD threads
	
	  REG_DWORD
	  0xa
	  This value is the maximum number of MTA DMOD threads to handle connections to
	  the following clients:
	  - MDB and XAPI MA Delivery Queue clients.
	  - XAPI MA Retrieval Queue clients.
	  - XAPI MT Gateway clients.
	  - MMI clients.
	
	All MTA DMOD threads (of whatever type) can support multiple connections.
	Connections are load-shared over threads of the same type.
	
	
	Additional query words:
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
