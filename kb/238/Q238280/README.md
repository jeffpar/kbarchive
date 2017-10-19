---
layout: page
title: "Q238280: XCLN: Out of Office Assistant is Missing from Tools Menu"
permalink: /kb/238/Q238280/
---

## Q238280: XCLN: Out of Office Assistant is Missing from Tools Menu

	Article: Q238280
	Product(s): Microsoft Exchange
	Version(s): WINDOWS:2000,97,98
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Outlook 2000 
	- Microsoft Outlook 97 
	- Microsoft Outlook 98 
	- Microsoft Exchange Server, version 5.5 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	In Microsoft Outlook, the Out of Office Assistant may not appear on the Tools
	menu.
	
	CAUSE
	=====
	
	The Exchange Server Extensions Commands Add-In may not be enabled, may not have
	been installed, or the registry key necessary to load the Exchange Server
	Extensions may not have been created during installation.
	
	RESOLUTION
	==========
	
	To resolve this problem:
	
	1. On the Tools menu, click Options, click Other, click Advanced Options, and
	  click Add In Manager.
	
	2. If Exchange Extensions Commands appears in the list of add-ins, click to
	  select it.
	
	3. If Exchange Extensions Commands is not on the list, click Install. From the
	  list of add-ins that appears, double-click Emsuix.ecf.
	
	4. Click OK three times to exit out of the Options pages.
	
	5. Exit and log off.
	
	6. Start Outlook and check to see if the Out of Office Assistant appears in the
	  Tools menu.
	
	If it did not install, the you need to make following registry modification for
	the Out of Office Assistant extension to be available in Outlook.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	1. Start Registry Editor (Regedt32.exe).
	
	2. Locate the following key in the registry:
	
	  HKEY_LOCAL_MACHINE/SOFTWARE/MICROSOFT/EXCHANGE/CLIENT/EXTENSIONS
	
	3. On the Edit menu, click Add Value, and then add the following registry value:
	
	  Value Name: Exchange Extensions
	  Data Type: REG_SZ
	  Value: 4.0;emsuix32.dll;7;011111111111110;1111011100
	
	4. Quit Registry Editor.
	
	You can also export this key from another system that is working.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook2000Search kbOutlook97Search kbOutlook98Search kbZNotKeyword3
	Version           : WINDOWS:2000,97,98
	Issue type        : kbprb
	
	=============================================================================
	
