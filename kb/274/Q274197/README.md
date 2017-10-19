---
layout: page
title: "Q274197: XADM: Error Message: System Cannot Find the File Specified"
permalink: /kb/274/Q274197/
---

## Q274197: XADM: Error Message: System Cannot Find the File Specified

	Article: Q274197
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
	
	If you remove Microsoft Outlook Web Access (OWA) and Microsoft Internet
	Information Services (IIS) 4.0 manually from an Exchange Server computer, and
	then you try to install an Exchange Server service pack, the service pack
	installation may not work and you may receive the following error message:
	
	  System cannot find the file specified
	  Microsoft Windows NT
	  ID No: 0xc0020002
	
	No messages are logged in the Application event log or System event log.
	
	CAUSE
	=====
	
	This issue can occur if you remove IIS and OWA by deleting the
	HKEY_LOCAL_MACHINE/System/CCS/Services/MSExchangeWEB key and by deleting the
	Webdata, Webdata.bak, and Webtemp folders.
	
	When you run the service pack installation, Setup displays a message that Setup
	is backing up the Webdata folder and stops responding immediately afterward. The
	MSExchangeWEB key is also re-created with no values.
	
	RESOLUTION
	==========
	
	To resolve this issue, delete the Web Connector registry key.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To delete the Web Connector registry key:
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate and click the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\Software\Microsoft\Exchange\Setup\Web Connector
	
	3. On the Edit menu, click Delete.
	
	4. Quit Registry Editor.
	
	MORE INFORMATION
	================
	
	Setup for Exchange Server service packs checks for installed components in the
	Setup key. If the Web Connector key is present, Setup proceeds as if OWA is
	installed; therefore, Setup immediately stops responding because IIS is no
	longer present.
	
	
	Additional query words: fails webdata bak webtemp ntopremove bat
	
	======================================================================
	Keywords          : exc55 
	Technology        : kbExchangeSearch kbExchange550 kbZNotKeyword2
	Version           : :5.5
	Issue type        : kbprb
	
	=============================================================================
	
