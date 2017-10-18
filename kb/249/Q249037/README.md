---
layout: page
title: "Q249037: XADM: Event 4096 While InterOrg Synchronization Tool Is Running"
permalink: kb/249/Q249037/
---

## Q249037: XADM: Event 4096 While InterOrg Synchronization Tool Is Running

	Article: Q249037
	Product(s): Microsoft Exchange
	Version(s): winnt:5.5
	Operating System(s): 
	Keyword(s): kbtool exc55
	Last Modified: 12-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error messages may appear in the application log while the
	InterOrg Synchronization tool is running:
	
	  Event Type: Warning
	  Event Source: _Exchange Inter-Org Synch
	  Event Category: None
	  Event ID: 4096
	  Date: 11/24/1999
	  Time: 11:51:55 AM
	  User: N/A
	  Computer: Computer_Name
	  Description:
	  InterOrg: CConfigData::Initialize DAPIStart Alias/Display Name Generation
	  disabled. 80001010
	
	  Event Type: Error
	  Event Source: _Exchange Inter-Org Synch
	  Event Category: None
	  Event ID: 4096
	  Date: 1/17/2000
	  Time: 5:39:01 PM
	  User: N/A
	  Computer: Computer_Name
	  Description:
	  InterOrg: **DAPIRead**
	  Error: c0000081 (null) (null) (null)
	
	Even if these error messages are displayed, the InterOrg Synchronization tool may
	successfully synchronize the organizations.
	
	CAUSE
	=====
	
	This behavior occurs because registry entries or files required by Directory
	Application Program Interface (DAPI) are missing or invalid. This behavior can
	occur when the Exchange Server Administrator program is installed incompletely.
	
	RESOLUTION
	==========
	
	To resolve this issue, verify that you have the correct files and registry
	settings on your computer, using the steps outlined in the following Microsoft
	Knowledge Base article:
	
	  Q169551 INFO: Items Required to Use DAPI
	
	If there are missing or incorrect items, remove and reinstall the Exchange Server
	Administrator program.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbtool exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : winnt:5.5
	Issue type        : kbprb
	
	=============================================================================
	
