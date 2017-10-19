---
layout: page
title: "Q180013: XADM: Determining Which Windows NT Account Is the Service Accoun"
permalink: /kb/180/Q180013/
---

## Q180013: XADM: Determining Which Windows NT Account Is the Service Accoun

	Article: Q180013
	Product(s): Microsoft Exchange
	Version(s): winnt:4.0,5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 4.0, 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article describes how to determine which Microsoft Windows NT account was
	chosen as the Exchange service account during Setup.
	
	MORE INFORMATION
	================
	
	If the Exchange Server computer is running:
	
	1. Start the Exchange Administrator program.
	
	2. Expand the Site container, and then click the Configuration container.
	
	3. From the File menu, click Properties.
	
	4. Click the Service Account Password tab. The Account Name box displays the
	  service account information.
	
	If the Exchange Server computer is down, you cannot start the Exchange
	Administrator program to find the Windows account. Therefore, you must perform
	the following steps:
	
	NOTE: This is for viewing the information only; changing this value is not
	supported.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start the Microsoft Windows NT registry editor (Regedt32.exe).
	
	2. Select the following registry key:
	
	  HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Services
	
	3. Click MSExchangeSA.
	
	The ObjectName value in the right pane gives the domain name and the Windows NT
	account name of the Exchange service account.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbExchange400 kbZNotKeyword2
	Version           : winnt:4.0,5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
