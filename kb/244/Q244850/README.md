---
layout: page
title: "Q244850: XWEB: OWA Does Not Start When Server Is Removed from Site"
permalink: kb/244/Q244850/
---

## Q244850: XWEB: OWA Does Not Start When Server Is Removed from Site

	Article: Q244850
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook Web Access, version 5.5 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you 
	modify the registry, make sure to back it up and make sure that you understand how to restore 
	the registry if a problem occurs. For information about how to back up, restore, and edit the 
	registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	If you use Outlook Web Access (OWA), the initial logon window may appear blank.
	
	CAUSE
	=====
	
	Microsoft Exchange Server and OWA are on different servers and the Exchange
	Server computer that was specified during the OWA setup is not available or has
	been removed from the site.
	
	RESOLUTION
	==========
	
	If there is another server in the same site, you can edit the registry so that
	OWA gets its directory information from that server.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To change the server that OWA gets its directory information from:
	
	1. Start the Registry Editor (Regedt32.exe).
	
	2. Locate the Server value under the following key in the registry:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services\MSExchangeWEB\Parameters
	
	3. On the Edit menu, click String, type "<server name>" (without the
	  quotation marks), and then click OK.
	
	4. Quit the Registry Editor.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOWASearch kbOWA550
	Version           : WINDOWS:5.5
	Issue type        : kbprb
	
	=============================================================================
	
