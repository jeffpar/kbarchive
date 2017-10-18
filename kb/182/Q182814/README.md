---
layout: page
title: "Q182814: XADM: Err Msg: System Could Not Find the Path Specified"
permalink: kb/182/Q182814/
---

## Q182814: XADM: Err Msg: System Could Not Find the Path Specified

	Article: Q182814
	Product(s): Microsoft Exchange
	Version(s): 5.5
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When you upgrade to Exchange Server 5.5, the upgrade fails and the following
	error message appears:
	
	  System could not find the path specified (0xC0020003)
	
	This occurs immediately after the option to upgrade or uninstall Exchange.
	
	CAUSE
	=====
	
	The Key Management (KM) server was not removed completely during a previous
	upgrade attempt.
	
	WORKAROUND
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To work around this problem, the registry key responsible for the KM service,
	MSExchangeKMS, must be deleted. To do this:
	
	1. Start Registry Editor (Regedt32.exe) and navigate to the following registry
	  subtree:
	
	  HKEY_LOCAL_MACHINE\System\CurrentControlSet\Services\MSExchangeKMS
	
	2. From the Edit menu, click Delete.
	
	3. Click OK, and then quit the Registry Editor.
	
	4. Restart the server for the registry changes to take effect.
	
	MORE INFORMATION
	================
	
	This workaround allows Exchange Server 5.5 to upgrade the existing server. To
	regain the functionality of the Key Management server, the KM server must be
	reinstalled.
	
	Additional query words: KMS
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
