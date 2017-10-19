---
layout: page
title: "Q232118: XCLN: How to Force the Internet Connection Wizard to Start"
permalink: /kb/232/Q232118/
---

## Q232118: XCLN: How to Force the Internet Connection Wizard to Start

	Article: Q232118
	Product(s): Microsoft Exchange
	Version(s): 4.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, version 5.5 
	- Microsoft Internet Explorer version 4.0 for Windows NT 4.0 
	- Microsoft Internet Explorer version 4.0 for Windows 95 
	- Microsoft Outlook 98 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article provides methods to force the Internet Connection Wizard to start
	for both Outlook 98 Internet Mail Only (IMO) and Microsoft Internet Explorer.
	
	MORE INFORMATION
	================
	
	To force the Internet Connection Wizard to start for either Outlook 98 IMO or
	Internet Explorer, use one of the following methods, as applicable. To perform
	these steps, you need to edit the registry.
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	- To force the Internet Connection Wizard to start for Outlook 98 IMO:
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Delete the following key in the registry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Office\8.0\Outlook
	
	  3. Quit Registry Editor.
	
	- To force the Internet Connection Wizard to start for Internet Explorer:
	
	  1. Start Registry Editor (Regedt32.exe).
	
	  2. Delete the binary Completed value in the following key in the registry:
	
	  HKEY_CURRENT_USER\Software\Microsoft\Internet Connection Wizard
	
	  3. Quit Registry Editor.
	
	Additional query words: OL98
	
	======================================================================
	Keywords          :  
	Technology        : kbOutlookSearch kbIEsearch kbExchangeSearch kbExchange550 kbZNotKeyword2 kbOutlook98Search kbIENT400Search kbIE95Search kbZNotKeyword3 kbIE400Win95 kbIE400WinNT400
	Version           : :4.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
